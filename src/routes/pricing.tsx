import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Τιμές — DS Scalp Micropigmentation" },
      {
        name: "description",
        content:
          "Διαφανείς ενδεικτικές τιμές για θεραπείες scalp micropigmentation. Η τελική προσφορά επιβεβαιώνεται στη συνεδρία γνωριμίας.",
      },
      { property: "og:title", content: "Τιμές — DS Scalp Micropigmentation" },
      { property: "og:description", content: "Διαφανείς ενδεικτικές τιμές SMP." },
    ],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Στοχευμένη",
    range: "€800 – €1.400",
    desc: "Κάλυψη ουλών, μικρή βελτίωση γραμμής, top-up πυκνότητας.",
    bullets: ["1–2 συνεδρίες", "Μία περιοχή", "Pigment matching", "Touch-up 30 ημερών περιλαμβάνεται"],
  },
  {
    name: "Αποκατάσταση",
    range: "€1.500 – €2.400",
    desc: "Ανακατασκευή γραμμής ή θεραπεία πυκνότητας για μερική απώλεια.",
    bullets: ["2–3 συνεδρίες", "Προσωποποιημένος σχεδιασμός", "Πολυτονικά pigments", "Touch-up 30 ημερών περιλαμβάνεται"],
    featured: true,
  },
  {
    name: "Ολική Μεταμόρφωση",
    range: "€2.500 – €3.500",
    desc: "Πλήρης ψευδαίσθηση buzzcut για προχωρημένη απώλεια (Norwood 5–7).",
    bullets: ["3–4 συνεδρίες", "Πλήρης κάλυψη κεφαλιού", "Συμμετρία mapping", "Touch-up 60 ημερών περιλαμβάνεται"],
  },
];

function Pricing() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Επένδυση"
        title="Ειλικρινείς τιμές. Χωρίς κρυφά κόστη."
        intro="Κάθε κεφάλι είναι μοναδικό, οπότε τα παρακάτω είναι οδηγοί — όχι προσφορές. Η τελική τιμή σου επιβεβαιώνεται στη δωρεάν συνεδρία γνωριμίας, όπου χαρτογραφούμε τις συνεδρίες με τους στόχους σου."
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
                    Δημοφιλέστερη επιλογή
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
                  Ζήτα Προσφορά <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-16 p-8 md:p-12 border border-border bg-surface/30 grid md:grid-cols-3 gap-8">
              {[
                { t: "Δωρεάν γνωριμία", b: "Ιδιωτική συνεδρία 30 λεπτών, πάντα δωρεάν." },
                { t: "Ευέλικτες πληρωμές", b: "Μοίρασε την επένδυσή σου στις συνεδρίες, χωρίς τόκους." },
                { t: "Touch-ups εφ' όρου ζωής", b: "Προνομιακές τιμές σε κάθε μελλοντικό top-up." },
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