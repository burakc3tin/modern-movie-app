import { FC, useState } from 'react';
import { COLUMN_ONE, COLUMN_SECOND, COLUMN_THIRD } from '../constants/constant';
import { useSelector } from 'react-redux';
import { selectMovie, selectLoading } from '../redux/features/getMoviesSlice';
import { useNavigate } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import './_style.css';

const Table: FC = () => {
  const navigate = useNavigate();
  const movies = useSelector(selectMovie);
  const isLoading = useSelector(selectLoading);


   return (
    <div className='table text-center tableContainer'>
      {isLoading ? (
        <PacmanLoader color="#d6bc36" />
      ) : (<table className="table table-warning text-center">

        <thead>
          <tr>
            <th scope="col">{COLUMN_ONE}</th>
            <th scope="col">{COLUMN_SECOND}</th>
            <th scope="col">{COLUMN_THIRD}</th>
          </tr>
        </thead>
        <tbody>
          {movies && movies.Search ? (
            movies.Search
              .filter(movie => movie.Type === 'movie' || movie.Type === 'series' || movie.Type === 'episode') // Sadece istenen türdeki filmleri getir
              .map((movie, index) => (
                <tr onClick={() => navigate(`/detail/${movie.Title}`)} key={index}>
                  <th scope="row">{movie.imdbID}</th>
                  <td>{movie.Title}</td>
                  <td>{movie.Year}</td>
                </tr>
              ))
          ) : null}
        </tbody>
      </table>)}
    </div>
  );
}

export default Table;