import { configureStore } from '@reduxjs/toolkit'
import getMoviesSlice from './features/getMoviesSlice.ts'

export const store = configureStore({
    reducer: {
        movies: getMoviesSlice,
      },
  })