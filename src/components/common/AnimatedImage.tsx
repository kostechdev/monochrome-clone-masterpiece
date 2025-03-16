
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale' | 'float';
  width?: number;
  height?: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className,
  animation = 'fade',
  width,
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getAnimationClass = () => {
    if (!isInView) return 'opacity-0';
    
    switch (animation) {
      case 'fade':
        return 'animate-fade-in';
      case 'slide-up':
        return 'animate-slide-up';
      case 'slide-in-left':
        return 'animate-slide-in-left';
      case 'slide-in-right':
        return 'animate-slide-in-right';
      case 'scale':
        return 'animate-scale-in';
      case 'float':
        return 'animate-float';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div className={cn(
      "overflow-hidden relative",
      className
    )}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />
      )}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "w-full h-auto object-cover transition-opacity duration-500",
          getAnimationClass(),
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default AnimatedImage;
