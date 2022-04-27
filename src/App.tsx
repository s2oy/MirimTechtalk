import React from "react";
import {Router} from "react-router-dom";
import {Reset} from "styled-reset";
import "./App.css";
import Header from "./components/Header/Header";
import Repo from "./components/Repo/Repo";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <Repo />
    </>
  );
}

export default App;
