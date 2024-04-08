import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovie = createAsyncThunk(
  'movies/fetchMovie',
  async ({ query, page, year }) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${query}&y=${year}&page=${page}&apikey=${import.meta.env.VITE_REACT_OMDB_KEY}`);
    return response.data;   
  }
);

export const fetchSingleMovie = createAsyncThunk(
  'movies/fetchSingleMovie',
  async (title) => {
    const response = await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=${import.meta.env.VITE_REACT_OMDB_KEY}`);
    return response.data;
  }
);

export const getMoviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movie: null,
    singleMovie: null,
    loading: false,
    error: null,
    currentPage: 1,
    year:'',
    query: 'Pokemon',
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
    setYear(state, action) {
      state.year = action.payload;
    },
    setSingleMovie(state, action) {  
      state.singleMovie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSingleMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.singleMovie = action.payload; // fetchSingleMovie başarıyla tamamlandığında singleMovie değişkenine atanıyor.
      })
      .addCase(fetchSingleMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage, setQuery, setYear, setSingleMovie } = getMoviesSlice.actions;

export const selectLoading = (state) => state.movies.loading;
export const selectMovie = (state) => state.movies.movie;
export const selectCurrentPage = (state) => state.movies.currentPage;
export const selectQuery = (state) => state.movies.query; 
export const selectYear = (state) => state.movies.year; 
export const selectSingleMovie = (state) => state.movies.singleMovie; 

export default getMoviesSlice.reducer;
