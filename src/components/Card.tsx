import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectMovie } from '../redux/features/getMoviesSlice';

const Card: FC<{ id: string }> = ({ id }) => {
  const movies = useSelector(selectMovie);
  const selectedMovie = movies?.Search?.find((movie) => movie.imdbID === id); // İlgili ID'ye sahip filmi bul

  return (
    <div className="card shadow-lg p-3 mt-4 " style={{ width: "18rem" }}>
      <img className="card-img-top" src={selectedMovie?.Poster} alt={selectedMovie?.Title} /> {/* Poster ve Title kullanarak resim ve başlık ekleyin */}
      <div className="card-body text-center">
        <h5 className="card-title">{selectedMovie?.Title}</h5> {/* Başlık olarak filmin Title'ını kullan */}
        <p className="card-text">
          {selectedMovie?.Year} {/* Yıl bilgisini göster */}
        </p>
        <p className="card-text">
          IMDB ID: {selectedMovie?.imdbID} {/* imdbID bilgisini göster */}
        </p>
        <a href={`https://www.imdb.com/title/${selectedMovie?.imdbID}`} className="btn btn-primary">
          See More
        </a>
      </div>
    </div>
  );
}

export default Card;
