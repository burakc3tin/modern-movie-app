import { FC, useEffect, useState } from 'react';
import { COLUMN_ONE, COLUMN_SECOND, COLUMN_THIRD } from '../constants/constant';
import { useSelector, useDispatch } from 'react-redux';
import { selectMovie, selectLoading, fetchMovie, selectQuery, selectYear } from '../redux/features/getMoviesSlice';
import { useNavigate } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import './_style.css';

const Table: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector(selectMovie);
  const isLoading = useSelector(selectLoading);
  const queryField = useSelector(selectQuery)
  const yearField = useSelector(selectYear);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMovies, setCurrentMovies] = useState([]);

  useEffect(() => {

    dispatch(fetchMovie({ query: queryField, page: 1, year: yearField }));
  }, [dispatch, yearField]);

  useEffect(() => {
    if (movies && movies.Search) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setCurrentMovies(movies.Search.slice(startIndex, endIndex));
    }
  }, [movies, currentPage]);

  return (
    <div className='table text-center tableContainer'>
      {isLoading ? (
        <PacmanLoader color="#d6bc36" />
      ) : (
        <>
          <table className="table table-warning text-center">
            <thead>
              <tr>
                <th scope="col">{COLUMN_ONE}</th>
                <th scope="col">{COLUMN_SECOND}</th>
                <th scope="col">{COLUMN_THIRD}</th>
              </tr>
            </thead>
            <tbody>
              {currentMovies.map((movie, index) => (
                <tr onClick={() => navigate(`/detail/${movie.Title}`)} key={index}>
                  <th scope="row">{movie.imdbID}</th>
                  <td>{movie.Title}</td>
                  <td>{movie.Year}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination bileşenini buraya ekle */}
        </>
      )}
    </div>
  );
}

export default Table;
