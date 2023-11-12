import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/firebaseFunctions";
import { User } from "../../models/GoogleLogin";

type initialStateType = {
  user: User;
  loading: boolean;
  isLoggedIn: boolean;
  error: string;
};

const initialState: initialStateType = {
  user: {
    uid: "",
    email: "",
    displayName: "",
    photoUrl: "",
  },
  loading: false,
  isLoggedIn: false,
  error: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    _setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    _setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    _setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(_loginWithGoogle.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(_loginWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = {
        uid: action.payload.user.uid,
        email:
          action.payload.user.email === null ? "" : action.payload.user.email,
        displayName:
          action.payload.user.displayName === null
            ? ""
            : action.payload.user.displayName,
        photoUrl:
          action.payload.user.photoURL === null
            ? ""
            : action.payload.user.photoURL,
      };

      localStorage.setItem("user", JSON.stringify(state.user));
    });
    builder.addCase(_loginWithGoogle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });
  },
});

export const _loginWithGoogle = createAsyncThunk(
  "user/loginWithGoogle",
  async () => {
    return signInWithPopup(auth, provider).then((result) => {
      return result;
    });
  }
);

export const { _setIsLoading, _setUser, _setError } = UserSlice.actions;

export default UserSlice.reducer;
