import { IBookings } from "../../common/types";
import { Action } from "./actions";

type State = {
  bookings: IBookings[];
};

const initialState: State = {
  bookings: [],
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "bookings/add-booking": {
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
