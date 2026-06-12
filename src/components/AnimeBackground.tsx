"use client";

import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

export default function AnimeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create a 15x15 grid of dots
    const columns = 15;
    const rows = 15;
    const total = columns * rows;
    
    // Clear the container
    containerRef.current.innerHTML = '';
    
    // Set grid styles
    containerRef.current.style.display = 'grid';
    containerRef.current.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    containerRef.current.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    containerRef.current.style.gap = '20px';
    containerRef.current.style.width = 'fit-content';
    containerRef.current.style.opacity = '0.3';

    // Add dots
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('div');
      dot.classList.add('anime-dot');
      dot.style.width = '4px';
      dot.style.height = '4px';
      dot.style.backgroundColor = 'currentColor';
      dot.style.borderRadius = '50%';
      containerRef.current.appendChild(dot);
    }

    // Anime.js staggering animation (v4 syntax)
    animate('.anime-dot', {
      scale: [0.1, 1],
      opacity: [0.1, 0.8],
      delay: stagger(100, {grid: [columns, rows], from: 'center'}),
      duration: 1200,
      loop: true,
      direction: 'alternate',
      ease: 'outSine'
    });
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
      <div 
        ref={containerRef} 
        className="text-[#3fbfb8] transition-colors"
      />
    </div>
  );
}
