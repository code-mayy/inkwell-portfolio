import React, { useEffect, useRef } from 'react';

// Configuration - Soft & Calm
const PARTICLE_COUNT_DESKTOP = 130;
const PARTICLE_COUNT_MOBILE = 50;
const CONNECTION_DISTANCE = 140;

// Physics - Slower & Gentle
const AMBIENT_SPEED = 0.4; // Reduced from ~1.2
const WAVE_SPEED = 4; // Reduced from 8
const WAVE_FREQUENCY = 0.03; // Looser waves
const WAVE_AMPLITUDE = 30; // Reduced from 60 (Subtle)
const WAVE_DECAY = 0.005; // Slower fade for "Oil/Cloth" feel
const WAVE_WIDTH = 250;

// Interaction
const MOUSE_RADIUS = 180;
const MOUSE_STRENGTH = 0.3; // Gentle pull, not strong push

class Point {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    vx: number;
    vy: number;
    size: number;
    canvasWidth: number;
    canvasHeight: number;

    constructor(w: number, h: number) {
        this.canvasWidth = w;
        this.canvasHeight = h;
        this.baseX = Math.random() * w;
        this.baseY = Math.random() * h;
        this.x = this.baseX;
        this.y = this.baseY;

        // Slow drift
        this.vx = (Math.random() - 0.5) * AMBIENT_SPEED;
        this.vy = (Math.random() - 0.5) * AMBIENT_SPEED;
        this.size = Math.random() * 1.5 + 0.5; // Finer particles
    }

    update(ripples: Ripple[], mouse: { x: number, y: number }) {
        // 1. Ambient Motion (Drift)
        this.baseX += this.vx;
        this.baseY += this.vy;

        // Bounce base off walls
        if (this.baseX < 0 || this.baseX > this.canvasWidth) this.vx *= -1;
        if (this.baseY < 0 || this.baseY > this.canvasHeight) this.vy *= -1;

        let displacementX = 0;
        let displacementY = 0;

        // 2. Mouse Interaction - Gentle Magnetic Pull (Traction)
        const dxM = mouse.x - this.baseX;
        const dyM = mouse.y - this.baseY;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);

        if (distM < MOUSE_RADIUS) {
            // Push away from mouse (Repulsion)
            const force = (MOUSE_RADIUS - distM) / MOUSE_RADIUS;
            // Negative pull = Push
            const push = force * MOUSE_STRENGTH * 100; // Increased to 100 for stronger repel

            // Invert direction: Move AWAY from mouse
            displacementX -= (dxM / distM) * push;
            displacementY -= (dyM / distM) * push;
        }

        // 3. Ripple / Cloth Wave Physics
        ripples.forEach(ripple => {
            if (!ripple.active) return;

            const dx = this.baseX - ripple.x;
            const dy = this.baseY - ripple.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const distFromWaveFront = dist - ripple.radius;

            if (Math.abs(distFromWaveFront) < WAVE_WIDTH) {
                const envelope = (1 - Math.abs(distFromWaveFront) / WAVE_WIDTH);
                const strength = ripple.amplitude * envelope;

                // Soft Sine Wave
                const angle = Math.atan2(dy, dx);
                const waveForce = Math.sin(distFromWaveFront * WAVE_FREQUENCY) * strength;

                displacementX += Math.cos(angle) * waveForce;
                displacementY += Math.sin(angle) * waveForce;
            }
        });

        // 4. Apply Displacement with Ease-Out (Lerp for smoothness)
        // We target (base + displacement)
        const targetX = this.baseX + displacementX;
        const targetY = this.baseY + displacementY;

        // Smoothly interpolate current pos to target (Damping)
        // Smoothly interpolate current pos to target (Damping)
        // Increased from 0.1 to 0.2 for faster reaction
        this.x += (targetX - this.x) * 0.2;
        this.y += (targetY - this.y) * 0.2;
    }

    draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
        ctx.fill();
    }
}

class Ripple {
    x: number;
    y: number;
    radius: number;
    amplitude: number;
    active: boolean;

    constructor(x: number, y: number, strength: number = WAVE_AMPLITUDE) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.amplitude = strength;
        this.active = true;
    }

    update() {
        if (!this.active) return;
        this.radius += WAVE_SPEED;
        this.amplitude *= (1 - WAVE_DECAY);
        if (this.amplitude < 0.5 || this.radius > 2000) this.active = false;
    }

    draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
        // Very subtle ring
        const opacity = Math.min(this.amplitude / WAVE_AMPLITUDE, 0.15); // Max 0.15 opacity (very soft)
        if (opacity <= 0.01) return;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = isDark
            ? `rgba(255, 255, 255, ${opacity})`
            : `rgba(0, 0, 0, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}

export const ParticleNetwork = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ripplesRef = useRef<Ripple[]>([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const [isDark, setIsDark] = React.useState(false);

    useEffect(() => {
        const checkDarkMode = () => {
            const html = document.documentElement;
            setIsDark(html.classList.contains('dark'));
        };
        checkDarkMode();
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let particles: Point[] = [];
        let animationFrameId: number;

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            particles = [];
            const count = width < 768 ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
            for (let i = 0; i < count; i++) {
                particles.push(new Point(width, height));
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Update Ripples
            ripplesRef.current = ripplesRef.current.filter(r => r.active);
            ripplesRef.current.forEach(r => {
                r.update();
                r.draw(ctx, isDark);
            });

            // Update Particles
            const mouse = mouseRef.current;
            particles.forEach(p => {
                p.update(ripplesRef.current, mouse);
                p.draw(ctx, isDark);
            });

            // Draw Mesh
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                // Optimization: check array neighbors? No, kept simple for consistency
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DISTANCE) {
                        const opacity = 1 - (dist / CONNECTION_DISTANCE);
                        ctx.strokeStyle = isDark
                            ? `rgba(255, 255, 255, ${opacity * 0.15})` // Reduced opacity
                            : `rgba(0, 0, 0, ${opacity * 0.15})`;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        init();
        window.addEventListener('resize', init);
        render();

        return () => {
            window.removeEventListener('resize', init);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDark]);

    useEffect(() => {
        const moveHandler = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        const downHandler = (e: MouseEvent) => {
            // Stronger ripple on click (Shockwave)
            ripplesRef.current.push(new Ripple(e.clientX, e.clientY, 120));
        };
        const touchHandler = (e: TouchEvent) => {
            const touch = e.touches[0];
            ripplesRef.current.push(new Ripple(touch.clientX, touch.clientY, 120));
            mouseRef.current = { x: touch.clientX, y: touch.clientY };
        };

        window.addEventListener('mousemove', moveHandler, { passive: true });
        window.addEventListener('mousedown', downHandler);
        window.addEventListener('touchstart', touchHandler, { passive: false });

        return () => {
            window.removeEventListener('mousemove', moveHandler);
            window.removeEventListener('mousedown', downHandler);
            window.removeEventListener('touchstart', touchHandler);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-2] pointer-events-none transition-colors duration-500"
            style={{ background: isDark ? '#000000' : '#FFFFFF' }}
        />
    );
};

export default ParticleNetwork;
