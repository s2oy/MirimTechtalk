import React, {useState, useEffect} from "react";
// import {Router} from "react-router-dom";
import {GlobalStyle} from "./GlobalStyle";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Repo from "./components/Repo/Repo";

function App(props: any) {
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(true); //loading중일때
  const [user, setUser]: any = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/seoyeon-baek/repos`, {
      headers: {Authorization: ""},
    })
      .then(res => res.json()) //json형태로 변환
      .then(data => {
        setRepo(data);
        setLoading(false);
      });
  }, [user]);

  return (
    <>
      <GlobalStyle />
      <Header user={user} onSearch={setUser} />
      <Nav />
      <Profile />
      <Repo repo={repo} />
    </>
  );
}

export default App;
