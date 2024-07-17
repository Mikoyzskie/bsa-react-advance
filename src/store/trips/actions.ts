import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "../../common/store-types/async-thunk-config";
import { Trip } from "../../common/trips-types/trips-type";
import { name } from "./slice";

const loadTrips = createAsyncThunk<Trip[], void, AsyncThunkConfig>(
  `${name}/load-trips`,
  async (_payload, { extra }) => {
    const { loadTrips } = extra;

    const trips = await loadTrips();

    return trips;
  }
);

export { loadTrips };
