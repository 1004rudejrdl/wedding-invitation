import React from 'react';

const Footer = ({ groomName, brideName }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>© {currentYear} {groomName} & {brideName}의 결혼식</p>
            <div className="social-share">
                <button className="share-btn" onClick={() => {
                    if (navigator.share) {
                        navigator.share({
                            title: `${groomName}♥${brideName} 결혼식에 초대합니다`,
                            url: window.location.href
                        });
                    }
                }}>
                    공유하기
                </button>
            </div>
        </footer>
    );
};

export default Footer;