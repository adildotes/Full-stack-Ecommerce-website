import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js";
import authMiddleWare from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleWare, addToCart);

router.delete("/:id", authMiddleWare, removeFromCart);

router.get("/", authMiddleWare, getCart);

export default router;
