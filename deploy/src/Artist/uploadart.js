import React, { useState } from 'react';
import './uploadart.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
function UploadArt() {
  const [picture, setPicture] = useState(null);
  const [artistName, setArtistName] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false); // Track upload progress
  const [error, setError] = useState(null); // Error state for handling errors

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPicture(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate if all fields are filled out
   if (!picture || !artistName || !year || !description) {
      alert("Please fill all fields and upload a picture.");
      return;
    }

    setIsUploading(true); // Start uploading
    setError(null); // Reset any previous errors

    const formData = new FormData();
    formData.append('picture', picture); // Append the image file
    formData.append('artistName', artistName); // Append artist name
    formData.append('year', year); // Append year
    formData.append('description', description); // Append description

    try {
      // Make the POST request to the backend
      const response = await axios.post('http://localhost:8081/api/art', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure the correct header for file uploads
        },
      });
      console.log(response.data);
      alert("Artwork uploaded successfully!");
      setIsUploading(false);
      // Reset form after successful upload
      setArtistName('');
      setYear('');
      setDescription('');
      setPicture(null);
    } catch (err) {
      console.error('Error uploading artwork:', err);
      setError('Error uploading artwork. Please try again.');
      setIsUploading(false); // Stop uploading on error
    }
  };

  return (
    <div className="uploadart-body">
      <div className="upload-container">
        <div className="upload-box">
          <h2 className="upload-heading">Upload Art</h2>
          <form onSubmit={handleSubmit}>
            <div className="upload-input-group">
              <label>Picture:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePictureChange}
                required
              />
            </div>
            <div className="upload-input-group">
              <label>Artist Name:</label>
              <input
                type="text"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                required
              />
            </div>
            <div className="upload-input-group">
              <label>Year:</label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              />
            </div>
            <div className="upload-input-group">
              <label>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            {error && <div className="upload-error">{error}</div>} {/* Error handling */}
            <button
              type="submit"
              className="upload-button"
              disabled={isUploading} // Disable button while uploading
            >
              {isUploading ? 'Uploading...' : 'Upload Art'}
            </button>
            <div className="upload-link">
              <p>Want to view all artworks? <a href="/gallery">Go to Gallery</a>  </p>
             
            </div>
          </form>
          
        </div>
        
      </div>
      
    </div>
  );
}

export default UploadArt;
