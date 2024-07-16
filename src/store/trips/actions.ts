<<<<<<< HEAD
=======
<<<<<<< HEAD
import { getTrips } from "../../services/trips/trips";
import { Trips } from "../../common/trips/types";
import { Actions } from "../../common/redux.enum";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTrips: ReturnType<
  typeof createAsyncThunk<Trips[] | void, void>
> = createAsyncThunk<Trips[] | void, void>(Actions.LOAD_TRIPS, async () => {
  try {
    const response = await getTrips();
    return response;
  } catch (error) {
    //update to toast

    throw new Error(`Error: ${error}`);
  }
});
=======
>>>>>>> 0b6097852a705446a1ac5dba92144435d41a1d2e
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
<<<<<<< HEAD
=======
>>>>>>> 1804be0 (drafted)
>>>>>>> 0b6097852a705446a1ac5dba92144435d41a1d2e
