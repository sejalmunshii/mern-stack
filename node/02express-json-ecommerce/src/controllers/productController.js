import { v4 as uuidv4 } from "uuid";
import { readData, writeData } from "../utils/fileHandler.js";

const filePath = "./data/products.json";

export const createProduct = (req, res) => {
  const products = readData(filePath);

  const newProduct = {
    id: uuidv4(),
    name: req.body.name,
    price: Number(req.body.price),
    description: req.body.description,
    image: req.file?.filename || null
  };

  products.push(newProduct);
  writeData(filePath, products);

  res.json(newProduct);
};

export const getProducts = (req, res) => {
  res.json(readData(filePath));
};

export const updateProduct = (req, res) => {
  let products = readData(filePath);
  const index = products.findIndex(p => p.id === req.params.id);

  if (index === -1)
    return res.status(404).json({ message: "Product not found" });

  products[index] = { ...products[index], ...req.body };
  writeData(filePath, products);

  res.json(products[index]);
};

export const deleteProduct = (req, res) => {
  let products = readData(filePath);
  products = products.filter(p => p.id !== req.params.id);
  writeData(filePath, products);

  res.json({ message: "Product deleted" });
};