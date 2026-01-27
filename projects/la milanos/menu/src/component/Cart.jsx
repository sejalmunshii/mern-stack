import React from 'react';
import { useNavigate } from 'react-router'; // Add More items ke liye
import './Cart.css';

const Cart = ({ cart, setCart, onEdit }) => { // onEdit prop yahan add kiya
  const navigate = useNavigate();

  const itemTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const taxes = itemTotal * 0.05; 
  const grandTotal = itemTotal + taxes;

  const updateQuantity = (cartId, delta) => {
    setCart(prev => prev.map(item => 
      item.cartId === cartId 
      ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
      : item
    ));
  };

  const removeItem = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart-container">
        <div className="empty-cart">
          <h2>Your cart is empty! 🍕</h2>
          <p>Go add some delicious pizzas from the menu.</p>
          <button onClick={() => navigate('/')}>Go to Menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-left">
        <div className="delivery-header">
          <div className="delivery-time">
            <span>DELIVERY IN</span>
            <strong>30 Mins ⚡</strong>
          </div>
          <div className="delivery-address">
            <strong>Home ⌵</strong>
            <p>Shahibaug, Ahmedabad</p>
          </div>
        </div>

        <div className="cart-items-list">
          {cart.map((item) => (
            <div className="cart-item" key={item.cartId}>
              <div className="item-info">
                <span className="veg-icon">🟢</span>
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>{item.size} | New Hand Tossed</p>
                  {/* Customise button par onEdit function call karein */}
                  <button className="customise-btn" onClick={() => onEdit(item)}>
                    Customise ⌵
                  </button>
                </div>
              </div>
              
              <div className="item-actions">
                <div className="qty-selector">
                  <button onClick={() => updateQuantity(item.cartId, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.cartId, 1)}>+</button>
                </div>
                <div className="item-price">₹{item.price * item.quantity}</div>
                <button className="remove-item" onClick={() => removeItem(item.cartId)}>×</button>
              </div>
            </div>
          ))}
          <div className="add-more" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
             + Add more items
          </div>
        </div>
      </div>

      <div className="cart-right">
        <div className="savings-section">
          <h4>Savings & Rewards</h4>
          <div className="coupon-box">
             <span className="error-msg">⚠️ Offer 'PIZZA100' available</span>
             <button className="remove-btn">Apply</button>
          </div>
        </div>

        <div className="bill-details">
          <h4>Bill Details</h4>
          <div className="bill-row">
            <span>Item(s) Total</span>
            <span>₹{itemTotal}</span>
          </div>
          <div className="bill-row">
            <span>Taxes & Charges ⓘ</span>
            <span>₹{taxes.toFixed(2)}</span>
          </div>
          <hr />
          <div className="bill-row grand-total">
            <strong>Total</strong>
            <strong>₹{grandTotal.toFixed(2)}</strong>
          </div>
        </div>
        
        <button className="pay-button">
          Pay ₹{grandTotal.toFixed(2)} <span>➜</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;