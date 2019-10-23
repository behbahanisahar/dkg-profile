// import "@fortawesome/fontawesome-free/css/all.min.css";
import "babel-polyfill";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
import React from "react";
import ReactDOM from "react-dom";
// import "whatwg-fetch";
import App from "./components/App";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root"),
);
