import React, { useState } from 'react';
import axios from 'axios';
import './css/OTPForm.css';
const OTPForm = () => {
    const [email, setEmail] = useState({
        to: '',
        subject: '',
        body: '',
      });
      const [status, setStatus] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setEmail((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          setStatus('Sending...');
          const response = await axios.post('http://localhost:8080/send-email', email);
          setStatus(response.data.message);
        } catch (error) {
          setStatus('Error sending email');
          console.error(error);
        }
      };
    
      return (
        <div className="email-form">
          <h2>Send Email</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>To:</label>
              <input
                type="email"
                name="to"
                value={email.to}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Subject:</label>
              <input
                type="text"
                name="subject"
                value={email.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Body:</label>
              <textarea
                name="body"
                value={email.body}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send Email</button>
          </form>
          <p className={status.includes('Error') ? 'error' : ''}>{status}</p>
        </div>
      );
};

export default OTPForm;
