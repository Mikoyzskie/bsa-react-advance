import { combineReducers } from "redux";
<<<<<<< HEAD
import { bookingReducer } from "./bookings/reducer";
import { tripReducer } from "./trips/reducer";

const rootReducer = combineReducers({
  bookingReducer,
  tripReducer,
=======
import { reducer as userReducer } from "./user/user";
import { reducer as tripsReducer } from "./trips/trips";

const rootReducer = combineReducers({
  user: userReducer,
  trips: tripsReducer,
>>>>>>> 1804be0 (drafted)
});

export { rootReducer };
