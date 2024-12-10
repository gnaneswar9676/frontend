import React from 'react';
import './css/Addtocart.css'; // Ensure you create this file
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Addtocart = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price?.replace('$', '') || 0); // Handle missing or undefined price
      return total + price * (item.quantity || 1); // Default quantity to 1 if undefined
    }, 0);
  };

  return (
    <div className="cart-container">
      <div className="cart-left">
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className={`cart-image ${item.className}`}></div>
              <div className="cart-details">
                <h3>{item.title || 'Unknown Item'}</h3>
                <p>Price: {item.price? item.price : 'N/A'}</p>
                <p>Quantity: {item.quantity || 1}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="cart-right">
        <h2>Amount to Pay</h2>
        <p>150$</p>
        <Link to="/buynow" className="animated">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </Link>
      </div>
    </div>
  );
};

export default Addtocart;
