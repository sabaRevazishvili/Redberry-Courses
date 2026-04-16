import { LOGIN, LOGOUT } from "./actions";

export const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};
