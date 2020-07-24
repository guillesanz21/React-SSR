import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

import reducers from "../client/reducers";

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com/", // The server hasn't any proxy
    headers: {
      cookie: req.get("cookie") || "", // If the user hasn't a cookie, set the value to ''
    },
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
};
