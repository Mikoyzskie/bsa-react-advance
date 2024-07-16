import { combineReducers } from "redux";
import { reducer as userReducer } from "./user/user";
import { reducer as tripsReducer } from "./trips/trips";

const rootReducer = combineReducers({
  user: userReducer,
  trips: tripsReducer,
});

export { rootReducer };
