import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Get users");
});

router.post("/", (_req, res) => {
  res.send("Post users");
});

router.put("/", (_req, res) => {
  res.send("Post users");
});

export default router;
