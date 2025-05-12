
import { useEffect, useRef, useState } from 'react';

// Hook to check if element is in viewport
export const useInView = (options = {}, once = true) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (once) {
          observer.unobserve(currentRef);
        }
      } else if (!once) {
        setIsInView(false);
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, once]);

  return [ref, isInView];
};

// Hook to create typing animation
export const useTypewriter = (text: string, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Reset when text changes
    setDisplayText('');
    setIsDone(false);
    
    timeout = setTimeout(() => {
      let currentIndex = 0;
      
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsDone(true);
        }
      }, speed);
      
      return () => clearInterval(intervalId);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayText, isDone };
};

// Hook for parallax effect
export const useParallax = (
  speed = 0.1,
  direction = 'y',
  reverse = false
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollPosition = window.scrollY;
      const elementPosition = ref.current.offsetTop;
      const distance = scrollPosition - elementPosition;
      
      // Calculate parallax offset
      const parallaxOffset = distance * speed * (reverse ? -1 : 1);
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, reverse]);

  const style = {
    transform: direction === 'y' 
      ? `translate3d(0, ${offset}px, 0)` 
      : `translate3d(${offset}px, 0, 0)`,
  };

  return { ref, style };
};

// Hook for rotating text effect
export const useRotatingText = (texts: string[], interval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 500); // Duration of fade out/in animation
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return { 
    currentText: texts[currentIndex],
    isAnimating,
    index: currentIndex
  };
};

// Hook for scroll-triggered progress
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const newProgress = scrollTop / scrollHeight;
      setProgress(newProgress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
};
