import { configureStore } from '@reduxjs/toolkit'
import songsReducer from './songsSlice';

export const store = configureStore({
  reducer: {
    songs: songsReducer
  },
})
