import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { readData, writeData } from "../utils/fileHandler.js";

const cartPath = "./data/carts.json";
const productPath = "./data/products.json";

export const addToCart = (req, res) => {
  const carts = readData(cartPath);
  const { productId, quantity } = req.body;

  let cart = carts.find(c => c.userId === req.user.id);

  if (!cart) {
    cart = { id: uuidv4(), userId: req.user.id, items: [] };
    carts.push(cart);
  }

  cart.items.push({ productId, quantity });
  writeData(cartPath, carts);

  res.json(cart);
};

export const getCart = (req, res) => {
  const carts = readData(cartPath);
  const cart = carts.find(c => c.userId === req.user.id);
  res.json(cart || { items: [] });
};

export const downloadInvoice = (req, res) => {
  const carts = readData(cartPath);
  const products = readData(productPath);

  const cart = carts.find(c => c.userId === req.user.id);
  if (!cart) return res.status(400).json({ message: "Cart empty" });

  let total = 0;
  let invoiceText = "INVOICE\n\n";

  cart.items.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    const price = product.price * item.quantity;
    total += price;
    invoiceText += `${product.name} - Qty: ${item.quantity} - ₹${price}\n`;
  });

  invoiceText += `\nTotal: ₹${total}`;

  const fileName = `invoice-${Date.now()}.txt`;
  const filePath = `uploads/invoices/${fileName}`;

  if (!fs.existsSync("uploads/invoices"))
    fs.mkdirSync("uploads/invoices", { recursive: true });

  fs.writeFileSync(filePath, invoiceText);

  res.download(filePath);
};