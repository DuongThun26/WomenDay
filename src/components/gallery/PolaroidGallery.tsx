import React, { useState } from 'react';

interface PolaroidGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PhotoCard {
  id: string;
  title: string;
  subtitle: string;
  timeTag: string;
  quote: string;
  imageSrc: string;
  accentColor: string;
  svgScene: React.ReactNode;
}

export const PolaroidGallery: React.FC<PolaroidGalleryProps> = ({ isOpen, onClose }) => {
  const [activePhoto, setActivePhoto] = useState<number>(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const photos: PhotoCard[] = [
    {
      id: 'photo-sunset',
      title: 'Hoàng Hôn 17:30',
      subtitle: 'Golden Hour Silhouette',
      timeTag: 'Film',
      quote: '“Một buổi chiều đẹp, một chút nắng và một tấm ảnh xinh. Chúc Tiên ngày nào cũng có những niềm vui nho nhỏ như vậy nhé!”',
      imageSrc: '/assets/images/sunset.jpg',
      accentColor: '#F2B49B',
      svgScene: (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="polaroid-sunset" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF3E0" />
              <stop offset="40%" stopColor="#F8B195" />
              <stop offset="75%" stopColor="#C06C84" />
              <stop offset="100%" stopColor="#6C5B7B" />
            </linearGradient>
            <radialGradient id="sun-glow" cx="60%" cy="50%" r="40%">
              <stop offset="0%" stopColor="#FFF9E6" />
              <stop offset="50%" stopColor="#F4D7A1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F2B49B" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="320" height="220" fill="url(#polaroid-sunset)" />
          <circle cx="190" cy="95" r="45" fill="url(#sun-glow)" />
          {/* Silhouette đồi và cành hoa xa */}
          <path d="M 0 180 Q 90 150 180 170 Q 250 185 320 160 L 320 220 L 0 220 Z" fill="#3B2E2A" opacity="0.9" />
          <path d="M 40 220 Q 55 140 85 110 Q 95 140 90 220 Z" fill="#2E201B" />
          <path d="M 75 110 Q 55 85 45 95 Q 65 105 75 110 Z" fill="#2E201B" />
          <path d="M 240 220 Q 255 130 270 95 Q 285 130 280 220 Z" fill="#2E201B" />
        </svg>
      ),
    },
    {
      id: 'photo-flora',
      title: 'Bình Hoa',
      subtitle: 'Artistic Floral Arrangement',
      timeTag: 'Studio Lighting',
      quote: '“Mong bạn sẽ luôn giữ được nét rất riêng của mình như cách mà bạn cắm bình hoa này.” 🌷',
      imageSrc: '/assets/images/flowers.jpg',
      accentColor: '#7EA6C8',
      svgScene: (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="flora-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF8F0" />
              <stop offset="60%" stopColor="#F4E8DC" />
              <stop offset="100%" stopColor="#E2D4C6" />
            </linearGradient>
            <radialGradient id="hydrangea-cluster" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#A8C4DF" />
              <stop offset="80%" stopColor="#6F98C4" />
              <stop offset="100%" stopColor="#4A75A0" />
            </radialGradient>
          </defs>
          <rect width="320" height="220" fill="url(#flora-bg)" />
          {/* Chiếc bình gốm mộc */}
          <path d="M 135 150 C 130 170 125 200 135 210 L 185 210 C 195 200 190 170 185 150 Z" fill="#BD7E8B" opacity="0.85" />
          {/* Cụm cẩm tú cầu xanh */}
          <circle cx="130" cy="115" r="38" fill="url(#hydrangea-cluster)" opacity="0.9" />
          <circle cx="145" cy="100" r="12" fill="#E1EDF8" opacity="0.8" />
          <circle cx="120" cy="120" r="10" fill="#E1EDF8" opacity="0.8" />
          {/* Hoa thủy tiên vươn cao */}
          <line x1="160" y1="150" x2="195" y2="70" stroke="#5D7A62" strokeWidth="3" />
          <circle cx="195" cy="70" r="18" fill="#FFFDF8" stroke="#E8D9C5" strokeWidth="1" />
          <circle cx="195" cy="70" r="6" fill="#F89B29" />
        </svg>
      ),
    },
    {
      id: 'photo-portrait',
      title: 'Khoảnh Khắc Của Tiên',
      subtitle: 'Memories Through The Lens',
      timeTag: 'Warm Memories • 20.10',
      quote: '“Mong mỗi ngày của Tiên đều có thật nhiều bức ảnh đẹp để ngắm nhìn, và nụ cười rạng ngời luôn ở trên môi!”',
      imageSrc: '/assets/images/portrait.jpg',
      accentColor: '#BD7E8B',
      svgScene: (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="memory-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF0F5" />
              <stop offset="50%" stopColor="#FDE2E8" />
              <stop offset="100%" stopColor="#F5D0D9" />
            </linearGradient>
          </defs>
          <rect width="320" height="220" fill="url(#memory-bg)" />
          {/* Máy ảnh Vintage 35mm ở trung tâm */}
          <g transform="translate(100, 55)">
            <rect x="0" y="25" width="120" height="80" rx="10" fill="#3B2E2A" />
            <rect x="10" y="32" width="100" height="66" rx="6" fill="#5C453C" />
            <rect x="15" y="15" width="30" height="12" rx="3" fill="#C98A4B" />
            <circle cx="60" cy="65" r="28" fill="#2E201B" stroke="#D4A373" strokeWidth="3" />
            <circle cx="60" cy="65" r="20" fill="#1C1412" />
            <circle cx="54" cy="59" r="6" fill="#FFFFFF" opacity="0.8" />
            <circle cx="95" cy="38" r="5" fill="#C98A4B" />
          </g>
          <text x="160" y="180" textAnchor="middle" fill="#6B5147" fontFamily="var(--font-serif-display)" fontSize="16" fontStyle="italic">
            Capture every little joy ✨
          </text>
        </svg>
      ),
    },
  ];

  const currentPhoto = photos[activePhoto];
  const hasImageFailed = failedImages[currentPhoto.id];

  return (
    <div
      className="polaroid-gallery-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Album ảnh Sunset & Flora của Mai Thủy Tiên"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 120,
        backgroundColor: 'rgba(40, 28, 24, 0.65)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'cardAppear 0.4s ease-out forwards',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '520px',
          backgroundColor: '#FFFDF9',
          borderRadius: '24px',
          border: '1.5px solid var(--color-card-border)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.25), 0 0 40px rgba(244, 215, 161, 0.4)',
          padding: 'clamp(20px, 4vw, 32px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Nút đóng */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng album"
          style={{
            position: 'absolute',
            top: '16px',
            right: '18px',
            background: 'none',
            border: 'none',
            fontSize: '1.25rem',
            color: 'var(--color-text-muted)',
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: '6px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-dusty-rose)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
        >
          ✕
        </button>

        {/* Tiêu đề Modal */}
        <div style={{ textAlign: 'center', marginBottom: '18px' }}>
          <div
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-accent)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
            }}
          >
            ✦ Sunset & Flora Album ✦
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: '1.65rem',
              fontWeight: 600,
              color: '#2E201B',
              margin: '4px 0',
            }}
          >
            Bộ Sưu Tập Khoảnh Khắc
          </h3>
          <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)' }}>
            Những bức ảnh hoàng hôn và đóa hoa dành tặng cho Tiên
          </p>
        </div>

        {/* KHUNG ẢNH POLAROID NGHỆ THUẬT */}
        <div
          className="polaroid-frame"
          style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            padding: '14px 14px 22px 14px',
            borderRadius: '12px',
            boxShadow: '0 12px 30px rgba(84, 53, 38, 0.12), 0 1px 3px rgba(0,0,0,0.06)',
            border: '1px solid rgba(244, 215, 161, 0.4)',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Vùng ảnh: ưu tiên ảnh trong public/assets/images/, tự động fallback nếu chưa có file */}
          <div
            style={{
              width: '100%',
              aspectRatio: '16/11',
              borderRadius: '6px',
              overflow: 'hidden',
              backgroundColor: '#F7EDE2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {!hasImageFailed ? (
              <img
                src={currentPhoto.imageSrc}
                alt={currentPhoto.title}
                onError={() =>
                  setFailedImages((prev) => ({ ...prev, [currentPhoto.id]: true }))
                }
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            ) : (
              currentPhoto.svgScene
            )}
          </div>

          {/* Chân ảnh Polaroid */}
          <div style={{ marginTop: '14px', textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#3B2E2A',
              }}
            >
              {currentPhoto.title}
            </div>
            <div
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-gold-accent)',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                margin: '2px 0 8px',
              }}
            >
              {currentPhoto.timeTag}
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                lineHeight: 1.6,
                color: '#5C453C',
                fontStyle: 'italic',
                padding: '0 10px',
              }}
            >
              {currentPhoto.quote}
            </p>
          </div>
        </div>

        {/* CÁC NÚT CHUYỂN ẢNH */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '18px',
          }}
        >
          {photos.map((photo, idx) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setActivePhoto(idx)}
              aria-label={`Xem tấm ảnh ${photo.title}`}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                border:
                  activePhoto === idx
                    ? '1px solid var(--color-dusty-rose)'
                    : '1px solid rgba(244, 215, 161, 0.5)',
                backgroundColor:
                  activePhoto === idx ? 'var(--color-dusty-rose)' : 'transparent',
                color: activePhoto === idx ? '#FFFFFF' : 'var(--color-text-secondary)',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-sans)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {idx === 0 ? '🌅 Hoàng hôn' : idx === 1 ? '💐 Bình hoa' : '📸 Khoảnh khắc'}
            </button>
          ))}
        </div>

        {/* Gợi ý thư mục đặt ảnh */}
        <div
          style={{
            marginTop: '14px',
            fontSize: '0.725rem',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-sans)',
            textAlign: 'center',
          }}
        >
        </div>
      </div>
    </div>
  );
};
