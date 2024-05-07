import React from "react";
import Pagination from "react-bootstrap/Pagination";

const MyPagination = ({ onPageChange, currentPage }) => {
  const handlePaginationClick = (number) => {
    onPageChange(number);
  };

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePaginationClick(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <Pagination size="lg">{items}</Pagination>
    </div>
  );
};

export default MyPagination;
