import React, { useState } from 'react';
import './PizzaModal.css';

const PizzaModal = ({ pizza, onClose, addToCart, editData }) => {
  // Agar editData hai toh wahi size default rakhein
  const [selectedSize, setSelectedSize] = useState(editData ? editData.size : 'Regular');

  const sizePriceAdd = { 
    'Regular': 0, 
    'Medium': 200, 
    'Large': 400, 
    'The Giant': 600, 
    'The Monster': 1000 
  };

  // Final Price Calculation
  const finalPrice = pizza.price + (sizePriceAdd[selectedSize] || 0);

  const handleAction = () => {
    addToCart({ 
      ...pizza, 
      size: selectedSize, 
      price: finalPrice,
      // Agar purana item hai toh wahi cartId use karein, warna naya banayein
      cartId: editData ? editData.cartId : Date.now() 
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>

        <div className="modal-body">
          {/* Left Side: Image & Info */}
          <div className="modal-left">
            <img src={pizza.image} alt={pizza.name} className="modal-img" />
            <div className="modal-info">
              <div className="veg-badge">🟢 Bestseller <span className="new-tag">New</span></div>
              <h3>{pizza.name}</h3>
              <p className="desc">
                A fiery and lethal combination of hot & garlic dip, jalapenos, mushrooms, olives and capsicum....
              </p>
              <span className="customisable-text">Customisable</span>
            </div>
          </div>

          {/* Right Side: Options */}
          <div className="modal-right">
            <h4>Variants</h4>
            <div className="variants-grid">
              {Object.keys(sizePriceAdd).map((size) => (
                <div
                  key={size}
                  className={`variant-card ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  <div>
                    <p className="variant-name">{size}</p>
                    <p className="variant-price">₹{pizza.price + sizePriceAdd[size]}</p>
                  </div>
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

            {/* Button text badlega agar edit mode hai */}
            <button className="add-to-cart-footer" onClick={handleAction}>
              <span>₹{finalPrice}.00</span>
              <span>{editData ? "UPDATE ITEM" : "ADD TO CART"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaModal;