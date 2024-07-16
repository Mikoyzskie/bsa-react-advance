import { store } from "../store/store";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { type RootState, type AppDispatch };

export interface CreateBooking {
  userId: string;
  tripId: string;
  guests: string;
  date: string;
}

export interface IUser {
  user: User;
  token: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  password: string;
  createdAt: string;
}

export interface Booking {
  id: string;
  tripId: string;
  userId: string;
  guests: number;
  totalPrice: number;
  date: Date;
  createdAt: Date;
  trip: Trip;
}

// export interface IBookings extends Booking {
//   id: string;
// }

export interface Trip {
  title: string;
  duration: number;
  price: number;
}
