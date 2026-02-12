import jwt from "jsonwebtoken";
import { readData } from "../utils/fileHandler.js";

export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token)
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const users = readData("./data/users.json");

  const user = users.find(u => u.id === decoded.id);
  if (!user) return res.status(401).json({ message: "User not found" });

  req.user = user;
  next();
};