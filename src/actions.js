export const login = (user) => (dispatch) => {
  dispatch({ type: "LOGGED_IN", payload: user });
};

export const signUp = (user) => (dispatch) => {
  dispatch({ type: "SIGN_UP", payload: user });
};

export const addProfile = (user, profile) => (dispatch) => {
  dispatch({ type: "ADD_PROFILE", payload: { ...profile, id: user.id } });
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
