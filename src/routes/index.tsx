import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Award, Sparkles, Star } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import heroPortrait from "@/assets/hero-portrait.jpg";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";
import clinic from "@/assets/clinic-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DS Scalp Micropigmentation — Premium SMP for Men" },
      {
        name: "description",
        content:
          "Restore your hairline with realistic, undetectable scalp micropigmentation. Certified specialist. Book your private consultation today.",
      },
      { property: "og:title", content: "DS Scalp Micropigmentation — Premium SMP for Men" },
      {
        property: "og:description",
        content: "Realistic, undetectable scalp micropigmentation by a certified specialist.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <Promise />
      <FeaturedResults />
      <WhyUs />
      <Process />
      <Testimonials />
      <FinalCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden -mt-20 pt-20 min-h-[100vh] flex items-center">
      <div className="absolute inset-0 grain" />
      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 py-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow animate-fade-up">Scalp Micropigmentation · Est. 2017</p>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.92] text-balance animate-fade-up delay-100">
            Get back the<br />
            <span className="italic text-gold">hairline</span> you remember.
          </h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
            Realistic, undetectable scalp micropigmentation crafted exclusively for men.
            A permanent solution to thinning, receding, or full hair loss — performed by a
            certified specialist in a private London studio.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-border text-foreground text-xs font-medium tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-colors"
            >
              See Transformations
            </Link>
          </div>

          <div className="mt-14 flex items-center gap-8 animate-fade-up delay-500">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-surface-elevated to-surface"
                />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                <span className="text-foreground font-medium">500+ men</span> · 4.9 average rating
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-in delay-300">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={heroPortrait}
              alt="Man with completed scalp micropigmentation result"
              className="w-full h-full object-cover"
              width={1080}
              height={1440}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background border border-border p-5 max-w-[220px] hidden md:block">
            <p className="eyebrow text-[0.6rem]">Treatment</p>
            <p className="mt-2 font-display text-lg leading-tight">Density restoration · 3 sessions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "UK Certified",
    "Fully Insured",
    "Medical-Grade Pigments",
    "500+ Treatments",
    "Featured in GQ",
  ];
  return (
    <section className="border-y border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
        {items.map((t) => (
          <span key={t} className="eyebrow text-[0.65rem] text-muted-foreground">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

function Promise() {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Undetectable",
      body: "Pigments matched to your skin tone and natural follicle pattern. Even up close, no one can tell.",
    },
    {
      icon: Sparkles,
      title: "Painless protocol",
      body: "Topical numbing and a refined hand mean most clients describe the sensation as a light tap.",
    },
    {
      icon: Award,
      title: "Built to last",
      body: "Permanent results with light maintenance every 3–5 years. Always in your hands.",
    },
  ];
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Our promise</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              No gimmicks. <span className="italic text-gold">Just results</span> you'd never guess
              were done.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Every scalp is different. We design a hairline that fits your face, your age, and the
              way you want to be seen — not a one-size template.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border/60">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100} className="bg-background p-10">
              <c.icon className="w-7 h-7 text-gold" strokeWidth={1.4} />
              <h3 className="mt-8 font-display text-2xl">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedResults() {
  return (
    <section className="py-28 md:py-36 border-t border-border/60 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow">Real results</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
              Before & After
            </h2>
          </div>
          <Link
            to="/gallery"
            className="text-sm text-gold hover:text-gold-soft transition-colors flex items-center gap-2 group"
          >
            View full gallery
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { src: beforeAfter1, label: "Crown · Density restoration" },
            { src: beforeAfter3, label: "Front view · Full transformation" },
          ].map((b) => (
            <Reveal key={b.label}>
              <figure className="group relative overflow-hidden">
                <img
                  src={b.src}
                  alt={b.label}
                  loading="lazy"
                  width={1920}
                  height={1080}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <figcaption className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-ink/90 to-transparent">
                  <p className="eyebrow text-[0.6rem]">{b.label}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    { n: "01", t: "A specialist, not a salon", b: "SMP is the only thing we do. No nails, no brows — total focus, total mastery." },
    { n: "02", t: "Hand-designed hairlines", b: "We sketch your hairline live, mirroring your bone structure and the way your hair would naturally fall." },
    { n: "03", t: "Discreet private studio", b: "Treatments take place in a private suite — no waiting rooms, no audience." },
    { n: "04", t: "Lifetime touch-up rate", b: "All clients receive preferred pricing for future top-ups. Forever." },
  ];
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <div className="sticky top-32">
            <p className="eyebrow">Why DS</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              Chosen by men who refuse to settle.
            </h2>
            <div className="gold-line w-24 my-8" />
            <img
              src={clinic}
              alt="DS Scalp Micropigmentation private studio"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7 space-y-px bg-border/60">
          {points.map((p, i) => (
            <Reveal key={p.n} delay={i * 80} className="bg-background p-8 md:p-10">
              <div className="flex gap-6 items-start">
                <span className="font-display text-gold text-lg">{p.n}</span>
                <div>
                  <h3 className="font-display text-2xl">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.b}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Consultation", b: "Free, private and pressure-free. We assess your scalp, listen to your goals, and design your hairline." },
    { n: "02", t: "Session 01", b: "Foundation pass. We lay the base layer of micro-deposits, building density gradually for a natural look." },
    { n: "03", t: "Session 02", b: "Definition. Two weeks later, we deepen tone and refine the hairline." },
    { n: "04", t: "Session 03", b: "Final touches. Perfect blending, edges and a polished finish that lasts for years." },
  ];
  return (
    <section className="py-28 md:py-36 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow">The process</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] max-w-2xl">
            Four sessions to a result that <span className="italic text-gold">lasts decades</span>.
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="border-t border-gold pt-6">
                <p className="font-display text-gold text-lg">{s.n}</p>
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
  const quotes = [
    {
      q: "I waited eight years to do this. I should have come to DS sooner. Genuinely changed how I see myself in the mirror.",
      n: "Marcus T.",
      d: "Banker · 41",
    },
    {
      q: "Subtle, professional, no salesy nonsense. Just sat me down, drew the hairline, and delivered exactly what we agreed.",
      n: "James W.",
      d: "Architect · 36",
    },
    {
      q: "Even my barber didn't realise. That's the standard.",
      n: "Elliot R.",
      d: "PT · 29",
    },
  ];
  return (
    <section className="py-28 md:py-36 bg-surface/30 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-center">Words from our clients</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-center max-w-3xl mx-auto leading-[1.05]">
            Real men. Real reviews.
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {quotes.map((q, i) => (
            <Reveal key={q.n} delay={i * 100}>
              <figure className="border border-border bg-background p-8 h-full flex flex-col">
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
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="eyebrow">Take the first step</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            A 30-minute conversation could change the next <span className="italic text-gold">30 years</span>.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Free, confidential, no obligation. We'll talk through your goals and show you what's
            possible — no pressure to book.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
            >
              Book Your Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/447700900123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-foreground text-xs font-medium tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-colors"
            >
              Message on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
