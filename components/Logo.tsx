import { clsx } from "@/lib/clsx";

/** Little perched songbird — NIDO's nest mark. Inherits currentColor. */
export function Bird({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M14.4 12.4 22 6.6l-1.9 6.6z" />
      <ellipse
        cx="12"
        cy="13.2"
        rx="6.2"
        ry="4.5"
        transform="rotate(-17 12 13.2)"
      />
      <circle cx="7.5" cy="9.7" r="2.95" />
      <path d="M5.1 9.1 1.4 9.7l3.7 1.5z" />
    </svg>
  );
}

/**
 * The "nido" wordmark. The bird perches where the tittle of the "i" would be,
 * exactly as on the cup and menu.
 */
export function Wordmark({
  className,
  birdClassName,
}: {
  className?: string;
  birdClassName?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex select-none items-baseline font-sans font-medium leading-none tracking-[-0.02em]",
        className,
      )}
    >
      <span>n</span>
      <span className="relative">
        <Bird
          className={clsx(
            "absolute bottom-[0.66em] left-1/2 h-[0.52em] w-[0.52em] -translate-x-1/2 -rotate-6",
            birdClassName,
          )}
        />
        i
      </span>
      <span>do</span>
    </span>
  );
}

/** Circular seal — the round sticker from the cup. */
export function BirdBadge({ className }: { className?: string }) {
  const cream = "#F6F1E6";
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="NIDO — coffee, food, conversation"
    >
      <defs>
        <path id="nido-top" d="M38,100 a62,62 0 0,1 124,0" fill="none" />
        <path id="nido-bottom" d="M44,100 a56,56 0 0,0 112,0" fill="none" />
      </defs>
      <circle cx="100" cy="100" r="98" fill="#5B6B3A" />
      <circle
        cx="100"
        cy="100"
        r="82"
        fill="none"
        stroke={cream}
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <g
        fill={cream}
        fontFamily="var(--font-jost), sans-serif"
        fontSize="12.5"
        fontWeight={500}
        letterSpacing="4"
      >
        <text textAnchor="middle">
          <textPath href="#nido-top" startOffset="50%">
            COFFEE
          </textPath>
        </text>
        <text textAnchor="middle">
          <textPath href="#nido-bottom" startOffset="50%">
            FOOD · CONVERSATION
          </textPath>
        </text>
      </g>
      {/* bird tittle */}
      <g transform="translate(84 62) scale(1.35)" fill={cream}>
        <path d="M14.4 12.4 22 6.6l-1.9 6.6z" />
        <ellipse
          cx="12"
          cy="13.2"
          rx="6.2"
          ry="4.5"
          transform="rotate(-17 12 13.2)"
        />
        <circle cx="7.5" cy="9.7" r="2.95" />
        <path d="M5.1 9.1 1.4 9.7l3.7 1.5z" />
      </g>
      <text
        x="100"
        y="122"
        textAnchor="middle"
        fill={cream}
        fontFamily="var(--font-jost), sans-serif"
        fontSize="40"
        fontWeight={500}
        letterSpacing="-1.5"
      >
        nido
      </text>
    </svg>
  );
}
