import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSingleMovie, fetchSingleMovie, selectLoading } from '../redux/features/getMoviesSlice';
import { IMDB_BUTTON_TEXT } from '../constants/constant';
import { PacmanLoader } from 'react-spinners';

import './_style.css';

interface CardProps {
  id: string;
}

const Card: FC<CardProps> = ({ id }) => {
  const dispatch = useDispatch();
  const selectedMovie = useSelector(selectSingleMovie);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchSingleMovie(id));
  }, [dispatch, id]);

  return (
    <div>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PacmanLoader color="#d6bc36" />
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default Card;
