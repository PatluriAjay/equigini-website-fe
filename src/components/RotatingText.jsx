'use client';
import { useState, useEffect } from 'react';

const phrases = [
  "Investment Opportunities",
  "Growth Potential",
  "Exclusive Deals",
  "Secure Investments"
];

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsAnimating(true);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[1.2em] overflow-hidden">
      <span 
        className={`text-purple-600 inline-block ${
          isAnimating ? 'animate-flip-in-x' : 'animate-flip-out-x'
        }`}
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden'
        }}
      >
        {phrases[currentIndex]}
      </span>
    </div>
  );
}
