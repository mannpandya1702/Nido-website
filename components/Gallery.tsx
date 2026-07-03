import Image from "next/image";
import { Reveal } from "./Reveal";
import { img, photos } from "@/lib/images";
import { clsx } from "@/lib/clsx";

const tiles = [
  { photo: photos.plantCafe, label: "Under the vines", span: "sm:col-span-2 sm:row-span-2" },
  { photo: photos.relaxNeon, label: "Warm little corners", span: "" },
  { photo: photos.communalCafe, label: "The long table", span: "" },
  { photo: photos.cafeCounter, label: "The coffee bar", span: "" },
  { photo: photos.darkInterior, label: "Slow evenings", span: "sm:col-span-2" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream-50 py-24 sm:py-32">
      <div className="container-nido">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">The space</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance font-display text-4xl font-light leading-tight text-olive-900 sm:text-5xl">
              A rooftop built for staying a while.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-espresso-600">
              Open skies at golden hour, a glasshouse pergola, hanging plants and
              warm little corners — designed to feel less like a café and more
              like home.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[230px] sm:grid-cols-4">
            {tiles.map((t) => (
              <figure
                key={t.label}
                className={clsx(
                  "group relative overflow-hidden rounded-2xl shadow-soft",
                  t.span,
                )}
              >
                <Image
                  src={img(t.photo, 1000)}
                  alt={t.label}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="warm-tone object-cover transition-transform duration-[900ms] ease-out-soft group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950/60 via-transparent to-transparent opacity-80" />
                <figcaption className="absolute bottom-4 left-4 translate-y-1 font-sans text-sm font-medium text-cream-50 opacity-0 transition-all duration-500 ease-out-soft group-hover:translate-y-0 group-hover:opacity-100">
                  {t.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
