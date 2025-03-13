import React from 'react';

const Header = ({ groomName, brideName, weddingDate }) => {
    // 날짜 포맷팅
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        const dayOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][date.getDay()];
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? '오후' : '오전';
        const formattedHours = hours % 12 || 12;

        return `${year}년 ${month}월 ${day}일 ${dayOfWeek} ${ampm} ${formattedHours}시`;
    };

    return (
        <header className="header">
            <div className="title">우리 결혼합니다</div>
            <div className="couple-names">{groomName} & {brideName}</div>
            <div className="wedding-date">{formatDate(weddingDate)}</div>
        </header>
    );
};

export default Header;