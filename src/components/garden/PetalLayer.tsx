import React, { useMemo } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface PetalItemConfig {
  id: number;
  startX: number;     // % ngang
  driftX: number;     // px trôi
  size: number;       // px
  duration: number;   // giây
  delay: number;      // giây
  variant: 'blush' | 'peach' | 'champagne';
  animationType: 'petalFall1' | 'petalFall2';
}

export const PetalLayer: React.FC = () => {
  const isReducedMotion = useReducedMotion();

  // Tạo cố định danh sách 14 cánh hoa trôi tự nhiên có chiều sâu
  const petals = useMemo<PetalItemConfig[]>(() => {
    const variants: ('blush' | 'peach' | 'champagne')[] = ['blush', 'peach', 'champagne', 'blush'];
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      startX: 5 + (i * 7.2) % 90,
      driftX: 50 + (i * 15) % 90,
      size: 14 + (i * 3) % 18,
      duration: 11 + (i * 1.5) % 8,
      delay: (i * 0.9) % 10,
      variant: variants[i % variants.length],
      animationType: i % 2 === 0 ? 'petalFall1' : 'petalFall2',
    }));
  }, []);

  if (isReducedMotion) return null;

  return (
    <div
      className="petals-falling-container"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 45,
        overflow: 'hidden',
      }}
    >
      {petals.map((petal) => {
        const fillColor =
          petal.variant === 'peach'
            ? 'rgba(242, 180, 155, 0.75)'
            : petal.variant === 'champagne'
            ? 'rgba(244, 215, 161, 0.72)'
            : 'rgba(233, 165, 178, 0.78)';

        return (
          <div
            key={petal.id}
            className="petal-item"
            style={{
              position: 'absolute',
              width: `${petal.size}px`,
              height: `${petal.size * 1.3}px`,
              pointerEvents: 'none',
              animation: `${petal.animationType} ${petal.duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${petal.delay}s infinite`,
              ['--start-x' as string]: `${petal.startX}%`,
              ['--drift-x' as string]: `${petal.driftX}px`,
            }}
          >
            <svg
              viewBox="0 0 20 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: '100%',
                height: '100%',
                filter: 'drop-shadow(0 2px 4px rgba(107, 81, 71, 0.1))',
              }}
            >
              {/* Hình dáng cong tự nhiên của cánh hoa anh đào / cánh tulip rơi */}
              <path
                d="M 10 0 C 18 6 22 18 14 26 C 10 28 8 28 4 24 C -2 18 2 6 10 0 Z"
                fill={fillColor}
              />
              <path
                d="M 10 4 C 11 10 11 18 9 24"
                stroke="rgba(255, 255, 255, 0.55)"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};
