import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Main from "./components/Main.jsx";
import { Provider } from "react-redux";
import ranchiDiaryStore from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={ranchiDiaryStore}>
      <Main />
    </Provider>
  </React.StrictMode>
);
