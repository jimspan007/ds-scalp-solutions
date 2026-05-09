import { useI18n } from "@/i18n/I18nProvider";
import type { Locale } from "@/i18n/translations";

const OPTIONS: { value: Locale; label: string; aria: string }[] = [
  { value: "el", label: "GR", aria: "Ελληνικά" },
  { value: "en", label: "EN", aria: "English" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();
  return (
    <div
      role="group"
      aria-label={t("nav.languageLabel")}
      className={`inline-flex items-center border border-border/70 text-[0.65rem] tracking-[0.2em] uppercase ${className}`}
    >
      {OPTIONS.map((o, i) => {
        const active = locale === o.value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => setLocale(o.value)}
            aria-label={o.aria}
            aria-pressed={active}
            className={`px-2.5 py-1.5 transition-colors focus:outline-none focus:ring-1 focus:ring-gold ${
              active
                ? "bg-gold text-ink"
                : "text-muted-foreground hover:text-foreground"
            } ${i > 0 ? "border-l border-border/70" : ""}`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}