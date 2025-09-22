import React, { useEffect } from "react";
import "./Inforpage1.css";
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

const Inforpage1 = () => {
 
const navigate2 = useNavigate();

const headleclick2 = () => {
  navigate2('/informational2/1page');
};

  return (
<div id="main">
  <div className="inblog1">
  <h1>블로그 제목</h1>
  <h3>날짜 / 시간 / 기타</h3>
  </div>
  <div className="inblog2">
    <p>내용 (엄청 긴내용)</p>
  </div>
</div>
  );
};

export default Inforpage1; 