import { createReducer, isAnyOf, Reducer } from "@reduxjs/toolkit";
import { signup, signin, currentUser, signout } from "./actions";
import { UserReturnType, User } from "../../common/users/types";

export interface UserState {
  id: string;
  fullName: string;
  email: string;
}

export interface AuthState {
  loading: boolean;
  user: UserState;
  errorCode: null | number;
}

const initialUserState: UserState = {
  id: "",
  fullName: "",
  email: "",
};

const initialState: AuthState = {
  loading: false,
  user: initialUserState,
  errorCode: null,
};

const reducer: Reducer<AuthState> = createReducer(initialState, (builder) => {
  builder.addCase(currentUser.fulfilled, (state, action) => {
    state.user = action.payload as User;
  });

  builder.addMatcher(
    isAnyOf(signup.fulfilled, signin.fulfilled),
    (state, action) => {
      const { user } = action.payload as UserReturnType;
      state.user = user;
    }
  );

  builder.addMatcher(
    isAnyOf(
      signup.pending,
      signin.pending,
      currentUser.pending,
      signout.pending
    ),
    (state) => {
      state.loading = true;
      state.errorCode = null;
    }
  );

  builder.addMatcher(
    isAnyOf(
      signup.rejected,
      signin.rejected,
      currentUser.rejected,
      signout.rejected
    ),
    (state, action) => {
      state.user = initialUserState;
      state.loading = false;
      state.errorCode = action.payload as number;
    }
  );

  builder.addMatcher(
    isAnyOf(
      signup.fulfilled,
      signin.fulfilled,
      currentUser.fulfilled,
      signout.fulfilled
    ),
    (state) => {
      state.loading = false;
      state.errorCode = null;
    }
  );
});

export { reducer as authReducer };
