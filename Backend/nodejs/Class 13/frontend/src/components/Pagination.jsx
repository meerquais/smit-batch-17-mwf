import React from "react";

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const pages = [...Array(totalPages).keys()];

  return (
    <div className="flex gap-2 mt-4">
      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 border ${
            currentPage === page + 1 ? "bg-black text-white" : ""
          }`}
          onClick={() => {
            setCurrentPage(page + 1);
          }}
        >
          {page + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
