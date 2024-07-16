import { createSlice } from "@reduxjs/toolkit";
import { Trip } from "../../common/trips-types/trips-type";
import { loadTrips } from "./actions";

type State = {
  trips: Trip[] | null;
};

const initialState: State = {
  trips: null,
};

const { reducer, actions, name } = createSlice({
  name: "trips",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadTrips.fulfilled, (state, action) => {
      state.trips = action.payload;
    });
  },
});

export { reducer, actions, name };
