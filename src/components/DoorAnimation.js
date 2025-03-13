import React, { useState, useEffect } from 'react';
import '../styles/DoorAnimation.css';

const DoorAnimation = ({ onComplete }) => {
    const [isOpening, setIsOpening] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // 모바일 기기 감지
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // 페이지 로드 시 1.5초 후 문 열림 시작 (모바일에서는 시간 단축)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpening(true);
        }, isMobile ? 500 : 1500);

        return () => clearTimeout(timer);
    }, [isMobile]);

    // 문이 열리는 애니메이션이 끝나면 onComplete 콜백 호출
    useEffect(() => {
        if (isOpening) {
            // 모바일에서는 애니메이션 시간 단축
            const animationTime = isMobile ? 1500 : 2000;

            const timer = setTimeout(() => {
                setIsComplete(true);
                setTimeout(() => {
                    if (onComplete) onComplete();
                }, 500); // 페이드 아웃 후 메인 컨텐츠 표시
            }, animationTime);

            return () => clearTimeout(timer);
        }
    }, [isOpening, onComplete, isMobile]);

    // 애니메이션 건너뛰기
    const skipAnimation = () => {
        setIsComplete(true);
        setTimeout(() => {
            if (onComplete) onComplete();
        }, 300);
    };

    return (
        <div className={`door-container ${isComplete ? 'fade-out' : ''}`}>
            {/* 떠다니는 나뭇잎 */}
            <div className="leaves-container">
                <div className="leaf leaf-1"></div>
                <div className="leaf leaf-2"></div>
                <div className="leaf leaf-3"></div>
                <div className="leaf leaf-4"></div>
                <div className="leaf leaf-5"></div>
                <div className="leaf leaf-6"></div>
                <div className="leaf leaf-7"></div>
                <div className="leaf leaf-8"></div>
                <div className="leaf leaf-9"></div>
                <div className="leaf leaf-10"></div>
                <div className="leaf leaf-11"></div>
                <div className="leaf leaf-12"></div>
            </div>

            <div className="doors">
                <div className={`door left ${isOpening ? 'open' : ''}`}>
                    <div className="door-edge"></div>
                </div>
                <div className={`door right ${isOpening ? 'open' : ''}`}>
                    <div className="door-edge"></div>
                </div>
            </div>

            <div className="door-message">
                <h1>우리 결혼합니다</h1>
                <p>아래의 버튼을 눌러 초대장을 열어주세요</p>
            </div>

            {!isOpening && (
                <button
                    className="open-button"
                    onClick={() => setIsOpening(true)}
                >
                    초대장 열기
                </button>
            )}

            {isOpening && !isComplete && (
                <button
                    className="skip-button"
                    onClick={skipAnimation}
                >
                    건너뛰기
                </button>
            )}
        </div>
    );
};

export default DoorAnimation;