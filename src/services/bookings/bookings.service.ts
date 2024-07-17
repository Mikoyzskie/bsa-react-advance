import { Booking } from "../../common/bookings-types/bookings-type";
import { apiCall } from "../../api/callHelper";

export const loadBookings = async (): Promise<Booking[]> => {
  const response = await apiCall("bookings", "GET");

  return response;
};

export const createBooking = async (data: string): Promise<Booking> => {
  const response = await apiCall("bookings", "POST", data);

  return response;
};

export const deleteBooking = async (id: string): Promise<boolean> => {
  const response = await apiCall(`bookings/${id}`, "DELETE");

  return response;
};
