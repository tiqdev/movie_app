import { createSlice } from "@reduxjs/toolkit";

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
  error: "Movie Not Found",
};

export const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {},
});

export default MovieSlice.reducer;
