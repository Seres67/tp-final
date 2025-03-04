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

export default multer({ storage });
