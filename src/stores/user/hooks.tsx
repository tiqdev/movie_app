import { useSelector } from "react-redux";
import { RootState } from "..";

export const useUser = () => {
  return useSelector((state: RootState) => state.user.user);
};

export const useIsLoggedIn = () => {
  return useSelector((state: RootState) => state.user.isLoggedIn);
};

export const useIsLoading = () => {
  return useSelector((state: RootState) => state.user.loading);
};
