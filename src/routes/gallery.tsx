import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import ba1 from "@/assets/gallery-1.jpg";
import ba2 from "@/assets/gallery-2.jpg";
import ba3 from "@/assets/gallery-3.jpg";
import ba4 from "@/assets/gallery-4.jpg";
import ba5 from "@/assets/gallery-5.jpg";
import ba6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Πριν & Μετά - DS Scalp Micropigmentation" },
      {
        name: "description",
        content:
          "Πραγματικά, χωρίς επεξεργασία αποτελέσματα πριν και μετά από πελάτες μας scalp micropigmentation. Δες τι είναι εφικτό.",
      },
      { property: "og:title", content: "Πριν & Μετά - DS Scalp Micropigmentation" },
      { property: "og:description", content: "Πραγματικές, χωρίς επεξεργασία μεταμορφώσεις SMP." },
      { property: "og:image", content: ba3 },
    ],
  }),
  component: Gallery,
});

const gallery = [
  { src: ba6, treatment: "Πυκνότητα · Κορυφή", client: "Μ.Τ. · 41", note: "3 συνεδρίες σε 6 εβδομάδες" },
  { src: ba2, treatment: "Γραμμή · Πλάγια", client: "Γ.Β. · 36", note: "Από Norwood 3 σε καθαρό προφίλ" },
  { src: ba3, treatment: "Buzzcut · Μπροστά", client: "Η.Ρ. · 29", note: "Ολική μεταμόρφωση σε 4 συνεδρίες" },
  { src: ba4, treatment: "Πυκνότητα · Διάχυτη απώλεια", client: "Σ.Κ. · 44", note: "Συνδυασμένο με τα υπάρχοντα μαλλιά" },
  { src: ba5, treatment: "Γραμμή · Μπροστινή όψη", client: "Λ.Α. · 33", note: "Απαλή, κατάλληλη για την ηλικία άκρη" },
  { src: ba1, treatment: "Κάλυψη ουλών", client: "Π.Δ. · 38", note: "Κάλυψη ουλής FUE, 2 συνεδρίες" },
];

function Gallery() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Πριν & Μετά"
        title="Πραγματικά αποτελέσματα. Χωρίς φίλτρα."
        intro="Κάθε φωτογραφία πάρθηκε στο studio μας υπό κανονικό φωτισμό - χωρίς επεξεργασία, χωρίς ρετουσάρισμα. Η δουλειά μιλά από μόνη της."
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
                      alt={`${g.treatment} - ${g.client}`}
                      loading="lazy"
                      width={1920}
                      height={1080}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                    />
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
            <p className="eyebrow">Η δική σου ιστορία είναι η επόμενη</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              Φαντάσου το δικό σου <span className="italic text-gold">πριν & μετά</span>.
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 px-7 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
            >
              Κλείσε Συνεδρία <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}