import React, { useEffect, useRef } from 'react';
import type { FlowerConfig } from '../../types/flower';

interface FlowerMessageProps {
  flower: FlowerConfig | null;
  anchorRect: DOMRect | null;
  onClose: () => void;
}

export const FlowerMessage: React.FC<FlowerMessageProps> = ({ flower, anchorRect, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!flower || !flower.message) return null;

  // Tính toán vị trí hiển thị khéo léo để không tràn màn hình
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
  const isMobile = screenWidth < 768;

  let top = 0;
  let left = 0;

  if (anchorRect) {
    if (isMobile) {
      top = Math.max(80, Math.min(anchorRect.top - 110, window.innerHeight - 200));
      left = Math.max(16, Math.min(anchorRect.left - 40, screenWidth - 300));
    } else {
      top = Math.max(100, anchorRect.top - 130);
      left = Math.max(20, Math.min(anchorRect.left - 60, screenWidth - 340));
    }
  }

  return (
    <div
      ref={popupRef}
      role="dialog"
      aria-modal="false"
      aria-label="Thông điệp hoa"
      className="flower-message-bubble"
      style={{
        position: 'fixed',
        top: `${top}px`,
        left: `${left}px`,
        maxWidth: isMobile ? 'calc(100vw - 32px)' : '320px',
        backgroundColor: 'var(--color-card-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(244, 215, 161, 0.75)',
        boxShadow: 'var(--shadow-card), 0 0 20px rgba(244, 215, 161, 0.35)',
        borderRadius: '16px',
        padding: '14px 18px',
        zIndex: 80,
        animation: 'cardAppear 0.35s var(--ease-out-gentle) forwards',
        color: 'var(--color-text-primary)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
        <span style={{ fontSize: '1.25rem', lineHeight: 1 }} aria-hidden="true">
          ✨
        </span>
        <p
          style={{
            flex: 1,
            fontSize: '0.925rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            lineHeight: 1.5,
            color: 'var(--color-text-primary)',
          }}
        >
          {flower.message}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng thông điệp"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            lineHeight: 1,
            color: 'var(--color-text-muted)',
            padding: '2px 4px',
            borderRadius: '4px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-dusty-rose)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
        >
          ✕
        </button>
      </div>
      <div
        style={{
          marginTop: '6px',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-serif-display)',
          fontStyle: 'italic',
          color: 'var(--color-gold-accent)',
          textAlign: 'right',
        }}
      >
        — Golden Hour Bloom
      </div>
    </div>
  );
};
