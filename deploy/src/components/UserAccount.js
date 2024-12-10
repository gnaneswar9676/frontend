import React from 'react';
import './css/UserAccount.css';

const UserAccount = () => {
  return (
    <div className="user-account-container">
      <h1>User Account</h1>
      <div className="avatar-container">
        <img src="https://via.placeholder.com/100" alt="User Avatar" className="avatar" />
      </div>
      <form className="user-account-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" id="fullname" placeholder="Enter your full name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default UserAccount;
