import { loadBookings, createBooking, deleteBooking } from "./actions";
import { actions, reducer } from "./slice";

const bookingsAction = {
  ...actions,
  loadBookings,
  createBooking,
  deleteBooking,
};

export { bookingsAction as actions, reducer };
