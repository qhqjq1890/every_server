import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
  boardId: {
    type: Schema.Types.ObjectId,
    ref: "Board",
  },
  title: String,
  authorId: String,
  body: String,
  comments: [{ comment_id: String, body: String, date: Date }],
  date: Date,
  votes: Number,
});

export default postSchema;
