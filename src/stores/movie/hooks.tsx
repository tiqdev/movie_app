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
