import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";
import { Favorite, Movie } from "../../models/Movie";
import { MovieDetail } from "../../models/MovieDetail";
import { Review } from "../../models/Review";
import {
  _token,
  emailJsPublicKey,
  emailJsServiceId,
  emailJsTemplateId,
} from "../../utils/constants";
import emailjs from "@emailjs/browser";
import {
  addFavorite,
  addReview,
  getFavorites,
  getReviews,
  removeFavorite,
  removeReview,
} from "../../utils/firebaseFunctions";

type initialStateType = {
  discoveredMovie: Movie | null;
  movie: Movie | null;
  movies: Movie[] | null;
  searchedMovies: Movie[];
  loading: boolean;
  error: string;
  searchLoading: boolean;
  searchError: string;
  searchQuery: string;
  searchActive: boolean;

  favoritesLoading: boolean;
  favoritesError: string;
  favorites: Favorite[];

  movieDetail: MovieDetail | null;
  page: number;
  totalPages: number;
  totalResults: number;

  dropDownIsActive: boolean;

  reviews: Review[];
  reviewsLoading: boolean;
  reviewsError: string;

  reviewTextArea: string;

  suggestionInput: string;

  isEmailSending: boolean;
  emailError: string;
};

const initialState: initialStateType = {
  discoveredMovie: {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    genre_ids: [28, 53],
    id: 575264,
    original_language: "en",
    original_title: "Mission: Impossible - Dead Reckoning Part One",
    overview:
      "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
    popularity: 3264.457,
    poster_path:
      "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    release_date: "2023-07-08",
    title: "Mission: Impossible - Dead Reckoning Part One",
    video: false,
    vote_average: 7.7,
    vote_count: 2131,
  },
  movie: {
    adult: false,
    backdrop_path: "",
    genre_ids: [],
    id: 0,
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    release_date: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  movieDetail: {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: {
      id: 0,
      name: "",
      poster_path: "",
      backdrop_path: "",
    },
    budget: 0,
    genres: [
      {
        id: 0,
        name: "",
      },
    ],
    homepage: "",
    id: 0,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [
      {
        id: 0,
        logo_path: "",
        name: "",
        origin_country: "",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "",
        name: "",
      },
    ],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [
      {
        english_name: "",
        iso_639_1: "",
        name: "",
      },
    ],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  movies: [],
  searchedMovies: [],
  searchQuery: "",
  page: 1,

  loading: false,
  error: "Movie Not Found !",

  searchLoading: false,
  searchError: "Movie Not Found !",
  searchActive: false,

  favoritesLoading: false,
  favoritesError: "Movie Not Found !",
  favorites: [],

  totalPages: 0,
  totalResults: 0,

  dropDownIsActive: false,

  reviews: [],
  reviewsLoading: false,
  reviewsError: "",
  reviewTextArea: "",

  suggestionInput: "",

  isEmailSending: false,
  emailError: "",
};

export const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    _setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    _setMovie: (state, action: PayloadAction<Movie>) => {
      state.movie = action.payload;
    },
    _setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    _setDiscoveredMovie: (state, action: PayloadAction<Movie>) => {
      state.discoveredMovie = action.payload;
    },
    _setSearchedMovies: (state, action: PayloadAction<Movie[]>) => {
      state.searchedMovies = action.payload;
    },
    _setSearchActive: (state, action: PayloadAction<boolean>) => {
      state.searchActive = action.payload;
    },
    _setMovieDetail: (state, action: PayloadAction<MovieDetail>) => {
      state.movieDetail = action.payload;
    },
    _resetSearch: (state) => {
      state.searchActive = false;
      state.searchedMovies = [];
      state.searchQuery = "";
    },
    _setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },

    _setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },

    _setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },

    _setTotalResults: (state, action: PayloadAction<number>) => {
      state.totalResults = action.payload;
    },

    _setDropDownIsActive: (state, action: PayloadAction<boolean>) => {
      state.dropDownIsActive = action.payload;
    },

    _setReviewTextArea: (state, action: PayloadAction<string>) => {
      state.reviewTextArea = action.payload;
    },

    _setSuggestionsInput: (state, action: PayloadAction<string>) => {
      state.suggestionInput = action.payload;
    },
  },

  extraReducers: (builder) => {
    //search movie
    builder.addCase(_searchMovie.pending, (state) => {
      state.searchLoading = true;
      state.searchError = "";
    });
    builder.addCase(_searchMovie.fulfilled, (state, action) => {
      if (state.page > 1) {
        state.searchedMovies = state.searchedMovies.concat(
          action.payload.results
        );

        state.totalResults = action.payload.total_results;
        state.totalPages = action.payload.total_pages;
      } else {
        state.searchedMovies = action.payload.results;
        state.totalResults = action.payload.total_results;
        state.totalPages = action.payload.total_pages;
      }
      state.searchActive = true;
      state.searchError = "";
      state.searchLoading = false;
      state.page = state.page + 1;
    });
    builder.addCase(_searchMovie.rejected, (state) => {
      state.searchLoading = false;
      state.searchError = "Calm Down!";
    });

    //get movie detail
    builder.addCase(_getMovieDetail.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(_getMovieDetail.fulfilled, (state, action) => {
      state.movieDetail = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(_getMovieDetail.rejected, (state) => {
      state.loading = false;
      state.error = "Calm Down!";
    });

    //get favorite movies
    builder.addCase(_getFavoriteMovies.pending, (state) => {
      state.favoritesLoading = true;
      state.favoritesError = "";
    });
    builder.addCase(_getFavoriteMovies.fulfilled, (state, action) => {
      state.favorites = action.payload;
      state.favoritesLoading = false;
      state.favoritesError = "";
    });
    builder.addCase(_getFavoriteMovies.rejected, (state) => {
      state.favoritesLoading = false;
      toast.error("Error getting favorites");
    });

    //add favorite movie
    builder.addCase(_addFavoriteMovie.pending, (state) => {
      state.favoritesLoading = true;
      state.favoritesError = "";
    });
    builder.addCase(_addFavoriteMovie.fulfilled, (state, action) => {
      state.favorites = action.payload;
      state.favoritesLoading = false;
      state.favoritesError = "";
    });
    builder.addCase(_addFavoriteMovie.rejected, (state) => {
      state.favoritesLoading = false;
      toast.error("Error adding favorite");
    });

    //remove favorite movie
    builder.addCase(_removeFavoriteMovie.pending, (state) => {
      state.favoritesLoading = true;
      state.favoritesError = "";
    });
    builder.addCase(_removeFavoriteMovie.fulfilled, (state, action) => {
      state.favorites = action.payload;
      state.favoritesLoading = false;

      state.favoritesError = "";
    });
    builder.addCase(_removeFavoriteMovie.rejected, (state) => {
      state.favoritesLoading = false;
      toast.error("Error removing favorite");
    });

    //get movie reviews
    builder.addCase(_getMovieReviews.pending, (state) => {
      state.reviewsLoading = true;
      state.reviewsError = "";
    });
    builder.addCase(_getMovieReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.reviewsLoading = false;
      state.reviewsError = "";
    });
    builder.addCase(_getMovieReviews.rejected, (state) => {
      state.reviewsLoading = false;
      toast.error("Error getting reviews");
    });

    //add movie review
    builder.addCase(_addMovieReview.pending, (state) => {
      state.reviewsLoading = true;
      state.reviewsError = "";
    });
    builder.addCase(_addMovieReview.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.reviewsLoading = false;
      state.reviewsError = "";
    });
    builder.addCase(_addMovieReview.rejected, (state) => {
      state.reviewsLoading = false;
      toast.error("Error adding review");
    });

    //remove movie review
    builder.addCase(_removeMovieReview.pending, (state) => {
      state.reviewsLoading = true;
      state.reviewsError = "";
    });
    builder.addCase(_removeMovieReview.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.reviewsLoading = false;
      state.reviewsError = "";
    });
    builder.addCase(_removeMovieReview.rejected, (state) => {
      state.reviewsLoading = false;
      toast.error("Error removing review");
    });

    //send to friend
    builder.addCase(_sendToFriend.pending, (state) => {
      state.isEmailSending = true;
      state.emailError = "";
    });
    builder.addCase(_sendToFriend.fulfilled, (state, action) => {
      state.isEmailSending = false;
      state.emailError = "";
      if (action.payload === "OK") {
        toast.success("Email sent");
        state.suggestionInput = "";
      }
    });
    builder.addCase(_sendToFriend.rejected, (state) => {
      state.isEmailSending = false;
      state.emailError = "Error sending email";
      toast.error("Error sending email");
    });
  },
});

