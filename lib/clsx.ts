export type ClassValue = string | number | null | false | undefined;

/** Tiny classnames joiner — no dependency needed. */
export function clsx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
