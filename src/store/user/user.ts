import { userSignup, userSignout, userSignin, getCurrentUser } from "./actions";
import { actions, reducer } from "./slice";

const userActions = {
  ...actions,
  userSignup,
  userSignout,
  userSignin,
  getCurrentUser,
};

export { userActions as actions, reducer };
