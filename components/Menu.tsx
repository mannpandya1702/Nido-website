"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { menu } from "@/lib/menu";
import { img, real } from "@/lib/images";
import { clsx } from "@/lib/clsx";
import { Reveal } from "./Reveal";

export function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active) ?? menu[0];
  const categorySrc =
    category.id === "mains" ? real.pasta : img(category.photo, 1000);

  return (
    <section id="menu" className="bg-cream-100 py-24 sm:py-32">
      <div className="container-nido">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow">The menu</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-4xl font-light leading-tight text-olive-900 sm:text-5xl">
                Made slow, served warm.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-olive-600/30 bg-cream-50 px-4 py-2 text-sm font-medium text-olive-700">
              <Leaf className="h-4 w-4" />
              Fully vegetarian kitchen
            </span>
          </Reveal>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap gap-2.5">
          {menu.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              className={clsx(
                "relative rounded-full px-5 py-2.5 text-sm font-medium ring-1 transition-colors duration-300",
                active === c.id
                  ? "ring-transparent"
                  : "bg-cream-50 ring-olive-900/12 hover:ring-olive-700/40",
              )}
            >
              {active === c.id && (
                <motion.span
                  layoutId="menuTabPill"
                  className="absolute inset-0 rounded-full bg-olive-700 shadow-soft"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span
                className={clsx(
                  "relative z-10",
                  active === c.id ? "text-cream-50" : "text-olive-800/80",
                )}
              >
                {c.title}
              </span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-olive-900/10 bg-cream-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-[0.9fr_1.1fr]"
            >
              {/* Image side */}
              <div className="relative min-h-[260px] overflow-hidden lg:min-h-full">
                <Image
                  src={categorySrc}
                  alt={category.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="warm-tone object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950/70 via-olive-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-3xl font-light text-cream-50">
                    {category.title}
                  </h3>
                  <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-cream-100/85">
                    {category.blurb}
                  </p>
                </div>
              </div>

              {/* Items side */}
              <div className="p-7 sm:p-10">
                <div className="columns-1 gap-10 sm:columns-2">
                  {category.groups.map((g) => (
                    <div key={g.name} className="mb-8 break-inside-avoid">
                      <h4 className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-600">
                        {g.name}
                        <span className="h-px flex-1 bg-olive-900/10" />
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {g.items.map((item) => (
                          <li
                            key={item}
                            className="text-pretty leading-snug text-espresso-800"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-6 text-center text-sm text-espresso-400">
          Seasonal specials rotate through the week — ask your host what's fresh
          today.
        </p>
      </div>
    </section>
  );
}
