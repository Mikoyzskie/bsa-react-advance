import { userSignup } from "./actions";
import { actions, reducer } from "./slice";

const userActions = {
  ...actions,
  userSignup,
};

export { userActions as actions, reducer };
