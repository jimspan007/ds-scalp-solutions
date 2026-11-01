import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { useI18n } from "@/i18n/I18nProvider";
import processImg from "@/assets/process-detail.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Υπηρεσίες - Θεραπείες Scalp Micropigmentation | DS" },
      { name: "description", content: "Αποκατάσταση γραμμής, θεραπείες πυκνότητας, κάλυψη ουλών." },
      { property: "og:title", content: "Υπηρεσίες - DS Scalp Micropigmentation" },
      { property: "og:description", content: "Αποκατάσταση γραμμής, πυκνότητα, κάλυψη ουλών και άλλα." },
    ],
  }),
  component: Services,
});

function Services() {
  const { t, tx } = useI18n();
  const services = tx<{ title: string; body: string; bullets: string[] }[]>("services.items");
  const faq = tx<{ q: string; a: string }[]>("services.faqSection.items");

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("services.hero.eyebrow")}
        title={t("services.hero.title")}
        intro={t("services.hero.intro")}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-px bg-border/60">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="bg-background p-10 md:p-12 group">
              <div className="flex items-start justify-between">
                <span className="font-display text-gold text-lg">{String(i + 1).padStart(2, "0")}</span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </div>
              <h2 className="mt-6 font-display text-3xl md:text-4xl">{s.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.body}</p>
              <ul className="mt-8 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm">
                    <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <img
              src={processImg}
              alt={t("services.processImgAlt")}
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow">{t("services.faqSection.eyebrow")}</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
                {t("services.faqSection.title")}
              </h2>
            </Reveal>
            <div className="mt-10 border-t border-border/60">
              {faq.map((item, i) => (
                <Reveal key={item.q} delay={i * 100} className="border-b border-border/60">
                  <div className="py-6">
                    <h3 className="font-display text-xl">{item.q}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={400}>
              <CtaButton to="/contact" arrow className="mt-12">
                {t("services.faqSection.cta")}
              </CtaButton>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
