"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { clsx } from "@/lib/clsx";

/** A card that tilts gently toward the cursor. No-op on touch / reduced motion. */
export function TiltCard({
  children,
  className,
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), {
    stiffness: 200,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), {
    stiffness: 200,
    damping: 18,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: reduce ? 0 : rx, rotateY: reduce ? 0 : ry, transformPerspective: 900 }}
      className={clsx("[transform-style:preserve-3d]", className)}
    >
      {children}
    </motion.div>
  );
}
