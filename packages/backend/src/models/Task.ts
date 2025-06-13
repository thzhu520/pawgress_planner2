import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: String,
  petName: String,
  repeat: String
});

export default mongoose.model("Task", taskSchema);
