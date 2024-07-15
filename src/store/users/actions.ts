import { IUser, User } from "../../common/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

type AddUserAction = {
  type: "users/signup";
  payload: IUser;
};

type Action = AddUserAction;

const signupUser = createAsyncThunk("users/signup", async (payload) => {});

const addUser = (user: User): AddUserAction => {
  const created = new Date().toISOString();

  const userPayload = {
    id: crypto.randomUUID(),
    fullName: user.fullName,
    email: user.email,
    password: user.password,
    createdAt: created,
  };

  const cpayload = {
    user: userPayload,
    token: "",
  };

  return {
    type: "users/add",
    payload: cpayload,
  };
};

export { type Action, addUser };
