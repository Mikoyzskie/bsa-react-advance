import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthReturnType, SignupBody } from "../../common/user-types/user-type";
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

export { userSignup };
