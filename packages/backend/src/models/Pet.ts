import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: String,
  type: String,
  breed: String,
  age: Number
});

export default mongoose.model("Pet", petSchema);
