import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  UserSignin,
  UserSignup,
  User,
  UserReturnType,
} from "../../common/users/types";
import { Actions } from "../../common/redux.enum";
import {
  userSignin,
  userSignup,
  getCurrentUser,
} from "../../services/user/users";

export const signup: ReturnType<
  typeof createAsyncThunk<UserReturnType | void, UserSignup>
> = createAsyncThunk<UserReturnType | void, UserSignup>(
  Actions.SIGN_UP,
  async ({ fullName, email, password }) => {
    try {
      const response = await userSignup({
        fullName,
        email,
        password,
      });

      localStorage.setItem("TOKEN", response.token);

      return response;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
);

export const signin: ReturnType<
  typeof createAsyncThunk<UserReturnType | void, UserSignin>
> = createAsyncThunk<UserReturnType | void, UserSignin>(
  Actions.SIGN_IN,
  async ({ email, password }: UserSignin) => {
    try {
      const response = await userSignin({ email, password });
      localStorage.setItem("TOKEN", response.token);
      return response;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
);

export const currentUser: ReturnType<typeof createAsyncThunk<User, void>> =
  createAsyncThunk<User, void>(Actions.LOAD_USER, async () => {
    try {
      const response = await getCurrentUser();
      return response;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  });

export const signout: ReturnType<typeof createAsyncThunk<void, void>> =
  createAsyncThunk<void, void>(Actions.SIGN_OUT, async () => {
    try {
      localStorage.removeItem("TOKEN");
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  });
