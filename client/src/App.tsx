import React from "react";

import "./App.css";
import Header from "./Coponents/Header/Header";

import Menu from "./Coponents/Menu/Menu";

function App() {
  return (
    <>
      <Header></Header>
      <Menu defaultDisplay="grid"></Menu>
    </>
  );
}

export default App;
