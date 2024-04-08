import { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie, selectCurrentPage, selectQuery, setQuery, selectYear, setYear } from '../redux/features/getMoviesSlice';

export const useSearchBarHandlers = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const queryField = useSelector(selectQuery);
  const yearField = useSelector(selectYear);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); 

  const handleSubmit = () => {
    const trimmedQuery = queryField.trim().toLowerCase();
    if (trimmedQuery === '') {
      setErrorMessage('Film adını boş bırakmayınız.');
      return; 
    }
    dispatch(fetchMovie({ query: queryField, page: currentPage, year: yearField }));
    setErrorMessage(null);
  };

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const trimmedValue = value.trim();
    dispatch(setQuery(trimmedValue));
    setErrorMessage(null);
  };

  const handleChangeYear = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const trimmedValue = value.trim();
    dispatch(setYear(trimmedValue));
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return { handleSubmit, handleChangeQuery, handleChangeYear, errorMessage };
};
