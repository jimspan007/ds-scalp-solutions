import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, ShieldCheck, GraduationCap, Heart } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import specialist from "@/assets/specialist.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DS Scalp Micropigmentation" },
      {
        name: "description",
        content:
          "Meet the certified specialist behind DS Scalp Micropigmentation. 8+ years of experience, 500+ treatments, and a craft-led approach to SMP.",
      },
      { property: "og:title", content: "About — DS Scalp Micropigmentation" },
      { property: "og:description", content: "Meet the specialist behind DS Scalp Micropigmentation." },
      { property: "og:image", content: specialist },
    ],
  }),
  component: About,
});

const credentials = [
  { icon: GraduationCap, label: "Trained at Beauty Medical Academy, Milan" },
  { icon: Award, label: "Certified Master SMP Practitioner" },
  { icon: ShieldCheck, label: "Fully insured · Licensed by Westminster Council" },
  { icon: Heart, label: "500+ men treated since 2017" },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The specialist"
        title="A craft built around one thing — your confidence."
        intro="DS Scalp Micropigmentation is led by Daniel Silva, a certified SMP master with over eight years dedicated exclusively to the art of scalp pigmentation."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={specialist}
                alt="Daniel Silva, founder of DS Scalp Micropigmentation"
                loading="lazy"
                width={1080}
                height={1440}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow">Daniel Silva · Founder</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
                I started DS because I was tired of seeing bad SMP.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  After a decade in the industry — first in tattoo realism, then specialising
                  exclusively in scalp micropigmentation — I opened DS as the antidote to assembly-line
                  clinics. Here, every consultation is mine. Every needle is mine. Every result is on me.
                </p>
                <p>
                  I believe a great hairline should look like it was always there. That requires
                  patience, an artist's eye, and a deep respect for what hair loss does to a man's
                  self-image. We don't sell sessions. We restore something that was taken.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-12 space-y-5">
                {credentials.map((c) => (
                  <li key={c.label} className="flex gap-4 items-start">
                    <c.icon className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.4} />
                    <span className="text-sm">{c.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={300}>
              <Link
                to="/contact"
                className="mt-12 inline-flex items-center gap-3 px-7 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
              >
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-12 text-center">
          {[
            { n: "8+", t: "Years specialising in SMP" },
            { n: "500+", t: "Treatments delivered" },
            { n: "4.9", t: "Average client rating" },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <p className="font-display text-7xl md:text-8xl text-gold">{s.n}</p>
              <p className="mt-4 eyebrow">{s.t}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}