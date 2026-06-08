# coran1022

React로 만든 학습/게임형 싱글 페이지 웹 앱입니다.

## 프로젝트 목적

홈 화면, 정보 페이지, 반응 속도 게임, 퀴즈 화면을 라우팅으로 연결한 프론트엔드 프로젝트입니다. React Router 기반으로 여러 학습형 화면을 전환하며, 이미지 리소스를 활용해 가벼운 인터랙션과 콘텐츠 탐색 경험을 제공합니다.

## 기술 스택

- React 19
- Create React App / react-scripts
- React Router
- Bootstrap / React Bootstrap
- HTML/CSS/JavaScript

## 아키텍처

`src/App.js`가 라우팅 엔트리포인트이며, 공통 `Header`와 서비스별 화면 컴포넌트를 조합합니다. 정적 이미지는 `public/images`와 일부 컴포넌트 폴더에 저장되어 있고, 화면 상태는 각 React 컴포넌트 내부 state로 관리됩니다. 현재 백엔드 서버나 데이터베이스 연동은 없습니다.

## 폴더 구조

```text
.
├── public/
│   ├── images/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── service/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 실행 방법

```bash
npm install
npm start
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.
