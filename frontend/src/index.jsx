import React from "react";
import ReactDOM from "react-dom/client";
import "./css/adaptive.css";
import "./css/global.css";
import { HashRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Navigation />
      <Footer />
    </HashRouter>
  </React.StrictMode>
);
