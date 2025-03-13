import React, { useState } from 'react';

const Gallery = () => {
    // 갤러리 이미지 경로
    const galleryImages = [
        '/images/gallery/photo1.jpg',
        '/images/gallery/photo2.jpg',
        '/images/gallery/photo3.jpg',
        '/images/gallery/photo4.jpg',
        '/images/gallery/photo5.jpg',
        '/images/gallery/photo6.jpg',
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    // 이미지 클릭 시 모달 열기
    const openModal = (index) => {
        setSelectedImage(index);
    };

    // 모달 닫기
    const closeModal = () => {
        setSelectedImage(null);
    };

    // 다음 이미지로 이동
    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % galleryImages.length);
    };

    // 이전 이미지로 이동
    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <section className="gallery">
            <h3>갤러리</h3>
            <div className="gallery-grid">
                {galleryImages.map((src, idx) => (
                    <div
                        key={idx}
                        className="gallery-item"
                        onClick={() => openModal(idx)}
                    >
                        <img src={src} alt={`웨딩 사진 ${idx + 1}`} />
                    </div>
                ))}
            </div>

            {/* 이미지 모달 */}
            {selectedImage !== null && (
                <div className="gallery-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>&times;</button>
                        <button className="nav-button prev" onClick={prevImage}>&#10094;</button>
                        <img src={galleryImages[selectedImage]} alt="확대된 웨딩 사진" />
                        <button className="nav-button next" onClick={nextImage}>&#10095;</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;