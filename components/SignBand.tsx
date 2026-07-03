"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { real } from "@/lib/images";
import { CoffeeBeans } from "./CoffeeBeans";

/** Cinematic full-width moment with the real illuminated NIDO sign. */
export function SignBand() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", reduce ? "-8%" : "12%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[78vh] items-center overflow-hidden bg-olive-950"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src={real.sign}
          alt="The illuminated NIDO sign — coffee, food, conversations"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-olive-950/85 via-olive-950/45 to-olive-950/30" />
      <div className="absolute inset-0 bg-olive-950/25" />
      <CoffeeBeans count={6} color="text-espresso-800" />

      <div className="container-nido relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow text-olive-200"
        >
          A little ritual
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-2xl font-display text-4xl font-light leading-[1.02] text-cream-50 sm:text-6xl"
        >
          You pour,{" "}
          <span className="font-script text-clay">stay a while.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-cream-100/80"
        >
          No rush, no clock-watching. Just good coffee, warm plates and the kind
          of evening you don't want to end.
        </motion.p>
      </div>
    </section>
  );
}
