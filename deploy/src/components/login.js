import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/Login.css';
import { Link } from 'react-router-dom';

function SignIn({ onLogin }) {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8081/login', credentials);
          console.log('Login response:', response.data);

          if (response.data.success) {
              onLogin(); // Call the onLogin function passed as prop (maybe for state management)
              
              // Based on the role from the backend, navigate to the correct page
              const userRole = response.data.role;
              if (userRole === 'ADMIN') {
                  navigate('/admin');  // Navigate to Admin.js if the user is an admin
              } else if (userRole === 'ARTIST') {
                  navigate('/artist');  // Navigate to Artist dashboard or any page for artists
              } else {
                  navigate('/SwiperSlider');  // Navigate to regular user's page (SwiperSlider)
              }
          } else {
              alert('Invalid username or password');
          }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className='login-box'>
                <h2 className='he2'>LOGIN</h2>
                <div className="input inputp">
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter Username" 
                      required
                      value={credentials.username}
                      onChange={handleChange}
                    />
                </div>

                <div className="input1 input">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Password" 
                      required
                      value={credentials.password}
                      onChange={handleChange}
                    />
                </div>
                <div className="signup-link">
                     <Link to="/OTPForm">Forgot password?</Link>
                </div>

                <button type="submit">LOGIN</button>

                <div className="signup-link">
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
