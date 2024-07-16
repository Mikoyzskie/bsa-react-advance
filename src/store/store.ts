import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";

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
