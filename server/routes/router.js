import express from "express";
import normal from "../controllers/basicController.js";

const router = express.Router();

router.get("/", normal);

export default router;