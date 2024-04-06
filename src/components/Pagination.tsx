import { FC } from 'react';
import '../pages/Home/style.css';
import { PREVIOUS, NEXT } from '../constants/constant';

const Pagination: FC = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            {PREVIOUS}
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            {NEXT}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;