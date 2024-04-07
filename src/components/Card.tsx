import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSingleMovie, fetchSingleMovie } from '../redux/features/getMoviesSlice';
import { IMDB_BUTTON_TEXT } from '../constants/constant';
import './_style.css';

const Card: FC<{ id: string }> = ({ id }) => {
  const dispatch = useDispatch();
  const selectedMovie = useSelector(selectSingleMovie);

  useEffect(() => {
    dispatch(fetchSingleMovie(id));
  }, [dispatch]);

  return (
    <div className="card shadow-lg p-3 mt-4 " style={{ width: "20rem" }}>
      <h5 className="card-title h5 text-center">{selectedMovie?.Title}</h5>
      <h6 className='h6 text-center text-muted'>{selectedMovie?.Year} ▪️ {selectedMovie?.Runtime} ▪️ {selectedMovie?.Director}</h6>
      <img className="card-img-top" src={selectedMovie?.Poster} alt={selectedMovie?.Title} />
      <div className="card-body text-center">
        <p className="card-text paragraph">
          {selectedMovie?.Plot}
        </p>
        <p className="card-text text-secondary">
          {selectedMovie?.Genre}
        </p>
        <a href={`https://www.imdb.com/title/${selectedMovie?.imdbID}`} className="btn btn-primary">
          {IMDB_BUTTON_TEXT}
        </a>
      </div>
    </div>
  );
}

export default Card;
