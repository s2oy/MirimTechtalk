import React, {useState, useEffect} from "react";
// import {Router} from "react-router-dom";
import {GlobalStyle} from "./GlobalStyle";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Repo from "./components/Repo/Repo";

function App() {
  const [repo, setRepo]: any = useState([]);
  const [loading, setLoading] = useState(true); //loading중일때
  const [user, setUser]: any = useState("seoyeon-baek");

  console.log(user);
  // repo정보 불러옴
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`, {
      headers: {Authorization: "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"},
    })
      .then(res => res.json()) //json형태로 변환
      .then(data => {
        setRepo(data);
        setLoading(false);
      });
  }, []);

  //user정보 불러옴
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`, {
      headers: {Authorization: "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"},
    })
      .then(res => res.json()) //json형태로 변환
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header user={user} onSearch={setUser} />
      <Nav />
      <Profile user={user} />
      <Repo repo={repo} />
    </>
  );
}

export default App;
