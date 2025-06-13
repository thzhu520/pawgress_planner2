import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/pawgress";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

app.use(cors());
app.use(express.json());

// --- MODELS ---

const petSchema = new mongoose.Schema({ name: String, type: String,  breed: String, age: Number, });
const taskSchema = new mongoose.Schema({ name: String, petName: String, repeat: String });
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const Pet = mongoose.model("Pet", petSchema);
const Task = mongoose.model("Task", taskSchema);
const User = mongoose.model("User", userSchema);

// --- PET ROUTES ---

app.get("/api/pets", async (_, res) => {
  const pets = await Pet.find();
  res.json(pets);
});

app.post("/api/pets", async (req: Request, res: Response) => {
  const pet = new Pet(req.body);
  await pet.save();
  res.status(201).json(pet);
});

// --- TASK ROUTES ---

app.get("/api/tasks", async (_, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/api/tasks", async (req: Request, res: Response) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

// --- AUTH ROUTES ---
app.post("/api/signup", async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      console.log("SIGNUP ATTEMPT:", email); 
      const exists = await User.findOne({ email });
      if (exists) {
        res.status(409).json({ message: "Already exists" });
        return;
      }
  
      const hashed = await bcrypt.hash(password, 10);
      const user = new User({ email, password: hashed });
      await user.save();
      res.status(201).json({ message: "User created" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Signup failed" });
    }
  });
  
  app.post("/api/login", async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !user.password) {
        res.status(401).json({ error: "Invalid credentials" });
        return;
      }
  
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        res.status(401).json({ error: "Invalid credentials" });
        return;
      }
  
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Login failed" });
    }
  });

// --- START SERVER ---

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection failed:", err));
