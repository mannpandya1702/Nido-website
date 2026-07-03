"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { clsx } from "@/lib/clsx";

// deterministic pseudo-random so SSR and client render identically
const rand = (i: number, s: number) => {
  const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

function BeanShape({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size * 1.38}
      viewBox="0 0 24 33"
      fill="currentColor"
      className="animate-floaty"
      style={{ animationDuration: `${5 + (size % 4)}s` }}
    >
      <ellipse cx="12" cy="16.5" rx="8.2" ry="13.5" />
      <path
        d="M12 4C9 8.5 9 24.5 12 29"
        stroke="rgba(20,20,14,0.45)"
        strokeWidth="1.7"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Bean({
  i,
  progress,
}: {
  i: number;
  progress: MotionValue<number>;
}) {
  const left = rand(i, 1) * 100;
  const size = 9 + rand(i, 2) * 15;
  const startY = -14 - rand(i, 3) * 24;
  const fall = 140 + rand(i, 4) * 300;
  const rot = (rand(i, 5) > 0.5 ? 1 : -1) * (140 + rand(i, 6) * 240);
  const driftX = (rand(i, 7) - 0.5) * 70;
  const opacity = 0.1 + rand(i, 8) * 0.24;
  const tilt = (rand(i, 9) - 0.5) * 40;

  const y = useTransform(progress, [0, 1], [startY, startY + fall]);
  const x = useTransform(progress, [0, 1], [0, driftX]);
  const rotate = useTransform(progress, [0, 1], [tilt, tilt + rot]);

  return (
    <motion.span
      aria-hidden
      className="absolute top-0 block will-change-transform"
      style={{ left: `${left}%`, x, y, rotate, opacity }}
    >
      <BeanShape size={size} />
    </motion.span>
  );
}

/** A subtle layer of coffee beans that drift down as the section scrolls by. */
export function CoffeeBeans({
  count = 12,
  className,
  color = "text-espresso-800",
}: {
  count?: number;
  className?: string;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={ref}
      aria-hidden
      className={clsx(
        "pointer-events-none absolute inset-0 overflow-hidden",
        color,
        className,
      )}
    >
      {!reduce &&
        Array.from({ length: count }).map((_, i) => (
          <Bean key={i} i={i} progress={scrollYProgress} />
        ))}
    </div>
  );
}
