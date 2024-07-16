import { getTrip } from "../../services/trips/trips";
import { Trips } from "../../common/trips/types";
import { Actions } from "../../common/redux.enum";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSingleTrip: ReturnType<
  typeof createAsyncThunk<Trips | void, string>
> = createAsyncThunk<Trips | void, string>(
  Actions.LOAD_TRIP,
  async (id: string) => {
    try {
      const response = await getTrip(id);
      return response;
    } catch (error) {
      //update to toast

      throw new Error(`Error: ${error}`);
    }
  }
);
