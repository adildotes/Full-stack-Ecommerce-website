import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';

dotenv.config();

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
});

export default upload;
