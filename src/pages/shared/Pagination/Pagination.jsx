import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes



const Pagination = ({ totalItems }) => {


  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activePage, setActivePage] = useState(0);
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  return (
    <div>
      <div className="flex gap-3 flex-wrap gap-y-8 justify-center items-center py-8">
        {pages?.map((page) => (
          <button
            className={`btn ${
              activePage === page ? "bg-secondaryClr text-white" : ""
            }`}
            key={page}
            onClick={() => setActivePage(page)}>
            {page}
          </button>
        ))}
        <select
          value={itemsPerPage}
          onChange={(e) =>
            setItemsPerPage(parseInt(e.target.value), setActivePage(0))
          }
          className="select select-accent w-full max-w-xs focus-within:outline-none">
          <option disabled>Select Content per Page</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    </div>
  );
};


Pagination.propTypes = {
      totalItems: PropTypes.number.isRequired, // Define prop validation for totalItems
    };
    

export default Pagination;
