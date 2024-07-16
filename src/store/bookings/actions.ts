import {
  createBooking,
  deleteBooking,
  getBookings,
} from "../../services/bookings/bookings";
import { Booking, CreateBooking } from "../../common/types";
import { Actions } from "../../common/redux.enum";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const loadAllBookings: ReturnType<
  typeof createAsyncThunk<Booking[] | void, void>
> = createAsyncThunk<Booking[] | void, void>(
  Actions.LOAD_BOOKINGS,
  async () => {
    try {
      const bookings = await getBookings();
      return bookings;
    } catch (error) {
      //update to toast
      throw new Error(`Error: ${error}`);
    }
  }
);

export const createNewBooking: ReturnType<
  typeof createAsyncThunk<Booking | void, CreateBooking>
> = createAsyncThunk<Booking | void, CreateBooking>(
  Actions.ADD_BOOKINGS,
  async ({ tripId, guests, date, userId }) => {
    try {
      const booking = await createBooking({
        tripId,
        guests,
        date,
        userId,
      });

      //update to toast
      console.log("Booked!");

      return booking;
    } catch (error) {
      //update to toast
      throw new Error(`Error: ${error}`);
    }
  }
);

export const removeBooking = createAsyncThunk<
  Booking[] | void,
  string,
  {
    state: RootState;
  }
>(Actions.DELETE_BOOKINGS, async (bookingId: string, { getState }) => {
  try {
    await deleteBooking(bookingId);

    const state = getState();

    const { bookings } = state.bookingReducer;

    const filteredBookings = bookings.filter(
      (booking: Booking) => booking.id !== bookingId
    );

    //update to toast
    console.log("Booking deleted!");

    return filteredBookings;
  } catch (error) {
    //update to toast
    throw new Error(`Error: ${error}`);
  }
});
