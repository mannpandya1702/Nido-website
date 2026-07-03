"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Logo";
import { clsx } from "@/lib/clsx";

const links = [
  { href: "#story", label: "Our Nest" },
  { href: "#experience", label: "Experience" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "The Space" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  const go = (e: React.MouseEvent, href: string) => {
    setOpen(false);
    if (lenis && href.startsWith("#")) {
      e.preventDefault();
      lenis.scrollTo(href, { offset: -72, duration: 1.2 });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-soft",
        scrolled
          ? "border-b border-olive-900/10 bg-cream-50/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-nido flex h-[var(--header-h)] items-center justify-between">
        <a
          href="#top"
          onClick={(e) => go(e, "#top")}
          className={clsx(
            "text-2xl transition-colors duration-500",
            scrolled ? "text-olive-800" : "text-cream-50",
          )}
          aria-label="NIDO home"
        >
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className={clsx(
                  "link-underline text-sm font-medium transition-colors duration-500",
                  scrolled
                    ? "text-olive-800/85 hover:text-olive-900"
                    : "text-cream-50/90 hover:text-cream-50",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#visit"
            onClick={(e) => go(e, "#visit")}
            className={clsx(
              "hidden md:inline-flex",
              scrolled ? "btn-primary" : "btn-cream",
            )}
          >
            Find your corner
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={clsx(
              "inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors md:hidden",
              scrolled
                ? "text-olive-800 hover:bg-olive-900/5"
                : "text-cream-50 hover:bg-cream-50/10",
            )}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-olive-900/95 backdrop-blur-sm" />
            <motion.div
              className="relative flex h-full flex-col px-6 pb-10 pt-6"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl text-cream-50">
                  <Wordmark />
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full text-cream-50 hover:bg-cream-50/10"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <ul className="mt-12 flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                  >
                    <a
                      href={l.href}
                      onClick={(e) => go(e, l.href)}
                      className="block border-b border-cream-50/10 py-4 font-display text-3xl text-cream-50"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <a
                href="#visit"
                onClick={(e) => go(e, "#visit")}
                className="btn-cream mt-auto w-full"
              >
                Find your corner
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
