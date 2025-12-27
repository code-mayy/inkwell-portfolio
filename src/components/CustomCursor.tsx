import React, { useEffect, useRef } from 'react';

export const CustomCursor = () => {
    const ringRef = useRef<HTMLDivElement>(null);
    const isHovering = useRef(false);
    const isClicking = useRef(false);

    useEffect(() => {
        const ring = ringRef.current;
        if (!ring) return;

        const handleMouseMove = (e: MouseEvent) => {
            // Direct DOM update for zero latency
            // Center the 24px ring (12px offset)
            const x = e.clientX - 12;
            const y = e.clientY - 12;
            const scale = getScale();
            ring.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        };

        const handleMouseDown = () => {
            isClicking.current = true;
            forceUpdateTransform();
        };

        const handleMouseUp = () => {
            isClicking.current = false;
            forceUpdateTransform();
        };

        // Track position for updates when not moving (e.g. click in place)
        let currentX = -100;
        let currentY = -100;

        const trackPosition = (e: MouseEvent) => {
            currentX = e.clientX - 12;
            currentY = e.clientY - 12;
        };
        window.addEventListener('mousemove', trackPosition, { passive: true });

        const forceUpdateTransform = () => {
            if (!ring) return;
            const scale = getScale();
            ring.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
        };

        const getScale = () => {
            if (isClicking.current) return 0.8;
            if (isHovering.current) return 1.5;
            return 1;
        };

        const handleHoverCheck = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest('a, button, input, textarea, [role="button"], [class*="btn"], [class*="button"]');
            const newHover = !!interactive;

            if (isHovering.current !== newHover) {
                isHovering.current = newHover;
                forceUpdateTransform();
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousemove', handleHoverCheck);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', trackPosition);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousemove', handleHoverCheck);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-6 h-6 bg-white mix-blend-difference rounded-full pointer-events-none z-[9999] transition-opacity duration-200 ease-out hidden md:block"
                style={{ transform: 'translate(-100px, -100px)' }}
            />
            <style>{`
                @media (min-width: 768px) {
                    body, a, button, input, [role="button"] {
                        cursor: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
