// src/ManageUsers.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageUsers.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8082/giverole');
        setUsers(response.data); // Assuming the response data is an array of users
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = async (event) => {
    event.preventDefault();
    if (newUser.name && newUser.email && newUser.role) {
      try {
        const response = await axios.post('http://localhost:8082/addrole', newUser);
        const addedUser = response.data;
        setUsers([...users, addedUser]); // Add the new user to the list
        setNewUser({ name: '', email: '', role: '' }); // Reset form
      } catch (error) {
        console.error('Error adding user:', error);
      }
    }
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="user-management-container">
      <h2 className="user-management-header">Manage Users</h2>
      <form onSubmit={handleAddUser} className="user-management-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleInputChange}
          className="form-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
          className="form-input"
          required
        />
        <select
          name="role"
          value={newUser.role}
          onChange={handleInputChange}
          className="form-select"
          required
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <button type="submit" className="form-submit-button">
          <i className="fas fa-check-circle"></i> Add User
        </button>
      </form>

      <table className="user-table">
        <thead>
          <tr>
            <th className="user-table-header">Name</th>
            <th className="user-table-header">Email</th>
            <th className="user-table-header">Role</th>
            <th className="user-table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="user-table-row">
              <td className="user-table-cell">{user.name}</td>
              <td className="user-table-cell">{user.email}</td>
              <td className="user-table-cell">{user.role}</td>
              <td className="user-table-cell">
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="delete-button"
                >
                  <i className="fas fa-trash-alt"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/admin" className="option-button">Back</Link>
    </div>
  );
};

export default ManageUsers;
