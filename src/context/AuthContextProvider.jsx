import React, { useReducer, useEffect } from "react";
import { authReducer, initialState } from "./authReducer";
import { AuthContext } from "./context";
import { LOGIN } from "./actions";

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    if (state.token && !state.user) {
      fetch("https://api.redclass.redberryinternship.ge/api/me", {
        headers: { Authorization: `Bearer ${state.token}` },
      })
        .then((res) => res.json())
        .then(({ data }) =>
          dispatch({
            type: LOGIN,
            payload: { user: data, token: state.token },
          }),
        );
    }
  }, [state.token, state.user]);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
