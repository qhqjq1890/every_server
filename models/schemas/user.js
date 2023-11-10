import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  password: String,
});

export default userSchema;
