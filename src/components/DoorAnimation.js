import React, { useState, useEffect } from 'react';
import '../styles/DoorAnimation.css';

const DoorAnimation = ({ onComplete }) => {
    const [isOpening, setIsOpening] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    // 페이지 로드 시 3초 후 문 열림 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpening(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // 문이 열리는 애니메이션이 끝나면 onComplete 콜백 호출
    useEffect(() => {
        if (isOpening) {
            const timer = setTimeout(() => {
                setIsComplete(true);
                setTimeout(() => {
                    if (onComplete) onComplete();
                }, 500); // 페이드 아웃 후 메인 컨텐츠 표시
            }, 2000); // 문 열림 애니메이션 시간

            return () => clearTimeout(timer);
        }
    }, [isOpening, onComplete]);

    return (
        <div className={`door-container ${isComplete ? 'fade-out' : ''}`}>
            <div className="door-message">
                <h1>우리 결혼합니다</h1>
                <p>아래의 문을 터치하여 열어주세요</p>
            </div>

            <div className="doors">
                <div className={`door left ${isOpening ? 'open' : ''}`}></div>
                <div className={`door right ${isOpening ? 'open' : ''}`}></div>
            </div>

            {!isOpening && (
                <button
                    className="open-button"
                    onClick={() => setIsOpening(true)}
                >
                    초대장 열기
                </button>
            )}
        </div>
    );
};

export default DoorAnimation;