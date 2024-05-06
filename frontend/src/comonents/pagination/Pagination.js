import React from "react";
import lodash from "lodash";

const Pagination = (props) => {
  const { itemCount, pageSize, onPageChange, currentPage } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return null;
  const pages = lodash.range(1, pageCount + 1);
  console.log(currentPage);
  return (
    <div>
      <ul className="flex justify-center items-center ">
        {pages.map((page) => (
          <li
            key={page}
            onClick={() => onPageChange(page)}
            className={
              page === currentPage
                ? "text-red-500 cursor-pointer "
                : "text-black cursor-pointer "
            }
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
