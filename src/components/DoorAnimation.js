import React, { useState, useEffect } from 'react';
import '../styles/DoorAnimation.css';

const DoorAnimation = ({ onComplete }) => {
    const [isOpening, setIsOpening] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // 나뭇잎 위치 생성 함수
    const createLeafPositions = () => {
        const leaves = [];
        const leafCount = 15; // 나뭇잎 개수

        for (let i = 0; i < leafCount; i++) {
            const left = Math.random() * 100; // 0-100% 범위의 랜덤한 좌측 위치
            leaves.push({
                id: i,
                left: `${left}%`,
                animationDelay: `${Math.random() * 15}s` // 0-15초 랜덤 딜레이
            });
        }

        return leaves;
    };

    const [leaves] = useState(createLeafPositions());

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
            {leaves.map(leaf => (
                <div
                    key={leaf.id}
                    className="leaf"
                    style={{
                        left: leaf.left,
                        animationDelay: leaf.animationDelay
                    }}
                />
            ))}

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