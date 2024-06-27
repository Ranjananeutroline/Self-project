import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isServicesActive, setIsServicesActive] = useState(true); // Set isServicesActive to true by default
  const [isAboutActive, setIsAboutActive] = useState(false);

  const handleButtonClick = (buttonName) => {
    if (buttonName === 'services') {
      setIsServicesActive(true); // Activate the "Explore Our Services" button
      setIsAboutActive(false); // Deactivate the "More About Us" button
    } else if (buttonName === 'about') {
      setIsServicesActive(false);
      setIsAboutActive(true); // Activate the "More About Us" button
    }
  };

  return (
    <div className="background-container">
      <div className="background-container-front">
        <h2 className="header-title">
          Waste Management Dumpster Rentals Garbage Pickup.
        </h2>
        <div className="header-btn-div">
        <Link to="/services">
          <button
            className={isServicesActive ? 'active-button' : ''}
            onClick={() => handleButtonClick('services')}
          >
            Explore Our Services
          </button>
          </Link>
          <Link to="/about">
          <button
            className={isAboutActive ? 'active-button' : ''}
            onClick={() => handleButtonClick('about')}
          >
            More About Us
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;