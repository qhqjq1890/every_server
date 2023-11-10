import mongoose, { mongo } from "mongoose";
import postSchema from "./schemas/post.js";
import boardSchema from "./schemas/board.js";
import userSchema from "./schemas/user.js";

const Post = mongoose.model("Post", postSchema);
const Board = mongoose.model("Board", boardSchema);
const User = mongoose.model("User", userSchema);

export { Post, Board, User };
