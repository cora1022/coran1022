import React from "react";
import "./Home.css";

const Home = () => {
return(
<div>
    <div className="homelogo"></div>
    <div className="twohome"></div>
    <p>개발자 지망생이 취미로 운영하는 웹사이트입니다!</p>
    <p>미흡하지만, 천천히 둘러봐주세요.</p>
    <p>ㅎㅎ</p>
    <br></br>
    <h2>목록</h2>
    <div className="option-grid">
  <div className="option-card">
    <img src="images/icon1.png" alt="아이콘1" className="option-img" />
    <h3 className="option-title">반응속도 테스트</h3>
    <p className="option-desc">당신의 반응속도를 측정해보세요!</p>
  </div>
  <div className="option-card">
    <img src="/images/icon2.png" alt="아이콘2" className="option-img" />
    <h3 className="option-title">발로란트 티어 맞추기</h3>
    <p className="option-desc">다양한 클립을 관찰하고 맞춰보세요!</p>
  </div>

  <div className="option-card">
    <img src="/images/icon3.png" alt="아이콘3" className="option-img" />
    <h3 className="option-title">정보글</h3>
    <p className="option-desc">출시 예정</p>
  </div>
</div>
</div>
);
}

export default Home;