import upload from "../middlewares/multer.js";
import express from "express";
const router = new express.Router();
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductById,
  trendProducts,
  offerProducts,
} from "../controllers/productController.js";

import adminAuthMiddleWare from "../middlewares/adminAuthMiddleware.js";

router.post("/", adminAuthMiddleWare, upload.fields([{ name: 'image', maxCount: 1 }, { name: 'additionalImages', maxCount: 3 }]), createProduct);

router.put("/:id", adminAuthMiddleWare, upload.fields([{ name: 'image', maxCount: 1 }, { name: 'additionalImages', maxCount: 3 }]), updateProduct);

router.delete("/:id", adminAuthMiddleWare, deleteProduct);

router.get("/", getProducts);

router.get("/:id", getProductById);

router.get("/filter/trend", trendProducts);

router.get("/filter/offer", offerProducts);

export default router;
