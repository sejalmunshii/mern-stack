import express from "express";
import { addToCart, getCart, downloadInvoice } from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, addToCart);
router.get("/", protect, getCart);
router.get("/invoice", protect, downloadInvoice);

export default router;
;