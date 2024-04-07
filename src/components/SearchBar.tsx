import { FC, useState, useEffect } from 'react';
import { MOVIE_NAME, MOVIE_RELEASE_YEAR, SEARCH_BUTTON_TEXT } from '../constants/constant';
import { useDispatch, useSelector  } from 'react-redux';
import { fetchMovie, selectMovie, selectCurrentPage, selectQuery,setQuery, selectYear, setYear } from '../redux/features/getMoviesSlice.ts';

const SearchBar: FC = () => {
   const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const queryField = useSelector(selectQuery)
  const yearField = useSelector(selectYear);
  const movie = useSelector(selectMovie);

  const handleSubmit = () => {
    dispatch(fetchMovie({ query: queryField, page: currentPage, year: yearField }));
  };

  const handleChangeQuery = (event) => {
    dispatch(setQuery(event.target.value));
  };

  const handleChangeYear = (event) => {
    dispatch(setYear(event.target.value));
  };

  useEffect(() => {
    handleSubmit();
  }, []); 
  
  return (
    <div className="container input-group m-4">
      <input type = "text" className = "form-control text-center" placeholder = {MOVIE_NAME} value={queryField} onChange={handleChangeQuery} />
      <input onClick={handleSubmit} type="button" value = {SEARCH_BUTTON_TEXT} />
      <input type = "text" className = "form-control text-center" placeholder = {MOVIE_RELEASE_YEAR} value={yearField} onChange={handleChangeYear} />
     </div>
  );
}

export default SearchBar;