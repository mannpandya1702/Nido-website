import Image from "next/image";
import { Reveal } from "./Reveal";
import { Bird } from "./Logo";
import { real } from "@/lib/images";

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
      <div className="container-nido">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Images */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card">
                <Image
                  src={real.interior}
                  alt="A quiet, plant-filled reading corner inside NIDO"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950/25 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden w-40 overflow-hidden rounded-2xl border-4 border-cream-50 shadow-lift sm:block sm:w-52">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={real.cupLogo}
                    alt="A NIDO iced coffee with the round nido badge"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -left-4 -top-4 hidden h-16 w-16 items-center justify-center rounded-full bg-olive-700 text-cream-50 shadow-soft sm:flex">
                <Bird className="h-7 w-7" />
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow">Our nest</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-4xl font-light leading-[1.05] text-olive-900 sm:text-5xl">
                A gentle pause in a fast world.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-espresso-600">
                NIDO comes from the word <em>nest</em> — a place of comfort,
                warmth, safety and belonging. And that is exactly what NIDO is
                meant to be. Not just a café, but a soft little escape from the
                rush of everyday life.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-espresso-600">
                A space where conversations slow down, sunsets feel warmer,
                coffee tastes better, and you can simply exist without hurry.
                Built with the feeling of home in mind — for the quiet moments,
                the heavy days, the laughter-filled evenings, and the people you
                want to stay close to.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <figure className="mt-10 border-l-2 border-olive-600/40 pl-6">
                <blockquote className="font-display text-2xl italic leading-snug text-olive-800">
                  Every cup has a story.{" "}
                  <span className="font-script not-italic text-clay">
                    Tell yours.
                  </span>
                </blockquote>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
