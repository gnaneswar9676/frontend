import React, { useState, useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import '../components//css/SwiperSlider.css'; // Ensure this file exists
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Gallery = ({ addToCart }) => {
  const [images, setImages] = useState([]); // Dynamically fetched images
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let swiperInstance = null;

  const handleAddToCart = (index) => {
    const selectedItem = images[index]; // Corrected from imageDetails to images
    addToCart({
      ...selectedItem,
      className: `slide${index + 1}`, // Add class for background image
    });
  };
  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/art');
        setImages(response.data); // Assume API returns an array of image details
      } catch (err) {
        setError('Failed to load images. Please try again later.');
        console.error('Error fetching images:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Initialize Swiper when images are loaded
  useEffect(() => {
    if (!selectedImage && images.length > 0) {
      swiperInstance = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
      }
    };
  }, [selectedImage, images]);

  const handleImageSelect = (index) => {
    setSelectedImage(index);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      {!selectedImage && (
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {images.map((image, index) => (
              <div
                className="swiper-slide"
                key={index}
                onClick={() => handleImageSelect(index)}
              >
                <div
                  className="picture"
                  style={{
                    backgroundImage: `url(http://localhost:8081/api/art/image/${image.fileName})`,
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      )}

      {selectedImage !== null && (
        <div className="full-screen-container">
          <div className="full-screen-left">
            <img
              src={`http://localhost:8081/api/art/image/${images[selectedImage].fileName}`}
              alt={images[selectedImage].title}
              className="full-screen-image"
            />
          </div>
          <div className="full-screen-right">
            <button className="close-button" onClick={closeFullScreen}>
              X
            </button>
            <h2>{images[selectedImage].title}</h2>
            <p><strong>Artist:</strong> {images[selectedImage].artist}</p>
            <p><strong>Year:</strong> {images[selectedImage].year}</p>
            <p>{images[selectedImage].description}</p>
            
            <Link to="/addtocart" className="animated" onClick={() => handleAddToCart(selectedImage)}>
  <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
</Link>


           
            <Link to="/buynow" className="animated">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
