import React from 'react';

const Location = ({ venueInfo }) => {
    const { name, address, contact, subway, bus, parking } = venueInfo;

    return (
        <section className="location">
            <h3>오시는 길</h3>
            <div className="map-container">
                <img src="/images/map.png" alt="웨딩홀 지도" className="map" />
                {/*
        나중에 카카오맵 등 실제 지도 API를 사용할 경우:
        <div id="map" style={{ width: '100%', height: '300px' }}></div>
        */}
            </div>

            <div className="venue-info">
                <div className="info-item">
                    <strong>웨딩홀:</strong> {name}
                </div>
                <div className="info-item">
                    <strong>주소:</strong> {address}
                </div>
                <div className="info-item">
                    <strong>연락처:</strong> {contact}
                </div>
            </div>

            <div className="transportation">
                <div className="info-item">
                    <strong>지하철:</strong> {subway}
                </div>
                <div className="info-item">
                    <strong>버스:</strong> {bus}
                </div>
                <div className="info-item">
                    <strong>주차:</strong> {parking}
                </div>
            </div>

            <div className="map-buttons">
                <a href={`https://map.kakao.com/link/search/${address}`} className="map-btn" target="_blank" rel="noopener noreferrer">
                    카카오맵
                </a>
                <a href={`https://map.naver.com/p/search/${address}`} className="map-btn" target="_blank" rel="noopener noreferrer">
                    네이버지도
                </a>
                <a href={`https://maps.google.com/?q=${address}`} className="map-btn" target="_blank" rel="noopener noreferrer">
                    구글지도
                </a>
            </div>
        </section>
    );
};

export default Location;