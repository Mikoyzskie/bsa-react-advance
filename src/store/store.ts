import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { userSignup } from "../services/user/user.service";
import { loadTrips } from "../services/trips/trips.service";

const extraArgument = {
  userSignup,
  loadTrips,
};

=======
<<<<<<< HEAD

// const listenerMiddleware = createListenerMiddleware();

// listenerMiddleware.startListening({
//   actionCreator: bookingReducer,
// });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, type RootState, type AppDispatch };
=======
import { userSignup } from "../services/user/user.service";
import { loadTrips } from "../services/trips/trips.service";

const extraArgument = {
  userSignup,
  loadTrips,
};

>>>>>>> 0b6097852a705446a1ac5dba92144435d41a1d2e
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
<<<<<<< HEAD
=======
>>>>>>> 1804be0 (drafted)
>>>>>>> 0b6097852a705446a1ac5dba92144435d41a1d2e
