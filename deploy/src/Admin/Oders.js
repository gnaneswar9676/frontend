// src/Orders.js
import React from 'react';
import './Orders.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
const Orders = () => {
  // Sample data for orders
  const totalOrders = 100; // Total orders
  const deliveredOrders = 75; // Delivered orders
  const pendingOrders = 25; // Pending orders

  return (
    <div className="orders-container">
      <h2>Order Statistics</h2>
      <div className="order-stats">
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>{totalOrders}</p>
        </div>
        <div className="stat-card">
          <h3>Delivered Orders</h3>
          <p>{deliveredOrders}</p>
        </div>
        <div className="stat-card">
          <h3>Pending Orders</h3>
          <p>{pendingOrders}</p>
        </div>
        {/* Add more categories as needed */}
       
      </div>
      
      <Link to="/admin" className="option-button">Back</Link>
    </div>
    
  );
};

export default Orders;
