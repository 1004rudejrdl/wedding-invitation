import React, { useState, useEffect } from 'react';

const Countdown = ({ weddingDate }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = weddingDate.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);

            setDays(d);
            setHours(h);
            setMinutes(m);
            setSeconds(s);
        }, 1000);

        return () => clearInterval(interval);
    }, [weddingDate]);

    return (
        <section className="countdown">
            <h3>결혼식까지</h3>
            <div className="timer">
                <div className="time-unit">
                    <div className="value">{days}</div>
                    <div className="label">일</div>
                </div>
                <div className="time-unit">
                    <div className="value">{hours}</div>
                    <div className="label">시간</div>
                </div>
                <div className="time-unit">
                    <div className="value">{minutes}</div>
                    <div className="label">분</div>
                </div>
                <div className="time-unit">
                    <div className="value">{seconds}</div>
                    <div className="label">초</div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;