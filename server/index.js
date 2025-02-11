import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/router.js";
import authRoutes from "./routes/authRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import "./db/config.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5555;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use(cookieParser());
app.use('/', router);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/product', productRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
