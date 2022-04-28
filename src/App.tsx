import React from "react";
import {Router} from "react-router-dom";
import {GlobalStyle} from "./GlobalStyle";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Nav />
      <Profile />
    </>
  );
}

export default App;
