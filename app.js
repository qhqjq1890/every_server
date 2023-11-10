import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postsRouter from "./routes/posts.js";
import bodyParser from "body-parser";
import BoardRouter from "./routes/board.js";
import UserRouter from "./routes/users.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/posts", postsRouter);
app.use("/board", BoardRouter);
app.use("/user", UserRouter);

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
