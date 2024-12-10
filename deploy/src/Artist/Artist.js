// src/components/Home.js
import React from 'react';
import './Artist.css';
import { Link } from 'react-router-dom';

function Artist() {
  return (
    
    <div className="home-page">
 
      <h1 className="gallery-title">Welcome Back Artist.</h1>
      <p className="gallery-description">Upload your new arts</p>
      <Link to="/uploadart" className="animated-button">Upload</Link>
      
    </div>
    
  );
}

export default Artist;
