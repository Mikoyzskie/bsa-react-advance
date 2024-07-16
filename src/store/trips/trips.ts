import { loadTrips } from "./actions";
import { actions, reducer } from "./slice";

const tripActions = {
  ...actions,
  loadTrips,
};

export { tripActions as actions, reducer };
