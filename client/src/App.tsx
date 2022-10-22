import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import About from "./Coponents/About/About";
import Header from "./Coponents/Header/Header";
import Login from "./Coponents/auth/Login";

import Menu from "./Coponents/Menu/Menu";
import Users from "./Coponents/Services/Users";
import SignUp from "./Coponents/auth/SignUp";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Menu defaultDisplay="grid"></Menu>}></Route>
        <Route path="about" element={<About />} />
        <Route path="services" element={<Users />} />
        <Route path="visit website" element={"https://www.google.com/"} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
