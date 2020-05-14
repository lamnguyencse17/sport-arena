import express from "express";
const router = express.Router();

router.use("/users", (req, res) => res.send("Hello"));

router.use("/teams", (req, res) => res.send("Hello"));

export default router;
