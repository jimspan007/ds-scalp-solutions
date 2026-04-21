import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Before & After Gallery — DS Scalp Micropigmentation" },
      {
        name: "description",
        content:
          "Real, unedited before-and-after results from our scalp micropigmentation clients. See what's possible.",
      },
      { property: "og:title", content: "Before & After Gallery — DS Scalp Micropigmentation" },
      { property: "og:description", content: "Real, unedited SMP transformations." },
      { property: "og:image", content: ba3 },
    ],
  }),
  component: Gallery,
});

const gallery = [
  { src: ba1, treatment: "Density · Crown", client: "M.T. · 41", note: "3 sessions over 6 weeks" },
  { src: ba2, treatment: "Hairline · Side", client: "J.W. · 36", note: "Restored Norwood 3 to a sharp profile" },
  { src: ba3, treatment: "Buzzcut effect · Front", client: "E.R. · 29", note: "Full transformation in 4 sessions" },
  { src: ba1, treatment: "Density · Diffuse loss", client: "S.K. · 44", note: "Blended with existing hair" },
  { src: ba3, treatment: "Hairline · Front view", client: "L.A. · 33", note: "Soft, age-appropriate edge" },
  { src: ba2, treatment: "Scar camouflage", client: "P.D. · 38", note: "FUE scar concealment, 2 sessions" },
];

function Gallery() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title="Real men. Real results. No filters."
        intro="Every photo below was taken in our studio under standard lighting — no editing, no retouching. The work speaks for itself."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={(i % 2) * 80}>
                <figure className="group">
                  <div className="relative overflow-hidden">
                    <img
                      src={g.src}
                      alt={`${g.treatment} — ${g.client}`}
                      loading="lazy"
                      width={1920}
                      height={1080}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1.5 bg-ink/80 backdrop-blur eyebrow text-[0.55rem]">Before</span>
                      <span className="px-3 py-1.5 bg-gold text-ink eyebrow text-[0.55rem]">After</span>
                    </div>
                  </div>
                  <figcaption className="pt-5 flex items-baseline justify-between gap-4">
                    <div>
                      <p className="font-display text-lg">{g.treatment}</p>
                      <p className="text-xs text-muted-foreground mt-1">{g.note}</p>
                    </div>
                    <span className="eyebrow text-[0.6rem]">{g.client}</span>
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
            <p className="eyebrow">Your story next</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              Imagine your <span className="italic text-gold">before & after</span>.
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 px-7 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
            >
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}