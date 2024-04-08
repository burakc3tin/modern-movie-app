import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface MovieState {
  movie: any;
  singleMovie: any;
  loading: boolean;
  error: string | null;
  currentPage: number;
  year: string;
  query: string;
}

interface FetchMovieArgs {
  query: string;
  page: number;
  year: string;
}

export const fetchMovie = createAsyncThunk(
  'movies/fetchMovie',
  async ({ query, page, year }: FetchMovieArgs) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&y=${year}&page=${page}&apikey=${import.meta.env.VITE_REACT_OMDB_KEY}`);
      return response.data;
    } catch (error) {
      throw Error(error.response.data.Error);
    }
  }
);

export const fetchSingleMovie = createAsyncThunk(
  'movies/fetchSingleMovie',
  async (title: string) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=${import.meta.env.VITE_REACT_OMDB_KEY}`);
      return response.data;
    } catch (error) {
      throw Error(error.response.data.Error);
    }
  }
);

const initialState: MovieState = {
  movie: null,
  singleMovie: null,
  loading: false,
  error: null,
  currentPage: 1,
  year: '',
  query: 'Pokemon',
};

export const getMoviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setYear(state, action: PayloadAction<string>) {
      state.year = action.payload;
    },
    setSingleMovie(state, action: PayloadAction<any>) {
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
        state.singleMovie = action.payload;
      })
      .addCase(fetchSingleMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage, setQuery, setYear, setSingleMovie } = getMoviesSlice.actions;

export const selectLoading = (state: RootState) => state.movies.loading;
export const selectMovie = (state: RootState) => state.movies.movie;
export const selectCurrentPage = (state: RootState) => state.movies.currentPage;
export const selectQuery = (state: RootState) => state.movies.query;
export const selectYear = (state: RootState) => state.movies.year;
export const selectSingleMovie = (state: RootState) => state.movies.singleMovie;

export default getMoviesSlice.reducer;
