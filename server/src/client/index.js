// Startup point for the client side application
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import axios from "axios";

import Routes from "./Routes";
import reducers from "./reducers";

const axiosInstance = axios.create({
  baseURL: "/api", // The proxy will redirect to http://react-ssr-api.herokuapp.com/
});

const store = createStore(
  reducers,
  window.INITIAL_STATE, // The initial state is holded in a script in the html. This will avoid the double fetch
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
