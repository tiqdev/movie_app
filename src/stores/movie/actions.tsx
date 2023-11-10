import store from "..";
import {
  _searchMovie,
  _setDiscoveredMovie,
  _setError,
  _setIsLoading,
  _setMovie,
  _setSearchActive,
  _setSearchedMovies,
} from ".";
import { Movie } from "../../models/Movie";

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
