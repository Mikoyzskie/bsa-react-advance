import { loadTrip } from "./actions";
import { actions, reducer } from "./slice";

const tripAction = {
  ...actions,
  loadTrip,
};

export { tripAction as actions, reducer };
