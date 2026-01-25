import React from 'react';
import './Pizzacard.css'; 


const PizzaCard = ({ pizza }) => {
  return (
    <div className="pizza-card">
      <div className="image-container">
        <img src={pizza.image} alt={pizza.name} className="pizza-img" />
        {pizza.isSpicy && <span className="spicy-tag">🌶️</span>}
      </div>
      
      <div className="card-body">
        <div className="veg-indicator">
          <div className="veg-dot"></div>
          <span className="bestseller-text">{pizza.tag}</span>
        </div>
        
        <h4 className="pizza-name">{pizza.name}</h4>
        
        <div className="card-footer">
          <span className="price">₹{pizza.price}</span>
          <button className="add-button">ADD +</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;