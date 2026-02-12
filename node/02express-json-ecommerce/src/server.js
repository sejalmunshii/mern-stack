import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
 import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
 app.use("/products", productRoutes);
 app.use("/cart", cartRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
