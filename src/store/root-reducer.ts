import { combineReducers } from "redux";
import { bookingReducer } from "./bookings/reducer";
import { tripReducer } from "./trips/reducer";

const rootReducer = combineReducers({
  bookingReducer,
  tripReducer,
});

export { rootReducer };
