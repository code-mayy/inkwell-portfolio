import { useEffect, useRef } from 'react';

interface NameRainProps {
  inverted?: boolean;
}

export const NameRain = ({ inverted = false }: NameRainProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const name = "ABHINMRAJ";
  const columns = 20;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing columns
    container.innerHTML = '';

    // Create columns
    for (let i = 0; i < columns; i++) {
      const column = document.createElement('div');
      column.className = 'name-column';
      column.style.left = `${(i / columns) * 100}%`;
      column.style.animationDelay = `${Math.random() * 5}s`;
      column.style.animationDuration = `${8 + Math.random() * 4}s`;
      
      // Create repeated name characters vertically
      let content = '';
      for (let j = 0; j < 30; j++) {
        const char = name[j % name.length];
        content += `<span style="animation-delay: ${j * 0.1}s">${char}</span>`;
      }
      column.innerHTML = content;
      container.appendChild(column);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`name-rain ${inverted ? 'name-rain-inverted' : ''}`}
      aria-hidden="true"
    />
  );
};
