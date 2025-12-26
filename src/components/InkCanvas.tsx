import { useEffect, useRef, useCallback } from 'react';

interface InkDrop {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  growing: boolean;
}

export const InkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<InkDrop[]>([]);
  const animationRef = useRef<number>();

  const addDrop = useCallback((x: number, y: number) => {
    const newDrop: InkDrop = {
      x,
      y,
      radius: 0,
      maxRadius: 150 + Math.random() * 100,
      opacity: 0.8,
      growing: true,
    };
    dropsRef.current.push(newDrop);
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dropsRef.current = dropsRef.current.filter((drop) => {
      if (drop.growing) {
        drop.radius += 8;
        if (drop.radius >= drop.maxRadius) {
          drop.growing = false;
        }
      } else {
        drop.opacity -= 0.015;
      }

      if (drop.opacity <= 0) return false;

      // Draw ink splatter effect
      ctx.save();
      ctx.globalAlpha = drop.opacity;
      ctx.fillStyle = '#000000';
      
      // Main circle
      ctx.beginPath();
      ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
      ctx.fill();

      // Organic edges
      const numBlobs = 8;
      for (let i = 0; i < numBlobs; i++) {
        const angle = (i / numBlobs) * Math.PI * 2;
        const blobRadius = drop.radius * (0.3 + Math.random() * 0.4);
        const blobX = drop.x + Math.cos(angle) * drop.radius * 0.8;
        const blobY = drop.y + Math.sin(angle) * drop.radius * 0.8;
        
        ctx.beginPath();
        ctx.arc(blobX, blobY, blobRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      return true;
    });

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleClick = (e: MouseEvent) => {
      addDrop(e.clientX, e.clientY);
    };

    const handleMove = (e: MouseEvent) => {
      if (Math.random() > 0.95) {
        addDrop(e.clientX, e.clientY);
      }
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('mousemove', handleMove);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('mousemove', handleMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [addDrop, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};
