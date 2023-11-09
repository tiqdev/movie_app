import store from "..";
import { _setDiscoveredMovie, _setError, _setIsLoading, _setMovie } from ".";
import { DiscoveredMovie } from "../../models/DiscoveredMovie";

export const setIsLoading = (isLoading: boolean) => {
  store.dispatch(_setIsLoading(isLoading));
};

export const setError = (error: string) => {
  store.dispatch(_setError(error));
};

export const setMovie = (movie: object) => {
  store.dispatch(_setMovie(movie));
};

export const setDiscoveredMovie = (movies: DiscoveredMovie) => {
  store.dispatch(_setDiscoveredMovie(movies));
};
