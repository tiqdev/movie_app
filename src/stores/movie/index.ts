import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DiscoveredMovie } from "../../models/DiscoveredMovie";

type initialStateType = {
  discoveredMovie: DiscoveredMovie | null;
  movie: object;
  movies: object[];
  loading: boolean;
  error: string;
};

const initialState: initialStateType = {
  discoveredMovie: {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/original/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
    genre_ids: [28, 53],
    id: 575264,
    original_language: "en",
    original_title: "Mission: Impossible - Dead Reckoning Part One",
    overview:
      "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
    popularity: 3264.457,
    poster_path:
      "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    release_date: "2023-07-08",
    title: "Mission: Impossible - Dead Reckoning Part One",
    video: false,
    vote_average: 7.7,
    vote_count: 2131,
  },
  movie: {},
  movies: [],
  loading: false,
  error: "Movie Not Found !",
};

export const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    _setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    _setMovie: (state, action: PayloadAction<object>) => {
      state.movie = action.payload;
    },
    _setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    _setDiscoveredMovie: (state, action: PayloadAction<DiscoveredMovie>) => {
      state.discoveredMovie = action.payload;
    },
  },
});

export const { _setIsLoading, _setMovie, _setError, _setDiscoveredMovie } =
  MovieSlice.actions;

export default MovieSlice.reducer;
