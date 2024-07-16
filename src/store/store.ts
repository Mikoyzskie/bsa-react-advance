import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { userSignup } from "../services/user/user.service";
import { loadTrips } from "../services/trips/trips.service";

const extraArgument = {
  userSignup,
  loadTrips,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }),
});

export { store, extraArgument };
