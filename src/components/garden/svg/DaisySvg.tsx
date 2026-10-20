import React, { useId } from 'react';
import type { FlowerColorVariant } from '../../../types/flower';

interface DaisySvgProps {
  variant: FlowerColorVariant;
  className?: string;
  hasStem?: boolean;
}

export const DaisySvg: React.FC<DaisySvgProps> = ({ variant, className, hasStem = true }) => {
  const reactId = useId();
  const isChampagne = variant === 'champagne';
  const petalFill = isChampagne ? '#FFF8EA' : '#FFFFFF';
  const petalStroke = isChampagne ? '#EAD6B8' : '#F2E8DC';

  const gradId = `daisy-grad-${reactId.replace(/:/g, '')}`;

  // Góc của 16 cánh hoa cúc nở rộ đều đặn
  const angles = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5];

  return (
    <svg
      viewBox={hasStem ? "0 0 120 200" : "0 0 100 100"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Gradient nhụy hoa cúc vàng rực rỡ */}
        <radialGradient id={`${gradId}-center`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF2A3" />
          <stop offset="65%" stopColor="#F4B740" />
          <stop offset="100%" stopColor="#D4881A" />
        </radialGradient>
        {/* Gradient thân cành mảnh */}
        <linearGradient id={`${gradId}-stem`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B3C4A5" />
          <stop offset="100%" stopColor="#5B7558" />
        </linearGradient>
      </defs>

      {/* Thân và lá cúc họa mi */}
      {hasStem && (
        <g>
          {/* Lá xẻ thùy nhỏ đặc trưng của cúc */}
          <path
            d="M 52 110 C 35 115 25 125 20 138 C 30 135 45 128 53 122 Z"
            fill="#5B7558"
            opacity="0.85"
          />
          <path
            d="M 55 128 C 70 130 82 142 88 155 C 75 152 64 142 55 136 Z"
            fill="#5B7558"
            opacity="0.85"
          />
          {/* Cành hoa mảnh mai */}
          <path
            d="M 53 50 Q 52 120 54 195"
            stroke={`url(#${gradId}-stem)`}
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </g>
      )}

      {/* ĐÓA CÚC HỌA MI VỚI CÁNH TRẮNG VÀ NHỤY VÀNG NẮNG */}
      <g transform={hasStem ? "translate(3, 0)" : "translate(0, 0)"}>
        {/* Nhóm 16 cánh hoa cúc xòe tròn */}
        <g transform="translate(50, 50)">
          {angles.map((deg, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="-26"
              rx="5.5"
              ry="18"
              fill={petalFill}
              stroke={petalStroke}
              strokeWidth="0.75"
              transform={`rotate(${deg})`}
              opacity="0.96"
            />
          ))}
          {/* Nhụy vàng trung tâm */}
          <circle cx="0" cy="0" r="14" fill={`url(#${gradId}-center)`} />
          {/* Chấm phấn hoa tạo texture tự nhiên */}
          <circle cx="-4" cy="-3" r="1.5" fill="#C07712" opacity="0.6" />
          <circle cx="3" cy="-4" r="1.2" fill="#C07712" opacity="0.6" />
          <circle cx="5" cy="2" r="1.4" fill="#C07712" opacity="0.6" />
          <circle cx="-2" cy="4" r="1.5" fill="#C07712" opacity="0.6" />
          <circle cx="0" cy="0" r="1.8" fill="#FFFBE6" opacity="0.7" />
        </g>
      </g>
    </svg>
  );
};
