export interface MovieProps {
  imdbRating?: string;
  plot?: string;
  poster?: string;
  title?: string;
  year?: string;
  liked?: boolean;
  actors?: string[];
}

export interface MovieSliceProps{
  movie: MovieProps;
}
export interface IStore {
  movieReducer: MovieSliceProps;
}