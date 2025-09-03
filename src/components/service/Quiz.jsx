import React from "react";
import "./Quiz.css";
import { useState } from 'react';
import YouTube from 'react-youtube';


const Quiz = () => {


const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,       // 자동재생(1), 끄기(0)
      rel: 1,            // 관련 동영상 숨기기
      modestbranding: 1, // 유튜브 로고 최소화
    },
  };

  const handleReady = (event) => {
    // 필요시 컨트롤: event.target.playVideo(), pauseVideo() 등
  };

  return (
<div id="Quiz">
    <br></br>
    <br></br>
    <div id="mp4div">
      <h1>이사람은 티어가 어디일까요?</h1>
      <YouTube
        videoId="soJX5TCymr4" // 원하는 영상 ID로 교체
        opts={opts}
        onReady={handleReady}
      />
      <h2>아래 아이콘을 눌러 선택해주세요.</h2>
    </div>
    <div className="test3">
    <div className="test">
      <div className="test2"><img className="img" alt="iPhone_01" src="images/game2img/1.png" /></div>
      <div className="test2"><img className="img" alt="iPhone_01" src="images/game2img/2.png" /></div>
      <div className="test2"><img className="img" alt="iPhone_01" src="images/game2img/3.png" /></div>
      <div className="test2"><img className="img" alt="iPhone_01" src="images/game2img/4.png" /></div>
      <div className="test2"><img className="img" alt="iPhone_01" src="images/game2img/5.png" /></div>
      <div className="test2"><img className="img" alt="iPhone_01" src="images/game2img/6.png" /></div>
      <div className="test2"><img className="img" alt="iPhone_01" src="images/game2img/7.png" /></div>
      <div className="test2"><img className="img" alt="iPhone_01" src="images/game2img/8.png" /></div>
      <div className="test2"><img className="img" alt="iPhone_01" src="images/game2img/9.png" /></div>
    </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
</div>
  );
};

export default Quiz; 