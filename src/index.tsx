import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { fetchColors, fetchManufacturers } from "./store/carsSlice";
import { store } from "./store/store";

store.dispatch(fetchColors());
store.dispatch(fetchManufacturers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
