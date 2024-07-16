import { Methods } from "../../common/redux.enum";
import { Endpoints } from "../../common/redux.enum";
import { apiCall } from "../../api/callHelper";
import {
  User,
  UserSignin,
  UserSignup,
  UserReturnType,
} from "../../common/users/types";

export const userSignup = async ({
  fullName,
  email,
  password,
}: UserSignup): Promise<UserReturnType> => {
  const user = {
    fullName,
    email,
    password,
  };

  const response = await apiCall(Endpoints.SIGN_UP, Methods.POST, user);
  return response;
};

export const userSignin = async ({
  email,
  password,
}: UserSignin): Promise<UserReturnType> => {
  const user = {
    email,
    password,
  };
  const response = await apiCall(Endpoints.SIGN_IN, Methods.POST, user);
  return response;
};

export const getCurrentUser = async (): Promise<User> => {
  const response = await apiCall(Endpoints.USER, Methods.GET);
  return response;
};

export const userSignout = async (): Promise<boolean> => {
  const response = await apiCall(Endpoints.USER, Methods.DELETE);
  return response;
};
