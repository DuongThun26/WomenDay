export type FlowerType = 
  | 'tulip' 
  | 'rose' 
  | 'daisy' 
  | 'cherryBlossom' 
  | 'fantasy' 
  | 'hydrangea' 
  | 'narcissus';

export type FlowerLayer = 'back' | 'mid' | 'front';

export type FlowerColorVariant = 
  | 'blushPink'
  | 'champagne'
  | 'peach'
  | 'dustyRose'
  | 'mauve'
  | 'warmIvory'
  | 'goldenGlow'
  | 'hydrangeaBlue'
  | 'hydrangeaSoft'
  | 'narcissusGold'
  | 'rubyRose';

export interface FlowerConfig {
  id: string;
  type: FlowerType;
  x: number;          // Vị trí ngang (%)
  y: number;          // Vị trí dọc (%) từ đáy hoặc đỉnh
  size: number;       // Kích thước chuẩn tính theo px (scale responsive)
  rotation: number;   // Góc nghiêng ban đầu (deg)
  colorVariant: FlowerColorVariant;
  layer: FlowerLayer;
  delay: number;      // Độ trễ bloom animation (s)
  duration?: number;  // Thời gian bung nở (s)
  interactive?: boolean; // Cho phép bấm để xem thông điệp
  message?: string;   // Lời chúc nhỏ khi bấm vào
  ariaLabel?: string; // Tên accessible
}

export interface FlowerWish {
  id: string;
  title: string;
  message: string;
  icon?: string;
}
