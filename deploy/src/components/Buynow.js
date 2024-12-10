import React, { useState } from "react";
import "../components/css/Buynow.css";

const Buynow = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNum: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  });


  
    const handleCheckout = (event) => {
      event.preventDefault(); // Prevent default form submission behavior
      console.log("Successfully payment done");
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="containers">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <h3 className="title">Billing Address</h3>
            <div className="inputBox">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex">
              <div className="inputBox">
                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inputBox">
                <label htmlFor="zip">Zip Code:</label>
                <input
                  type="number"
                  id="zip"
                  name="zip"
                  placeholder="123 456"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="col">
            <h3 className="title">Payment</h3>
            <div className="inputBox">
              <label>Card Accepted:</label>
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20240715140014/Online-Payment-Project.webp"
                alt="credit/debit card"
              />
            </div>
            <div className="inputBox">
              <label htmlFor="cardName">Name On Card:</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                placeholder="Enter card name"
                value={formData.cardName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="cardNum">Credit Card Number:</label>
              <input
                type="text"
                id="cardNum"
                name="cardNum"
                placeholder="1111-2222-3333-4444"
                maxLength="19"
                value={formData.cardNum}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputBox">
              <label>Exp Month:</label>
              <select
                name="expMonth"
                value={formData.expMonth}
                onChange={handleChange}
                required
              >
                <option value="">Choose month</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex">
              <div className="inputBox">
                <label>Exp Year:</label>
                <select
                  name="expYear"
                  value={formData.expYear}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose Year</option>
                  {["2023", "2024", "2025", "2026", "2027"].map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputBox">
                <label htmlFor="cvv">CVV:</label>
                <input
                  type="number"
                  id="cvv"
                  name="cvv"
                  placeholder="1234"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <form>
      <input
        type="submit"
        value="Proceed to Checkout"
        className="submit_btn"
        onClick={handleCheckout}
      />
    </form>
      </form>
    </div>
  );
};

export default Buynow;
