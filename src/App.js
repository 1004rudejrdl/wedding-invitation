import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Invitation from './components/Invitation';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // 결혼식 날짜 설정 (YYYY, MM-1, DD, HH, MM, SS)
  const weddingDate = new Date(2025, 5, 15, 13, 0, 0);

  // 커플 정보
  const coupleInfo = {
    groomName: '김철수',
    brideName: '이영희',
    groomParents: {
      father: '김길동',
      mother: '박영희'
    },
    brideParents: {
      father: '이영호',
      mother: '최순자'
    }
  };

  // 웨딩홀 정보
  const venueInfo = {
    name: '행복한 웨딩홀 2층 크리스탈홀',
    address: '서울시 강남구 테헤란로 123',
    contact: '02-123-4567',
    subway: '2호선 강남역 3번 출구에서 도보 5분',
    bus: '강남역 정류장 하차 (간선 146, 147 / 지선 4412)',
    parking: '웨딩홀 지하 주차장 2시간 무료'
  };

  // 계좌번호
  const accountInfo = {
    groom: {
      bank: '우리은행',
      account: '123-456-789012',
      holder: '김철수'
    },
    bride: {
      bank: '국민은행',
      account: '123-45-6789-012',
      holder: '이영희'
    }
  };

  return (
      <div className="App">
        <Header
            groomName={coupleInfo.groomName}
            brideName={coupleInfo.brideName}
            weddingDate={weddingDate}
        />
        <div className="main-image">
          <img src="/images/main.jpg" alt="웨딩 커플" />
        </div>
        <Invitation coupleInfo={coupleInfo} />
        <Countdown weddingDate={weddingDate} />
        <Gallery />
        <Location venueInfo={venueInfo} />
        <Contact accountInfo={accountInfo} />
        <Footer
            groomName={coupleInfo.groomName}
            brideName={coupleInfo.brideName}
        />
      </div>
  );
}

export default App;