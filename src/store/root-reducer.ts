import { combineReducers } from "redux";
import { reducer as userReducer } from "./user/user";
import { reducer as tripsReducer } from "./trips/trips";
import { reducer as tripReducer } from "./trip/trip";
import { reducer as bookingsReducer } from "./bookings/bookings";

const rootReducer = combineReducers({
  user: userReducer,
  trips: tripsReducer,
  trip: tripReducer,
  bookings: bookingsReducer,
});

export { rootReducer };
