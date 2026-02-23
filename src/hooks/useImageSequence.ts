"use client";

import { useEffect, useState, useRef } from "react";
import { HERO_CONFIG, getFramePath } from "@/components/Hero/hero.constants";

interface UseImageSequenceReturn {
  frames: (ImageBitmap | null)[];
  loaded: boolean;
  loadProgress: number;
  ready: boolean;
}

export function useImageSequence(): UseImageSequenceReturn {
  const [frames, setFrames] = useState<(ImageBitmap | null)[]>(
    () => new Array(HERO_CONFIG.totalFrames).fill(null)
  );
  const [loadedCount, setLoadedCount] = useState(0);
  const [criticalReady, setCriticalReady] = useState(false);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const framesArray: (ImageBitmap | null)[] = new Array(
      HERO_CONFIG.totalFrames
    ).fill(null);

    async function loadFrame(index: number): Promise<void> {
      try {
        const response = await fetch(getFramePath(index));
        const blob = await response.blob();
        const bitmap = await createImageBitmap(blob);
        framesArray[index] = bitmap;
        setFrames([...framesArray]);
        setLoadedCount((prev) => prev + 1);
      } catch (err) {
        console.warn(`Failed to load frame ${index}:`, err);
      }
    }

    async function preload() {
      // Phase 1: load critical frames first
      await Promise.all(
        HERO_CONFIG.criticalFrames.map((idx) => loadFrame(idx))
      );
      setCriticalReady(true);

      // Phase 2: load remaining frames sequentially for smoother loading
      const remaining = Array.from(
        { length: HERO_CONFIG.totalFrames },
        (_, i) => i
      ).filter((i) => !(HERO_CONFIG.criticalFrames as readonly number[]).includes(i));

      // Load in batches of 6 for parallelism without overwhelming the browser
      const batchSize = 6;
      for (let i = 0; i < remaining.length; i += batchSize) {
        const batch = remaining.slice(i, i + batchSize);
        await Promise.all(batch.map((idx) => loadFrame(idx)));
      }
    }

    preload();
  }, []);

  return {
    frames,
    loaded: loadedCount === HERO_CONFIG.totalFrames,
    loadProgress: loadedCount / HERO_CONFIG.totalFrames,
    ready: criticalReady,
  };
}
