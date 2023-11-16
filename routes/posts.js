import { Router } from "express";
import { Post } from "../models/index.js";
import { Board } from "../models/index.js";

const Postsrouter = Router();

Postsrouter.get("/", async (req, res) => {
  const board = await Board.findOne({ boardName: req.body.boardName });

  const post = await Post.findOne({ boardId: board._id });
  res.json({ post });
});

Postsrouter.post("/", async (req, res) => {
  const board = await Board.findOne({ boardName: req.body.boardName });

  Post.create({
    boardId: board._id,
    title: req.body.title,
    authorId: req.body.authorId,
    body: req.body.body,
    comments: [],
    date: Date.now(),
    votes: 0,
  });
  res.send({ boardId: req.body.title });
});

export default Postsrouter;
