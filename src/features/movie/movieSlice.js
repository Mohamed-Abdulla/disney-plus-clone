import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});
export const { setMovies } = movieSlice.actions;
export const selectMovies = (state) => state.movie.movies;
export default movieSlice.reducer;
// redux is made up of
// Action,reducers and state
// action-set,move,and any action
// reducers receive and changes data / action and store it to state
