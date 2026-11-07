import ptBR from "./pt-BR.json";
import en from "./en.json";

export const locales = ["pt-BR", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt-BR";

const dictionaries = { "pt-BR": ptBR, en } as const;

/** Resolve Astro.currentLocale (string | undefined) to a known Locale. */
export function asLocale(value: string | undefined): Locale {
  return (locales as readonly string[]).includes(value ?? "") ? (value as Locale) : defaultLocale;
}

/** Dot-path lookup into the locale dictionary: t("hero.title"). Falls back to the key. */
export function useTranslations(locale: Locale) {
  const dict = dictionaries[locale] as Record<string, unknown>;
  return function t(key: string): string {
    const value = key.split(".").reduce<unknown>((acc, k) => {
      return acc && typeof acc === "object" ? (acc as Record<string, unknown>)[k] : undefined;
    }, dict);
    return typeof value === "string" ? value : key;
  };
}

/** Locale-prefixed path: localePath("en", "/blog") → "/en/blog"; pt-BR is unprefixed. */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/** Strip a locale prefix from a pathname: "/en/blog" → "/blog". */
export function stripLocale(pathname: string): string {
  for (const l of locales) {
    if (l === defaultLocale) continue;
    if (pathname === `/${l}`) return "/";
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname;
}

export const otherLocale = (locale: Locale): Locale => (locale === "en" ? "pt-BR" : "en");
