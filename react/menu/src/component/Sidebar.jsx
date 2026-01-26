import React from 'react';
import './sidebar.css'
import { categories } from '../data';

const Sidebar = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="sidebar">
      <h3 className="menu-title">Menu</h3>
      <ul className="category-list">
        {categories.map((cat, index) => (
          <li
            key={index}
            className={`category-item ${activeCategory === cat.name ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.name)} // Ab hum cat.name pass kar rahe hain
          >
            <div className="cat-name-box">
              {/* PEHLE: {cat} -> Is wajah se error aa rahi thi */}
              {/* AB: {cat.name} -> Ab hum object ki name property dikha rahe hain */}
              {cat.name}

              {cat.hasPlus && <span className="plus-icon">+</span>}
            </div>

            <span className="count-number">({cat.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;