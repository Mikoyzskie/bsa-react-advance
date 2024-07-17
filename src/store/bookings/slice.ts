import { createSlice } from "@reduxjs/toolkit";
import { Booking } from "../../common/bookings-types/bookings-type";
import { loadBookings, createBooking, deleteBooking } from "./actions";
import { toast } from "react-toastify";

type State = {
  bookings: Booking[] | null;
  bookingAdded: Booking | null;
};

const initialState: State = {
  bookings: null,
  bookingAdded: null,
};

const { reducer, actions, name } = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadBookings.fulfilled, (state, action) => {
      state.bookings = action.payload;
    });
    builder.addCase(createBooking.fulfilled, (state, action) => {
      state.bookingAdded = action.payload;
      toast("Trip Booked");
    });
    builder.addCase(deleteBooking.fulfilled, (state, action) => {
      if (state.bookings && state.bookings.length > 0) {
        state.bookings = state.bookings?.filter(
          (booking) => booking.id !== action.meta.arg // Assuming booking has an `id` property
        );
      }
    });
  },
});

export { reducer, name, actions };
