import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const adminAuthMiddleware = (req, res, next) => {
  const token = req.cookies.adminUserToken;
  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default adminAuthMiddleware;
