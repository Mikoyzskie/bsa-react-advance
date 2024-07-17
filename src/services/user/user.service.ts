import { AuthReturnType, User } from "../../common/user-types/user-type";
import { apiCall } from "../../api/callHelper";

const userSignup = async (data: string): Promise<AuthReturnType> => {
  const response = await apiCall("auth/sign-up", "POST", data);

  return response;
};

const userSignin = async (data: string): Promise<AuthReturnType> => {
  const response = await apiCall("auth/sign-in", "POST", data);

  return response;
};

const getCurrentUser = async (): Promise<User> => {
  const response = await apiCall("auth/authenticated-user", "GET");
  return response;
};

export { userSignup, userSignin, getCurrentUser };
