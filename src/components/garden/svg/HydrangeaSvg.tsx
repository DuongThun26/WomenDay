import React, { useId } from 'react';
import type { FlowerColorVariant } from '../../../types/flower';

interface HydrangeaSvgProps {
  variant: FlowerColorVariant;
  className?: string;
  hasStem?: boolean;
}

export const HydrangeaSvg: React.FC<HydrangeaSvgProps> = ({ variant, className, hasStem = true }) => {
  const reactId = useId();
  const gradId = `hydrangea-grad-${reactId.replace(/:/g, '')}`;

  const isSoft = variant === 'hydrangeaSoft';
  const mainBlue = isSoft ? '#9AC0E3' : '#6F98C4';
  const lightBlue = isSoft ? '#E1EDF8' : '#C7DCF0';
  const deepBlue = isSoft ? '#5982AD' : '#3E6692';

  // Tọa độ tâm các bông hoa 4 cánh nhỏ tạo thành quả cầu cẩm tú cầu
  const florets = [
    { x: 50, y: 35, s: 0.95 },
    { x: 34, y: 45, s: 0.9 },
    { x: 66, y: 44, s: 0.9 },
    { x: 22, y: 62, s: 0.85 },
    { x: 42, y: 60, s: 1.0 },
    { x: 58, y: 60, s: 1.0 },
    { x: 78, y: 62, s: 0.85 },
    { x: 30, y: 78, s: 0.9 },
    { x: 50, y: 80, s: 0.95 },
    { x: 70, y: 78, s: 0.9 },
    { x: 50, y: 55, s: 1.05 },
  ];

  return (
    <svg
      viewBox={hasStem ? "0 0 140 210" : "0 0 120 120"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <radialGradient id={`${gradId}-petal`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={lightBlue} />
          <stop offset="70%" stopColor={mainBlue} />
          <stop offset="100%" stopColor={deepBlue} />
        </radialGradient>
        <radialGradient id={`${gradId}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C7DCF0" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#6F98C4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3E6692" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${gradId}-stem`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8DA37E" />
          <stop offset="100%" stopColor="#3E5442" />
        </linearGradient>
        <linearGradient id={`${gradId}-leaf`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9AB28C" />
          <stop offset="60%" stopColor="#53725A" />
          <stop offset="100%" stopColor="#344C3A" />
        </linearGradient>
      </defs>

      {/* Thân và 2 lá to của cẩm tú cầu */}
      {hasStem && (
        <g>
          {/* Lá trái to bản */}
          <path
            d="M 68 110 C 35 110 15 130 10 150 C 30 155 55 145 69 125 Z"
            fill={`url(#${gradId}-leaf)`}
            opacity="0.95"
          />
          {/* Gân lá */}
          <path d="M 68 110 Q 35 135 15 148" stroke="#7E9672" strokeWidth="1.2" />

          {/* Lá phải */}
          <path
            d="M 72 120 C 105 120 125 140 130 162 C 110 165 85 155 71 135 Z"
            fill={`url(#${gradId}-leaf)`}
            opacity="0.95"
          />
          <path d="M 72 120 Q 105 145 125 158" stroke="#7E9672" strokeWidth="1.2" />

          {/* Cuống hoa vững chắc */}
          <path
            d="M 70 85 Q 68 145 70 205"
            stroke={`url(#${gradId}-stem)`}
            strokeWidth="4.8"
            strokeLinecap="round"
          />
        </g>
      )}

      {/* CHÙM HOA CẨM TÚ CẦU HÌNH CẦU TRÒN ĐẦY ĐẶN */}
      <g transform={hasStem ? "translate(20, 10)" : "translate(10, 10)"}>
        {/* Quầng nền tạo khối tròn 3D */}
        <circle cx="50" cy="58" r="42" fill={`url(#${gradId}-glow)`} />

        {/* Các bông hoa 4 cánh nhỏ xếp lớp */}
        {florets.map((floret, idx) => (
          <g
            key={idx}
            transform={`translate(${floret.x}, ${floret.y}) scale(${floret.s})`}
          >
            {/* 4 cánh hoa đối xứng */}
            <path
              d="M 0 0 C -4 -10 4 -10 0 0 Z"
              fill={`url(#${gradId}-petal)`}
              transform="rotate(0)"
            />
            <path
              d="M 0 0 C -4 -10 4 -10 0 0 Z"
              fill={`url(#${gradId}-petal)`}
              transform="rotate(90)"
            />
            <path
              d="M 0 0 C -4 -10 4 -10 0 0 Z"
              fill={`url(#${gradId}-petal)`}
              transform="rotate(180)"
            />
            <path
              d="M 0 0 C -4 -10 4 -10 0 0 Z"
              fill={`url(#${gradId}-petal)`}
              transform="rotate(270)"
            />
            {/* Mắt nhụy hoa nhỏ xíu màu trắng vàng */}
            <circle cx="0" cy="0" r="1.8" fill="#FFF9E6" />
          </g>
        ))}
      </g>
    </svg>
  );
};
