import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import SignIn from './components/login';
import SignUp from './components/Signup';
import VirtualTour from './components/Virtualtour';
import Gallery from './Artist/Gallery';
import SwiperSlider from './components/SwiperSlider';
import './App.css';
import UserAccount from './components/UserAccount';
import Admin from './Admin/admin';
import ManageUsers from './Admin/ManageUsers';
import Orders from './Admin/Oders';
import Reports from './Admin/Reports';
import BuyNow from './components/Buynow';
import Addtocart from './components/Addtocart';
import UploadArt from './Artist/uploadart';
import Artist from './Artist/Artist';
import OTPForm from './components/OTPForm';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentication state
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.title === product.title);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/VirtualTour" element={<VirtualTour />} />

        <Route path="/OTPForm" element={<OTPForm />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route
          path="/SwiperSlider"
          element={<SwiperSlider addToCart={addToCart} />}
        />
        <Route path="/user-account" element={<UserAccount />} />

        <Route path="/forgetpassword" element={<forgetpassword />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/manage" element={<ManageUsers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/buynow" element={<BuyNow />} />
        <Route path="/addtocart" element={<Addtocart cart={cart} />} />
        <Route path="/uploadart" element={<UploadArt />} />
        <Route path="/artist" element={<Artist />} />
      </Routes>
    </Router>
  );
}

export default App;
