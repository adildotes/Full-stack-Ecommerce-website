import express from "express";
import upload from "../middlewares/multer.js";
import { singleUserData, allUsers, editUserData } from "../controllers/userController.js";
import authMiddleWare from "../middlewares/authMiddleware.js";
import adminAuthMiddleware from "../middlewares/adminAuthMiddleware.js";

const router = express.Router();

router.get("/me", authMiddleWare, singleUserData);

router.get("/all", adminAuthMiddleware, allUsers);

router.put("/me", authMiddleWare, upload.single("image"), editUserData);

export default router;
