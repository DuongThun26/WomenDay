import React, { useState } from 'react';
import { GARDEN_FLOWERS } from '../../data/flowers';
import type { FlowerConfig } from '../../types/flower';
import { Flower } from './Flower';
import { FlowerMessage } from '../controls/FlowerMessage';

interface FlowerGardenProps {
  isGardenActive: boolean;
}

export const FlowerGarden: React.FC<FlowerGardenProps> = ({ isGardenActive }) => {
  const [selectedFlower, setSelectedFlower] = useState<FlowerConfig | null>(null);
  const [collectedFlowerIds, setCollectedFlowerIds] = useState<Set<string>>(new Set());

  const interactiveFlowers = GARDEN_FLOWERS.filter((f) => f.interactive);
  const totalInteractive = interactiveFlowers.length;

  const handleSelectFlower = (flower: FlowerConfig) => {
    setSelectedFlower(flower);
    setCollectedFlowerIds((prev) => {
      const next = new Set(prev);
      next.add(flower.id);
      return next;
    });
  };

  const handleCloseMessage = () => {
    setSelectedFlower(null);
  };

  // Chia hoa theo layer để kiểm soát z-index và chiều sâu
  const backFlowers = GARDEN_FLOWERS.filter((f) => f.layer === 'back');
  const midFlowers = GARDEN_FLOWERS.filter((f) => f.layer === 'mid');
  const frontFlowers = GARDEN_FLOWERS.filter((f) => f.layer === 'front');

  return (
    <div
      className="flower-garden-stage"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Thanh chỉ dẫn tương tác khám phá hoa tinh tế */}
      {isGardenActive && (
        <div
          className="flower-collection-pill"
          style={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: 'rgba(255, 252, 248, 0.92)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid var(--color-card-border)',
            borderRadius: '999px',
            boxShadow: 'var(--shadow-soft)',
            fontSize: '0.825rem',
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-text-secondary)',
            pointerEvents: 'auto',
            animation: 'cardAppear 1s ease-out forwards',
          }}
        >
          <span aria-hidden="true" style={{ fontSize: '1rem' }}>
            🌷
          </span>
          <span>
            Chạm vào các đóa hoa quanh vườn:
            <strong style={{ color: 'var(--color-dusty-rose)', marginLeft: '4px' }}>
              {collectedFlowerIds.size}/{totalInteractive}
            </strong>
          </span>
        </div>
      )}

      {/* Lớp hậu cảnh */}
      <div
        className="garden-layer-back"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 5,
          pointerEvents: 'none',
          filter: 'blur(0.8px) saturate(0.9)',
        }}
      >
        {backFlowers.map((flower) => (
          <div key={flower.id} style={{ pointerEvents: 'auto' }}>
            <Flower
              config={flower}
              onSelect={handleSelectFlower}
              isGardenActive={isGardenActive}
            />
          </div>
        ))}
      </div>

      {/* Lớp trung cảnh */}
      <div
        className="garden-layer-mid"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 15,
          pointerEvents: 'none',
        }}
      >
        {midFlowers.map((flower) => (
          <div key={flower.id} style={{ pointerEvents: 'auto' }}>
            <Flower
              config={flower}
              onSelect={handleSelectFlower}
              isGardenActive={isGardenActive}
            />
          </div>
        ))}
      </div>

      {/* Lớp tiền cảnh */}
      <div
        className="garden-layer-front"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 35,
          pointerEvents: 'none',
        }}
      >
        {frontFlowers.map((flower) => (
          <div key={flower.id} style={{ pointerEvents: 'auto' }}>
            <Flower
              config={flower}
              onSelect={handleSelectFlower}
              isGardenActive={isGardenActive}
            />
          </div>
        ))}
      </div>

      {/* Lời chúc nổi bật khi bấm vào hoa */}
      {selectedFlower && (
        <div style={{ pointerEvents: 'auto' }}>
          <FlowerMessage
            flower={selectedFlower}
            collectedCount={collectedFlowerIds.size}
            totalInteractive={totalInteractive}
            onClose={handleCloseMessage}
          />
        </div>
      )}
    </div>
  );
};
