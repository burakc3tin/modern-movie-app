import { FC, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie, selectQuery, setCurrentPage, selectCurrentPage, selectYear } from '../redux/features/getMoviesSlice.ts';
import { PREVIOUS, NEXT } from '../constants/constant';
import '../pages/Home/style.css';

const Pagination: FC = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const queryField = useSelector(selectQuery)
  const yearField = useSelector(selectYear);

  const handlePrevious = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
      dispatch(fetchMovie({ query: queryField, page: currentPage - 1, year: yearField }));

    }
  };

  const handleNext = () => {
    dispatch(setCurrentPage(currentPage + 1));
    dispatch(fetchMovie({ query: queryField, page: currentPage + 1, year: yearField }));

  };

  // useEffect(() => {
  //  console.log(currentPage)
  // }, [currentPage]); 
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
