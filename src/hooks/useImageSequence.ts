"use client";

import { useEffect, useState } from "react";
import {
  HERO_CONFIG,
  getFrameCandidates,
  type HeroVariant,
} from "@/components/Hero/hero.constants";

interface UseImageSequenceReturn {
  frames: (ImageBitmap | null)[];
  loaded: boolean;
  loadProgress: number;
  ready: boolean;
  variant: HeroVariant;
}

async function loadFrameBitmap(index: number, variant: HeroVariant): Promise<ImageBitmap | null> {
  for (const path of getFrameCandidates(index, variant)) {
    try {
      const response = await fetch(path);
      if (!response.ok) continue;
      const blob = await response.blob();
      return await createImageBitmap(blob);
    } catch {
      continue;
    }
  }

  return null;
}

function resolveVariant() {
  if (typeof window === "undefined") return "desktop" as HeroVariant;
  return window.innerWidth <= HERO_CONFIG.sectionHeight.mobile_breakpoint
    ? "mobile"
    : "desktop";
}

export function useImageSequence(): UseImageSequenceReturn {
  const [variant, setVariant] = useState<HeroVariant>(() => resolveVariant());
  const [frames, setFrames] = useState<(ImageBitmap | null)[]>(() => new Array(HERO_CONFIG.totalFrames).fill(null));
  const [loadedCount, setLoadedCount] = useState(0);
  const [criticalReady, setCriticalReady] = useState(false);

  useEffect(() => {
    function onResize() {
      const nextVariant = resolveVariant();
      setVariant((current) => (current === nextVariant ? current : nextVariant));
    }

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const framesArray: (ImageBitmap | null)[] = new Array(HERO_CONFIG.totalFrames).fill(null);

    setFrames(framesArray);
    setLoadedCount(0);
    setCriticalReady(false);

    async function loadFrame(index: number): Promise<void> {
      const bitmap = await loadFrameBitmap(index, variant);
      if (!bitmap || cancelled) {
        if (!bitmap) {
          console.warn(`Failed to load frame ${index} for ${variant}.`);
        }
        return;
      }

      framesArray[index] = bitmap;
      setFrames([...framesArray]);
      setLoadedCount((prev) => prev + 1);
    }

    async function preload() {
      await Promise.all(HERO_CONFIG.criticalFrames.map((idx) => loadFrame(idx)));
      if (cancelled) return;
      setCriticalReady(true);

      const remaining = Array.from({ length: HERO_CONFIG.totalFrames }, (_, i) => i).filter(
        (i) => !(HERO_CONFIG.criticalFrames as readonly number[]).includes(i)
      );

      const batchSize = 6;
      for (let i = 0; i < remaining.length; i += batchSize) {
        if (cancelled) return;
        const batch = remaining.slice(i, i + batchSize);
        await Promise.all(batch.map((idx) => loadFrame(idx)));
      }
    }

    preload();

    return () => {
      cancelled = true;
    };
  }, [variant]);

  return {
    frames,
    loaded: loadedCount === HERO_CONFIG.totalFrames,
    loadProgress: loadedCount / HERO_CONFIG.totalFrames,
    ready: criticalReady,
    variant,
  };
}
