import express from 'express';
import {
  login,
  logout,
  signup,
  forgotPassword,
  resetPassword,
  adminLogin,
  adminLogout,
} from '../controllers/authController.js';

const router = express.Router();

router.post("/login", login);

router.post("/logout", logout);

router.post("/signup", signup);

router.post("/forgot-password", forgotPassword);

router.put("/reset-password", resetPassword);

router.post("/admin/login", adminLogin);

router.post("/admin/logout", adminLogout);

//create admin

// router.post("/admin/signup", adminSignup);

export default router;
router.post("/admin/signup", adminSignup);
