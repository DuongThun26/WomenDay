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
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

  const handleSelectFlower = (flower: FlowerConfig, rect: DOMRect) => {
    setSelectedFlower(flower);
    setAnchorRect(rect);
  };

  const handleCloseMessage = () => {
    setSelectedFlower(null);
    setAnchorRect(null);
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

      {/* Lời chúc nhỏ khi bấm vào hoa */}
      {selectedFlower && (
        <div style={{ pointerEvents: 'auto' }}>
          <FlowerMessage
            flower={selectedFlower}
            anchorRect={anchorRect}
            onClose={handleCloseMessage}
          />
        </div>
      )}
    </div>
  );
};
