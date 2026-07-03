"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Wordmark } from "./Logo";

/** A brief, once-per-session intro reveal. Skipped for reduced-motion. */
export function Intro() {
  const reduce = useReducedMotion();
  // Rendered on the server so it covers the hero from the very first paint
  // (no flash-of-hero before the intro appears).
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (reduce || sessionStorage.getItem("nido-intro")) {
      setShow(false);
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("nido-intro", "1");
      document.documentElement.style.overflow = "";
    }, 1750);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-olive-950"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="grain absolute inset-0 opacity-30" />
          <motion.span
            className="text-6xl text-cream-50 sm:text-7xl"
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Wordmark />
          </motion.span>
          <motion.span
            className="mt-6 h-px bg-cream-100/50"
            initial={{ width: 0 }}
            animate={{ width: 132 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.span
            className="mt-6 text-[0.7rem] uppercase tracking-eyebrow text-olive-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            find your corner
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
