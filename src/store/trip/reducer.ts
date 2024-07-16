import { createReducer, Reducer } from "@reduxjs/toolkit";
import { getSingleTrip } from "./actions";
import { Trips } from "../../common/trips/types";

export interface TripReducerState {
  loading: boolean;
  trip: Trips;
}

export const initialState: TripReducerState = {
  loading: false,
  trip: {
    id: "",
    title: "",
    description: "",
    level: "",
    duration: 0,
    price: 0,
    image: "",
    createdAt: "",
  },
};

const reducer: Reducer<TripReducerState> = createReducer(
  initialState,
  (builder) => {
    builder.addCase(getSingleTrip.fulfilled, (state, action) => {
      state.trip = action.payload as Trips;
      state.loading = false;
    });

    builder.addCase(getSingleTrip.pending, (state) => {
      state.loading = true;
    });
  }
);

export { reducer as tripReducer };
