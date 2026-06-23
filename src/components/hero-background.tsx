"use client";

import { useEffect, useRef } from "react";

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // Noduri pe harta (poziții relative 0-1)
    const nodes = [
      { x: 0.15, y: 0.25, active: true, label: "London" },
      { x: 0.22, y: 0.30, active: true, label: "Berlin" },
      { x: 0.25, y: 0.35, active: false, label: "Paris" },
      { x: 0.45, y: 0.28, active: true, label: "Dubai" },
      { x: 0.55, y: 0.32, active: true, label: "Singapore" },
      { x: 0.60, y: 0.25, active: false, label: "Tokyo" },
      { x: 0.75, y: 0.30, active: true, label: "San Francisco" },
      { x: 0.82, y: 0.35, active: false, label: "New York" },
      { x: 0.30, y: 0.55, active: false, label: "Lagos" },
      { x: 0.50, y: 0.60, active: false, label: "Sydney" },
      { x: 0.80, y: 0.55, active: false, label: "São Paulo" },
      { x: 0.35, y: 0.45, active: true, label: "Bucharest" },
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.008;
      
      // Clear cu fade trail
      ctx.fillStyle = "rgba(5, 5, 5, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // Desenează conexiunile (rețeaua neurală)
      nodes.forEach((node, i) => {
        nodes.forEach((other, j) => {
          if (i >= j) return;
          
          const x1 = node.x * w;
          const y1 = node.y * h;
          const x2 = other.x * w;
          const y2 = other.y * h;
          
          const dist = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
          const maxDist = Math.min(w, h) * 0.4;
          
          if (dist < maxDist) {
            const opacity = (1 - dist/maxDist) * 0.12;
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        });
      });

      // Desenează nodurile
      nodes.forEach((node) => {
        const x = node.x * w;
        const y = node.y * h;
        
        if (node.active) {
          // Pulse animation pentru noduri active
          const pulse = Math.sin(time * 2) * 0.3 + 0.7;
          
          // Glow exterior
          ctx.beginPath();
          ctx.arc(x, y, 15 * pulse, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 240, 255, ${0.05 * pulse})`;
          ctx.fill();
          
          // Inel mediu
          ctx.beginPath();
          ctx.arc(x, y, 8 * pulse, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.2 * pulse})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Nucleu
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 240, 255, ${0.8 * pulse})`;
          ctx.fill();
        } else {
          // Noduri inactive (discrete)
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(136, 136, 136, 0.25)";
          ctx.fill();
        }
      });

      // Pachete de date care circulă (LED-uri roșii)
      const packetCount = 4;
      for (let i = 0; i < packetCount; i++) {
        const t = ((time * 0.3) + i / packetCount) % 1;
        const nodeIndex = Math.floor(t * nodes.length);
        const nextNodeIndex = (nodeIndex + 1) % nodes.length;
        
        const node = nodes[nodeIndex];
        const next = nodes[nextNodeIndex];
        
        // Doar între noduri active
        if (!node.active || !next.active) continue;
        
        const progress = (t * nodes.length) % 1;
        const x = node.x * w + (next.x * w - node.x * w) * progress;
        const y = node.y * h + (next.y * h - node.y * h) * progress;
        
        // Trail
        const trailLength = 20;
        const tx = x - (next.x * w - node.x * w) * (trailLength / maxDist);
        const ty = y - (next.y * h - node.y * h) * (trailLength / maxDist);
        
        const trailGradient = ctx.createLinearGradient(tx, ty, x, y);
        trailGradient.addColorStop(0, "rgba(255, 45, 85, 0)");
        trailGradient.addColorStop(1, "rgba(255, 45, 85, 0.6)");
        
        ctx.strokeStyle = trailGradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        // LED head
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 45, 85, 0.9)";
        ctx.fill();
        
        // Glow
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 45, 85, 0.15)";
        ctx.fill();
      }

      // Scan line orizontală (ca în filmele cyberpunk)
      const scanY = (time * 30) % h;
      ctx.fillStyle = "rgba(0, 240, 255, 0.03)";
      ctx.fillRect(0, scanY - 1, w, 2);

      // Grid overlay subtil
      const gridSize = 80;
      ctx.strokeStyle = "rgba(0, 240, 255, 0.015)";
      ctx.lineWidth = 0.5;
      
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
