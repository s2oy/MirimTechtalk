import React from "react";
import {Router} from "react-router-dom";
import {Reset} from "styled-reset";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Reset />
      <Header />
    </>
  );
}

export default App;
