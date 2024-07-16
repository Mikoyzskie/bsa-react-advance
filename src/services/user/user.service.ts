import { AuthReturnType } from "../../common/user-types/user-type";
import { apiCall } from "../../api/callHelper";

export const userSignup = async (data: string): Promise<AuthReturnType> => {
  const response = await apiCall("auth/sign-up", "POST", data);

  return response;
};

export const userSignin = async (data: string): Promise<AuthReturnType> => {
  const response = await apiCall("auth/sign-in", "POST", data);

  return response;
};
