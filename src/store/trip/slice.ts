import { createSlice } from "@reduxjs/toolkit";
import { Trip } from "../../common/trips-types/trips-type";
import { loadTrip } from "./actions";

type State = {
  trip: Trip | null;
};

const initialState: State = {
  trip: null,
};

const { reducer, actions, name } = createSlice({
  name: "trip",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadTrip.fulfilled, (state, action) => {
      state.trip = action.payload;
    });
  },
});

export { reducer, actions, name };
