import React from "react";
import "./Header.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";


const Header = () => {

const navigate = useNavigate();

const headleclick = () => {
  navigate('/');
};

  return (
    <header className="header">
      <div className="logo" onClick={headleclick}>Coran</div>
      <nav className="nav">
        <a href="/">홈</a>
        <a href="/game1">반응속도</a>
        <a href="/game2">티맞</a>
        <a href="/informational">AI 챗봇</a>
        <a href="/informational2">정보글</a>
      </nav>
    </header>
  );
};

export default Header;