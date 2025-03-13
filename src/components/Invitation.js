import React from 'react';

const Invitation = ({ coupleInfo }) => {
    const { groomName, brideName, groomParents, brideParents } = coupleInfo;

    return (
        <section className="invitation">
            <h2>초대합니다</h2>
            <p className="message">
                서로가 마주보며 다져온 사랑을 이제 함께 한 곳을 바라보며<br />
                걸어갈 수 있는 큰 사랑으로 키우고자 합니다.<br />
                저희의 뜻깊은 시작의 자리에 함께해 주시면<br />
                더 없는 기쁨으로 간직하겠습니다.
            </p>
            <div className="parents">
                <p>{groomParents.father} · {groomParents.mother}의 장남 <strong>{groomName}</strong></p>
                <p>{brideParents.father} · {brideParents.mother}의 장녀 <strong>{brideName}</strong></p>
            </div>
        </section>
    );
};

export default Invitation;