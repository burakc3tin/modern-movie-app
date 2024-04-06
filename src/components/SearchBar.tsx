import { FC } from 'react';
import { MOVIE_NAME, MOVIE_RELEASE_YEAR } from '../constants/constant';
const SearchBar: FC = () => {
  return (
    <div className="container input-group m-4">
      <input type = "text" className = "form-control text-center" placeholder = {MOVIE_NAME} />
      <input type = "text" className = "form-control text-center" placeholder = {MOVIE_RELEASE_YEAR} />
    </div>
  );
}

export default SearchBar;