import { FC, useState, useEffect } from 'react';
import { MOVIE_NAME, MOVIE_RELEASE_YEAR, SEARCH_BUTTON_TEXT } from '../constants/constant';
import { useDispatch, useSelector  } from 'react-redux';
import { fetchMovie, selectMovie } from '../redux/features/getMoviesSlice.ts';

const SearchBar: FC = () => {
  const [query, setQuery] = useState('Pokemon');
  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);

  const handleSubmit = () => {
    dispatch(fetchMovie(query));
   };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    handleSubmit();
  }, []); 
  
  return (
    <div className="container input-group m-4">
      <input type = "text" className = "form-control text-center" placeholder = {MOVIE_NAME} value={query} onChange={handleChange} />
      <input onClick={handleSubmit} type="button" value = {SEARCH_BUTTON_TEXT} />

      <input type = "text" className = "form-control text-center" placeholder = {MOVIE_RELEASE_YEAR} />
     </div>
  );
}

export default SearchBar;