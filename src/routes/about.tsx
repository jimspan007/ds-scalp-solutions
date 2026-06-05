import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, ShieldCheck, GraduationCap } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import specialistAsset from "@/assets/specialist-v3.jpg.asset.json";
const specialist = specialistAsset.url;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Σχετικά - DS Scalp Micropigmentation" },
      { name: "description", content: "Γνώρισε τον πιστοποιημένο ειδικό πίσω από το DS Scalp Micropigmentation." },
      { property: "og:title", content: "Σχετικά - DS Scalp Micropigmentation" },
      { property: "og:description", content: "Γνώρισε τον ειδικό πίσω από το DS Scalp Micropigmentation." },
      { property: "og:image", content: specialist },
    ],
  }),
  component: About,
});

function About() {
  const { t, tx } = useI18n();
  const credIcons = [GraduationCap, Award, ShieldCheck];
  const credentials = tx<string[]>("about.credentials");
  const paragraphs = tx<string[]>("about.paragraphs");

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("about.hero.eyebrow")}
        title={t("about.hero.title")}
        intro={t("about.hero.intro")}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={specialist}
                alt={t("about.imgAlt")}
                loading="lazy"
                width={1080}
                height={1440}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow">{t("about.eyebrow")}</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
                {t("about.title")}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
                {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-12 space-y-5">
                {credentials.map((label, i) => {
                  const Icon = credIcons[i] ?? ShieldCheck;
                  return (
                    <li key={label} className="flex gap-4 items-start">
                      <Icon className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.4} />
                      <span className="text-sm">{label}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal delay={300}>
              <Link
                to="/contact"
                className="mt-12 inline-flex items-center gap-3 px-7 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
              >
                {t("about.cta")} <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
