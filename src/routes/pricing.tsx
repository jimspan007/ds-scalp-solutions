import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — DS Scalp Micropigmentation" },
      {
        name: "description",
        content:
          "Transparent indicative pricing for scalp micropigmentation treatments. Final quotes confirmed at consultation.",
      },
      { property: "og:title", content: "Pricing — DS Scalp Micropigmentation" },
      { property: "og:description", content: "Transparent indicative SMP pricing." },
    ],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Targeted",
    range: "£800 – £1,400",
    desc: "Scar camouflage, small hairline refinement, density top-up.",
    bullets: ["1–2 sessions", "Single area", "Pigment matching", "30-day touch-up included"],
  },
  {
    name: "Restoration",
    range: "£1,500 – £2,400",
    desc: "Hairline rebuild or density treatment for partial hair loss.",
    bullets: ["2–3 sessions", "Custom hairline design", "Multi-tone pigments", "30-day touch-up included"],
    featured: true,
  },
  {
    name: "Full Transformation",
    range: "£2,500 – £3,500",
    desc: "Complete buzzcut illusion for advanced hair loss (Norwood 5–7).",
    bullets: ["3–4 sessions", "Full scalp coverage", "Symmetry mapping", "60-day touch-up included"],
  },
];

function Pricing() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Investment"
        title="Honest pricing. No hidden costs."
        intro="Every scalp is unique, so the figures below are guides — not quotes. Your final price is confirmed in your free consultation, where we map sessions to your specific goals."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-px bg-border/60">
            {tiers.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 100}
                className={`p-10 flex flex-col ${t.featured ? "bg-surface" : "bg-background"}`}
              >
                {t.featured && (
                  <span className="self-start eyebrow text-[0.55rem] px-3 py-1 border border-gold text-gold mb-6">
                    Most chosen
                  </span>
                )}
                <h3 className="font-display text-3xl">{t.name}</h3>
                <p className="mt-4 font-display text-4xl text-gold">{t.range}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                <ul className="mt-8 space-y-3 flex-1">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm">
                      <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-10 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium tracking-[0.25em] uppercase transition-colors ${
                    t.featured
                      ? "bg-gold text-ink hover:bg-gold-soft"
                      : "border border-border text-foreground hover:border-gold hover:text-gold"
                  }`}
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-16 p-8 md:p-12 border border-border bg-surface/30 grid md:grid-cols-3 gap-8">
              {[
                { t: "Free consultations", b: "30-minute private sessions, always complimentary." },
                { t: "Flexible payments", b: "Split your investment across sessions, interest-free." },
                { t: "Lifetime touch-ups", b: "Preferred client pricing on every future top-up." },
              ].map((p) => (
                <div key={p.t}>
                  <p className="eyebrow">{p.t}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.b}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}