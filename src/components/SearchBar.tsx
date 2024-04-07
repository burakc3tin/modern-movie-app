import { FC, useState, useEffect } from 'react';
import { MOVIE_NAME, MOVIE_RELEASE_YEAR } from '../constants/constant';
import { useDispatch, useSelector  } from 'react-redux';
import { fetchMovie, selectMovie } from '../redux/features/getMoviesSlice.ts';

const SearchBar: FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);

  const handleSubmit = () => {
    dispatch(fetchMovie(query));
   };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    console.log(movie);
  }, [movie]); 
  
  return (
    <div className="container input-group m-4">
      <input type = "text" className = "form-control text-center" placeholder = {MOVIE_NAME} value={query} onChange={handleChange} />
      <input type = "text" className = "form-control text-center" placeholder = {MOVIE_RELEASE_YEAR} />
      <input onClick={handleSubmit} type="button" value="Ara" />
    </div>
  );
}

export default SearchBar;