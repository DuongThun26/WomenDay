import React, { useId } from 'react';
import type { FlowerColorVariant } from '../../../types/flower';

interface RoseSvgProps {
  variant: FlowerColorVariant;
  className?: string;
  hasStem?: boolean;
}

export const RoseSvg: React.FC<RoseSvgProps> = ({ variant, className, hasStem = true }) => {
  const reactId = useId();
  const getColors = (v: FlowerColorVariant) => {
    switch (v) {
      case 'peach':
        return { light: '#FFEFEA', mid: '#F2B49B', deep: '#D77B5D', shadow: '#AC5134' };
      case 'champagne':
        return { light: '#FFF6E5', mid: '#F4D7A1', deep: '#D8AE66', shadow: '#AB833C' };
      case 'mauve':
        return { light: '#F7EDF8', mid: '#A78AAB', deep: '#7F5E85', shadow: '#5D3B62' };
      case 'blushPink':
      case 'dustyRose':
      default:
        return { light: '#FDF0F3', mid: '#BD7E8B', deep: '#984B5B', shadow: '#70313E' };
    }
  };

  const colors = getColors(variant);
  const gradId = `rose-grad-${variant}-${reactId.replace(/:/g, '')}`;

  return (
    <svg
      viewBox={hasStem ? "0 0 130 210" : "0 0 110 110"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <radialGradient id={`${gradId}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={colors.light} />
          <stop offset="65%" stopColor={colors.mid} />
          <stop offset="100%" stopColor={colors.deep} />
        </radialGradient>
        <linearGradient id={`${gradId}-petal`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.light} />
          <stop offset="50%" stopColor={colors.mid} />
          <stop offset="100%" stopColor={colors.deep} />
        </linearGradient>
        <linearGradient id={`${gradId}-stem`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9BAE8A" />
          <stop offset="100%" stopColor="#405746" />
        </linearGradient>
      </defs>

      {/* Thân và lá hoa hồng */}
      {hasStem && (
        <g>
          {/* Lá gai hoa hồng bên trái */}
          <path
            d="M 60 125 C 38 120 22 135 15 152 C 28 152 48 142 60 135 Z"
            fill="#405746"
            opacity="0.9"
          />
          {/* Lá bên phải */}
          <path
            d="M 65 140 C 85 135 105 145 115 165 C 98 165 80 155 65 148 Z"
            fill="#405746"
            opacity="0.9"
          />
          {/* Cuống hoa */}
          <path
            d="M 62 65 Q 60 130 65 205"
            stroke={`url(#${gradId}-stem)`}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      )}

      {/* BÔNG HOA HỒNG NHIỀU LỚP CÁNH MỀM NỞ NGHỆ THUẬT */}
      <g transform={hasStem ? "translate(10, 10)" : "translate(0, 0)"}>
        {/* Lớp cánh ngoài cùng - Nở xòe nhẹ */}
        <path
          d="M 55 12 C 32 12 18 32 20 54 C 22 76 42 94 55 94 C 68 94 88 76 90 54 C 92 32 78 12 55 12 Z"
          fill={colors.deep}
          opacity="0.85"
        />

        {/* Cánh xòe phía dưới */}
        <path
          d="M 28 62 C 35 84 75 84 82 62 C 68 76 42 76 28 62 Z"
          fill={`url(#${gradId}-petal)`}
        />

        {/* Cánh ôm phía trái */}
        <path
          d="M 24 45 C 20 62 38 78 52 75 C 36 68 32 52 38 42 Z"
          fill={`url(#${gradId}-petal)`}
        />

        {/* Cánh ôm phía phải */}
        <path
          d="M 86 45 C 90 62 72 78 58 75 C 74 68 78 52 72 42 Z"
          fill={`url(#${gradId}-petal)`}
        />

        {/* Cánh ôm phía trên */}
        <path
          d="M 38 32 C 45 20 65 20 72 32 C 60 26 50 26 38 32 Z"
          fill={colors.light}
          opacity="0.9"
        />

        {/* Lớp cánh giữa cuốn xoáy nhẹ nhàng tự nhiên */}
        <path
          d="M 40 44 C 42 34 68 34 70 44 C 68 56 42 56 40 44 Z"
          fill={`url(#${gradId}-petal)`}
        />
        <path
          d="M 46 48 C 45 40 65 40 64 48 C 62 55 48 55 46 48 Z"
          fill={colors.deep}
        />

        {/* Tim búp hoa hồng trung tâm */}
        <ellipse cx="55" cy="46" rx="6" ry="4.5" fill={colors.shadow} />
        <ellipse cx="54.5" cy="45" rx="3.5" ry="2.5" fill={colors.light} opacity="0.8" />
      </g>
    </svg>
  );
};
