import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Get");
});

router.post("/", (_req, res) => {
  res.send("Post");
});

export default router;
