import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./movie";
import UserSlice from "./user";

const store = configureStore({
  reducer: {
    movie: MovieSlice,
    user: UserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
