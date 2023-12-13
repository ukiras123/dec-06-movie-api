import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./slices/movieSlice"
export const store = configureStore({
    reducer: {
        movieInfo: movieReducer
    },
})