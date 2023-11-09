import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  movie: object;
  movies: object[];
  loading: boolean;
  error: string;
};

const initialState: initialStateType = {
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
  },
});

export const { _setIsLoading, _setMovie, _setError } = MovieSlice.actions;

export default MovieSlice.reducer;
