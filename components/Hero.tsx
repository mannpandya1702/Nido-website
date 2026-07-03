"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { img, photos } from "@/lib/images";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-dvh items-end overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={img(photos.rooftopTerrace, 2000, 78)}
          alt="The NIDO rooftop terrace under an open evening sky"
          fill
          priority
          sizes="100vw"
          className="warm-tone object-cover"
        />
      </motion.div>

      {/* legibility washes */}
      <div className="absolute inset-0 bg-olive-950/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-olive-950/85 via-olive-950/25 to-olive-950/40" />
      <div className="grain absolute inset-0" />

      <motion.div
        style={{ y: contentY }}
        className="container-nido relative z-10 pb-16 pt-32 sm:pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow text-cream-100"
        >
          A rooftop café
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-3xl text-balance font-display text-5xl font-light leading-[0.98] text-cream-50 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Find your corner.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-cream-100/90"
        >
          NIDO means <span className="italic">nest</span> — a soft little escape
          from the rush of everyday life, where conversations slow down and the
          coffee tastes a little better.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#menu" className="btn-cream">
            Explore the menu
          </a>
          <a href="#visit" className="btn-ghost border-cream-50/40 text-cream-50 hover:bg-cream-50/10">
            Plan a visit
          </a>
        </motion.div>

        <div className="mt-14 flex items-center gap-4 text-cream-100/80">
          <span className="font-display text-2xl italic">Coffee</span>
          <span className="h-1 w-1 rounded-full bg-cream-100/60" />
          <span className="font-display text-2xl italic">Food</span>
          <span className="h-1 w-1 rounded-full bg-cream-100/60" />
          <span className="font-display text-2xl italic">Conversations</span>
        </div>
      </motion.div>

      <motion.a
        href="#story"
        style={{ opacity: cueOpacity }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream-100/80 sm:flex"
        aria-label="Scroll to explore"
      >
        <span className="text-[0.7rem] uppercase tracking-eyebrow">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-floaty" />
      </motion.a>
    </section>
  );
}
