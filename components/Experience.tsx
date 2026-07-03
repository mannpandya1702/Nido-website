import Image from "next/image";
import { Reveal, RevealGroup } from "./Reveal";
import { CoffeeBeans } from "./CoffeeBeans";
import { img, photos, real } from "@/lib/images";

const pillars = [
  {
    tag: "01",
    title: "Coffee",
    src: img(photos.pourOver, 800),
    copy: "From an honest espresso to our signature Biscoff latte — beans pulled with care and poured slow, the way mornings should be.",
  },
  {
    tag: "02",
    title: "Food",
    src: real.pasta,
    copy: "Comforting pastas, wood-fired pizzas, mezze platters and hearty plates. Honest, generous food made to be shared over a long table.",
  },
  {
    tag: "03",
    title: "Conversations",
    src: img(photos.peopleCheers, 800),
    copy: "The real house special. Golden-hour light, unhurried hours and the people you want to stay close to — that's the heart of NIDO.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-olive-900 py-24 text-cream-50 sm:py-32"
    >
      <CoffeeBeans count={5} color="text-espresso-800/70" />
      <div className="container-nido relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow text-olive-200">Coffee · Food · Conversations</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance font-display text-4xl font-light leading-tight sm:text-5xl">
              Three simple things, done with heart.
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <Reveal as="div" key={p.title}>
              <article className="group h-full overflow-hidden rounded-[1.75rem] bg-olive-800/50 ring-1 ring-cream-50/10 transition-all duration-500 ease-out-soft hover:-translate-y-1.5 hover:bg-olive-800 hover:shadow-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.src}
                    alt={`${p.title} at NIDO`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="warm-tone object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-950/50 to-transparent" />
                  <span className="absolute left-5 top-4 font-display text-sm text-cream-100/80">
                    {p.tag}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-3xl font-light">{p.title}</h3>
                  <p className="mt-3 text-pretty leading-relaxed text-cream-100/75">
                    {p.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
