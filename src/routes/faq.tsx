import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Συχνές Ερωτήσεις - Scalp Micropigmentation | DS" },
      { name: "description", content: "Ειλικρινείς απαντήσεις στις πιο συχνές ερωτήσεις για SMP." },
      { property: "og:title", content: "Συχνές Ερωτήσεις - DS Scalp Micropigmentation" },
      { property: "og:description", content: "Ειλικρινείς απαντήσεις στις πιο συχνές ερωτήσεις." },
    ],
  }),
  component: Faq,
});

function Faq() {
  const { t, tx } = useI18n();
  const sections = tx<{ title: string; items: { q: string; a: string }[] }[]>("faq.sections");

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("faq.hero.eyebrow")}
        title={t("faq.hero.title")}
        intro={t("faq.hero.intro")}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 space-y-20">
          {sections.map((s, idx) => (
            <div key={idx}>
              {s.title && (
                <Reveal>
                  <p className="eyebrow">{s.title}</p>
                </Reveal>
              )}
              <div className="mt-8 border-t border-border">
                {s.items.map((item, i) => (
                  <Reveal key={item.q} delay={i * 60}>
                    <FaqItem q={item.q} a={item.a} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl text-balance">
              {t("faq.ctaTitle")}
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 px-7 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
            >
              {t("faq.ctaButton")} <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full py-6 flex items-center justify-between text-left gap-6 group"
      >
        <span className="font-display text-xl md:text-2xl group-hover:text-gold transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 border border-border flex items-center justify-center text-gold transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <p className="overflow-hidden text-muted-foreground leading-relaxed pr-12">{a}</p>
      </div>
    </div>
  );
}
