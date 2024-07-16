import { createSlice } from "@reduxjs/toolkit";
import { AuthReturnType } from "../../common/user-types/user-type";
import { userSignup } from "./actions";
import { toast } from "react-toastify";

type State = {
  user: AuthReturnType | null;
};

const initialState: State = {
  user: null,
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
  },
});

export { reducer, name, actions };
