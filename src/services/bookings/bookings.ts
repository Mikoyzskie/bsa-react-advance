import { apiCall } from "../../api/callHelper";
import { Endpoints, Methods } from "../../common/redux.enum";
import { Booking, CreateBooking } from "../../common/types";

export const getBookings = async (): Promise<Booking[]> => {
  const bookings = await apiCall(Endpoints.BOOKINGS, Methods.GET);
  return bookings;
};

export const createBooking = async (
  booking: CreateBooking
): Promise<Booking> => {
  const createdBooking = await apiCall(
    Endpoints.BOOKINGS,
    Methods.POST,
    booking
  );
  return createdBooking;
};

export const deleteBooking = async (id: string): Promise<string> => {
  const deletedBooking = await apiCall(
    `${Endpoints.BOOKINGS}/${id}`,
    Methods.DELETE
  );

  return deletedBooking;
};
