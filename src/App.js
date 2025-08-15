import React from "react";
import Header from "./components/Header";
import Reactionrate from "./components/service/Reactionrate";
import Home from "./components/service/Home";
import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  return (
<div>
  <Routes>
    <Route path="/" element={<div><Header /><Home /></div>} />
    <Route path="/game1" element={<div><Header /><Reactionrate /></div>} />
  </Routes>
</div>
  );
}

export default App;
