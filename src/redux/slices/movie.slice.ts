import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieSliceProps, MovieProps } from "./types";

const initialState: MovieSliceProps = {
  movie: null,
  movies: [],
};

const movieSlice = createSlice({
  name: "@movie",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<MovieProps>) => {
      if (
        !state.movies?.find(
          (movie: { title: string }) => movie?.title === action.payload.title
        ) && action.payload.title
      ) {
        state.movies.push(action.payload);
        state.movie = state.movies?.find(
          (movie: { title: string }) => movie.title === action.payload.title
        ) as MovieProps;
      } else {
        state.movie = state.movies?.find(
          (movie: { title: string }) => movie.title === action.payload.title
        ) as MovieProps;
      }
    },

    favoriteMovie: (state,  action: PayloadAction<MovieProps["title"]>) => {
      state.movies = state.movies?.map((item)=>{
        if(item.title=== action.payload){
          return {...item, liked: !item.liked}
        }
        return item
      })
    },

    clearMovie: (state) => {
      if (!state.movie) return;
      state.movie = null;
      state.movies = [];
    },
  },
});

export const { addMovie, clearMovie, favoriteMovie } = movieSlice.actions;

export default movieSlice.reducer;
