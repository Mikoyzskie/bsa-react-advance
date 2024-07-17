import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "../../common/store-types/async-thunk-config";
import { Trip } from "../../common/trips-types/trips-type";
import { name } from "./slice";

const loadTrip = createAsyncThunk<Trip, string, AsyncThunkConfig>(
  `${name}/load-trip`,
  async (payload, { extra }) => {
    const { loadTrip } = extra;

    const trip = await loadTrip(payload);

    return trip;
  }
);

export { loadTrip };
