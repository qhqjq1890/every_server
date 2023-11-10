import { Router } from "express";
import { Board } from "../models/index.js";

const BoardRouter = Router();

BoardRouter.get("/", async (req, res) => {
  const board = await Board.find();
  res.json({ board });
});

BoardRouter.post("/", async (req, res) => {
  const board = await Board.create({
    boardName: req.body.boardName,
  });
  res.send({ success: `board ${req.body.boardName} created` });
});

export default BoardRouter;
