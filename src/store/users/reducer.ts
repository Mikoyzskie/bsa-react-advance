import { IUser } from "../../common/types";
import { Action } from "./actions";

type State = {
  users: IUser[];
};

const initialState: State = {
  users: [],
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "users/signup": {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer };
