import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./movie";

const store = configureStore({
  reducer: {
    movie: MovieSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
