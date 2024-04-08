// paginationHandlers.js

import { useDispatch } from 'react-redux';
import { fetchMovie, setCurrentPage } from '../redux/features/getMoviesSlice.ts';
import { useSelector } from 'react-redux';
import { selectCurrentPage, selectQuery, selectYear } from '../redux/features/getMoviesSlice.ts';

export const usePaginationHandlers = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const queryField = useSelector(selectQuery);
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

  return { handlePrevious, handleNext };
};
