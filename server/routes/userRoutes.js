import express from "express";
import upload from "../middlewares/multer";
import { singleUserData, allUsers, editUserData } from "../controllers/userController";
import authMiddleWare from "../middlewares/authMiddleware";
import adminAuthMiddleware from "../middlewares/adminAuthMiddleware";

const router = express.Router();

router.get("/me", authMiddleWare, singleUserData);

router.get("/all", adminAuthMiddleware, allUsers);

router.put("/me", authMiddleWare, upload.single("image"), editUserData);

export default router;
