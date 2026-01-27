import React, { useState } from 'react';
import './PizzaModal.css';

const PizzaModal = ({ pizza, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('Regular');

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <div className="modal-body">
          {/* Left Side: Image & Info */}
          <div className="modal-left">
            <img src={pizza.image} alt={pizza.name} className="modal-img" />
            <div className="modal-info">
  <div className="veg-badge"> Bestseller <span className="new-tag">New</span></div>
  <h3>{pizza.name}</h3>
  <p className="desc">
    A fiery and lethal combination of hot & garlic dip, jalapenos, mushrooms, olives and capsicum.... 
    <span className="read-more">Read More</span>
  </p>
  <span className="customisable-text">Customisable</span>
  <div className="rating-stars">⭐⭐⭐⭐</div>
</div>
          </div>

          {/* Right Side: Options */}
          <div className="modal-right">
            <h4>Variants</h4>
            <div className="variants-grid">
              {['Regular', 'Medium', 'Large', 'The Giant', 'The Monster'].map((size) => (
                <div 
                  key={size}
                  className={`variant-card ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  <p>{size}</p>
                  <span>₹{pizza.price}</span> {/* Logic: Size ke hisaab se price badhayein */}
                  <div className="radio-circle"></div>
                </div>
              ))}
            </div>

            <div className="addon-section">
              <h4>Upgrade Your Base</h4>
              <div className="addon-item">
                <label><input type="checkbox" /> Double Burst</label>
                <span>₹79.00</span>
              </div>
            </div>

            <button className="add-to-cart-footer">
              <span>₹{pizza.price}.00</span>
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaModal;