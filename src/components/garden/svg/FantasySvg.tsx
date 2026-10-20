import React, { useId } from 'react';
import type { FlowerColorVariant } from '../../../types/flower';

interface FantasySvgProps {
  variant: FlowerColorVariant;
  className?: string;
  hasStem?: boolean;
}

export const FantasySvg: React.FC<FantasySvgProps> = ({ className, hasStem = true }) => {
  const reactId = useId();
  const gradId = `fantasy-grad-${reactId.replace(/:/g, '')}`;

  return (
    <svg
      viewBox={hasStem ? "0 0 110 190" : "0 0 90 90"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <radialGradient id={`${gradId}-core`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FFF2D6" />
          <stop offset="75%" stopColor="#F4D7A1" />
          <stop offset="100%" stopColor="#E9A5B2" stopOpacity="0.4" />
        </radialGradient>
        <radialGradient id={`${gradId}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F4D7A1" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F4D7A1" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${gradId}-stem`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9BAE8A" />
          <stop offset="100%" stopColor="#405746" />
        </linearGradient>
      </defs>

      {/* Thân cành lấp lánh */}
      {hasStem && (
        <path
          d="M 55 55 Q 52 110 56 185"
          stroke={`url(#${gradId}-stem)`}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeDasharray="4 2"
        />
      )}

      {/* HOA PHÁT SÁNG CÁCH ĐIỆU HOÀNG HÔN */}
      <g transform={hasStem ? "translate(10, 10)" : "translate(0, 0)"}>
        {/* Quầng sáng dịu phía sau */}
        <circle cx="45" cy="45" r="38" fill={`url(#${gradId}-glow)`} />

        {/* Các cánh hoa hình hạt sương / tia sáng tỏa ra */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <path
            key={i}
            d="M 45 45 Q 40 25 45 14 Q 50 25 45 45 Z"
            fill={`url(#${gradId}-core)`}
            transform={`rotate(${deg} 45 45)`}
            opacity="0.85"
          />
        ))}

        {/* Vòng sáng trong suốt đan xen */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg, i) => (
          <path
            key={`inner-${i}`}
            d="M 45 45 Q 42 32 45 24 Q 48 32 45 45 Z"
            fill="#FFFBF2"
            transform={`rotate(${deg} 45 45)`}
            opacity="0.75"
          />
        ))}

        {/* Điểm sáng trung tâm lấp lánh */}
        <circle cx="45" cy="45" r="6" fill="#FFFFFF" />
      </g>
    </svg>
  );
};
