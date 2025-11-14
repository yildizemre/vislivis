import { ReactNode } from 'react';
import { useParallax } from '../hooks/useParallax';

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxLayer = ({ children, speed = 0.5, className = '' }: ParallaxLayerProps) => {
  const offset = useParallax(speed);

  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;
