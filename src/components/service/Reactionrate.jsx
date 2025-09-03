import React from "react";
import "./Reactionrate.css";
import { useState } from 'react';

const Reactionrate = () => {
    const [open, setOpen] = useState(false);
    let startTime = 0;
    let clickable = false;
    let errorclick = false;
    let ButtonNum = 0;
  return (
<div>
  <br></br>
  <h1>반응속도 테스트</h1> 
  <br></br>
  <div id="startArea" className="normal" onClick={handleClick}>시작</div>
  <h2 id="output"></h2>
      <div className="DesButn2" onClick={des}><h3>반응속도란?</h3></div>
      <div className="Description1">
      <h2>반응속도란 무엇인가?</h2>
      <p>반응속도(Reaction Time)는 자극(시각, 청각 등)을 인지하고</p>
      <p>뇌에서 처리한 후 신체가 이에 반응하기까지 걸리는 시간을 말합니다</p>
      <p>이 과정은 크게 세 단계로 나눌 수 있습니다.</p>
      <br></br>
      <p><b>인지 단계</b>: 눈이나 귀를 통해 자극을 감지하는 단계입니다.</p>
      <p><b>처리 단계</b>: 뇌가 받은 자극을 분석하고 적절한 반응을 결정하는 단계입니다.</p>
      <p><b>운동 단계</b>: 신체가 뇌의 명령을 받아 실제로 움직이는 단계입니다.</p>
      <br></br>
      <p>보통 일반인의 평균 반응속도는 <b>200~250밀리초(ms)</b>이며</p>
      <p>프로급 게이머나 운동선수는 <b>150ms 미만</b>까지 도달하기도 합니다.</p>
      <br></br>
      <h2>반응속도는 연습으로 극복할 수 있는가?</h2>
      <p>반응속도는 선천적으로 타고난 부분이 있지만</p>
      <p>꾸준한 연습과 훈련을 통해 충분히 향상할 수 있습니다.</p>
      <p>특히 다음과 같은 방법이 효과적입니다.</p>
      <br></br>
      <p>과학적으로도 반응속도를 20ms~50ms 정도 개선하는 것은 충분히 가능합니다.</p>
      <br></br>
      <p><b>반응속도 훈련 앱</b>: 꾸준한 훈련으로 시각 반응속도를 단축할 수 있습니다.</p>
      <p>반응속도가 낮다고 해서 주저하지 마세요</p>
      <div className="Cancebutton" onClick={Cance}>닫기</div>
    </div>
    
    <hr className="DesButn1"></hr>
</div>
  );

    function Cance() {
      ButtonNum++;
      if (ButtonNum%2 == 0) {
        const element1 = document.querySelector('.Description2');
        element1.classList.replace('Description2', 'Description1');
        const element2 = document.querySelector('.DesButn1');
        element2.classList.replace('DesButn1', 'DesButn2');
      }
    }

    function des() {
      ButtonNum++;
      console.log(ButtonNum);
      if (ButtonNum%2) {
        const element1 = document.querySelector('.Description1');
        element1.classList.replace('Description1', 'Description2');
        const element2 = document.querySelector('.DesButn2');
        element2.classList.replace('DesButn2', 'DesButn1');
      }
    }

    function handleClick() {
      const box = document.getElementById("startArea");
      const output = document.getElementById("output");

      if (!clickable && !errorclick) {
        // 시작 상태
        output.textContent = "";
        
        box.textContent = "초록색이 되면 클릭!";
        box.className = "ready";
        errorclick = true;
        const randomDelay = Math.floor(Math.random() * 4000) + 3000;
        setTimeout(() => { if (errorclick) {
          errorclick = false;
          box.textContent = "지금 클릭!";
          box.className = "go";
          startTime = Date.now();
          clickable = true;}
        }, randomDelay);
      } 
      else if(errorclick){
        box.textContent = "다시 시작";
        box.className = "normal";
        output.textContent = `사기치지 마세요 ㅡㅡ`;
        clickable = false;
        errorclick = false;
      }
      else {
        // 클릭 가능한 상태 (게임 결과)
        const reactionTime = Date.now() - startTime;
        box.textContent = "다시 시작";
        box.className = "normal";
        output.textContent = `반응속도: ${reactionTime}ms`;
        clickable = false;
      }
    }
}

export default Reactionrate;