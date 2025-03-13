/**
 * 날짜 포맷팅 유틸리티 함수
 */

// 날짜를 'YYYY년 MM월 DD일 요일 시간' 형식으로 변환
export const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const dayOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';
    const formattedHours = hours % 12 || 12;

    return `${year}년 ${month}월 ${day}일 ${dayOfWeek} ${ampm} ${formattedHours}시${minutes > 0 ? ` ${minutes}분` : ''}`;
};

// 두 날짜 사이의 차이 계산 (D-day)
export const getDateDifference = (targetDate, currentDate = new Date()) => {
    const difference = targetDate.getTime() - currentDate.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
};

// 날짜가 이미 지났는지 확인
export const isPastDate = (targetDate) => {
    const currentDate = new Date();
    return currentDate > targetDate;
};