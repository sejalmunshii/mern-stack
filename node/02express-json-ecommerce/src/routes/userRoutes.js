import express from "express";
import { registerUser, loginUser, getAllUsers } from "../controllers/userController.js";
import { uploadProfile } from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", uploadProfile.single("profile"), registerUser);
router.post("/login", loginUser);
router.get("/", protect, getAllUsers);

export default router;
