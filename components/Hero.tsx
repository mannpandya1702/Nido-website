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
import { real } from "@/lib/images";
import { CoffeeBeans } from "./CoffeeBeans";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.14]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-dvh items-end overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={real.rooftop}
          alt="The NIDO rooftop terrace under a soft evening sky"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* washes for legibility — kept light so the real photo breathes */}
      <div className="absolute inset-0 bg-gradient-to-t from-olive-950/85 via-olive-950/15 to-olive-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-olive-950/55 via-transparent to-transparent" />
      <div className="grain absolute inset-0" />
      <CoffeeBeans count={7} color="text-espresso-800" />

      {/* floating real "find your corner" cup */}
      <motion.figure
        initial={{ opacity: 0, y: 30, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ duration: 1, delay: 0.5, ease }}
        className="absolute right-6 top-1/2 z-10 hidden w-44 -translate-y-1/2 lg:block xl:right-16 xl:w-52"
      >
        <div className="animate-floaty overflow-hidden rounded-2xl border-4 border-cream-50/90 bg-olive-900 shadow-lift">
          <div className="relative aspect-[3/4]">
            <Image
              src={real.cupRecord}
              alt="A NIDO iced coffee with its 'find your corner' cup label"
              fill
              priority
              sizes="220px"
              className="object-cover"
            />
          </div>
        </div>
        <figcaption className="mt-3 text-center font-script text-lg text-cream-100/90">
          every cup has a story
        </figcaption>
      </motion.figure>

      <motion.div
        style={{ y: contentY }}
        className="container-nido relative z-10 pb-16 pt-32 sm:pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="eyebrow text-cream-100"
        >
          A rooftop café
        </motion.p>

        <h1 className="mt-5 max-w-3xl font-display text-5xl font-light leading-[0.98] text-cream-50 sm:text-6xl md:text-7xl lg:text-8xl">
          {["Find your", "corner."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.15 + i * 0.12, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease }}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-cream-100/90"
        >
          NIDO means <span className="italic">nest</span> — a soft little escape
          from the rush of everyday life, where conversations slow down and the
          coffee tastes a little better.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.58, ease }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#menu" className="btn-cream group">
            Explore the menu
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#visit"
            className="btn-ghost border-cream-50/40 text-cream-50 hover:bg-cream-50/10"
          >
            Plan a visit
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 flex items-center gap-4 text-cream-100/80"
        >
          <span className="font-display text-2xl italic">Coffee</span>
          <span className="h-1 w-1 rounded-full bg-cream-100/60" />
          <span className="font-display text-2xl italic">Food</span>
          <span className="h-1 w-1 rounded-full bg-cream-100/60" />
          <span className="font-display text-2xl italic">Conversations</span>
        </motion.div>
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
