import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Scalp Micropigmentation Questions Answered | DS" },
      {
        name: "description",
        content:
          "Pain, durability, recovery, maintenance — every question men ask before booking SMP, answered honestly.",
      },
      { property: "og:title", content: "FAQ — DS Scalp Micropigmentation" },
      {
        property: "og:description",
        content: "Honest answers to the most common SMP questions.",
      },
    ],
  }),
  component: Faq,
});

const sections: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "The treatment",
    items: [
      {
        q: "Does scalp micropigmentation hurt?",
        a: "Discomfort is minimal. We apply a medical-grade topical anaesthetic before each session. Most clients describe it as a light scratching sensation — many even doze off mid-session.",
      },
      {
        q: "How long does each session take?",
        a: "Sessions typically run 3–5 hours depending on the size of the area and the level of detail. We never rush — quality is non-negotiable.",
      },
      {
        q: "How many sessions will I need?",
        a: "Most treatments require 2–4 sessions spaced 10–14 days apart. This layered approach builds depth and allows precise refinement.",
      },
    ],
  },
  {
    title: "Results & longevity",
    items: [
      {
        q: "Will it look natural?",
        a: "Absolutely — when done by a specialist. We design hairlines that match your facial structure and use multi-tone pigments that replicate real follicle variation.",
      },
      {
        q: "How long will my SMP last?",
        a: "Results typically last 4–6 years before a light top-up is recommended. Sun exposure, skin type and skincare all influence longevity.",
      },
      {
        q: "Can it be reversed?",
        a: "Yes. While SMP is designed to be permanent, it can be lightened or removed with laser treatments if you ever change your mind.",
      },
    ],
  },
  {
    title: "Recovery & maintenance",
    items: [
      {
        q: "What's the recovery like?",
        a: "Minimal. Your scalp may be slightly red for 24–48 hours. You'll need to keep it dry for 4 days and avoid heavy sweating, sun and pools for 7 days. That's it.",
      },
      {
        q: "Do I need to shave my head?",
        a: "For full coverage treatments, yes — a regular short shave every 1–3 days maintains the look. For density treatments on existing hair, no shaving required.",
      },
      {
        q: "What aftercare is involved?",
        a: "We provide a complete aftercare kit and a step-by-step protocol. Long-term, daily SPF and gentle moisturising are the only requirements.",
      },
    ],
  },
];

function Faq() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Questions"
        title="Everything you wanted to ask, answered."
        intro="We've heard them all. Below are the questions men actually ask in consultations — answered honestly, without sales spin."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 space-y-20">
          {sections.map((s) => (
            <div key={s.title}>
              <Reveal>
                <p className="eyebrow">{s.title}</p>
              </Reveal>
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
              Still have a question? Ask us directly.
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 px-7 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
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