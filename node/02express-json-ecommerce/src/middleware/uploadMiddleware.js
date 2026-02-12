import multer from "multer";
import fs from "fs";

const ensureFolder = (folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
};

const storage = (folder) => multer.diskStorage({
  destination: (req, file, cb) => {
    ensureFolder(folder);
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

export const uploadProfile = multer({ storage: storage("uploads/profiles") });
export const uploadProduct = multer({ storage: storage("uploads/products") });
