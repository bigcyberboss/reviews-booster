"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--spotlight-x", `${x}px`);
    el.style.setProperty("--spotlight-y", `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`glass-card group ${className}`}
    >
      <div
        className="spotlight"
        style={{
          background:
            "radial-gradient(300px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), var(--accent-subtle), transparent 60%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
