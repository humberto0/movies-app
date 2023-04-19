import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieSliceProps, MovieProps } from './types';

const initialState: MovieSliceProps = {
  movie: {},
};

const movieSlice = createSlice({
  name: '@movie',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<MovieProps>) => {
      if (state.movie?.title === action.payload.title)
        return;
      state.movie = action.payload;
    },

    clearMovie: (state) => {
      state.movie = {};
    }

  },
});

export const { addMovie, clearMovie } =
movieSlice.actions;

export default movieSlice.reducer;