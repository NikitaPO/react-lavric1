import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "mobx-react";
import React from "react";
import ReactDom from "react-dom";
import App from "~/App";
import stores from "~/Stores";

ReactDom.render(
  <Provider stores={stores}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
