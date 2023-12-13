import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movieList: []
    },
    reducers: {
        addMovieToList: (state, action) => {
            // update the initial state
            // addMovieToList(movieObj) -> action.payload
            state.movieList.push(action.payload)
        },
        removeMovieFromList: (state, action) => {
            // update the initial state
            // addMovieToList(movieObj) -> action.payload
            const movie = action.payload;
            const updatedMovie = state.movieList.filter(mov => mov.imdbID !== movie.imdbID);
            state.movieList = updatedMovie
        }
    }

})
const { actions, reducer } = movieSlice;
export default reducer; //State export
export const { addMovieToList, removeMovieFromList } = actions