import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataContextProvider } from "./Contexts/DataContext";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
