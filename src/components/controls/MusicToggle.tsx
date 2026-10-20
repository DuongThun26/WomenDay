import React from 'react';

interface MusicToggleProps {
  isPlaying: boolean;
  audioMode: 'idle' | 'file' | 'synth';
  isMuted: boolean;
  onTogglePlay: () => void;
  onToggleMute: () => void;
}

export const MusicToggle: React.FC<MusicToggleProps> = ({
  isPlaying,
  audioMode,
  onTogglePlay,
}) => {
  return (
    <div
      className="music-control-floating"
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <button
        type="button"
        onClick={onTogglePlay}
        aria-label={
          isPlaying
            ? 'Tạm dừng nhạc nền hoàng hôn'
            : 'Bật giai điệu piano hoàng hôn êm dịu'
        }
        className="music-toggle-btn"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          backgroundColor: 'var(--color-card-bg)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid var(--color-card-border)',
          borderRadius: '999px',
          boxShadow: 'var(--shadow-soft)',
          color: 'var(--color-text-primary)',
          fontSize: '0.85rem',
          fontFamily: 'var(--font-sans)',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.04)';
          e.currentTarget.style.borderColor = 'var(--color-gold-accent)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.borderColor = 'var(--color-card-border)';
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            animation: isPlaying ? 'interactiveGlow 2s infinite' : 'none',
          }}
        >
          {isPlaying ? '🎵' : '🔇'}
        </span>

        <span>{isPlaying ? 'Giai điệu hoàng hôn' : 'Bật âm nhạc'}</span>

        {/* Sóng âm thanh nhỏ chuyển động khi đang phát */}
        {isPlaying && (
          <span
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              alignItems: 'flex-end',
              gap: '2px',
              height: '12px',
            }}
          >
            <span
              style={{
                width: '2px',
                height: '8px',
                backgroundColor: 'var(--color-dusty-rose)',
                animation: 'sparklePop 0.8s infinite alternate',
              }}
            />
            <span
              style={{
                width: '2px',
                height: '12px',
                backgroundColor: 'var(--color-gold-accent)',
                animation: 'sparklePop 0.8s infinite alternate 0.3s',
              }}
            />
            <span
              style={{
                width: '2px',
                height: '6px',
                backgroundColor: 'var(--color-dusty-rose)',
                animation: 'sparklePop 0.8s infinite alternate 0.5s',
              }}
            />
          </span>
        )}
      </button>

      {/* Tag hiển thị chế độ âm thanh tinh tế */}
      {isPlaying && (
        <span
          className="audio-mode-badge"
          style={{
            fontSize: '0.72rem',
            color: 'var(--color-text-muted)',
            backgroundColor: 'rgba(255, 248, 240, 0.85)',
            padding: '4px 8px',
            borderRadius: '12px',
            border: '1px solid rgba(244, 215, 161, 0.4)',
          }}
        >
          {audioMode === 'synth' ? 'Acoustic Piano Lofi' : 'Audio Track'}
        </span>
      )}
    </div>
  );
};
