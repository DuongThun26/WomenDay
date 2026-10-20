import React, { useId } from 'react';
import type { FlowerColorVariant } from '../../../types/flower';

interface FlowerSvgProps {
  variant: FlowerColorVariant;
  className?: string;
  hasStem?: boolean;
}

export const TulipSvg: React.FC<FlowerSvgProps> = ({ variant, className, hasStem = true }) => {
  const reactId = useId();
  // Bảng gradient màu sắc cho các cánh hoa tulip
  const getGradientColors = (v: FlowerColorVariant) => {
    switch (v) {
      case 'champagne':
        return { start: '#FFF3DC', mid: '#F4D7A1', end: '#E6BC77', shadow: '#CFA055' };
      case 'peach':
        return { start: '#FFEBE4', mid: '#F2B49B', end: '#DF8D72', shadow: '#C66C50' };
      case 'mauve':
        return { start: '#F5EDF7', mid: '#A78AAB', end: '#87678B', shadow: '#6B4D6F' };
      case 'dustyRose':
        return { start: '#FCEEF1', mid: '#BD7E8B', end: '#A0616E', shadow: '#844754' };
      case 'blushPink':
      default:
        return { start: '#FFF0F3', mid: '#E9A5B2', end: '#D47E8F', shadow: '#B55B6E' };
    }
  };

  const colors = getGradientColors(variant);
  const gradId = `tulip-grad-${variant}-${reactId.replace(/:/g, '')}`;

  return (
    <svg
      viewBox={hasStem ? "0 0 120 220" : "0 0 100 120"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Gradient cánh chính */}
        <linearGradient id={`${gradId}-main`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.start} />
          <stop offset="55%" stopColor={colors.mid} />
          <stop offset="100%" stopColor={colors.end} />
        </linearGradient>

        {/* Gradient bóng cánh sau */}
        <linearGradient id={`${gradId}-back`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors.mid} />
          <stop offset="100%" stopColor={colors.shadow} />
        </linearGradient>

        {/* Gradient thân cành */}
        <linearGradient id={`${gradId}-stem`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9BAE8A" />
          <stop offset="60%" stopColor="#678363" />
          <stop offset="100%" stopColor="#405746" />
        </linearGradient>

        {/* Gradient lá xanh */}
        <linearGradient id={`${gradId}-leaf`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#AEC09E" />
          <stop offset="60%" stopColor="#7E9B79" />
          <stop offset="100%" stopColor="#405746" />
        </linearGradient>
      </defs>

      {/* THÂN VÀ LÁ CỦA HOA TULIP */}
      {hasStem && (
        <g className="flower-stem-group">
          {/* Lá trái ôm thân */}
          <path
            d="M 58 135 C 30 145 15 175 10 205 C 24 195 44 175 58 155 Z"
            fill={`url(#${gradId}-leaf)`}
            opacity="0.9"
          />
          {/* Lá phải dài thanh thoát */}
          <path
            d="M 62 120 C 85 130 105 160 110 195 C 92 185 75 165 62 140 Z"
            fill={`url(#${gradId}-leaf)`}
            opacity="0.95"
          />
          {/* Thân dài mềm mại */}
          <path
            d="M 60 70 Q 58 130 60 215"
            stroke={`url(#${gradId}-stem)`}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </g>
      )}

      {/* BÚP HOA TULIP ÔM CÁNH HÌNH LY TINH TẾ */}
      <g transform={hasStem ? "translate(10, 10)" : "translate(0, 0)"}>
        {/* Cánh sau bên trái */}
        <path
          d="M 50 15 C 32 18 22 45 28 72 C 34 85 45 92 50 94 C 42 75 38 45 50 15 Z"
          fill={`url(#${gradId}-back)`}
          opacity="0.9"
        />
        {/* Cánh sau bên phải */}
        <path
          d="M 50 15 C 68 18 78 45 72 72 C 66 85 55 92 50 94 C 58 75 62 45 50 15 Z"
          fill={`url(#${gradId}-back)`}
          opacity="0.9"
        />
        
        {/* Cánh tiền cảnh bên trái */}
        <path
          d="M 50 8 C 24 16 12 50 24 82 C 32 94 48 98 50 98 C 38 88 28 62 38 35 C 43 23 48 14 50 8 Z"
          fill={`url(#${gradId}-main)`}
        />

        {/* Cánh tiền cảnh bên phải */}
        <path
          d="M 50 8 C 76 16 88 50 76 82 C 68 94 52 98 50 98 C 62 88 72 62 62 35 C 57 23 52 14 50 8 Z"
          fill={`url(#${gradId}-main)`}
        />

        {/* Cánh giữa trung tâm ôm trọn khối hoa */}
        <path
          d="M 50 10 C 38 25 36 65 42 88 C 45 94 50 98 50 98 C 50 98 55 94 58 88 C 64 65 62 25 50 10 Z"
          fill={`url(#${gradId}-main)`}
          stroke={colors.shadow}
          strokeWidth="0.5"
          opacity="0.98"
        />

        {/* Ánh sáng vàng dịu phản chiếu trên cánh hoa */}
        <path
          d="M 50 20 C 44 35 44 65 48 85 C 49 70 48 38 50 20 Z"
          fill="#FFFFFF"
          opacity="0.32"
        />
      </g>
    </svg>
  );
};
