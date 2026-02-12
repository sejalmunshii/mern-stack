import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { readData, writeData } from "../utils/fileHandler.js";

const filePath = "./data/users.json";

export const registerUser = async (req, res) => {
  const users = readData(filePath);
  const { name, email, password } = req.body;

  if (users.find(u => u.email === email))
    return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: uuidv4(),
    name,
    email,
    password: hashedPassword,
    profileImage: req.file?.filename || null
  };

  users.push(newUser);
  writeData(filePath, users);

  res.json({ message: "User Registered" });
};

export const loginUser = async (req, res) => {
  const users = readData(filePath);
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  });

  res.json({ token });
};

export const getAllUsers = (req, res) => {
  res.json(readData(filePath));
};