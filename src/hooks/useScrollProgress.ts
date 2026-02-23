"use client";

import { useEffect, useState, useRef, type RefObject } from "react";

export function useScrollProgress(
  sectionRef: RefObject<HTMLElement | null>
): number {
  const [progress, setProgress] = useState(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    function onScroll() {
      if (rafId.current) return;

      rafId.current = requestAnimationFrame(() => {
        rafId.current = 0;
        const rect = section!.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;
        if (scrollable <= 0) {
          setProgress(0);
          return;
        }
        const raw = -rect.top / scrollable;
        setProgress(Math.min(1, Math.max(0, raw)));
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [sectionRef]);

  return progress;
}
