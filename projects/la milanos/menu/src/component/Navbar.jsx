import React, { useState } from 'react';
import { Link } from 'react-router';
import './Navbar.css';

const Navbar = ({ setSearchQuery, isVegOnly, setIsVegOnly,cartCount }) => {
  // 1. Saari States top par honi chahiye
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Pick Up");

  // 2. Helper functions
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  // 3. Ek hi Return statement hoga
  return (
    <div className="navbar-container">
      {/* Top Section */}
      <div className="top-nav">
        <div className="store-info">
          <h2>La Pino'z Pizza <span className="info-icon">ⓘ</span> <span className="open-tag">OPEN</span></h2>
          <p>📍 Shahibaug, Ahmedabad</p>
        </div>

        <div className="promo-card">
          <div className="promo-icon">%</div>
          <div>
            <strong>Buy 2 Items and Get 1 Free!!!</strong><br />
            <span>Use Code B2G1 FREE</span>
          </div>
        </div>

        <div className="pickup-container">
          <div className="pickup-box" onClick={toggleDropdown}>
            <strong>{selectedOption}</strong>
            <span className="change-text">Change ⌵</span>
          </div>

          {/* Dropdown Menu logic */}
          {isDropdownOpen && (
            <div className="pickup-dropdown">
              <div className="dropdown-item" onClick={() => handleOptionClick("Pick Up")}>
                <span className="icon">🛍️</span> Pick Up
              </div>
              <div className="dropdown-item" onClick={() => handleOptionClick("Dine In")}>
                <span className="icon">🪑</span> Dine In
              </div>
              <div className="dropdown-item" onClick={() => handleOptionClick("In Car")}>
                <span className="icon">🚗</span> In Car
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <button className="filter-btn">Filters</button>
        <div className="veg-toggle">
          <input
            type="checkbox"
            id="veg"
            checked={isVegOnly}
            onChange={(e) => setIsVegOnly(e.target.checked)}
          />
          <label htmlFor="veg">Veg</label>
        </div>
        <button className="new-btn">✨ What's New!</button>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Menu"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Link to="/cart" className="cart-nav-btn">
          🛒 Cart <span className="cart-badge">  {cartCount}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;