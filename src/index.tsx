import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";
import App from "./App";
import Aos from "aos";
import "antd/dist/antd.css";
import "./icon/iconfont.css";
import "aos/dist/aos.css";
Aos.init();

const rootFiber = document.getElementById("root");
render(
  <Provider store={Store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootFiber
);
