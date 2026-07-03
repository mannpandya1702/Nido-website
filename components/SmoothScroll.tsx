"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Weighted, inertial page scrolling for a premium feel.
 * Disabled entirely when the visitor prefers reduced motion.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        // snappier than the default so wheel scrolling feels responsive,
        // not floaty/laggy on laptops
        lerp: 0.16,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
