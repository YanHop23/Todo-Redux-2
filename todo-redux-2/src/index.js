import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App.js";
import todos from "./redux/reducers.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(todos);

root.render(
  <Provider store={store}>
     <App />
  </Provider>,
);
