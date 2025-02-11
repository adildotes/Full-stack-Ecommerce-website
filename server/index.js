import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import router from "./routes/router";
import authRoutes from "./routes/authRoutes";
import cartRoutes from "./routes/cartRoutes";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

require("dotenv").config();
require("./db/config");

// app.use(cors());

const PORT = process.env.PORT || 5555;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));


app.use(cookieParser());
app.use('/',router);
app.use('/api/auth',authRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/product',productRoutes);
app.use('/api/user',userRoutes);



// const allowCrossDomain = (req, res, next) => {
//   res.header(`Access-Control-Allow-Origin`, `*`);
//   res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
//   res.header(`Access-Control-Allow-Headers`, `*`);
//   next();
// };
// app.use(allowCrossDomain);


 // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }))



app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
