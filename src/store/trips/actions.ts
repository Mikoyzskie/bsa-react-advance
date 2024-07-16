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
