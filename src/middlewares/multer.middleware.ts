import multer from "multer";
import { v4 } from "uuid";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },

  filename: (req, file, cb) => {
    const fileExtension = file.originalname.split(".").pop();
    const filename = `${v4()}.${fileExtension}`;
    cb(null, filename);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Only PNGs and JPEGs are supported."));
    }
  },
});

export default multer({ storage });
