import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 export const fetchMovie = createAsyncThunk(
    'movies/fetchMovie',
    async (query) => {
      const response = await axios.get(`https://www.omdbapi.com/?t=${query}&apikey=77573225`);
      return response.data;
    }
  );
  
 export const getMoviesSlice = createSlice({
    name: 'movies',
    initialState: {
      movie: null,
      loading: false,
      error: null,
    },
    reducers: {},
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
  
  export const selectMovie = (state) => state.movies.movie;
  
  export default getMoviesSlice.reducer

