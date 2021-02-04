import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "store/index";
import { GlobalStyles } from "GlobalStyles";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  rootElement
);
