// src/components/Navbar.js
import React from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import { FaHome, FaImage, FaRegEye, FaSignInAlt, FaUser, FaSignOutAlt } from 'react-icons/fa'; // Import sign-out icon

const Navbar = ({ isLoggedIn, onLogout }) => {
  const handleLinkClick = () => {
    // Additional functionality when links are clicked
  };

  return (
    <div className="navbar-container">
      <ul className="menu-bar">
        <li><Link to="/" onClick={handleLinkClick}><FaHome /> Home</Link></li>
        
        <li><Link to="/SwiperSlider" onClick={handleLinkClick}><FaImage /> Gallery</Link></li>
        <li><Link to="/services" onClick={handleLinkClick}><FaRegEye /> Virtual Tours</Link></li>
        {/* Conditionally render Sign In or Profile based on isLoggedIn state */}
        {!isLoggedIn ? (
          <li><Link to="/signin" onClick={handleLinkClick}><FaSignInAlt /> Sign In</Link></li>
        ) : (
          <>
            <li><Link to="/user-account" onClick={handleLinkClick}><FaUser /> Profile</Link></li>
            <li onClick={onLogout}><FaSignOutAlt /> Sign Out</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
