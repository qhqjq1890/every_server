import { Router } from "express";
import { Post } from "../models/index.js";
import { Board } from "../models/index.js";

const Postsrouter = Router();

Postsrouter.get("/:boardName", async (req, res) => {
  let { boardName } = req.params;
  try {
    const board = await Board.findOne({ boardName: boardName });
    const post = await Post.find({ boardId: board._id }).sort({ date: "desc" });
    res.json({ post });
  } catch (error) {
    console.log(error);
  }
});

Postsrouter.get("/:boardName/:_id", async (req, res) => {
  let { boardName, _id } = req.params;
  try {
    const post = await Post.findOne({ _id: _id });
    res.json({ post });
  } catch (error) {
    console.log(error);
  }
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
