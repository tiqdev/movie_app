import store from "..";
import {
  _getMovieDetail,
  _resetSearch,
  _searchMovie,
  _setDiscoveredMovie,
  _setError,
  _setIsLoading,
  _setMovie,
  _setMovieDetail,
  _setPage,
  _setSearchActive,
  _setSearchQuery,
  _setSearchedMovies,
  _setTotalPages,
  _setTotalResults,
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

export const searchMovie = ({
  query,
  page,
}: {
  query: string;
  page: number;
}) => {
  store.dispatch(_searchMovie({ query, page }));
};

export const setSearchActive = (searchActive: boolean) => {
  store.dispatch(_setSearchActive(searchActive));
};

export const setSearchQuery = (searchQuery: string) => {
  store.dispatch(_setSearchQuery(searchQuery));
};

export const setMovieDetail = (movieDetail: MovieDetail) => {
  store.dispatch(_setMovieDetail(movieDetail));
};

export const getMovieDetail = (id: number) => {
  store.dispatch(_getMovieDetail(id));
};

export const resetSearch = () => {
  store.dispatch(_resetSearch());
};

export const setPage = (page: number) => {
  store.dispatch(_setPage(page));
};

export const setTotalPages = (totalPages: number) => {
  store.dispatch(_setTotalPages(totalPages));
};

export const setTotalResults = (totalResults: number) => {
  store.dispatch(_setTotalResults(totalResults));
};
