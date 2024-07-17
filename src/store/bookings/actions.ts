import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  Booking,
  BookingBody,
} from "../../common/bookings-types/bookings-type";
import { AsyncThunkConfig } from "../../common/store-types/async-thunk-config";
import { name } from "./slice";

const loadBookings = createAsyncThunk<Booking[], void, AsyncThunkConfig>(
  `${name}/load-bookings`,
  async (_payload, { extra }) => {
    const { loadBookings } = extra;

    const bookings = await loadBookings();

    return bookings;
  }
);

const createBooking = createAsyncThunk<Booking, BookingBody, AsyncThunkConfig>(
  `${name}/book-trip`,
  async (payload, { extra }) => {
    const { createBooking } = extra;

    const booking = await createBooking(JSON.stringify(payload));
    return booking;
  }
);

const deleteBooking = createAsyncThunk<boolean, string, AsyncThunkConfig>(
  `${name}/delete-book`,
  async (payload, { extra }) => {
    const { deleteBooking } = extra;

    const booking = await deleteBooking(payload);
    return booking;
  }
);

export { loadBookings, createBooking, deleteBooking };
