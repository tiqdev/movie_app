import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../models/Movie";
import axios from "axios";

type initialStateType = {
  discoveredMovie: Movie | null;
  movie: Movie | null;
  movies: Movie[] | null;
  searchedMovies: Movie[];
  loading: boolean;
  error: string;
  searchLoading: boolean;
  searchError: string;
  searchActive: boolean;
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

  movies: [],

  searchedMovies: [],

  loading: false,
  error: "Movie Not Found !",

  searchLoading: false,
  searchError: "Movie Not Found !",
  searchActive: false,
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
  },

  extraReducers: (builder) => {
    builder.addCase(_searchMovie.pending, (state) => {
      state.searchLoading = true;
      state.searchError = "";
    });
    builder.addCase(_searchMovie.fulfilled, (state, action) => {
      state.searchLoading = false;
      state.searchedMovies = action.payload;
      state.searchActive = true;
      state.searchError = "";
    });
    builder.addCase(_searchMovie.rejected, (state) => {
      state.searchLoading = false;
      state.searchError = "Calm Down!";
    });
  },
});

export const _searchMovie = createAsyncThunk(
  "movie/searchMovie",
  (query: string) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=9c025f172d67fc84ac78fa853273da3a`
      )
      .then((response) => {
        return response.data.results;
      });
  }
);

export const {
  _setIsLoading,
  _setMovie,
  _setError,
  _setDiscoveredMovie,
  _setSearchedMovies,
  _setSearchActive,
} = MovieSlice.actions;

export default MovieSlice.reducer;
