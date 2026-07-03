import Image from "next/image";
import { Clock, MapPin, Instagram, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { img, photos } from "@/lib/images";

const details = [
  {
    icon: MapPin,
    label: "Find us",
    lines: ["The Rooftop, NIDO Café", "Add your street address here"],
  },
  {
    icon: Clock,
    label: "Open hours",
    lines: ["Monday – Sunday", "11:00 AM – 11:00 PM"],
  },
  {
    icon: Phone,
    label: "Reserve a corner",
    lines: ["+91 00000 00000", "Walk-ins always welcome"],
  },
];

export function Visit() {
  return (
    <section id="visit" className="bg-olive-900 py-24 text-cream-50 sm:py-32">
      <div className="container-nido">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-olive-200">Visit</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-4xl font-light leading-[1.05] sm:text-5xl">
                Come find your corner.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-cream-100/80">
                Catch the sunset with a coffee in hand, stay for dinner, and let
                the evening take its time. There's always a seat for you at NIDO.
              </p>
            </Reveal>

            <div className="mt-10 space-y-5">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={0.12 + i * 0.06}>
                  <div className="flex items-start gap-4 border-t border-cream-50/12 pt-5">
                    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream-50/10">
                      <d.icon className="h-5 w-5 text-olive-100" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-olive-200">
                        {d.label}
                      </p>
                      {d.lines.map((line) => (
                        <p key={line} className="text-cream-100/90">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="https://instagram.com/nido.cafe_"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-cream"
                >
                  <Instagram className="h-4 w-4" />
                  @nido.cafe_
                </a>
                <a
                  href="#menu"
                  className="btn-ghost border-cream-50/40 text-cream-50 hover:bg-cream-50/10"
                >
                  See the menu
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src={img(photos.brightCafe, 1200)}
                alt="Sunlit corners inside NIDO"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="warm-tone object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-cream-50/15 bg-olive-950/40 p-5 backdrop-blur-md">
                <p className="font-display text-xl italic text-cream-50">
                  “Stay a while.”
                </p>
                <p className="mt-1 text-sm text-cream-100/75">
                  Golden hour is our favourite time to pour.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
