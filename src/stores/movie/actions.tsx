import store from "..";
import { _setError, _setIsLoading, _setMovie } from ".";

export const setIsLoading = (isLoading: boolean) => {
  store.dispatch(_setIsLoading(isLoading));
};

export const setError = (error: string) => {
  store.dispatch(_setError(error));
};

export const setMovie = (movie: object) => {
  store.dispatch(_setMovie(movie));
};
