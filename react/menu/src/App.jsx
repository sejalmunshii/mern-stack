import React, { useState } from 'react';
import { pizzaData } from './data';
import './app.css'
import Navbar from './component/Navbar';
import PizzaModal from './component/PizzaModal';
import PizzaCard from './component/PizzaCard';
import Sidebar from './component/Sidebar';

function App() {
  const [activeCategory, setActiveCategory] = useState("Tri Color Pizza");
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVegOnly, setIsVegOnly] = useState(false);

  const filteredPizzas = pizzaData.filter(pizza => {
    const matchesCategory = pizza.category === activeCategory;
    const matchesSearch = pizza.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = isVegOnly ? pizza.isVeg === true : true;
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

        {/* Modal yahan rahega */}
        {selectedPizza && (
          <PizzaModal
            pizza={selectedPizza}
            onClose={() => setSelectedPizza(null)}
          />
        )}

        <div className="pizza-grid">
          {filteredPizzas.length > 0 ? (
            filteredPizzas.map(pizza => (
              <PizzaCard
                key={pizza.id} 
                pizza={pizza} 
                // Ab 'pizza' yahan define hai, toh ye chalega
                onAddClick={() => setSelectedPizza(pizza)} 
              />
            ))
          ) : (
            <div className="no-results">Oops! Koi pizza nahi mila.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;