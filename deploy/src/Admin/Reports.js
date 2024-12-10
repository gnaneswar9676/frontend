// src/Reports.js
import React from 'react';
import './Reports.css'; // Import the CSS file for styling

const Reports = () => {
  // Sample data for reports
  const totalArtworks = 150;
  const totalSales = 85;
  const popularArtist = 'Leonardo da Vinci';
  const totalVisitors = 1200;
  const revenueGenerated = 25000;

  return (
    <div className="reports-container">
      <h2>Gallery Reports</h2>
      <div className="report-stats">
        <div className="report-card">
          <h3>Total Artworks</h3>
          <p>{totalArtworks}</p>
        </div>
        <div className="report-card">
          <h3>Total Sales</h3>
          <p>{totalSales}</p>
        </div>
        <div className="report-card">
          <h3>Most Popular Artist</h3>
          <p>{popularArtist}</p>
        </div>
        <div className="report-card">
          <h3>Total Visitors</h3>
          <p>{totalVisitors}</p>
        </div>
        <div className="report-card">
          <h3>Revenue Generated</h3>
          <p>${revenueGenerated}</p>
        </div>
        {/* Add more report categories as needed */}
      </div>
    </div>
  );
};

export default Reports;
