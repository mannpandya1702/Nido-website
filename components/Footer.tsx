import { Instagram } from "lucide-react";
import { Wordmark, BirdBadge } from "./Logo";

const nav = [
  { href: "#story", label: "Our Nest" },
  { href: "#experience", label: "Experience" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "The Space" },
  { href: "#visit", label: "Visit" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-olive-950 text-cream-100">
      <div className="container-nido py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div>
            <span className="text-4xl text-cream-50">
              <Wordmark />
            </span>
            <p className="mt-4 font-display text-xl italic text-olive-200">
              Coffee. Food. Conversations.
            </p>
            <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-cream-100/60">
              A soft little escape from the rush of everyday life. Every cup has
              a story — we'd love to hear yours.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-olive-300">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-underline text-sm text-cream-100/75 hover:text-cream-50"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-6 md:items-end">
            <BirdBadge className="h-24 w-24" />
            <a
              href="https://instagram.com/nido.cafe_"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cream-100/75 hover:text-cream-50"
            >
              <Instagram className="h-4 w-4" />
              @nido.cafe_
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream-50/10 pt-6 text-xs text-cream-100/50 sm:flex-row">
          <p>© {year} NIDO Café. Find your corner.</p>
          <p>Made with warmth · a nest in a fast world.</p>
        </div>
      </div>
    </footer>
  );
}
