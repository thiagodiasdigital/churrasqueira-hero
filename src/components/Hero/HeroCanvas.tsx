"use client";

import { useEffect, useRef, useCallback } from "react";

interface HeroCanvasProps {
  frames: (ImageBitmap | null)[];
  progress: number;
  totalFrames: number;
  ready: boolean;
}

// Transition from "cover" to "contain" between these progress values
const CONTAIN_TRANSITION_START = 0.75;
const CONTAIN_TRANSITION_END = 0.95;

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * Math.min(1, Math.max(0, t));
}

export function HeroCanvas({
  frames,
  progress,
  totalFrames,
  ready,
}: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastDrawKey = useRef("");

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;

    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    // Force redraw after resize
    lastDrawKey.current = "";
  }, []);

  useEffect(() => {
    setupCanvas();
    window.addEventListener("resize", setupCanvas);
    return () => window.removeEventListener("resize", setupCanvas);
  }, [setupCanvas]);

  // Draw frame with cover→contain transition
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !ready) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const frameIndex = Math.min(
      Math.floor(progress * (totalFrames - 1)),
      totalFrames - 1
    );

    // Calculate blend factor for cover→contain transition
    let containBlend = 0;
    if (progress > CONTAIN_TRANSITION_START) {
      containBlend = Math.min(
        1,
        (progress - CONTAIN_TRANSITION_START) /
          (CONTAIN_TRANSITION_END - CONTAIN_TRANSITION_START)
      );
    }

    // Build a draw key to avoid redundant draws
    const drawKey = `${frameIndex}-${containBlend.toFixed(3)}`;
    if (drawKey === lastDrawKey.current) return;

    const img = frames[frameIndex];
    if (!img) return;

    lastDrawKey.current = drawKey;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Cover scale: fill entire canvas (may crop)
    const coverScale = Math.max(
      canvas.width / img.width,
      canvas.height / img.height
    );

    // Contain scale: fit entire image (may have black bars)
    const containScale = Math.min(
      canvas.width / img.width,
      canvas.height / img.height
    );

    // Interpolate between cover and contain
    const scale = lerp(coverScale, containScale, containBlend);

    const drawW = Math.ceil(img.width * scale);
    const drawH = Math.ceil(img.height * scale);
    const x = Math.floor((canvas.width - drawW) / 2);
    const y = Math.floor((canvas.height - drawH) / 2);

    // Clear canvas (needed when transitioning to contain — black bars appear)
    const bg = "#0A0A0A";
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(img, x, y, drawW, drawH);

    // Draw edge-fade gradients when image doesn't fill the full canvas
    const fadeSize = 120 * (window.devicePixelRatio || 1);

    // Left edge
    if (x > 0) {
      const gl = ctx.createLinearGradient(x, 0, x + fadeSize, 0);
      gl.addColorStop(0, bg);
      gl.addColorStop(1, "transparent");
      ctx.fillStyle = gl;
      ctx.fillRect(x, y, fadeSize, drawH);
    }

    // Right edge
    if (x + drawW < canvas.width) {
      const gr = ctx.createLinearGradient(x + drawW, 0, x + drawW - fadeSize, 0);
      gr.addColorStop(0, bg);
      gr.addColorStop(1, "transparent");
      ctx.fillStyle = gr;
      ctx.fillRect(x + drawW - fadeSize, y, fadeSize, drawH);
    }

    // Top edge
    if (y > 0) {
      const gt = ctx.createLinearGradient(0, y, 0, y + fadeSize);
      gt.addColorStop(0, bg);
      gt.addColorStop(1, "transparent");
      ctx.fillStyle = gt;
      ctx.fillRect(x, y, drawW, fadeSize);
    }

    // Bottom edge
    if (y + drawH < canvas.height) {
      const gb = ctx.createLinearGradient(0, y + drawH, 0, y + drawH - fadeSize);
      gb.addColorStop(0, bg);
      gb.addColorStop(1, "transparent");
      ctx.fillStyle = gb;
      ctx.fillRect(x, y + drawH - fadeSize, drawW, fadeSize);
    }
  }, [frames, progress, totalFrames, ready]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Animação de churrasqueira artesanal revelada pelo scroll — da brasa à grelha completa"
      className="absolute inset-0 h-full w-full"
    />
  );
}
