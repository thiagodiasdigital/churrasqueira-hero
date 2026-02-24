"use client";

interface ScrollIndicatorProps {
  opacity: number;
}

export function ScrollIndicator({ opacity }: ScrollIndicatorProps) {
  return (
    <div
      className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      style={{ opacity }}
      aria-hidden={opacity === 0}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
          Role para descobrir
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="motion-safe:animate-bounce"
          aria-hidden="true"
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="var(--color-text-secondary)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
