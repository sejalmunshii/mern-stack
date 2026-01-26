import React from 'react';
import './Pizzacard.css'; 

// 1. Yahan onAddClick prop add karein
const PizzaCard = ({ pizza, onAddClick }) => {
  return (
    <div className="pizza-card">
      <div className="image-container">
        <img src={pizza.image} alt={pizza.name} className="pizza-img" />
        {pizza.isSpicy && <span className="spicy-tag">🌶️</span>}
      </div>
      
      <div className="card-body">
        <div className="veg-indicator-row">
          <div className="veg-indicator">
            <div className="veg-dot"></div>
          </div>
          {pizza.tag && <span className="bestseller-text">{pizza.tag}</span>}
        </div>
        
        <h4 className="pizza-name">{pizza.name}</h4>
        
        <div className="card-footer">
          <span className="price">₹{pizza.price}</span>
          
          {/* 2. onClick event add karein jo Modal khulega */}
          <button className="add-button" onClick={onAddClick}>
            ADD +
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;