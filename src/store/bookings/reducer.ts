import { createReducer, Reducer } from "@reduxjs/toolkit";
import { loadAllBookings, createNewBooking, removeBooking } from "./actions";
import { Booking } from "../../common/types";

export interface BookingsState {
  loading: boolean;
  bookings: Booking[];
}

const initialState: BookingsState = {
  loading: false,
  bookings: [],
};

const reducer: Reducer<BookingsState> = createReducer(
  initialState,
  (builder) => {
    builder.addCase(loadAllBookings.fulfilled, (state, action) => {
      state.bookings = action.payload as Booking[];
      state.loading = false;
    });

    builder.addCase(loadAllBookings.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createNewBooking.fulfilled, (state, action) => {
      state.bookings.push(action.payload as Booking);
    });

    builder.addCase(removeBooking.fulfilled, (state, action) => {
      state.bookings = action.payload as unknown as Booking[];
    });
  }
);

export { reducer as bookingReducer };
