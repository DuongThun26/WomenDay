import React, { useState } from 'react';

interface EnvelopeIntroProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ onOpen, isOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);
    // Sau khi nắp phong bì mở và thiệp nhô lên, gọi onOpen để kích hoạt toàn bộ khu vườn
    setTimeout(() => {
      onOpen();
    }, 950);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpenClick();
    }
  };

  return (
    <div
      className={`envelope-intro-screen ${isOpen ? 'envelope-screen-exited' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at 50% 40%, #FFF8F0 0%, #FEEBDD 55%, #F4D3C6 100%)',
        padding: '24px',
        opacity: isOpen ? 0 : 1,
        pointerEvents: isOpen ? 'none' : 'auto',
        transition: 'opacity 0.9s var(--ease-out-gentle)',
      }}
    >
      {/* Vài cánh hoa rơi chậm đầu màn hình */}
      <div
        className="intro-floating-petals"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        <span
          style={{
            position: 'absolute',
            top: '15%',
            left: '20%',
            fontSize: '18px',
            opacity: 0.5,
            animation: 'envelopeHover 6s ease-in-out infinite',
          }}
        >
          🌸
        </span>
        <span
          style={{
            position: 'absolute',
            top: '25%',
            right: '22%',
            fontSize: '16px',
            opacity: 0.45,
            animation: 'envelopeHover 7s ease-in-out infinite 1s',
          }}
        >
          🌷
        </span>
      </div>

      {/* DÒNG TIÊU ĐỀ DẪN NHẬP NHỎ */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '28px',
          animation: 'cardAppear 0.8s ease-out forwards',
        }}
      >
        <p
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'var(--color-gold-accent)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            marginBottom: '6px',
          }}
        >
          ✦ 20 Tháng 10 ✦
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: 'clamp(1.5rem, 4.2vw, 2.2rem)',
            fontWeight: 500,
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.01em',
          }}
        >
          Một món quà nhỏ dành cho Tiên
        </h2>
      </div>

      {/* KHỐI PHONG BÌ MỸ THUẬT (CSS / SVG 3D) */}
      <div
        style={{
          position: 'relative',
          width: 'clamp(280px, 85vw, 380px)',
          height: 'clamp(185px, 55vw, 250px)',
          perspective: '1000px',
          animation: isOpening ? 'none' : 'envelopeHover 4.5s ease-in-out infinite',
          margin: '0 auto',
        }}
      >
        {/* Lá thư bên trong trượt lên khi mở */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '5%',
            width: '90%',
            height: '85%',
            backgroundColor: '#FFFCF8',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(107, 81, 71, 0.1)',
            border: '1px solid #F4D7A1',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transform: isOpening ? 'translateY(-65px)' : 'translateY(0)',
            transition: 'transform 0.8s cubic-bezier(0.2, 0.9, 0.3, 1.2) 0.3s',
            padding: '16px',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: '1rem',
              color: 'var(--color-dusty-rose)',
              fontStyle: 'italic',
            }}
          >
            Golden Hour Bloom
          </div>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
              marginTop: '4px',
            }}
          >
            For Mai Thủy Tiên
          </div>
        </div>

        {/* Thân phong bì phía sau */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'var(--color-envelope-body)',
            borderRadius: '14px',
            boxShadow: 'var(--shadow-envelope)',
            zIndex: 1,
          }}
        />

        {/* Nắp tam giác phong bì lật mở 3D */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '52%',
            zIndex: isOpening ? 1 : 5,
            transformOrigin: 'top center',
            transformStyle: 'preserve-3d',
            transform: isOpening ? 'rotateX(180deg)' : 'rotateX(0deg)',
            transition: 'transform 0.7s var(--ease-in-out-smooth), z-index 0.3s step-end',
          }}
        >
          <svg
            viewBox="0 0 380 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <path
              d="M 0 0 L 190 128 L 380 0 Z"
              fill="var(--color-envelope-flap)"
              stroke="rgba(244, 215, 161, 0.6)"
              strokeWidth="1"
            />
          </svg>

          {/* Con dấu sáp dập nổi chữ 'T' dát vàng kim */}
          {!isOpening && (
            <div
              style={{
                position: 'absolute',
                top: '75%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-seal-gold)',
                boxShadow: '0 4px 12px var(--color-seal-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF8F0',
                fontFamily: 'var(--font-serif-display)',
                fontWeight: 700,
                fontSize: '1.25rem',
                border: '2px solid rgba(255, 248, 240, 0.7)',
                pointerEvents: 'none',
              }}
            >
              T
            </div>
          )}
        </div>

        {/* Túi trước của phong bì (2 cánh hai bên và đáy) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            pointerEvents: 'none',
          }}
        >
          <svg
            viewBox="0 0 380 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            {/* Cánh trái */}
            <path
              d="M 0 0 L 175 145 L 0 250 Z"
              fill="#F2E3D5"
              opacity="0.95"
            />
            {/* Cánh phải */}
            <path
              d="M 380 0 L 205 145 L 380 250 Z"
              fill="#F0DFD0"
              opacity="0.95"
            />
            {/* Nắp đáy */}
            <path
              d="M 0 250 L 190 125 L 380 250 Z"
              fill="#EAD6C4"
              stroke="rgba(244, 215, 161, 0.4)"
              strokeWidth="0.8"
            />
          </svg>
        </div>
      </div>

      {/* NÚT BẤM "MỞ THIỆP" TƯƠNG TÁC RÕ RÀNG */}
      <div style={{ marginTop: '36px', textAlign: 'center' }}>
        <button
          type="button"
          onClick={handleOpenClick}
          onKeyDown={handleKeyDown}
          disabled={isOpening || isOpen}
          aria-label="Mở thiệp hoa chúc mừng Mai Thủy Tiên"
          className="open-envelope-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '14px 34px',
            backgroundColor: 'var(--color-dusty-rose)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            fontWeight: 500,
            borderRadius: '999px',
            boxShadow: 'var(--shadow-btn)',
            cursor: 'pointer',
            transition: 'transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease',
            border: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            e.currentTarget.style.backgroundColor = '#af6c7b';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(189, 126, 139, 0.38)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.backgroundColor = 'var(--color-dusty-rose)';
            e.currentTarget.style.boxShadow = 'var(--shadow-btn)';
          }}
        >
          <span>Mở thiệp</span>
          <span aria-hidden="true" style={{ fontSize: '1.1rem' }}>
            ✉️
          </span>
        </button>

        <p
          style={{
            marginTop: '12px',
            fontSize: '0.825rem',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-sans)',
          }}
        >
          Nhấn nút hoặc phím Enter để khám phá khu vườn
        </p>
      </div>
    </div>
  );
};
