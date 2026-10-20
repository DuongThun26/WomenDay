import React, { useState } from 'react';
import type { FlowerConfig } from '../../types/flower';
import { TulipSvg } from './svg/TulipSvg';
import { RoseSvg } from './svg/RoseSvg';
import { DaisySvg } from './svg/DaisySvg';
import { CherryBlossomSvg } from './svg/CherryBlossomSvg';
import { FantasySvg } from './svg/FantasySvg';
import { HydrangeaSvg } from './svg/HydrangeaSvg';
import { NarcissusSvg } from './svg/NarcissusSvg';

interface FlowerProps {
  config: FlowerConfig;
  onSelect?: (flower: FlowerConfig, elementRect: DOMRect) => void;
  isGardenActive?: boolean;
}

export const Flower: React.FC<FlowerProps> = ({ config, onSelect, isGardenActive = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSparkling, setIsSparkling] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!config.interactive || !onSelect) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setIsSparkling(true);
    setTimeout(() => setIsSparkling(false), 900);
    onSelect(config, rect);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if ((e.key === 'Enter' || e.key === ' ') && config.interactive && onSelect) {
      e.preventDefault();
      const rect = e.currentTarget.getBoundingClientRect();
      setIsSparkling(true);
      setTimeout(() => setIsSparkling(false), 900);
      onSelect(config, rect);
    }
  };

  // Render loại SVG tương ứng
  const renderSvg = () => {
    switch (config.type) {
      case 'tulip':
        return <TulipSvg variant={config.colorVariant} />;
      case 'rose':
        return <RoseSvg variant={config.colorVariant} />;
      case 'daisy':
        return <DaisySvg variant={config.colorVariant} />;
      case 'cherryBlossom':
        return <CherryBlossomSvg variant={config.colorVariant} />;
      case 'fantasy':
        return <FantasySvg variant={config.colorVariant} />;
      case 'hydrangea':
        return <HydrangeaSvg variant={config.colorVariant} />;
      case 'narcissus':
        return <NarcissusSvg variant={config.colorVariant} />;
      default:
        return <TulipSvg variant={config.colorVariant} />;
    }
  };

  // Tính toán vị trí theo tỷ lệ phần trăm
  const styleVariables: React.CSSProperties = {
    position: 'absolute',
    left: `${config.x}%`,
    bottom: `${config.y}%`,
    width: `${config.size}px`,
    height: 'auto',
    transformOrigin: 'bottom center',
    opacity: isGardenActive ? 1 : 0,
    animation: isGardenActive
      ? `bloomStagger 1.4s var(--ease-out-gentle) ${config.delay}s forwards, botanicalSway 6s ease-in-out ${config.delay + 1.4}s infinite alternate`
      : 'none',
    ['--rot-target' as string]: `${config.rotation}deg`,
    ['--rot-init' as string]: `${config.rotation - 15}deg`,
    zIndex: config.layer === 'back' ? 5 : config.layer === 'mid' ? 15 : 30,
    transition: 'transform 0.3s ease, filter 0.3s ease',
  };

  if (config.interactive) {
    return (
      <button
        type="button"
        className="flower-interactive-btn"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={config.ariaLabel || `Bông hoa tương tác - nhấn để xem thông điệp`}
        style={{
          ...styleVariables,
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          outline: 'none',
          filter: isHovered
            ? 'drop-shadow(0 0 12px rgba(244, 215, 161, 0.95)) brightness(1.05)'
            : 'drop-shadow(0 4px 10px rgba(64, 87, 70, 0.08))',
          transform: isHovered
            ? `scale(1.08) rotate(${config.rotation}deg)`
            : undefined,
        }}
      >
        {renderSvg()}

        {/* Sparkle bung nở khi tương tác */}
        {isSparkling && (
          <span
            className="sparkle-element"
            style={{
              position: 'absolute',
              top: '10%',
              left: '40%',
              pointerEvents: 'none',
              animation: 'sparklePop 0.8s ease-out forwards',
              fontSize: '20px',
            }}
          >
            ✨
          </span>
        )}

        {/* Chấm chỉ dẫn nhỏ tinh tế cho biết hoa có thể chạm */}
        <span
          className="flower-touch-hint"
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '8%',
            right: '8%',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-champagne)',
            boxShadow: '0 0 8px rgba(244, 215, 161, 0.9)',
            animation: 'interactiveGlow 2s infinite',
          }}
        />
      </button>
    );
  }

  // Hoa trang trí không tương tác - ẩn khỏi accessibility tree
  return (
    <div
      className="flower-decorative"
      aria-hidden="true"
      style={styleVariables}
    >
      {renderSvg()}
    </div>
  );
};
