import { FC } from 'react';
import { COLUMN_ONE, COLUMN_SECOND, COLUMN_THIRD } from '../constants/constant';
import '../pages/Home/style.css';
import { useSelector } from 'react-redux';
import { selectMovie } from '../redux/features/getMoviesSlice';

const Table: FC = () => {
  const movies = useSelector(selectMovie); 

  return (
    <table className="table table-warning text-center">
      <thead>
        <tr>
          <th scope="col">{COLUMN_ONE}</th>
          <th scope="col">{COLUMN_SECOND}</th>
          <th scope="col">{COLUMN_THIRD}</th>
        </tr>
      </thead>
      <tbody>
        {movies && movies.Search ? (
          movies.Search.map((movie, index) => (
            <tr key={index}>
              <th scope="row">{movie.imdbID}</th>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
            </tr>
          ))
        ) : null}
      </tbody>
    </table>
  );
}

export default Table;