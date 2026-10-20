import React from 'react';
import { MAIN_GREETING } from '../../data/wishes';
import { TypewriterText } from './TypewriterText';

interface GreetingCardProps {
  isVisible: boolean;
  onOpenGallery?: () => void;
}

export const GreetingCard: React.FC<GreetingCardProps> = ({ isVisible, onOpenGallery }) => {
  if (!isVisible) return null;

  return (
    <article
      className="greeting-card-artistic"
      aria-labelledby="card-title recipient-heading"
      style={{
        position: 'relative',
        zIndex: 25,
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: 'clamp(28px, 6vw, 46px) clamp(22px, 5vw, 42px)',
        backgroundColor: 'rgba(255, 252, 248, 0.94)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '24px',
        border: '1.5px solid rgba(244, 215, 161, 0.65)',
        boxShadow: '0 24px 50px -12px rgba(64, 87, 70, 0.16), 0 0 35px rgba(244, 215, 161, 0.35)',
        animation: 'cardAppear 1.2s var(--ease-out-gentle) forwards',
        color: 'var(--color-text-primary)',
        overflow: 'hidden',
      }}
    >
      {/* Khung viền chỉ vàng đôi mỹ thuật tinh tế ở 4 góc */}
      <div
        className="card-corner-decor"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          width: '26px',
          height: '26px',
          borderTop: '1.5px solid var(--color-gold-accent)',
          borderLeft: '1.5px solid var(--color-gold-accent)',
          opacity: 0.7,
        }}
      />
      <div
        className="card-corner-decor"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          width: '26px',
          height: '26px',
          borderTop: '1.5px solid var(--color-gold-accent)',
          borderRight: '1.5px solid var(--color-gold-accent)',
          opacity: 0.7,
        }}
      />
      <div
        className="card-corner-decor"
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          width: '26px',
          height: '26px',
          borderBottom: '1.5px solid var(--color-gold-accent)',
          borderLeft: '1.5px solid var(--color-gold-accent)',
          opacity: 0.7,
        }}
      />
      <div
        className="card-corner-decor"
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          width: '26px',
          height: '26px',
          borderBottom: '1.5px solid var(--color-gold-accent)',
          borderRight: '1.5px solid var(--color-gold-accent)',
          opacity: 0.7,
        }}
      />

      {/* HEADER CỦA THIỆP */}
      <header style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.785rem',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'var(--color-gold-accent)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            marginBottom: '6px',
          }}
        >
          <span style={{ fontSize: '0.85rem' }}>✦</span>
          <span>{MAIN_GREETING.date} — {MAIN_GREETING.titleTag}</span>
          <span style={{ fontSize: '0.85rem' }}>✦</span>
        </div>

        <h1
          id="recipient-heading"
          style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: 'clamp(2.1rem, 5.8vw, 3rem)',
            fontWeight: 500,
            lineHeight: 1.15,
            color: '#2E201B',
            letterSpacing: '-0.015em',
            margin: '6px 0 10px',
          }}
        >
          {MAIN_GREETING.recipient}
        </h1>

        {/* Typewriter intro line */}
        <div
          style={{
            fontFamily: 'var(--font-serif-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.05rem, 2.7vw, 1.25rem)',
            color: 'var(--color-dusty-rose)',
            minHeight: '1.6em',
          }}
        >
          <TypewriterText text={MAIN_GREETING.typewriterIntro} speedMs={65} startDelayMs={600} />
        </div>

        <div
          aria-hidden="true"
          style={{
            width: '64px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--color-gold-accent), transparent)',
            margin: '16px auto 0',
          }}
        />
      </header>

      {/* NỘI DUNG LỜI CHÚC TRỌNG TÂM */}
      <div
        className="card-body-content"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(0.95rem, 2.3vw, 1.05rem)',
          lineHeight: 1.85,
          color: '#4A3B34',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          textAlign: 'justify',
          textJustify: 'inter-word',
        }}
      >
        <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', textAlign: 'center' }}>
          {MAIN_GREETING.opening}
        </p>

        {/* Lời chúc bắt buộc nổi bật với viền vàng champagne và typography trang nhã */}
        <div
          style={{
            fontFamily: 'var(--font-serif-title)',
            fontSize: 'clamp(1.15rem, 2.8vw, 1.35rem)',
            fontWeight: 500,
            lineHeight: 1.6,
            color: '#284131',
            padding: '16px 20px',
            background: 'linear-gradient(135deg, rgba(244, 215, 161, 0.28) 0%, rgba(233, 165, 178, 0.18) 100%)',
            borderRadius: '14px',
            borderLeft: '3.5px solid var(--color-dusty-rose)',
            boxShadow: '0 4px 15px rgba(189, 126, 139, 0.08)',
            letterSpacing: '0.01em',
            textAlign: 'center',
          }}
        >
          “{MAIN_GREETING.coreWish}”
        </div>

        <p>
          {MAIN_GREETING.extendedWish}
        </p>

        <p>
          {MAIN_GREETING.closingWish}
        </p>
      </div>

      {/* PHẦN FOOTER THIỆP: Nút Sunset & Flora mở album ảnh tương tác */}
      <footer
        style={{
          marginTop: '28px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(244, 215, 161, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        {/* Nút bấm tương tác Sunset & Flora mở Album ảnh */}
        <button
          type="button"
          onClick={onOpenGallery}
          aria-label="Mở album khoảnh khắc hoàng hôn và hoa của Tiên"
          className="sunset-flora-action-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 12px',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 248, 240, 0.9)',
            border: '1px solid rgba(244, 215, 161, 0.6)',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            textAlign: 'left',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.borderColor = 'var(--color-dusty-rose)';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(189, 126, 139, 0.25)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 248, 240, 0.9)';
            e.currentTarget.style.borderColor = 'rgba(244, 215, 161, 0.6)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'none';
          }}
        >
          <span style={{ fontSize: '1.3rem' }} role="img" aria-label="Máy ảnh hoàng hôn">
            📸
          </span>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--color-warm-brown)', fontSize: '0.82rem' }}>
              Sunset & Flora ✨
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--color-dusty-rose)' }}>
              Nhấn để xem album ảnh
            </div>
          </div>
        </button>

        {/* Lời chúc kết thân ái */}
        <div style={{ textAlign: 'right' }}>
          <div
            style={{
              fontFamily: 'var(--font-cursive)',
              fontSize: '1.35rem',
              color: 'var(--color-dusty-rose)',
              letterSpacing: '0.02em',
            }}
          >
            {MAIN_GREETING.signOff} ✨
          </div>
        </div>
      </footer>
    </article>
  );
};
