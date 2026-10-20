import React, { useId } from 'react';
import type { FlowerColorVariant } from '../../../types/flower';

interface NarcissusSvgProps {
  variant: FlowerColorVariant;
  className?: string;
  hasStem?: boolean;
}

export const NarcissusSvg: React.FC<NarcissusSvgProps> = ({ className, hasStem = true }) => {
  const reactId = useId();
  const gradId = `narcissus-grad-${reactId.replace(/:/g, '')}`;

  // 6 góc xoay cho 6 cánh hoa thủy tiên
  const petalAngles = [0, 60, 120, 180, 240, 300];

  return (
    <svg
      viewBox={hasStem ? "0 0 120 220" : "0 0 100 100"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Gradient cánh trắng ngà ngọc trai */}
        <linearGradient id={`${gradId}-petal`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#FFF8EE" />
          <stop offset="100%" stopColor="#EFE3D3" />
        </linearGradient>

        {/* Gradient cốc vương miện nhụy hoa vàng cam rực rỡ */}
        <radialGradient id={`${gradId}-corona`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF275" />
          <stop offset="55%" stopColor="#F9A825" />
          <stop offset="100%" stopColor="#E65100" />
        </radialGradient>

        {/* Gradient thân cành xanh thảo mộc */}
        <linearGradient id={`${gradId}-stem`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A8BE97" />
          <stop offset="100%" stopColor="#415945" />
        </linearGradient>
      </defs>

      {/* Thân và lá dẹt dài của hoa thủy tiên */}
      {hasStem && (
        <g>
          {/* Lá dẹt dài bên trái */}
          <path
            d="M 58 120 C 35 130 20 160 18 205 C 28 200 48 165 58 140 Z"
            fill="#4E6852"
            opacity="0.9"
          />
          {/* Lá dẹt dài bên phải */}
          <path
            d="M 62 110 C 82 125 102 165 106 205 C 95 195 78 155 63 130 Z"
            fill="#5D7A62"
            opacity="0.9"
          />
          {/* Cành hoa thẳng tao nhã */}
          <path
            d="M 60 65 Q 59 130 60 215"
            stroke={`url(#${gradId}-stem)`}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      )}

      {/* ĐÓA HOA THỦY TIÊN 6 CÁNH TRẮNG NGÀ VÀ NHỤY CỐC VÀNG CAM */}
      <g transform={hasStem ? "translate(10, 15)" : "translate(0, 0)"}>
        <g transform="translate(50, 50)">
          {/* 6 cánh hoa thủy tiên tỏa đều */}
          {petalAngles.map((deg, i) => (
            <path
              key={i}
              d="M 0 0 C -12 -18 -15 -34 0 -40 C 15 -34 12 -18 0 0 Z"
              fill={`url(#${gradId}-petal)`}
              stroke="#E8D9C5"
              strokeWidth="0.6"
              transform={`rotate(${deg})`}
            />
          ))}

          {/* Đường gân nhẹ trên từng cánh hoa */}
          {petalAngles.map((deg, i) => (
            <line
              key={`vein-${i}`}
              x1="0"
              y1="-5"
              x2="0"
              y2="-32"
              stroke="#DFCEB8"
              strokeWidth="0.75"
              strokeDasharray="2 1"
              transform={`rotate(${deg})`}
              opacity="0.75"
            />
          ))}

          {/* Cốc nhụy hoa vàng cam nổi bật (Corona) */}
          <circle cx="0" cy="0" r="14" fill={`url(#${gradId}-corona)`} />
          {/* Viền ren dợn sóng của cốc nhụy */}
          <circle
            cx="0"
            cy="0"
            r="13.5"
            stroke="#D84315"
            strokeWidth="1.2"
            strokeDasharray="3 1.5"
            fill="none"
          />

          {/* Ba nhị hoa nhỏ mang hạt phấn ở tâm */}
          <circle cx="-3" cy="-2" r="1.5" fill="#FFE082" />
          <circle cx="3" cy="-2" r="1.5" fill="#FFE082" />
          <circle cx="0" cy="3" r="1.5" fill="#FFE082" />
          <circle cx="0" cy="0" r="1" fill="#FFFFFF" />
        </g>
      </g>
    </svg>
  );
};
