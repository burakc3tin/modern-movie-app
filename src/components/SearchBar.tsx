import React, { FC } from 'react';
import { MOVIE_NAME, MOVIE_RELEASE_YEAR, SEARCH_BUTTON_TEXT } from '../constants/constant';
import { useSearchBarHandlers } from '../hooks/useSearchBarHandlers';
import { useSelector } from 'react-redux';
import { selectQuery } from '../redux/features/getMoviesSlice';

import './_style.css';

const SearchBar: FC = () => {
  const { handleSubmit, handleChangeQuery, handleChangeYear, errorMessage } = useSearchBarHandlers();
  const queryField = useSelector(selectQuery);

  return (
    <div className="container input-group m-4">
      <input type="text" className="form-control text-center" placeholder={MOVIE_NAME} onChange={handleChangeQuery} value={queryField} />
      <input className='button' onClick={handleSubmit} type="button" value={SEARCH_BUTTON_TEXT} />
      <input type="text" className="form-control text-center" placeholder={MOVIE_RELEASE_YEAR} onChange={handleChangeYear} />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default SearchBar;
