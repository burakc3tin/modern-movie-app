import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovie = createAsyncThunk(
  'movies/fetchMovie',
  async ({ query, page, year }) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${query}&y=${year}&page=${page}&apikey=77573225`);
    return response.data;
  }
);

export const getMoviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movie: null,
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
      });
  },
});

export const { setCurrentPage, setQuery, setYear } = getMoviesSlice.actions;

export const selectMovie = (state) => state.movies.movie;
export const selectCurrentPage = (state) => state.movies.currentPage;
export const selectQuery = (state) => state.movies.query; 
export const selectYear = (state) => state.movies.year; 

export default getMoviesSlice.reducer;
