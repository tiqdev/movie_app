import store from "..";
import { _loginWithGoogle, _setUser } from ".";
import { User } from "../../models/GoogleLogin";

export const setUser = (user: User) => {
  store.dispatch(_setUser(user));
};

export const loginWithGoogle = () => {
  store.dispatch(_loginWithGoogle());
};
