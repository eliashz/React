import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FiltersProvider } from "./context/filters.jsx";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </FiltersProvider>
);
