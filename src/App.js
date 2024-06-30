import { HashRouter } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";

function App() {
  return (
    <HashRouter>
      <Header />
    </HashRouter>
  );
}

export default App;
