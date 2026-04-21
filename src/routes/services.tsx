import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import processImg from "@/assets/process-detail.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Scalp Micropigmentation Treatments | DS" },
      {
        name: "description",
        content:
          "Hairline restoration, density treatments, scar camouflage and women's SMP. Discover which scalp micropigmentation service is right for you.",
      },
      { property: "og:title", content: "Services — DS Scalp Micropigmentation" },
      {
        property: "og:description",
        content: "Hairline restoration, density, scar camouflage and more.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    n: "01",
    title: "Hairline Restoration",
    body: "Recreate a sharp, age-appropriate hairline. Ideal for receding temples and a Norwood 2–4 pattern.",
    bullets: ["Custom hairline design", "Natural softness, not stencil", "3 sessions"],
  },
  {
    n: "02",
    title: "Density Treatment",
    body: "Add visual fullness to thinning crowns and diffuse loss while keeping your existing hair.",
    bullets: ["Blends with existing hair", "Eliminates 'see-through' scalp", "2–3 sessions"],
  },
  {
    n: "03",
    title: "Full Buzzcut Effect",
    body: "The signature look — a perfectly clean, freshly-shaved appearance for full hair loss.",
    bullets: ["Total transformation", "Symmetry & shadow control", "3 sessions"],
  },
  {
    n: "04",
    title: "Scar Camouflage",
    body: "Disguise FUT/FUE transplant scars, accident scars and alopecia patches with precision pigmentation.",
    bullets: ["Strip scar concealment", "Custom pigment matching", "1–2 sessions"],
  },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Treatments"
        title="What we do — and who it's for."
        intro="Scalp micropigmentation is a non-surgical, semi-permanent solution that mimics natural hair follicles. Whether you're thinning at the crown or fully shaved, there's a treatment for you."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-px bg-border/60">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} className="bg-background p-10 md:p-12 group">
              <div className="flex items-start justify-between">
                <span className="font-display text-gold text-lg">{s.n}</span>
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
              alt="Macro shot of an SMP needle on scalp"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow">Addressing the fears</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
                Honest answers to what every man asks.
              </h2>
            </Reveal>
            <div className="mt-10 space-y-8">
              {[
                {
                  q: "Will it hurt?",
                  a: "We use medical-grade topical numbing. Most clients describe it as a mild scratch — many fall asleep mid-session.",
                },
                {
                  q: "Will it look fake?",
                  a: "Not when it's done right. We design hairlines that match your facial structure and use multi-tone pigments to mimic real follicles.",
                },
                {
                  q: "Is it really permanent?",
                  a: "Pigments last 4–6 years before a light top-up. Your investment, your timeline, always reversible if needed.",
                },
              ].map((item, i) => (
                <Reveal key={item.q} delay={i * 100}>
                  <div className="border-l-2 border-gold pl-6">
                    <h3 className="font-display text-xl">{item.q}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={400}>
              <Link
                to="/contact"
                className="mt-12 inline-flex items-center gap-3 px-7 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
              >
                Discuss Your Treatment <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}