import React from 'react';
import { useNavigate } from 'react-router'; 
import './Cart.css';
// Ensure sidesData is exported from your data file
import { sidesData } from '../data.js'; 

const Cart = ({ cart, setCart, onEdit, addToCart }) => { 
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
                    
                    <div className="add-more" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                        + Add more items
                    </div>

                    {/* Complete Your Meal Section */}
                    <div className="complete-meal-section">
                        <h3>Complete Your Meal</h3>
                        <div className="sides-slider">
                            {sidesData && sidesData.map(side => (
                                <div className="side-card" key={side.id}>
                                    <img src={side.image} alt={side.name} />
                                    <div className="side-info">
                                        <h5>{side.name}</h5>
                                        <p>₹{side.price}</p>
                                        <button className="side-add-btn" onClick={() => addToCart({ ...side, size: 'Standard' })}>
                                            Add +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
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