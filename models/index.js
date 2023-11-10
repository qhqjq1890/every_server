import mongoose from "mongoose";
import postSchema from "./schemas/post.js";

const Post = mongoose.model("Post", postSchema);

export { Post };
