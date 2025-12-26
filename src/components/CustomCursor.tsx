import React, { useEffect, useRef } from 'react';

export const CustomCursor = () => {
    const ringRef = useRef<HTMLDivElement>(null);
    const isHovering = useRef(false);
    const isClicking = useRef(false);

    useEffect(() => {
        const ring = ringRef.current;
        if (!ring) return;

        const handleMouseMove = (e: MouseEvent) => {
            // Direct DOM update for zero latency (matching the previous "small circle" behavior)
            // Center the 24px ring (12px offset)
            const x = e.clientX - 12;
            const y = e.clientY - 12;

            // We use a CSS variable for position so we can separate strictly transform-based animations (scale) 
            // from positional updates, OR we just overwrite transform.
            // Overwriting transform directly is fastest but tricky if we also want scale in the same transform string.
            // Let's use the variable approach for cleaner animation composition if we can, 
            // OR just construct the string dynamically. 
            // Constructing string is safer for zero-latency + scale combinations without conflict.

            const scale = getScale();
            ring.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        };

        const handleMouseDown = (e: MouseEvent) => {
            isClicking.current = true;
            updateRingVisuals();
            // Force immediate update to apply scale
            // We need to know current mouse pos, but we don't save it in ref? 
            // Actually, mousemove happens way more often. 
            // For click reaction to be instant, we rely on the class/style update or trigger a fresh transform 
            // if we stored the coordinates.
            // To keep it simple: We rely on the visual class changes for border/color, 
            // and the next mousemove (or a manual trigger if we tracked pos) for scale.
            // BUT, if user clicks without moving, scale might not update if we only do it in mousemove.
            // Let's store position in a ref.

            forceUpdateTransform();
        };

        const handleMouseUp = () => {
            isClicking.current = false;
            updateRingVisuals();
            forceUpdateTransform();
        };

        // Track position for click updates when not moving
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
            // Hover takes precedence for size? Or click?
            // Usually Click shrinks, Hover expands.
            if (isClicking.current) return 0.8;
            if (isHovering.current) return 1.5; // Slightly smaller expand than before (was 3) to keep it responsive/controlled
            return 1;
        };

        const updateRingVisuals = () => {
            if (!ring) return;

            // Logic for visual style (border, blur, opacity) - agnostic of Transform
            // We handle Color and Border here
            if (isHovering.current) {
                // DIFFERENCE MODE: Background white + mix-blend-difference
                // This inverts the color under the cursor.
                ring.classList.add('bg-white', 'mix-blend-difference', 'border-transparent', 'scale-[1.5]');
                ring.classList.remove('bg-transparent', 'border-black', 'dark:border-white', 'bg-black/10', 'dark:bg-white/10', 'backdrop-blur-[2px]');
            } else {
                ring.classList.add('bg-transparent', 'border-black', 'dark:border-white');
                ring.classList.remove('bg-white', 'mix-blend-difference', 'border-transparent', 'scale-[1.5]');
            }

            if (isClicking.current) {
                // ring.classList.add('border-black/50', 'dark:border-white/50'); 
            }
        };

        const handleHoverCheck = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest('a, button, input, textarea, [role="button"], [class*="btn"], [class*="button"]');
            const newHover = !!interactive;

            if (isHovering.current !== newHover) {
                isHovering.current = newHover;
                updateRingVisuals();
                forceUpdateTransform(); // Trigger scale change immediately
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
                className="fixed top-0 left-0 w-6 h-6 border border-black dark:border-white rounded-full pointer-events-none z-[9998] transition-colors duration-200 ease-out will-change-transform"
                style={{ transform: 'translate(-100px, -100px)' }}
            />
            <style>{`
                body, a, button, input, [role="button"] {
                    cursor: none !important;
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
