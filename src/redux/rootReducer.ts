import { combineReducers } from '@reduxjs/toolkit';

import movieReducer from './slices/movie.slice';

const combinedReducers = combineReducers({
  movieReducer,
});

export default combinedReducers;
