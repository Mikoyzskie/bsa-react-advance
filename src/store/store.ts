import { rootReducer } from "./root-reducer";
import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import {
  userSignup,
  userSignin,
  getCurrentUser as getCurrentUserService,
} from "../services/user/user.service";
import { loadTrips, loadTrip } from "../services/trips/trips.service";
import {
  loadBookings,
  createBooking,
  deleteBooking,
} from "../services/bookings/bookings.service";

import { userActions } from "./actions";
import { IError } from "../common/user-types/user-type";
import { redirect } from "react-router-dom";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: userActions.getCurrentUser.fulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    if ((action.payload as IError).statusCode === 401) {
      redirect("/sign-in");
      listenerApi.dispatch(userActions.userSignout());
    }
  },
});

// listenerMiddleware.startListening({
//   actionCreator: getCurrentUser.rejected,
//   effect: async (action, listenerApi) => {
//     if (action.error && action.error.code === "401") {
//       listenerApi.dispatch(userActions.userSignout());
//     }
//   },
// });

const extraArgument = {
  userSignup,
  userSignin,
  getCurrentUserService,
  loadTrips,
  loadTrip,
  loadBookings,
  createBooking,
  deleteBooking,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }).prepend(listenerMiddleware.middleware),
});

export { store, extraArgument };
