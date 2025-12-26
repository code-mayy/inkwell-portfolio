import React, { useEffect, useRef, useState, useMemo } from 'react';
import { cn } from '@/lib/utils';

// Constants
const TEXT_CONTENT = "ABHIN M RAJ";
const FONT_SIZE_PX = 14;
const LINE_HEIGHT_PX = 24;
const BASE_OPACITY = 0.08;
const HOVER_OPACITY = 0.15;
const CLICK_DISTURBANCE_RADIUS = 150;
const HOVER_DISTURBANCE_RADIUS = 100;

interface ColumnProps {
    x: number;
    speed: number;
    offset: number;
    height: number;
    isMobile: boolean;
    mouseX: number;
    mouseY: number;
    clickRipple: { x: number; y: number; active: boolean };
}

const Column = React.memo(({ x, speed, offset, height, isMobile, mouseX, mouseY, clickRipple }: ColumnProps) => {
    const columnRef = useRef<HTMLDivElement>(null);

    // Create the specific style for this column (speed, offset)
    // We use inline styles for the animation duration and delay to avoid creating thousands of CSS classes
    const style = useMemo(() => ({
        left: `${x}px`,
        animationDuration: `${speed}s`,
        animationDelay: `${offset}s`,
    }), [x, speed, offset]);

    // Interaction logic
    const [interactionStyle, setInteractionStyle] = useState({});

    // Use requestAnimationFrame for interactions to keep it smooth
    useEffect(() => {
        let animationFrameId: number;

        const updateInteraction = () => {
            if (!columnRef.current) return;

            const rect = columnRef.current.getBoundingClientRect();
            const colCenterX = rect.left + rect.width / 2;

            // Skip heavy calc if off screen or far away (optimization)
            const distX = Math.abs(colCenterX - mouseX);
            const distY = Math.abs(mouseY - (rect.top + rect.height / 2)); // Rough approximation

            let opacity = BASE_OPACITY;
            let transform = '';
            let filter = '';

            // Hover Effect
            if (distX < HOVER_DISTURBANCE_RADIUS) {
                const intensity = 1 - (distX / HOVER_DISTURBANCE_RADIUS);
                opacity = BASE_OPACITY + (HOVER_OPACITY - BASE_OPACITY) * intensity;
                // Subtle skew or scale
                // transform = `scale(${1 + 0.05 * intensity})`; 
            }

            // Click Ripple Effect
            if (clickRipple.active) {
                const rippleDist = Math.sqrt(Math.pow(colCenterX - clickRipple.x, 2) + Math.pow(mouseY - clickRipple.y, 2)); // Use Mouse Y for now as approx or pass generic Y
                // Actually, for a vertical column, we care mostly about X proximity for the whole column, 
                // but strictly speaking a ripple is radial. 
                // Since the column is tall, we can just check X distance or try to be more precise?

                // Let's simplify: purely X based disturbance for the column, 
                // with a time-decaying ripple.
                // But the ripple needs to expand. 
                // For now, let's keep click effect simple: momentary flash/brightness in area.
                if (Math.abs(colCenterX - clickRipple.x) < CLICK_DISTURBANCE_RADIUS) {
                    opacity += 0.2; // Flash
                    filter = 'blur(1px)';
                }
            }

            if (opacity !== BASE_OPACITY || transform || filter) {
                setInteractionStyle({ opacity, transform, filter });
            } else {
                setInteractionStyle({ opacity: BASE_OPACITY });
            }

            animationFrameId = requestAnimationFrame(updateInteraction);
        };

        // Only run if mouse is on screen or interaction is active
        if (!isMobile) {
            updateInteraction();
        }

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [mouseX, mouseY, clickRipple, isMobile, x]);


    // Text repeats. We need enough to cover 2x height for seamless scroll (translateY -50%)
    const repeatCount = Math.ceil((height * 2) / LINE_HEIGHT_PX);
    const textString = useMemo(() => Array(repeatCount).fill(TEXT_CONTENT).join('\n'), [repeatCount]);

    return (
        <div
            ref={columnRef}
            className="absolute top-0 text-center whitespace-pre font-mono leading-6 select-none animate-vertical-scroll w-8"
            style={{ ...style, ...interactionStyle }}
        >
            {textString}
        </div>
    );
});

export const SignatureBackground = () => {
    const [columns, setColumns] = useState<any[]>([]);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const [clickRipple, setClickRipple] = useState({ x: 0, y: 0, active: false });
    const containerRef = useRef<HTMLDivElement>(null);

    // Resize Observer to handle window size changes
    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // Initialize columns
    useEffect(() => {
        if (dimensions.width === 0) return;

        const colWidth = 40; // Approx width of "ABHIN M RAJ" in vertical
        const numColumns = Math.ceil(dimensions.width / colWidth);

        // Is Mobile?
        const isMobile = dimensions.width < 768;
        const density = isMobile ? 0.5 : 1; // Less dense on mobile
        const actualColumnsCount = Math.floor(numColumns * density);

        const newColumns = [];
        const step = dimensions.width / actualColumnsCount;

        for (let i = 0; i < actualColumnsCount; i++) {
            newColumns.push({
                id: i,
                x: (i * step) + (Math.random() * 10 - 5), // Slight random jitter in X
                speed: 20 + Math.random() * 30, // Random speed between 20s and 50s
                offset: Math.random() * -50, // Start at different scroll positions
            });
        }
        setColumns(newColumns);

    }, [dimensions.width, dimensions.height]);

    // Mouse Handlers
    const handleMouseMove = (e: React.MouseEvent) => {
        // Throttling could be added here if needed
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: React.MouseEvent) => {
        setClickRipple({ x: e.clientX, y: e.clientY, active: true });
        setTimeout(() => setClickRipple(prev => ({ ...prev, active: false })), 600); // 600ms ripple duration
    };

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[-1] overflow-hidden bg-white dark:bg-black transition-colors duration-500 pointer-events-auto"
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            aria-hidden="true"
        >
            <div className="relative w-full h-full text-[10px] md:text-xs text-black dark:text-white">
                {columns.map(col => (
                    <Column
                        key={col.id}
                        x={col.x}
                        speed={col.speed}
                        offset={col.offset}
                        height={dimensions.height}
                        isMobile={dimensions.width < 768}
                        mouseX={mousePos.x}
                        mouseY={mousePos.y}
                        clickRipple={clickRipple}
                    />
                ))}
            </div>

            {/* Gradient Overlay for Fade In/Out at edges if desired, currently keeping somewhat raw/clean as requested */}
        </div>
    );
};

export default SignatureBackground;
