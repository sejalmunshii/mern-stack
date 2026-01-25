import React, { useState } from 'react';
import { pizzaData } from './data';
import './app.css'
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import PizzaCard from './component/PizzaCard';

function App() {
  const [activeCategory, setActiveCategory] = useState("Tri Color Pizza");
  const [searchQuery, setSearchQuery] = useState("");
  const [isVegOnly, setIsVegOnly] = useState(false);

  // --- FILTER LOGIC (FIXED) ---
  const filteredPizzas = pizzaData.filter(pizza => {
    // 1. Check if category matches
    const matchesCategory = pizza.category === activeCategory;
    
    // 2. Check if name matches search query
    const matchesSearch = pizza.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // 3. Check if it's veg (only if isVegOnly is true)
    const matchesVeg = isVegOnly ? pizza.isVeg === true : true;

    // Teeno conditions true honi chahiye
    return matchesCategory && matchesSearch && matchesVeg;
  });

  return (
    <div className="app-layout">
      <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      
      <div className="main-content">
        <Navbar
          setSearchQuery={setSearchQuery} 
          isVegOnly={isVegOnly} 
          setIsVegOnly={setIsVegOnly} 
        />
        <h2 className="section-title">{activeCategory}</h2>
        
        <div className="pizza-grid">
          {filteredPizzas.length > 0 ? (
            filteredPizzas.map(pizza => <PizzaCard key={pizza.id} pizza={pizza} />)
          ) : (
            <div className="no-results">Oops! Koi pizza nahi mila.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;