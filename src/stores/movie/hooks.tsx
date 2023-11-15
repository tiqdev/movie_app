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

export const useBackdropImage = () => {
  return useSelector((state: RootState) => state.movie.backdropImage);
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

export const useSearchIsLoading = () => {
  return useSelector((state: RootState) => state.movie.searchLoading);
};

export const useFavoriteMovies = () => {
  return useSelector((state: RootState) => state.movie.favorites);
};

export const useIsFavoriteLoading = () => {
  return useSelector((state: RootState) => state.movie.favoritesLoading);
};

export const useDropdownIsActive = () => {
  return useSelector((state: RootState) => state.movie.dropDownIsActive);
};

export const useReviews = () => {
  return useSelector((state: RootState) => state.movie.reviews);
};

export const useReviewTextArea = () => {
  return useSelector((state: RootState) => state.movie.reviewTextArea);
};

export const useIsReviewLoading = () => {
  return useSelector((state: RootState) => state.movie.reviewsLoading);
};

export const useSuggestionInput = () => {
  return useSelector((state: RootState) => state.movie.suggestionInput);
};

export const useIsEmailSending = () => {
  return useSelector((state: RootState) => state.movie.isEmailSending);
};
