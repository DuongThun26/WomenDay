import React, { useState } from 'react';
import { EnvelopeIntro } from './components/intro/EnvelopeIntro';
import { SunsetBackground } from './components/garden/SunsetBackground';
import { FlowerGarden } from './components/garden/FlowerGarden';
import { PetalLayer } from './components/garden/PetalLayer';
import { GreetingCard } from './components/card/GreetingCard';
import { MusicToggle } from './components/controls/MusicToggle';
import { PolaroidGallery } from './components/gallery/PolaroidGallery';
import { useAudio } from './hooks/useAudio';
import './styles/global.css';

export const App: React.FC = () => {
  // Giai đoạn trải nghiệm: 'invitation' -> 'garden'
  const [isOpened, setIsOpened] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { isPlaying, audioMode, isMuted, togglePlay, toggleMute, startAudio } = useAudio();

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    // Bật giai điệu piano hoàng hôn êm dịu ngay khi người dùng nhấn mở thiệp
    startAudio();
  };

  const handleReplayIntro = () => {
    setIsOpened(false);
  };

  return (
    <div className="golden-hour-experience-root">
      {/* Lớp phủ giả lập chất liệu giấy mỹ thuật cotton */}
      <div className="paper-grain-overlay" aria-hidden="true" />

      {/* GIAI ĐOẠN A: Phong bì thư mở đầu */}
      <EnvelopeIntro onOpen={handleOpenEnvelope} isOpen={isOpened} />

      {/* LỚP HẬU CẢNH: Bầu trời hoàng hôn & ánh sáng vàng ấm */}
      <SunsetBackground />

      {/* Nút điều khiển âm thanh nổi ở góc trên bên phải */}
      <MusicToggle
        isPlaying={isPlaying}
        audioMode={audioMode}
        isMuted={isMuted}
        onTogglePlay={togglePlay}
        onToggleMute={toggleMute}
      />

      {/* KHÔNG GIAN KHU VƯỜN HOA HOÀNG HÔN & THIỆP CHÍNH */}
      <main
        className="garden-viewport-main"
        style={{
          position: 'relative',
          minHeight: '100dvh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(70px, 12vh, 100px) clamp(16px, 4vw, 32px) clamp(80px, 14vh, 120px)',
          zIndex: 10,
          boxSizing: 'border-box',
          overflowX: 'hidden',
        }}
      >
        {/* Lớp các loài hoa nở nhiều tầng (Back, Mid, Front) & theo dõi khám phá hoa */}
        <FlowerGarden isGardenActive={isOpened} />

        {/* Lớp cánh hoa rơi trôi bồng bềnh */}
        {isOpened && <PetalLayer />}

        {/* TẤM THIỆP MỸ THUẬT NGHỆ THUẬT Ở TRUNG TÂM */}
        <section
          className="card-center-stage"
          style={{
            position: 'relative',
            zIndex: 25,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <GreetingCard
            isVisible={isOpened}
            onOpenGallery={() => setIsGalleryOpen(true)}
          />
        </section>

        {/* Nút xem lại phong bì & lời cảm ơn tinh tế ở đáy trang */}
        {isOpened && (
          <footer
            style={{
              position: 'relative',
              zIndex: 30,
              marginTop: '32px',
              textAlign: 'center',
            }}
          >
            <button
              type="button"
              onClick={handleReplayIntro}
              aria-label="Đóng thiệp và xem lại phong bì"
              className="replay-intro-link"
              style={{
                background: 'rgba(255, 250, 245, 0.7)',
                border: '1px solid rgba(244, 215, 161, 0.5)',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-sans)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-text-primary)';
                e.currentTarget.style.borderColor = 'var(--color-gold-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-muted)';
                e.currentTarget.style.borderColor = 'rgba(244, 215, 161, 0.5)';
              }}
            >
              ✉️ Xem lại phong bì
            </button>
          </footer>
        )}
      </main>

      {/* MODAL ALBUM ẢNH POLAROID SUNSET & FLORA */}
      <PolaroidGallery
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </div>
  );
};

export default App;
