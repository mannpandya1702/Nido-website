import Image from "next/image";
import { Reveal } from "./Reveal";
import { signatures } from "@/lib/menu";
import { img } from "@/lib/images";

export function Signatures() {
  return (
    <section className="bg-cream-50 py-24 sm:py-32">
      <div className="container-nido">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow">Nido signatures</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-4xl font-light leading-tight text-olive-900 sm:text-5xl">
                The ones we're known for.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-pretty leading-relaxed text-espresso-600">
              A handful of little rituals worth making the trip for — some warm,
              some frosty, all made in-house.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible">
          {signatures.map((s, i) => (
            <Reveal
              as="div"
              key={s.name}
              delay={i * 0.06}
              className="w-[76vw] shrink-0 snap-start sm:w-[46vw] lg:w-auto"
            >
              <article className="group h-full overflow-hidden rounded-[1.5rem] border border-olive-900/10 bg-cream-100 transition-all duration-500 ease-out-soft hover:-translate-y-1.5 hover:shadow-card">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={img(s.photo, 640)}
                    alt={s.name}
                    fill
                    sizes="(max-width: 640px) 76vw, (max-width: 1024px) 46vw, 18vw"
                    className="warm-tone object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-950/45 to-transparent" />
                  <h3 className="absolute inset-x-4 bottom-3 font-display text-xl font-light leading-tight text-cream-50">
                    {s.name}
                  </h3>
                </div>
                <p className="p-5 text-sm leading-relaxed text-espresso-600">
                  {s.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
