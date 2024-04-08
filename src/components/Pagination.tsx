// Pagination.js

import { FC } from 'react';
import { usePaginationHandlers } from '../hooks/paginationHandlers.ts';
import { PREVIOUS, NEXT } from '../constants/constant';
import './_style.css';

const Pagination: FC = () => {
  const { handlePrevious, handleNext } = usePaginationHandlers();

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" onClick={handlePrevious}>
            {PREVIOUS}
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" onClick={handleNext}>
            {NEXT}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
