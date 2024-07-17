import { createSlice } from "@reduxjs/toolkit";
import {
  AuthReturnType,
  User,
  IError,
} from "../../common/user-types/user-type";
import { userSignup, userSignout, userSignin, getCurrentUser } from "./actions";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

type State = {
  user: AuthReturnType | null;
  currentUser: User | IError | null;
  error: unknown;
};

const initialState: State = {
  user: null,
  currentUser: null,
  error: null,
};

const { reducer, actions, name } = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userSignup.fulfilled, (state, action) => {
      state.user = action.payload;
      toast("Signup successful!");
      localStorage.setItem("TOKEN", action.payload.token);
    });
    builder.addCase(userSignout, (state) => {
      redirect("/sign-in");
      state.user = null;
      state.currentUser = null;

      toast("Unathorized");
    });
    builder.addCase(userSignin.fulfilled, (state, action) => {
      state.user = action.payload;
      toast("Signin successful!");
      localStorage.setItem("TOKEN", action.payload.token);
    });
    builder.addCase(getCurrentUser.fulfilled, (state, actions) => {
      state.currentUser = actions.payload;
    });
  },
});

export { reducer, name, actions };
