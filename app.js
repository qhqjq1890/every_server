import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postsRouter from "./routes/posts.js";

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

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
