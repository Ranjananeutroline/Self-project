import React, { useState } from 'react';
import Pagination from './Pagination';
import data from './data'; // Import the data

function ClientReview() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalItems = data.length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
       <div className="review-title">
            <h3>Client Reviews</h3>
        </div>
      {/* Pagination component */}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
        data={data} // Pass the data to Pagination component
      />
    </div>
  );
}

export default ClientReview;
