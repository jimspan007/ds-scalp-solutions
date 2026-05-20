import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Award, Sparkles, Star } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { useI18n } from "@/i18n/I18nProvider";
import heroPortrait from "@/assets/hero-portrait-new.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DS Scalp Micropigmentation - Premium SMP για άνδρες" },
      {
        name: "description",
        content:
          "Επανάφερε τη γραμμή των μαλλιών σου με ρεαλιστικό, μη ανιχνεύσιμο scalp micropigmentation.",
      },
      { property: "og:title", content: "DS Scalp Micropigmentation - Premium SMP για άνδρες" },
      {
        property: "og:description",
        content: "Ρεαλιστικό, μη ανιχνεύσιμο scalp micropigmentation από πιστοποιημένο ειδικό.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Promise />
      <Process />
      <Testimonials />
      <FinalCTA />
    </SiteLayout>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden -mt-20 pt-20 min-h-[100vh] flex items-center">
      <div className="absolute inset-0 grain" />
      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 py-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow animate-fade-up">{t("home.hero.eyebrow")}</p>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.92] text-balance animate-fade-up delay-100">
            {t("home.hero.title")}
          </h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
            {t("home.hero.intro")}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <CtaButton to="/contact" arrow>
              {t("home.hero.ctaPrimary")}
            </CtaButton>
            <CtaButton to="/gallery" variant="outline">
              {t("home.hero.ctaSecondary")}
            </CtaButton>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-in delay-300">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={heroPortrait}
              alt={t("home.hero.imgAlt")}
              className="w-full h-full object-cover"
              width={1080}
              height={1440}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Promise() {
  const { t, tx } = useI18n();
  const icons = [ShieldCheck, Sparkles, Award];
  const cards = tx<{ title: string; body: string }[]>("home.promise.cards");
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">{t("home.promise.eyebrow")}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              {t("home.promise.title")} <span className="italic text-gold">{t("home.promise.titleAccent")}</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <p className="text-muted-foreground leading-relaxed text-lg">{t("home.promise.body")}</p>
          </Reveal>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border/60">
          {cards.map((c, i) => {
            const Icon = icons[i] ?? ShieldCheck;
            return (
              <Reveal key={c.title} delay={i * 100} className="bg-background p-10">
                <Icon className="w-7 h-7 text-gold" strokeWidth={1.4} />
                <h3 className="mt-8 font-display text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { t, tx } = useI18n();
  const steps = tx<{ t: string; b: string }[]>("home.process.steps");
  return (
    <section className="py-28 md:py-36 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow">{t("home.process.eyebrow")}</p>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="border-t border-gold pt-6">
                <p className="font-display text-gold text-lg">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-xl">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t, tx } = useI18n();
  const quotes = tx<{ q: string; n: string; d: string }[]>("home.testimonials.items");
  return (
    <section className="py-28 md:py-36 bg-surface/30 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-center">{t("home.testimonials.eyebrow")}</p>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {quotes.map((q, i) => (
            <Reveal key={q.n} delay={i * 100}>
              <figure className="elevated border border-border bg-background p-8 h-full flex flex-col">
                <div className="flex gap-0.5 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="font-display text-xl leading-snug flex-1">
                  "{q.q}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border/60">
                  <p className="font-medium text-sm">{q.n}</p>
                  <p className="text-xs text-muted-foreground mt-1">{q.d}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { t } = useI18n();
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="eyebrow">{t("home.finalCta.eyebrow")}</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            {t("home.finalCta.title")} <span className="italic text-gold">{t("home.finalCta.titleAccent")}</span>.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t("home.finalCta.body")}
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton to="/contact" arrow>
              {t("home.finalCta.ctaPrimary")}
            </CtaButton>
            <CtaButton
              href="https://wa.me/306943264883"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              {t("home.finalCta.ctaSecondary")}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
