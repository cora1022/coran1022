import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Coran</div>
      <nav className="nav">
        <a href="/">홈</a>
        <a href="/game1">반응속도</a>
        <a href="/game2">티맞</a>
        <a href="/informational">정보글</a>
        <a href="#">연락처</a>
      </nav>
    </header>
  );
};

export default Header;