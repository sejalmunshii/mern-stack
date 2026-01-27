import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router'; 
import { pizzaData } from './data';
import './app.css'
import Navbar from './component/Navbar';
import PizzaModal from './component/PizzaModal';
import PizzaCard from './component/PizzaCard';
import Sidebar from './component/Sidebar';
import Cart from './component/Cart';

function App() {
  const [activeCategory, setActiveCategory] = useState("Tri Color Pizza");
  const [cart, setCart] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVegOnly, setIsVegOnly] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Edit function: Ab ye page redirect nahi karega, bas state set karega
  const handleEditCartItem = (item) => {
    setEditingItem(item); 
    setSelectedPizza(item); 
  };

  // Update logic
  const updateCartItem = (updatedProduct) => {
    setCart((prev) =>
      prev.map(item => item.cartId === updatedProduct.cartId ? updatedProduct : item)
    );
    setSelectedPizza(null);
    setEditingItem(null);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id && item.size === product.size);
      if (existingItem) {
        return prevCart.map(item =>
          (item.id === product.id && item.size === product.size)
            ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1, cartId: Date.now() }];
    });
    setSelectedPizza(null);
  };

  const filteredPizzas = pizzaData.filter(pizza => {
    const matchesCategory = pizza.category === activeCategory;
    const matchesSearch = pizza.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = isVegOnly ? pizza.isVeg === true : true;
    return matchesCategory && matchesSearch && matchesVeg;
  });

  return (
    <Router>
      <div className="app-container">
        <Navbar
          setSearchQuery={setSearchQuery}
          isVegOnly={isVegOnly}
          setIsVegOnly={setIsVegOnly}
          cartCount={cart.length}
        />

        {/* --- GLOBAL MODAL START --- */}
        {/* Isko Routes ke bahar rakha hai taaki ye Cart page par bhi pop-up ban kar dikhe */}
        {selectedPizza && (
          <PizzaModal
            pizza={selectedPizza}
            onClose={() => { setSelectedPizza(null); setEditingItem(null); }}
            addToCart={editingItem ? updateCartItem : addToCart}
            editData={editingItem}
          />
        )}
        {/* --- GLOBAL MODAL END --- */}

        <Routes>
          {/* MENU PAGE */}
          <Route path="/" element={
            <div className="app-layout">
              <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
              <div className="main-content">
                <h2 className="section-title">{activeCategory}</h2>
                <div className="pizza-grid">
                  {filteredPizzas.length > 0 ? (
                    filteredPizzas.map(pizza => (
                      <PizzaCard
                        key={pizza.id}
                        pizza={pizza}
                        onAddClick={() => setSelectedPizza(pizza)}
                      />
                    ))
                  ) : (
                    <div className="no-results">Oops! Koi pizza nahi mila.</div>
                  )}
                </div>
              </div>
            </div>
          } />

          {/* CART PAGE */}
          <Route 
            path="/cart" 
            element={
              <Cart 
                cart={cart} 
                setCart={setCart} 
                onEdit={handleEditCartItem} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;