import React, { useEffect } from "react";
import "./Informational2.css";
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

const Informational2 = () => {
 
const navigate2 = useNavigate();

const headleclick2 = () => {
  navigate2('/informational2/1page');
};

  return (
<div id="main">
<div className="blog-container">
<div className="blog1" onClick={headleclick2}>
    <h2>제목1</h2>
    <div className="blog2">
    <img alt="iPhone_01" src={"images/reactlogo.png"} width={"100px"} height={"100px"}/>
    </div>
    <div className="blog3">
    <h3>설명</h3>
    <h3>설명</h3>
    </div>
</div>
<div className="blog1">
    <h2>제목1</h2>
    <div className="blog2">
    <img alt="iPhone_01" src={"images/reactlogo.png"} width={"100px"} height={"100px"}/>
    </div>
    <div className="blog3">
    <h3>설명</h3>
    <h3>설명</h3>
    </div>
</div>
</div>
</div>
  );
};

export default Informational2; 