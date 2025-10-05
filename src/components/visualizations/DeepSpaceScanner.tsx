"use client";

import { useEffect, useRef, useState } from "react";

interface DataPoint {
  category: string;
  impact: number;
}

interface Props {
  data: DataPoint[];
}

export default function DeepSpaceScanner({ data }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const animationRef = useRef<number>();
  const sweepAngleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const centerX = canvas.width / window.devicePixelRatio / 2;
    const centerY = canvas.height / window.devicePixelRatio / 2;
    const maxRadius = Math.min(centerX, centerY) - 60;
    const maxImpact = 100;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sweepAngleRef.current += 0.02;

      // Draw concentric grid circles
      for (let i = 1; i <= 4; i++) {
        const radius = (maxRadius / 4) * i;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(112, 182, 246, 0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw impact scale labels
        if (i < 4) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
          ctx.font = "10px 'Space Grotesk', sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(`${(i * 25).toString()}`, centerX, centerY - radius - 5);
        }
      }

      // Draw radial scan lines
      const angleStep = (Math.PI * 2) / data.length;
      data.forEach((_, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const endX = centerX + Math.cos(angle) * maxRadius;
        const endY = centerY + Math.sin(angle) * maxRadius;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = "rgba(112, 182, 246, 0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw radar sweep
      const sweepGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
      sweepGradient.addColorStop(0, "rgba(112, 182, 246, 0.3)");
      sweepGradient.addColorStop(0.5, "rgba(112, 182, 246, 0.15)");
      sweepGradient.addColorStop(1, "rgba(112, 182, 246, 0)");

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(sweepAngleRef.current);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, maxRadius, 0, Math.PI / 3);
      ctx.lineTo(0, 0);
      ctx.fillStyle = sweepGradient;
      ctx.fill();
      ctx.restore();

      // Draw data points (energy pulses)
      data.forEach((point, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const distance = (point.impact / maxImpact) * maxRadius;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;

        const isHovered = hoveredIndex === index;
        const pointSize = isHovered ? 10 : 7;

        // Pulsing glow effect
        const pulseOffset = Math.sin(Date.now() / 500 + index) * 3;

        // Outer glow
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, pointSize + pulseOffset + 5);
        glowGradient.addColorStop(0, "rgba(236, 72, 153, 0.8)");
        glowGradient.addColorStop(1, "rgba(236, 72, 153, 0)");

        ctx.beginPath();
        ctx.arc(x, y, pointSize + pulseOffset + 5, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Main point
        const pointGradient = ctx.createRadialGradient(x, y, 0, x, y, pointSize);
        pointGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        pointGradient.addColorStop(0.3, "rgba(236, 72, 153, 1)");
        pointGradient.addColorStop(1, "rgba(167, 139, 250, 0.5)");

        ctx.beginPath();
        ctx.arc(x, y, pointSize, 0, Math.PI * 2);
        ctx.fillStyle = pointGradient;
        ctx.fill();

        // Enhanced glow when hovered
        if (isHovered) {
          ctx.shadowBlur = 25;
          ctx.shadowColor = "rgba(236, 72, 153, 1)";
          ctx.beginPath();
          ctx.arc(x, y, pointSize, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Draw category label outside the radar
        const labelDistance = maxRadius + 25;
        const labelX = centerX + Math.cos(angle) * labelDistance;
        const labelY = centerY + Math.sin(angle) * labelDistance;

        ctx.fillStyle = isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.7)";
        ctx.font = isHovered ? "bold 11px 'Space Grotesk', sans-serif" : "10px 'Space Grotesk', sans-serif";
        ctx.textAlign = angle > -Math.PI / 2 && angle < Math.PI / 2 ? "left" : "right";
        ctx.textBaseline = "middle";
        ctx.fillText(point.category, labelX, labelY);
      });

      // Draw center point
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
      const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 5);
      centerGradient.addColorStop(0, "rgba(112, 182, 246, 1)");
      centerGradient.addColorStop(1, "rgba(112, 182, 246, 0.3)");
      ctx.fillStyle = centerGradient;
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [data, hoveredIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 60;
    const maxImpact = 100;
    const angleStep = (Math.PI * 2) / data.length;

    let foundIndex = -1;
    let minDistance = Infinity;

    data.forEach((point, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const distance = (point.impact / maxImpact) * maxRadius;
      const pointX = centerX + Math.cos(angle) * distance;
      const pointY = centerY + Math.sin(angle) * distance;

      const dx = x - pointX;
      const dy = y - pointY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 15 && dist < minDistance) {
        minDistance = dist;
        foundIndex = index;
      }
    });

    setHoveredIndex(foundIndex >= 0 ? foundIndex : null);
  };

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
        style={{ width: "100%", height: "400px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredIndex(null)}
      />
      {hoveredIndex !== null && (
        <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-3 animate-in fade-in slide-in-from-top-2">
          <div className="text-xs text-muted-foreground mb-1">📡 SCAN DETECTED</div>
          <div className="text-lg font-black mb-1" style={{ fontFamily: "var(--font-space)" }}>
            {data[hoveredIndex].category}
          </div>
          <div className="flex items-baseline gap-2">
            <div className="text-3xl font-bold text-primary">
              {data[hoveredIndex].impact}
            </div>
            <div className="text-sm text-muted-foreground">Impact Score</div>
          </div>
        </div>
      )}
    </div>
  );
}