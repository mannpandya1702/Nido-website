import { Bird } from "./Logo";

const words = ["Coffee", "Food", "Conversations", "Comfort", "Belonging"];

export function Marquee() {
  const strip = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-olive-900/10 bg-cream-100 py-6">
      <div className="flex w-max animate-marquee items-center gap-8 motion-reduce:animate-none">
        {strip.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-3xl italic text-olive-700/90 sm:text-4xl">
              {w}
            </span>
            <Bird className="h-5 w-5 shrink-0 text-clay" />
          </span>
        ))}
      </div>
    </div>
  );
}
