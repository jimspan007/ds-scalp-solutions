import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouterState } from "@tanstack/react-router";
import {
  DEFAULT_LOCALE,
  LOCALES,
  type Locale,
  getByPath,
  translations,
} from "./translations";

const STORAGE_KEY = "ds-locale";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  tx: <T = any>(key: string) => T;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && LOCALES.includes(saved)) return saved;
    const browser = window.navigator.language?.toLowerCase() ?? "";
    if (browser.startsWith("en")) return "en";
  } catch {
    /* noop */
  }
  return DEFAULT_LOCALE;
}

function routeKeyFromPath(pathname: string): string {
  const p = pathname.replace(/\/+$/, "") || "/";
  if (p === "/") return "home";
  const seg = p.split("/")[1];
  if (["about", "services", "gallery", "faq", "contact"].includes(seg)) return seg;
  return "home";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const routerState = useRouterState({ select: (s) => s.location.pathname });

  // Hydrate from storage on mount
  useEffect(() => {
    setLocaleState(detectInitialLocale());
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* noop */
    }
  }, []);

  // Keep <html lang>, <title>, meta description, hreflang in sync
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = locale;

    const routeKey = routeKeyFromPath(routerState);
    const meta = (translations[locale].meta as any)[routeKey] ?? translations[locale].meta.home;

    if (meta?.title) document.title = meta.title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [_, key, val] = selector.match(/\[(\w+)="([^"]+)"\]/) ?? [];
        if (key && val) el.setAttribute(key, val);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    if (meta?.description) {
      setMeta('meta[name="description"]', "content", meta.description);
      setMeta('meta[property="og:description"]', "content", meta.description);
    }
    if (meta?.title) {
      setMeta('meta[property="og:title"]', "content", meta.title);
    }
    setMeta('meta[property="og:locale"]', "content", locale === "el" ? "el_GR" : "en_US");

    // hreflang alternates
    const upsertLink = (hreflang: string, href: string) => {
      let el = document.head.querySelector<HTMLLinkElement>(
        `link[rel="alternate"][hreflang="${hreflang}"]`
      );
      if (!el) {
        el = document.createElement("link");
        el.rel = "alternate";
        el.hreflang = hreflang;
        document.head.appendChild(el);
      }
      el.href = href;
    };
    if (typeof window !== "undefined") {
      const url = window.location.origin + window.location.pathname;
      upsertLink("el", url);
      upsertLink("en", url);
      upsertLink("x-default", url);
    }
  }, [locale, routerState]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key: string) => {
        const v = getByPath(translations[locale], key);
        return typeof v === "string" ? v : key;
      },
      tx: <T,>(key: string) => getByPath(translations[locale], key) as T,
    }),
    [locale, setLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}