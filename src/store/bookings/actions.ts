import { IBookings, Booking } from "../../common/types";

type AddBookingAction = {
  type: "bookings/add-booking";
  payload: IBookings;
};

type Action = AddBookingAction;

const addBooking = (booking: Booking): AddBookingAction => {
  const today = new Date().toISOString();

  const bookData = {
    tripId: booking.tripId,
    userId: booking.userId,
    guests: booking.guests,
    date: booking.date,
    createdAt: today,
    trip: booking.trip,
  };

  return {
    type: "bookings/add-booking",
    payload: { bookData },
  };
};

const actions = {
  addBooking,
};

export { type Action, actions };
