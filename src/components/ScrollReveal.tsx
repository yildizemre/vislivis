import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '',
  threshold = 0.15,
  rootMargin = '0px',
  once = false
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-reveal');
              entry.target.classList.remove('opacity-0');
              entry.target.classList.remove('translate-x-20', '-translate-x-20', 'translate-y-20', '-translate-y-20', 'scale-95');
            }, delay);

            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.add('opacity-0');
            entry.target.classList.add(...getInitialTransforms(direction));
            entry.target.classList.remove('animate-reveal');
          }
        });
      },
      { threshold, rootMargin }
    );

    const current = elementRef.current;
    if (current) {
      current.classList.add('opacity-0');
      current.classList.add(...getInitialTransforms(direction));
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [delay, direction, once, threshold, rootMargin]);

  const getInitialTransforms = (dir: ScrollRevealProps['direction']) => {
    switch (dir) {
      case 'up':
        return ['translate-y-20'];
      case 'down':
        return ['-translate-y-20'];
      case 'left':
        return ['translate-x-20'];
      case 'right':
        return ['-translate-x-20'];
      case 'scale':
        return ['scale-95'];
      case 'fade':
      default:
        return [];
    }
  };

  const initialTransforms = getInitialTransforms(direction);

  return (
    <div
      ref={elementRef}
      className={`opacity-0 ${initialTransforms.join(' ')} transition-all duration-1000 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
