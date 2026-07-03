"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
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
    >
      <ellipse cx="12" cy="16.5" rx="8.2" ry="13.5" />
      <path
        d="M12 4C9 8.5 9 24.5 12 29"
        stroke="rgba(20,20,14,0.4)"
        strokeWidth="1.7"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * A subtle layer of coffee beans that drift down as the section scrolls by.
 * Performance: the whole layer shares ONE scroll-linked transform (not one per
 * bean), and each bean's idle wobble is a cheap CSS animation. Renders nothing
 * for reduced-motion visitors.
 */
export function CoffeeBeans({
  count = 7,
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
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "16%"]);

  if (reduce) return null;

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
      <motion.div style={{ y }} className="absolute inset-0">
        {Array.from({ length: count }).map((_, i) => {
          const size = 9 + rand(i, 2) * 13;
          return (
            <span
              key={i}
              className="animate-beanspin absolute block"
              style={{
                left: `${rand(i, 1) * 95}%`,
                top: `${rand(i, 3) * 100}%`,
                opacity: 0.12 + rand(i, 8) * 0.2,
                animationDuration: `${6 + rand(i, 5) * 5}s`,
                animationDelay: `${rand(i, 6) * -8}s`,
              }}
            >
              <BeanShape size={size} />
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}
