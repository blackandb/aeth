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

    // Noduri mai împrăștiate pe toată harta
    const nodes = [
      { x: 0.15, y: 0.20, active: true, label: "London" },
      { x: 0.25, y: 0.25, active: false, label: "Berlin" },
      { x: 0.20, y: 0.35, active: false, label: "Paris" },
      { x: 0.55, y: 0.22, active: true, label: "Dubai" },
      { x: 0.70, y: 0.28, active: true, label: "Singapore" },
      { x: 0.85, y: 0.20, active: false, label: "Tokyo" },
      { x: 0.80, y: 0.35, active: true, label: "San Francisco" },
      { x: 0.90, y: 0.30, active: false, label: "New York" },
      { x: 0.35, y: 0.55, active: false, label: "Lagos" },
      { x: 0.75, y: 0.55, active: false, label: "Sydney" },
      { x: 0.85, y: 0.65, active: false, label: "São Paulo" },
      { x: 0.45, y: 0.40, active: true, label: "Bucharest" },
      { x: 0.60, y: 0.45, active: false, label: "Mumbai" },
      { x: 0.78, y: 0.42, active: false, label: "Seoul" },
      { x: 0.92, y: 0.25, active: true, label: "Seattle" },
      { x: 0.10, y: 0.30, active: false, label: "Reykjavik" },
      { x: 0.30, y: 0.70, active: false, label: "Cape Town" },
      { x: 0.65, y: 0.60, active: false, label: "Jakarta" },
    ];

    // Texte OSINT style
    const osintTexts = [
      { text: "SIGINT", x: 0.55, y: 0.15, appear: 0, duration: 3 },
      { text: "HUMINT", x: 0.72, y: 0.18, appear: 1, duration: 2.5 },
      { text: "OSINT", x: 0.25, y: 0.28, appear: 2, duration: 3.5 },
      { text: "IMINT", x: 0.82, y: 0.22, appear: 0.5, duration: 2 },
      { text: "MASINT", x: 0.45, y: 0.35, appear: 1.5, duration: 4 },
      { text: "CYBINT", x: 0.68, y: 0.32, appear: 2.5, duration: 3 },
      { text: "FININT", x: 0.35, y: 0.45, appear: 3, duration: 2.5 },
      { text: "GEOINT", x: 0.78, y: 0.48, appear: 1.2, duration: 3 },
      { text: "ACINT", x: 0.15, y: 0.40, appear: 2.2, duration: 2 },
      { text: "TECHINT", x: 0.88, y: 0.42, appear: 0.8, duration: 3.5 },
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.012;
      
      // Clear cu fade trail
      ctx.fillStyle = "rgba(5, 5, 5, 0.12)";
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
          const maxDist = Math.min(w, h) * 0.5;
          
          if (dist < maxDist) {
            const opacity = (1 - dist/maxDist) * 0.1; // Mai subtil
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        });
      });

      // Desenează nodurile — intensitate REDUSĂ
      nodes.forEach((node) => {
        const x = node.x * w;
        const y = node.y * h;
        
        if (node.active) {
          // Pulse animation — mai subtil
          const pulse = Math.sin(time * 2) * 0.2 + 0.8;
          
          // Glow exterior — mai mic și mai transparent
          ctx.beginPath();
          ctx.arc(x, y, 12 * pulse, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 240, 255, ${0.04 * pulse})`;
          ctx.fill();
          
          // Inel mediu — mai subțire
          ctx.beginPath();
          ctx.arc(x, y, 6 * pulse, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * pulse})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Nucleu — mai mic
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 240, 255, ${0.6 * pulse})`;
          ctx.fill();
        } else {
          // Noduri inactive — foarte discrete
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(136, 136, 136, 0.15)";
          ctx.fill();
        }
      });

      // Pachete de date — LED-uri roșii MENȚIN intensitatea
      const packetCount = 6;
      for (let i = 0; i < packetCount; i++) {
        const t = ((time * 0.5) + i / packetCount) % 1;
        const nodeIndex = Math.floor(t * nodes.length);
        const nextNodeIndex = (nodeIndex + 1) % nodes.length;
        
        const node = nodes[nodeIndex];
        const next = nodes[nextNodeIndex];
        
        if (!node.active || !next.active) continue;
        
        const progress = (t * nodes.length) % 1;
        const x = node.x * w + (next.x * w - node.x * w) * progress;
        const y = node.y * h + (next.y * h - node.y * h) * progress;
        
        // Trail — menținut intens
        const trailLength = 35;
        const dx = next.x * w - node.x * w;
        const dy = next.y * h - node.y * h;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const tx = x - dx * (trailLength / dist);
        const ty = y - dy * (trailLength / dist);
        
        const trailGradient = ctx.createLinearGradient(tx, ty, x, y);
        trailGradient.addColorStop(0, "rgba(255, 45, 85, 0)");
        trailGradient.addColorStop(0.5, "rgba(255, 45, 85, 0.3)");
        trailGradient.addColorStop(1, "rgba(255, 45, 85, 0.9)");
        
        ctx.strokeStyle = trailGradient;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        // LED head — menținut luminos
        ctx.beginPath();
        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 45, 85, 0.9)";
        ctx.fill();
        
        // Glow intens — menținut
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 45, 85, 0.25)";
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 45, 85, 0.08)";
        ctx.fill();
      }

      // Texte OSINT — font mai subțire
      osintTexts.forEach((item) => {
        const cycle = (time + item.appear) % item.duration;
        const fadeIn = Math.min(cycle * 2, 1);
        const fadeOut = Math.max(0, 1 - (cycle - item.duration + 1) * 2);
        const opacity = Math.min(fadeIn, fadeOut);
        
        if (opacity > 0) {
          const x = item.x * w;
          const y = item.y * h;
          
          // Font mai subțire
          ctx.font = "300 10px 'IBM Plex Mono', monospace"; // 300 = light weight
          ctx.textAlign = "center";
          
          // Glow sub text — mai subtil
          ctx.fillStyle = `rgba(255, 45, 85, ${opacity * 0.08})`;
          ctx.fillText(item.text, x + 1, y + 1);
          
          // Text principal — mai subțire
          ctx.fillStyle = `rgba(0, 240, 255, ${opacity * 0.5})`;
          ctx.fillText(item.text, x, y);
          
          // Brackets — mai subțiri
          const textWidth = ctx.measureText(item.text).width;
          ctx.fillStyle = `rgba(0, 240, 255, ${opacity * 0.2})`;
          ctx.font = "300 9px 'IBM Plex Mono', monospace";
          ctx.fillText("[", x - textWidth/2 - 6, y);
          ctx.fillText("]", x + textWidth/2 + 6, y);
        }
      });

      // Scan line orizontală
      const scanY = (time * 40) % h;
      ctx.fillStyle = "rgba(0, 240, 255, 0.03)";
      ctx.fillRect(0, scanY - 1, w, 2);

      // Grid overlay subtil
      const gridSize = 80;
      ctx.strokeStyle = "rgba(0, 240, 255, 0.01)";
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
      style={{ opacity: 0.85 }}
    />
  );
}
