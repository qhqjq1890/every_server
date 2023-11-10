import { Router } from "express";
import { Post } from "../models/index.js";

const Postsrouter = Router();

Postsrouter.get("/", async (req, res) => {
  const post = await Post.findOne({ author: "qhqjq1890" });
  res.json({ post });
});

export default Postsrouter;
