// src/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faImages, faClipboardList, faChartPie, faCog } from '@fortawesome/free-solid-svg-icons';
import './Admin.css'; // Import your styles here

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/#"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Link></li>
        <li><Link to="/manage"><FontAwesomeIcon icon={faUsers} /> Manage Users</Link></li>
        <li><Link to="/uploadart"><FontAwesomeIcon icon={faImages} /> Artworks</Link></li>
        <li><Link to="/orders"><FontAwesomeIcon icon={faClipboardList} /> Orders</Link></li>
        <li><Link to="/reports"><FontAwesomeIcon icon={faChartPie} /> Reports</Link></li>
        <li><Link to="/admin/settings"><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
