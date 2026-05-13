import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useI18n } from "@/i18n/I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/faq", key: "nav.faq" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-24 items-center justify-between">
          <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="DS Scalp Micropigmentation"
              className="h-16 md:h-20 w-auto object-contain"
              width={240}
              height={160}
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-base text-foreground">Scalp</span>
              <span className="eyebrow text-[0.55rem] tracking-[0.32em]">Micropigmentation</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {t(n.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher className="hidden sm:inline-flex" />
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-[0.2em] uppercase bg-gold text-ink hover:bg-gold-soft transition-colors"
            >
              {t("nav.bookCta")}
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={t("nav.menu")}
              className="lg:hidden p-2 text-foreground"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-24 bottom-0 z-40 bg-background backdrop-blur-xl transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col px-6 py-10 gap-2">
          {NAV.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="font-display text-3xl py-3 border-b border-border/40 text-foreground hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {t(n.key)}
            </Link>
          ))}
          <div className="mt-6 flex items-center justify-between">
            <span className="eyebrow text-[0.6rem]">{t("nav.languageLabel")}</span>
            <LanguageSwitcher />
          </div>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center px-6 py-4 text-xs font-medium tracking-[0.25em] uppercase bg-gold text-ink"
          >
            {t("nav.bookCta")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
