import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  // 给整个项目中的容器组件统一传递store，不要挨个在写一遍
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
