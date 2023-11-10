import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../models/Movie";
import axios from "axios";
import { MovieDetail } from "../../models/MovieDetail";
import { token } from "../../utils/constants";

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
  movieDetail: MovieDetail | null;
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
    _setMovieDetail: (state, action: PayloadAction<MovieDetail>) => {
      state.movieDetail = action.payload;
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

    builder.addCase(_getMovieDetail.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(_getMovieDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.movieDetail = action.payload;
      state.error = "";
    });
    builder.addCase(_getMovieDetail.rejected, (state) => {
      state.loading = false;
      state.error = "Calm Down!";
    });
  },
});

export const _searchMovie = createAsyncThunk(
  "movie/searchMovie",
  (query: string) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        return response.data.results;
      });
  }
);

export const _getMovieDetail = createAsyncThunk(
  "movie/getMovieDetail",
  (id: number) => {
    return axios
      .get(`https://api.themoviedb.org/3/movie/${id}?&language=en-US`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
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
  _setMovieDetail,
} = MovieSlice.actions;

export default MovieSlice.reducer;
