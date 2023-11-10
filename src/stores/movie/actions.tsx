import store from "..";
import {
  _getMovieDetail,
  _searchMovie,
  _setDiscoveredMovie,
  _setError,
  _setIsLoading,
  _setMovie,
  _setMovieDetail,
  _setSearchActive,
  _setSearchedMovies,
} from ".";
import { Movie } from "../../models/Movie";
import { MovieDetail } from "../../models/MovieDetail";

export const setIsLoading = (isLoading: boolean) => {
  store.dispatch(_setIsLoading(isLoading));
};

export const setError = (error: string) => {
  store.dispatch(_setError(error));
};

export const setMovie = (movie: Movie) => {
  store.dispatch(_setMovie(movie));
};

export const setDiscoveredMovie = (movies: Movie) => {
  store.dispatch(_setDiscoveredMovie(movies));
};

export const setSearchedMovies = (movies: Movie[]) => {
  store.dispatch(_setSearchedMovies(movies));
};

export const searchMovie = (query: string) => {
  store.dispatch(_searchMovie(query));
};

export const setSearchActive = (searchActive: boolean) => {
  store.dispatch(_setSearchActive(searchActive));
};

export const setMovieDetail = (movieDetail: MovieDetail) => {
  store.dispatch(_setMovieDetail(movieDetail));
};

export const getMovieDetail = (id: number) => {
  store.dispatch(_getMovieDetail(id));
};
