import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  votes: Number,
});

export default postSchema;
