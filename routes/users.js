import { Router } from "express";
import { User } from "../models/index.js";

const UserRouter = Router();

UserRouter.get("/", async (req, res) => {
  const user = await User.find();
  res.json({ user });
});

UserRouter.post("/", async (req, res) => {
  User.create({
    userId: req.body.userId,
    password: req.body.password,
  }).then(res.send({ server_message: `user ${req.body.userId} created` }));
});

export default UserRouter;
