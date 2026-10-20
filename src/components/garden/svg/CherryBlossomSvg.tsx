import React, { useId } from 'react';
import type { FlowerColorVariant } from '../../../types/flower';

interface CherryBlossomSvgProps {
  variant: FlowerColorVariant;
  className?: string;
  hasStem?: boolean;
}

export const CherryBlossomSvg: React.FC<CherryBlossomSvgProps> = ({ className, hasStem = true }) => {
  const reactId = useId();
  const gradId = `cherry-grad-${reactId.replace(/:/g, '')}`;
  const angles = [0, 72, 144, 216, 288];

  return (
    <svg
      viewBox={hasStem ? "0 0 100 130" : "0 0 80 80"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <radialGradient id={`${gradId}-petal`} cx="50%" cy="85%" r="75%">
          <stop offset="0%" stopColor="#FFF5F7" />
          <stop offset="60%" stopColor="#F7C4CE" />
          <stop offset="100%" stopColor="#E9A5B2" />
        </radialGradient>
        <radialGradient id={`${gradId}-heart`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DE627E" />
          <stop offset="100%" stopColor="#BA3B58" />
        </radialGradient>
      </defs>

      {/* Cành rủ mềm */}
      {hasStem && (
        <path
          d="M 15 15 Q 40 30 50 55"
          stroke="#6B5147"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      )}

      {/* ĐÓA ANH ĐÀO 5 CÁNH CÓ VẾT CHẺ TINH TẾ */}
      <g transform={hasStem ? "translate(50, 55)" : "translate(40, 40)"}>
        {angles.map((deg, i) => (
          <path
            key={i}
            d="M 0 0 C -12 -12 -14 -28 -5 -32 C -1 -34 0 -29 1 -29 C 2 -29 3 -34 7 -32 C 16 -28 14 -12 0 0 Z"
            fill={`url(#${gradId}-petal)`}
            stroke="#E294A3"
            strokeWidth="0.5"
            transform={`rotate(${deg})`}
          />
        ))}

        {/* Tâm hoa và các tia nhụy */}
        <circle cx="0" cy="0" r="5" fill={`url(#${gradId}-heart)`} />
        {angles.map((deg, i) => (
          <g key={`stamen-${i}`} transform={`rotate(${deg + 36})`}>
            <line x1="0" y1="0" x2="0" y2="-10" stroke="#BA3B58" strokeWidth="0.8" />
            <circle cx="0" cy="-10.5" r="1" fill="#F4D7A1" />
          </g>
        ))}
      </g>
    </svg>
  );
};
