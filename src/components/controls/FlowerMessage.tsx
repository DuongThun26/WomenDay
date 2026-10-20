import React, { useEffect, useRef } from 'react';
import type { FlowerConfig } from '../../types/flower';

interface FlowerMessageProps {
  flower: FlowerConfig | null;
  collectedCount: number;
  totalInteractive: number;
  onClose: () => void;
}

export const FlowerMessage: React.FC<FlowerMessageProps> = ({
  flower,
  collectedCount,
  totalInteractive,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

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

  // Lấy icon và tên loài hoa tương ứng
  const getFlowerDetails = () => {
    switch (flower.type) {
      case 'hydrangea':
        return { name: 'Hoa Cẩm Tú Cầu Xanh', icon: '🪻', color: '#6F98C4' };
      case 'narcissus':
        return { name: 'Hoa Thủy Tiên Thanh Tao', icon: '🌼', color: '#E67E22' };
      case 'tulip':
        return { name: 'Hoa Tulip Hoàng Hôn', icon: '🌷', color: '#D47E8F' };
      case 'rose':
        return { name: 'Đóa Hồng Nở Rộ', icon: '🌹', color: '#BD7E8B' };
      case 'daisy':
        return { name: 'Cúc Họa Mi Trong Trẻo', icon: '🌼', color: '#D4A373' };
      case 'cherryBlossom':
        return { name: 'Hoa Anh Đào Rủ Nhẹ', icon: '🌸', color: '#E9A5B2' };
      default:
        return { name: 'Đóa Hoa Yêu Thương', icon: '✨', color: '#C98A4B' };
    }
  };

  const details = getFlowerDetails();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Lời chúc từ ${details.name}`}
      className="flower-wish-modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        backgroundColor: 'rgba(59, 46, 42, 0.55)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'cardAppear 0.3s ease-out forwards',
      }}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '420px',
          backgroundColor: '#FFFDF9',
          borderRadius: '24px',
          border: '1.5px solid rgba(244, 215, 161, 0.75)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2), 0 0 35px rgba(244, 215, 161, 0.4)',
          padding: '28px 24px 22px',
          textAlign: 'center',
          color: 'var(--color-text-primary)',
        }}
      >
        {/* Nút đóng góc phải */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng lời chúc"
          style={{
            position: 'absolute',
            top: '14px',
            right: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.15rem',
            color: 'var(--color-text-muted)',
            padding: '4px',
            borderRadius: '4px',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-dusty-rose)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
        >
          ✕
        </button>

        {/* Biểu tượng hoa bừng nở */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 248, 240, 0.95)',
            border: `2px solid ${details.color}`,
            boxShadow: `0 0 20px ${details.color}44`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            margin: '0 auto 14px',
          }}
        >
          {details.icon}
        </div>

        {/* Tên loài hoa */}
        <div
          style={{
            fontSize: '0.785rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: details.color,
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            marginBottom: '4px',
          }}
        >
          {details.name}
        </div>

        <h4
          style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: '1.45rem',
            fontWeight: 600,
            color: '#2E201B',
            marginBottom: '14px',
          }}
        >
          Thông Điệp Dành Riêng Cho Tiên
        </h4>

        {/* Nội dung lời chúc ngọt ngào */}
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: '#4A3B34',
            padding: '16px 18px',
            backgroundColor: 'rgba(255, 248, 240, 0.65)',
            borderRadius: '16px',
            border: '1px solid rgba(244, 215, 161, 0.5)',
            marginBottom: '18px',
            fontStyle: 'italic',
          }}
        >
          “{flower.message}”
        </div>

        {/* Bộ đếm hoa đã thu thập */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-sans)',
            marginBottom: '18px',
          }}
        >
          <span>🌷 Đã mở khóa:</span>
          <strong style={{ color: 'var(--color-dusty-rose)' }}>
            {collectedCount}/{totalInteractive} đóa hoa
          </strong>
        </div>

        {/* Nút bấm cảm ơn / đóng */}
        <div>
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '10px 28px',
              backgroundColor: 'var(--color-dusty-rose)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 500,
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-btn)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Nhận lời chúc ✨
          </button>
        </div>
      </div>
    </div>
  );
};
