import React from "react";
import Header from "./components/Header";
import Reactionrate from "./components/service/Reactionrate";
import Home from "./components/service/Home";
import Infomational from "./components/service/Informational";
import Quiz from "./components/service/Quiz";
import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Infomational2 from "./components/service/Informational2";
import Inforpage1 from "./components/service/inforpage/Informational2";

function App() {
  return (
<div>
  <Routes>
    <Route path="/" element={<div><Header /><Home /></div>} />
    <Route path="/game1" element={<div><Header /><Reactionrate /></div>} />
    <Route path="/informational" element={<div><Header /><Infomational /></div>} />
    <Route path="/game2" element={<div><Header /><Quiz /></div>} />
    <Route path="/informational2" element={<div><Header /><Infomational2 /></div>} />

    <Route path="/informational2/1page" element={<div><Header /><Inforpage1 /></div>} />
  </Routes>
</div>
  );
}

export default App;
