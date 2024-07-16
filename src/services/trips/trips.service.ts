import { Trip } from "../../common/trips-types/trips-type";
import { apiCall } from "../../api/callHelper";

export const loadTrips = async (): Promise<Trip[]> => {
  const response = await apiCall("trips", "GET");

  return response;
};
