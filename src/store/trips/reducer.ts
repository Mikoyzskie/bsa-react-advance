import { createReducer, Reducer } from "@reduxjs/toolkit";
import { getAllTrips } from "./actions";
import { Trips } from "../../common/trips/types";

export interface TripState {
  trips: Trips[];
  loading: boolean;
}

const initialState: TripState = {
  trips: [],
  loading: false,
};

const reducer: Reducer<TripState> = createReducer(initialState, (builder) => {
  builder.addCase(getAllTrips.fulfilled, (state, action) => {
    state.trips = action.payload as Trips[];
    state.loading = false;
  });

  builder.addCase(getAllTrips.pending, (state) => {
    state.loading = true;
  });
});

export { reducer as tripReducer };
