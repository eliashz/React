import express from "express";
import userRouter from "./routes/users";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("Ping!");
  res.send("Pong!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