export const _searchMovie = createAsyncThunk(
  "movie/searchMovie",
  //this function has to have two parameters, the second one is a page number
  ({ query, page }: { query: string; page: number }) => {
    let auth_token = _token?.toString().replace(/_/g, ".");
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${auth_token}`,
          },
        }
      )
      .then((response) => {
        return response.data;
      });
  }
);

export const _getMovieDetail = createAsyncThunk(
  "movie/getMovieDetail",
  (id: number) => {
    let auth_token = _token?.toString().replace(/_/g, ".");
    return axios
      .get(`https://api.themoviedb.org/3/movie/${id}?&language=en-US`, {
        headers: {
          Authorization: `Bearer ${auth_token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  }
);

export const _getFavoriteMovies = createAsyncThunk(
  "movie/getFavoriteMovies",
  async (userId: string) => {
    const fetchedFavorites = await getFavorites(userId);
    return fetchedFavorites;
  }
);

export const _addFavoriteMovie = createAsyncThunk(
  "movie/addFavoriteMovie",
  async (favorite: Favorite) => {
    const result = await addFavorite(favorite);
    let fetchedFavorites: Favorite[] = [];

    if (result !== "") {
      toast.success("Movie added to favorites");
      fetchedFavorites = await getFavorites(favorite.userId);
    }
    return fetchedFavorites;
  }
);

export const _removeFavoriteMovie = createAsyncThunk(
  "movie/removeFavoriteMovie",
  async (favorite: Favorite) => {
    const result = await removeFavorite(favorite.favoriteId);

    let fetchedFavorites: Favorite[] = [];

    if (result !== "error") {
      toast.success("Movie removed from favorites");
      fetchedFavorites = await getFavorites(favorite.userId);
    }
    return fetchedFavorites;
  }
);

export const _getMovieReviews = createAsyncThunk(
  "movie/getMovieReviews",
  async (movieId: number) => {
    const fetchedReviews = await getReviews(movieId);
    return fetchedReviews;
  }
);

export const _addMovieReview = createAsyncThunk(
  "movie/addMovieReview",
  async (review: Review) => {
    const result = await addReview(review);
    let fetchedReviews: Review[] = [];

    if (result !== "") {
      toast.success("Review added");
      fetchedReviews = await getReviews(review.movieId);
    }
    return fetchedReviews;
  }
);

export const _removeMovieReview = createAsyncThunk(
  "movie/removeMovieReview",
  async (review: Review) => {
    const result = await removeReview(review.reviewId);
    let fetchedReviews: Review[] = [];

    if (result !== "error") {
      toast.success("Review removed");
      fetchedReviews = await getReviews(review.movieId);
    }
    return fetchedReviews;
  }
);

export const _sendToFriend = createAsyncThunk(
  "movie/sendToFriend",
  async (fc: any) => {
    let result = await emailjs
      .sendForm(emailJsServiceId, emailJsTemplateId, fc, emailJsPublicKey)
      .then(
        (result: any) => {
          return result.text;
        },
        (error: any) => {
          return error.text;
        }
      );

    return result;
  }
);

export const {
  _setIsLoading,
  _setMovie,
  _setError,
  _setDiscoveredMovie,
  _setSearchedMovies,
  _setSearchActive,
  _setMovieDetail,
  _resetSearch,
  _setSearchQuery,
  _setPage,
  _setTotalPages,
  _setTotalResults,
  _setDropDownIsActive,
  _setReviewTextArea,
  _setSuggestionsInput,
} = MovieSlice.actions;

export default MovieSlice.reducer;
