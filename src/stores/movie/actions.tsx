import store from "..";
import {
  _addFavoriteMovie,
  _addMovieReview,
  _getFavoriteMovies,
  _getMovieDetail,
  _getMovieReviews,
  _removeFavoriteMovie,
  _resetSearch,
  _searchMovie,
  _setDiscoveredMovie,
  _setDropDownIsActive,
  _setError,
  _setIsLoading,
  _setMovie,
  _setMovieDetail,
  _setPage,
  _setReviewTextArea,
  _setSearchActive,
  _setSearchQuery,
  _setSearchedMovies,
  _setTotalPages,
  _setTotalResults,
} from ".";
import { Favorite, Movie } from "../../models/Movie";
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

export const getFavoriteMovies = (userid: string) => {
  return store.dispatch(_getFavoriteMovies(userid));
};

export const addFavoriteMovie = (favorite: Favorite) => {
  return store.dispatch(_addFavoriteMovie(favorite));
};

export const removeFavoriteMovie = (favorite: Favorite) => {
  return store.dispatch(_removeFavoriteMovie(favorite));
};

export const setDropdownIsActive = (dropdownIsActive: boolean) => {
  return store.dispatch(_setDropDownIsActive(dropdownIsActive));
};

export const getMovieReview = (movieId: number) => {
  return store.dispatch(_getMovieReviews(movieId));
};

export const addMovieReview = (review: any) => {
  return store.dispatch(_addMovieReview(review));
};

export const setReviewTextArea = (review: string) => {
  return store.dispatch(_setReviewTextArea(review));
};
