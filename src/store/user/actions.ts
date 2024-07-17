import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  AuthReturnType,
  SiginBody,
  SignupBody,
  User,
} from "../../common/user-types/user-type";
import { AsyncThunkConfig } from "../../common/store-types/async-thunk-config";
import { name } from "./slice";

const userSignup = createAsyncThunk<
  AuthReturnType,
  SignupBody,
  AsyncThunkConfig
>(`${name}/signup`, async (payload, { extra }) => {
  const { userSignup } = extra;

  const signup = await userSignup(JSON.stringify(payload));

  return signup;
});

const userSignout = createAction(`${name}/signout`);

const userSignin = createAsyncThunk<
  AuthReturnType,
  SiginBody,
  AsyncThunkConfig
>(`${name}/signin`, async (payload, { extra }) => {
  const { userSignin } = extra;

  const signin = await userSignin(JSON.stringify(payload));

  return signin;
});

export interface IError {
  statusCode: number;
  message: string;
  error: string;
}

const getCurrentUser = createAsyncThunk<User | IError, void, AsyncThunkConfig>(
  `${name}/current-user`,
  async (_payload, { extra }) => {
    const { getCurrentUserService } = extra;

    const current = await getCurrentUserService();
    return current;
  }
);

export { userSignup, userSignin, userSignout, getCurrentUser };
