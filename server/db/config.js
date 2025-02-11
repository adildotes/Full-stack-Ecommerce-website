import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB = process.env.MONGO_URI;

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("DATABASE connected"))
.catch((err) => console.log("error : " + err.message));
