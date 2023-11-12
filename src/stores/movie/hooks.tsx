import { useSelector } from "react-redux/";
import { RootState } from "..";

export const useIsLoading = () => {
  return useSelector((state: RootState) => state.movie.loading);
};

export const useError = () => {
  return useSelector((state: RootState) => state.movie.error);
};

export const useMovie = () => {
  return useSelector((state: RootState) => state.movie.movie);
};

export const useDiscoveredMovie = () => {
  return useSelector((state: RootState) => state.movie.discoveredMovie);
};

export const useSearchedMovies = () => {
  return useSelector((state: RootState) => state.movie.searchedMovies);
};

export const useSearchActive = () => {
  return useSelector((state: RootState) => state.movie.searchActive);
};

export const useMovieDetail = () => {
  return useSelector((state: RootState) => state.movie.movieDetail);
};

export const useSearchQuery = () => {
  return useSelector((state: RootState) => state.movie.searchQuery);
};

export const usePage = () => {
  return useSelector((state: RootState) => state.movie.page);
};

export const useTotalPages = () => {
  return useSelector((state: RootState) => state.movie.totalPages);
};

export const useTotalResults = () => {
  return useSelector((state: RootState) => state.movie.totalResults);
};
