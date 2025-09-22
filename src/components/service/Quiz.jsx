import React, { useEffect } from "react";
import "./Quiz.css";
import { useState } from 'react';
import YouTube from 'react-youtube'; 
import Modal from 'react-modal';

const Quiz = () => {

const VideosId = ["ehiqBcHBUKs", "UYK-fvC-elU", "fWv239L2g7U", "WrwFM_xTeOw", "oZMP7AOx28I", "E6DBz8mFIt4", "Nov5Gmd_gvI", "hLlpIhOg_ps", "ljkfxpDhUk4", "2uelSNqQ57Y"];
const [Videos, SetVideos] = useState();

const TierId = [7, 8, 5, 8, 2, 2, 2, 2, 8, 6];
const [Tiers, SetTiers] = useState();

const [UseResult, SetUseResult] = useState();
const [conclusion, Setconclusion] = useState();

function start() {
  //0 ~ 9
const RandoNum = Math.floor(Math.random() * 10);
SetVideos(VideosId[RandoNum]);
SetTiers(TierId[RandoNum]);
setModalIsOpen(false);
}

function test(result) {
  if (result == Tiers) {
    console.log("정답");
    setModalIsOpen(true);
    console.log(Tiers);
    SetUseResult(result);
    Setconclusion("정답입니다!");
  }
  else if(result==Tiers+1 || result==Tiers-1){
    console.log("비슷");
    setModalIsOpen(true);
    console.log(Tiers);
    SetUseResult(result);
    Setconclusion("거의 맞췄네요?");
  }
  else {
    console.log("틀림");
    setModalIsOpen(true);
    console.log(Tiers);
    SetUseResult(result);
    console.log(UseResult);  
    Setconclusion("틀렸어요..");
  }
}

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

  const [modalIsOpen, setModalIsOpen] = useState(false); //모달
  

  return (
<div id="Quiz">
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
      <h1>결과</h1>
      <div className="Modal1">
        <div className="Modal2"><h2>영상속 티어</h2><img alt="iPhone_01" src={"images/game2img/"+Tiers+".png"}/></div>
        <div className="Modal2"><h2>너가 고른것</h2><img alt="iPhone_01" src={"images/game2img/"+UseResult+".png"}/></div>
      </div>
      <div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="Modal3">
      <button onClick={start}>다음</button>
      <h3>{conclusion}</h3>
      </div>
    </Modal>
    <br></br>
    <br></br>
    <div id="mp4div">
      <h1>이사람은 티어가 어디일까요?</h1>
      <YouTube
        videoId={Videos} // 원하는 영상 ID로 교
        opts={opts}
        onReady={handleReady}
      />
      <h2>아래 아이콘을 눌러 선택해주세요.</h2>
    </div>
    <div className="test3">
    <div className="test">
      <div className="test2" onClick={() => test(1)}><img className="img" alt="iPhone_01" src="images/game2img/1.png" /></div>
      <div className="test2" onClick={() => test(2)}><img className="img" alt="iPhone_01" src="images/game2img/2.png" /></div>
      <div className="test2" onClick={() => test(3)}><img className="img" alt="iPhone_01" src="images/game2img/3.png" /></div>
      <div className="test2" onClick={() => test(4)}><img className="img" alt="iPhone_01" src="images/game2img/4.png" /></div>
      <div className="test2" onClick={() => test(5)}><img className="img" alt="iPhone_01" src="images/game2img/5.png" /></div>
      <div className="test2" onClick={() => test(6)}><img className="img" alt="iPhone_01" src="images/game2img/6.png" /></div>
      <div className="test2" onClick={() => test(7)}><img className="img" alt="iPhone_01" src="images/game2img/7.png" /></div>
      <div className="test2" onClick={() => test(8)}><img className="img" alt="iPhone_01" src="images/game2img/8.png" /></div>
      <div className="test2" onClick={() => test(9)}><img className="img" alt="iPhone_01" src="images/game2img/9.png" /></div>
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