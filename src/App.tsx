import React from "react";
import {Router} from "react-router-dom";
import {GlobalStyle} from "./GlobalStyle";
import "./App.css";
import Header from "./components/Header/Header";
import Repo from "./components/Repo/Repo";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Repo />
    </>
  );
}

export default App;
