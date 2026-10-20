import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const SunsetBackground: React.FC = () => {
  const isReducedMotion = useReducedMotion();

  return (
    <div
      className="sunset-background-container"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: 'linear-gradient(175deg, #FFF8F0 0%, #FEE8D6 30%, #F8D2C2 60%, #E7C9D6 85%, #D4BDCE 100%)',
      }}
    >
      {/* Vầng thái dương hoàng hôn mềm mại (Golden Sun Orb) */}
      <div
        className="sun-light-glow"
        style={{
          position: 'absolute',
          top: '8%',
          right: '18%',
          width: 'clamp(280px, 40vw, 550px)',
          height: 'clamp(280px, 40vw, 550px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 248, 225, 0.9) 0%, rgba(244, 215, 161, 0.6) 45%, rgba(242, 180, 155, 0.25) 70%, transparent 100%)',
          filter: 'blur(35px)',
          opacity: 0.85,
          animation: isReducedMotion ? 'none' : 'goldenBreathing 8s ease-in-out infinite alternate',
        }}
      />

      {/* Ánh nắng xiên hoàng hôn (Sunlight Rays) */}
      <div
        className="sun-ray-effect"
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '120vw',
          height: '100vh',
          background: 'radial-gradient(ellipse at 80% 10%, rgba(255, 245, 225, 0.28) 0%, rgba(244, 215, 161, 0.12) 35%, transparent 65%)',
          transform: 'rotate(-18deg)',
          pointerEvents: 'none',
          animation: isReducedMotion ? 'none' : 'sunRayDrift 14s ease-in-out infinite',
        }}
      />

      {/* Silhouette các nhành lá thảo mộc mờ ảo ở xa (Distant Botanical Silhouettes) */}
      <svg
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          maxHeight: '35vh',
          opacity: 0.14,
          filter: 'blur(2px)',
        }}
      >
        <path
          d="M0,280 C150,260 220,180 340,240 C460,300 580,220 720,270 C860,320 980,210 1120,250 C1260,290 1350,240 1440,260 L1440,320 L0,320 Z"
          fill="#405746"
        />
        {/* Nhành lá xa bên trái */}
        <path
          d="M 80 320 Q 90 200 130 160 Q 150 200 140 320 Z"
          fill="#405746"
        />
        <path
          d="M 130 160 Q 80 140 50 170 Q 100 180 130 160 Z"
          fill="#405746"
        />
        {/* Nhành xa bên phải */}
        <path
          d="M 1320 320 Q 1300 210 1260 170 Q 1240 210 1250 320 Z"
          fill="#405746"
        />
      </svg>

      {/* Hạt bụi sáng bokeh hoàng hôn nhẹ (Ambient Bokeh Dust) */}
      <div
        className="bokeh-dust-layer"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 25% 40%, rgba(244, 215, 161, 0.18) 0, transparent 4px), radial-gradient(circle at 75% 30%, rgba(233, 165, 178, 0.22) 0, transparent 6px), radial-gradient(circle at 60% 70%, rgba(242, 180, 155, 0.18) 0, transparent 5px)',
          backgroundSize: '300px 300px',
          opacity: 0.7,
        }}
      />
    </div>
  );
};
