import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import ba1 from "@/assets/gallery-1.jpg";
import ba3 from "@/assets/gallery-3.jpg";
import baTopLeft from "@/assets/gallery-top-left.png";
import baTopRight from "@/assets/gallery-top-right.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Πριν & Μετά - DS Scalp Micropigmentation" },
      { name: "description", content: "Πραγματικά αποτελέσματα πριν και μετά από πελάτες μας." },
      { property: "og:title", content: "Πριν & Μετά - DS Scalp Micropigmentation" },
      { property: "og:description", content: "Πραγματικές, χωρίς επεξεργασία μεταμορφώσεις SMP." },
      { property: "og:image", content: ba3 },
    ],
  }),
  component: Gallery,
});

const SOURCES = [baTopLeft, baTopRight, ba3, ba1];

function Gallery() {
  const { t, tx } = useI18n();
  const items = tx<{ treatment: string }[]>("gallery.items");

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("gallery.hero.eyebrow")}
        title={t("gallery.hero.title")}
        intro={t("gallery.hero.intro")}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((g, i) => (
              <Reveal key={i} delay={(i % 2) * 80}>
                <figure className="group">
                  <div className="relative overflow-hidden">
                    <img
                      src={SOURCES[i]}
                      alt={g.treatment}
                      loading="lazy"
                      width={1920}
                      height={1080}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="pt-5">
                    <p className="font-display text-lg">{g.treatment}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="eyebrow">{t("gallery.ctaEyebrow")}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              {t("gallery.ctaTitle")} <span className="italic text-gold">{t("gallery.ctaTitleAccent")}</span>.
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 px-7 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
            >
              {t("gallery.ctaButton")} <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
