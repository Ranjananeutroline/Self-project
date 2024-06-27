import React, { useState, useEffect } from 'react';
import './Pagination.css'; // Create a CSS file for styling

const Pagination = ({ itemsPerPage, totalItems, onPageChange, totalPages, currentPage, data }) => {
  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderSlides = () => {
    const slides = [];
    for (let i = 1; i <= totalPages; i++) {
      slides.push(
        <div
          key={i}
          className={`pagination-slide ${currentPage === i ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </div>
      );
    }
    return slides;
  };

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const items = [];

    for (let i = startIndex; i < endIndex && i < totalItems; i++) {
      const item = data[i];
      items.push(
        <div key={item.id} className="item">
             <img src={item.image} alt="reviews" height={"90px"} width={"90px"}/>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </div>
      );
    }

    return items;
  };

  return (
    <div>
      <div className="pagination-item">{renderItems()}</div>
      <div className="pagination-container">{renderSlides()}</div>
    </div>
  );
};

export default Pagination;