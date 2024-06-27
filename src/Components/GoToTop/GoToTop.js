import React, { useState, useEffect } from "react";
import "./GoToTop.css";
import { PiArrowFatLinesUpBold } from 'react-icons/pi';

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when the user scrolls down 200 pixels
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <>
      {isVisible && (
        <button className="go-to-top-button" onClick={scrollToTop}>
          <PiArrowFatLinesUpBold/>
        </button>
      )}
    </>
  );
}

export default GoToTop;