// src/components/MenuSection.jsx
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import PizzaCard from './PizzaCard';
import { pizzaData } from '../data';
import './MenuSection.css';

const MenuSection = () => {
  return (
    <div className="menu-page-container">
      <Sidebar /> 
      
      <div className="content-area">
        <Navbar />
        
        <div className="menu-items-wrapper">
          <h2 className="section-title">ALL PIZZA</h2>
          
          <div className="pizza-grid">
            {pizzaData.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;