import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import About from "./Coponents/About/About";
import Header from "./Coponents/Header/Header";

import Menu from "./Coponents/Menu/Menu";
import Users from "./Coponents/Services/Users";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Menu defaultDisplay="grid"></Menu>}></Route>
        <Route path="about" element={<About />} />
        <Route path="services" element={<Users />} />
        <Route path="visit website" element={"http://google.com"} />
      </Routes>
    </>
  );
}

export default App;
