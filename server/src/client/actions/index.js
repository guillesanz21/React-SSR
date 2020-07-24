export const FETCH_USERS = "fetch_users";
export const fetchUsers = () => async (dispatch, getState, api) => {
  // This will fetch to: /api/users. And the proxy will redirect to http://react-ssr-api.herokuapp.com/users
  const res = await api.get("/users");

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export const FETCH_CURRENT_USER = "fetch_current_user";
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get("/current_user");

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  });
};
