import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";
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
>>>>>>> 1804be0 (drafted)
