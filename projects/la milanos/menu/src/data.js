export const sidesData = [
  { id: 101, name: "Cheesy Dip", price: 25, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591", category: "Dips" },
  { id: 102, name: "Garlic Bread", price: 99, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591", category: "Sides" },
  { id: 103, name: "Pepsi 500ml", price: 60, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591", category: "Drinks" },
  { id: 104, name: "Mousse Cup", price: 80, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591", category: "Dessert" },
];
// 1. Categories for Sidebar (Screenshot ke hisaab se)
export const categories = [
  { name: "Featured Items", count: 18, hasPlus: false },
  { name: "Tri Color Pizza", count: 19, hasPlus: false },
  { name: "Super Saver Trio", count: 16, hasPlus: false },
  { name: "International Menu", count: 16, hasPlus: true },
  { name: "New Year Signature Flavours", count: 6, hasPlus: false },
  { name: "Season's Specials (4in1)", count: 18, hasPlus: false },
  { name: "Festive Dhamaka Combos", count: 16, hasPlus: true },
  { name: "Combo", count: 14, hasPlus: false },
  { name: "Menu @ 79", count: 7, hasPlus: false },
  { name: "Regular Pizza @ 149", count: 5, hasPlus: false },
  { name: "Medium Pizza @ 349", count: 9, hasPlus: false },
  { name: "Classic Pizzas For Classic Maniacs", count: 14, hasPlus: true },
  { name: "Personal Pizza Slice", count: 36, hasPlus: false },
  { name: "Winter Fire & Cheese Pizza", count: 14, hasPlus: false },
  { name: "Veg Pizza", count: 35, hasPlus: true }
];

// 2. Pizza Data (Screenshot ke matches)
export const pizzaData = [
  {
    id: 1,
    name: "Farm Villa Pizza",
    price: 195,
    category: "Tri Color Pizza",
    tag: "Bestseller",
    image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/farmhouse.691da71694f2d7729f452097e88939c0.1.jpg", // Example link
    isVeg: true,
    isSpicy: true
  },
  {
    id: 2,
    name: "Burn To Hell Pizza",
    price: 235,
    category: "Tri Color Pizza",
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591", // Example link
    isVeg: true,
    isSpicy: true
  },
  {
    id: 3,
    name: "Cheezy-7 Pizza",
    price: 235,
    category: "Tri Color Pizza",
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47", // Example link
    isVeg: true,
    isSpicy: false
  },
  {
    id: 4,
    name: "English Retreat Pizza",
    price: 255,
    category: "Tri Color Pizza",
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e", // Example link
    isVeg: true,
    isSpicy: false
  },
  {
    id: 5,
    name: "Margherita",
    price: 149,
    category: "Featured Items",
    tag: "Classic",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad50",
    isVeg: false,
    isSpicy: false
  },
  {
    id: 6,
    name: "Paneer Tikka Pizza",
    price: 285,
    category: "Featured Items",
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    isVeg: true,
    isSpicy: true
  }
];