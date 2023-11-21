import { Router } from "express";
import { User } from "../models/index.js";

const UserRouter = Router();

UserRouter.get("/", async (req, res) => {
  const user = await User.find();
  res.json({ user });
});

UserRouter.post("/register", async (req, res) => {
  User.create({
    userId: req.body.userId,
    password: req.body.password,
  }).then(res.send({ server_message: `user ${req.body.userId} created` }));
});

UserRouter.post("/login", async (req, res) => {
  const id = await User.findOne({ userId: req.body.userId })
    .then((id) => {
      if (req.body.password == id.password) {
        res.send({ server_message: "login success" });
        console.log(`user ${req.body.userId} logined`);
      } else {
        res.send({ server_message: "비밀번호가 틀렸습니다." });
      }
    })
    .catch((e) => {
      res.send({ server_message: "로그인 실패!" });
    });
});

export default UserRouter;
