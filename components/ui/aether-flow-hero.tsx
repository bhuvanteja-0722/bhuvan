"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type AetherFlowHeroProps = {
  className?: string;
  particleDensity?: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
};

/**
 * A lightweight, red phosphor particle field across the portfolio.
 * The pointer-reactive connected points remain behind the page content.
 */
export function AetherFlowHero({
  className,
  particleDensity = 1,
}: AetherFlowHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !host || !ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const mouse = { x: -1000, y: -1000, radius: 285 };
    let particles: Particle[] = [];
    let width = 1;
    let height = 1;
    let frame = 0;
    let inView = true;

    const createParticles = () => {
      const area = width * height;
      const base = Math.round(area / 8500);
      const cap = width < 600 ? 84 : 260;
      const count = Math.max(42, Math.min(cap, Math.round(base * particleDensity)));
      particles = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.12 + Math.random() * 0.22;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.35 + Math.random() * 2,
          phase: Math.random() * Math.PI * 2,
        };
      });
    };

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
      if (reducedMotion) draw(0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
    const connection = Math.min(168, Math.max(112, width * 0.13));
      const maxDistance = connection * connection;

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          if (particle.x < 0 || particle.x > width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > height) particle.vy *= -1;

          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.hypot(dx, dy);
          if (finePointer && distance > 0 && distance < mouse.radius) {
            const force = ((mouse.radius - distance) / mouse.radius) * 5.2;
            particle.x += (dx / distance) * force;
            particle.y += (dy / distance) * force;
          }
        }

        for (let j = i + 1; j < particles.length; j += 1) {
          const neighbor = particles[j];
          const dx = particle.x - neighbor.x;
          const dy = particle.y - neighbor.y;
          const distance = dx * dx + dy * dy;
          if (distance >= maxDistance) continue;
          const proximity = 1 - Math.sqrt(distance) / connection;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(neighbor.x, neighbor.y);
          const pointerProximity = Math.max(0, 1 - Math.min(
            Math.hypot(mouse.x - particle.x, mouse.y - particle.y),
            Math.hypot(mouse.x - neighbor.x, mouse.y - neighbor.y),
          ) / mouse.radius);
          const nearPointer = pointerProximity > 0;
          ctx.strokeStyle = nearPointer
            ? `rgba(255, 175, 185, ${proximity * (0.56 + pointerProximity * 0.34)})`
            : `rgba(255, 105, 122, ${proximity * 0.36})`;
          ctx.lineWidth = nearPointer ? 1.05 + pointerProximity * 0.75 : 0.95;
          ctx.stroke();
        }

        const shimmer = reducedMotion
          ? 1
          : 0.9 + Math.sin(time * 0.001 + particle.phase) * 0.08;
        ctx.beginPath();
        const pointerDistance = Math.hypot(mouse.x - particle.x, mouse.y - particle.y);
        const pointerGlow = finePointer
          ? Math.max(0, 1 - pointerDistance / mouse.radius)
          : 0;
        ctx.arc(particle.x, particle.y, particle.radius + pointerGlow * 2.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, ${88 + (i % 4) * 13}, ${104 + (i % 3) * 10}, ${Math.min(1, shimmer + pointerGlow * 0.2)})`;
        ctx.shadowColor = pointerGlow > 0.05 ? "rgba(255, 101, 125, .95)" : "rgba(245, 34, 58, .42)";
        ctx.shadowBlur = 18 + pointerGlow * 34;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    let lastDraw = 0;
    const animate = (time: number) => {
      frame = 0;
      if (document.visibilityState !== "visible" || !inView) return;
      if (time - lastDraw >= 24) {
        draw(time);
        lastDraw = time;
      }
      if (!reducedMotion) frame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (!reducedMotion && inView && document.visibilityState === "visible" && !frame) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!finePointer) return;
      const bounds = host.getBoundingClientRect();
      mouse.x = event.clientX - bounds.left;
      mouse.y = event.clientY - bounds.top;
      if (!reducedMotion && inView && !frame) start();
    };

    const clearPointer = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") start();
      else if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    host.addEventListener("pointerleave", clearPointer);
    document.addEventListener("visibilitychange", onVisibilityChange);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
      else if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    intersectionObserver.observe(host);

    resize();
    if (!reducedMotion) start();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", clearPointer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [particleDensity]);

  return (
    <motion.canvas
      ref={canvasRef}
      aria-hidden="true"
      tabIndex={-1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
}

export default AetherFlowHero;
