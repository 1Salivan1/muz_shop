import React from "react";
import ReactDOM from "react-dom/client";
import "./css/Nav.css";
import "./css/adaptive.css";
import "./css/Order.css";
import "./css/global.css";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
    </HashRouter>
  </React.StrictMode>
);
