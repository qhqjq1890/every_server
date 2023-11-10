import mongoose from "mongoose";
const { Schema } = mongoose;

const boardSchema = new Schema({
  boardName: String,
});

export default boardSchema;
