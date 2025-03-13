import React, { useState } from 'react';

const Contact = ({ accountInfo }) => {
    const { groom, bride } = accountInfo;

    const [groomCopied, setGroomCopied] = useState(false);
    const [brideCopied, setBrideCopied] = useState(false);

    // 계좌번호 복사 함수
    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text).then(() => {
            if (type === 'groom') {
                setGroomCopied(true);
                setTimeout(() => setGroomCopied(false), 2000);
            } else {
                setBrideCopied(true);
                setTimeout(() => setBrideCopied(false), 2000);
            }
        });
    };

    return (
        <section className="contact">
            <h3>마음 전하실 곳</h3>
            <div className="account-container">
                <div className="account-card">
                    <p className="account-title">신랑측 계좌번호</p>
                    <p className="account-details">
                        {groom.bank} {groom.account}
                    </p>
                    <p className="account-name">{groom.holder}</p>
                    <button
                        className="copy-btn"
                        onClick={() => copyToClipboard(`${groom.bank} ${groom.account} ${groom.holder}`, 'groom')}
                    >
                        {groomCopied ? '복사 완료!' : '복사하기'}
                    </button>
                </div>

                <div className="account-card">
                    <p className="account-title">신부측 계좌번호</p>
                    <p className="account-details">
                        {bride.bank} {bride.account}
                    </p>
                    <p className="account-name">{bride.holder}</p>
                    <button
                        className="copy-btn"
                        onClick={() => copyToClipboard(`${bride.bank} ${bride.account} ${bride.holder}`, 'bride')}
                    >
                        {brideCopied ? '복사 완료!' : '복사하기'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;