import { Trips } from "../../common/trips/types";
import { apiCall } from "../../api/callHelper";
import { Endpoints, Methods } from "../../common/redux.enum";

export const getTrips = async (): Promise<Trips[]> => {
  const trips = await apiCall(Endpoints.TRIPS, Methods.GET);
  return trips;
};

export const getTrip = async (id: string): Promise<Trips> => {
  const trip = await apiCall(`${Endpoints.TRIPS}/${id}`, Methods.GET);
  return trip;
};
