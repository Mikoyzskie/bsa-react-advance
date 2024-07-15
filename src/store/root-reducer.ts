import { combineReducers } from "redux";
import { reducer as bookingsReducer } from "./bookings/reducer";

const rootReducer = combineReducers({
  bookings: bookingsReducer,
});

export { rootReducer };
