import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { useI18n } from "@/i18n/I18nProvider";

export function SiteFooter() {
  const { t } = useI18n();
  const navLinks = [
    { to: "/about", key: "nav.about" },
    { to: "/services", key: "nav.services" },
    { to: "/gallery", key: "nav.gallery" },
    { to: "/faq", key: "nav.faq" },
  ] as const;
  return (
    <footer className="border-t border-border bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex flex-col gap-4">
              <img
                src={logo}
                alt="DS Scalp Micropigmentation"
                className="h-20 md:h-24 w-auto object-contain brightness-0 invert opacity-90"
                width={280}
                height={180}
              />
              <p className="eyebrow text-[0.55rem]">{t("footer.tagline")}</p>
            </div>
            <p className="mt-8 max-w-md text-sm text-bone/60 leading-relaxed">
              {t("footer.about")}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">{t("footer.navTitle")}</p>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-bone/60 hover:text-gold transition-colors">
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">{t("footer.studioTitle")}</p>
            <ul className="space-y-3 text-sm text-bone/60">
              <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold" /> {t("footer.city")}</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-gold" /> +30 6943264883</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-gold" /> info@dssmp.gr</li>
              <li className="flex gap-2"><Instagram className="w-4 h-4 mt-0.5 text-gold" /> @ds_smp.gr</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bone/10 flex flex-col md:flex-row gap-3 justify-between text-xs text-bone/50">
          <p>© {new Date().getFullYear()} DS Scalp Micropigmentation. {t("footer.copyright")}</p>
          <p>{t("footer.certified")}</p>
        </div>
      </div>
    </footer>
  );
}
