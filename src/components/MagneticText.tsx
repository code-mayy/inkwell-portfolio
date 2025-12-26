import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MagneticTextProps {
    children: React.ReactNode;
    className?: string;
    strength?: number; // How far it moves (pixels)
    as?: any; // Component type (h1, p, div)
}

export const MagneticText = ({
    children,
    className,
    strength = 30, // Default range of interaction
    as: Component = 'div'
}: MagneticTextProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isRipple, setIsRipple] = useState(false);

    useEffect(() => {
        // Global click listener for Ripple Effect
        const handleClick = () => {
            setIsRipple(true);
            setTimeout(() => setIsRipple(false), 800); // 800ms duration
        };

        // Removed mousemove listener for "Fixed" text
        window.addEventListener('mousedown', handleClick);

        return () => {
            window.removeEventListener('mousedown', handleClick);
        };

        return () => {
            window.removeEventListener('mousemove', handleMouse);
            window.removeEventListener('mousedown', handleClick);
        };
    }, [position.x, position.y]);

    return (
        <Component
            ref={ref}
            className={cn(
                "transition-transform duration-300 ease-out will-change-transform",
                isRipple ? "animate-soft-ripple" : "",
                className
            )}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
            {children}
        </Component>
    );
};
