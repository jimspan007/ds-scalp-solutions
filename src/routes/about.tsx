import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, ShieldCheck, GraduationCap, Heart } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import specialist from "@/assets/specialist.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Σχετικά - DS Scalp Micropigmentation" },
      {
        name: "description",
        content:
          "Γνώρισε τον πιστοποιημένο ειδικό πίσω από το DS Scalp Micropigmentation. 8+ χρόνια εμπειρίας, 500+ θεραπείες και προσέγγιση με γνώμονα την τέχνη.",
      },
      { property: "og:title", content: "Σχετικά - DS Scalp Micropigmentation" },
      { property: "og:description", content: "Γνώρισε τον ειδικό πίσω από το DS Scalp Micropigmentation." },
      { property: "og:image", content: specialist },
    ],
  }),
  component: About,
});

const credentials = [
  { icon: GraduationCap, label: "Εκπαίδευση στην Beauty Medical Academy, Μιλάνο" },
  { icon: Award, label: "Πιστοποιημένος Master SMP Practitioner" },
  { icon: ShieldCheck, label: "Πλήρως ασφαλισμένος · Αδειοδοτημένος" },
  { icon: Heart, label: "500+ άνδρες θεραπευμένοι από το 2017" },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Ο ειδικός"
        title="Μια τέχνη χτισμένη γύρω από ένα πράγμα - την αυτοπεποίθησή σου."
        intro="Το DS Scalp Micropigmentation καθοδηγείται από τον Σπανούδη Δημήτρη, πιστοποιημένο SMP artist με πολυέτή εμπειρία στο χώρο του Scalp Micropigmentation."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={specialist}
                alt="Δημήτρης Σπανούδης, ιδρυτής του DS Scalp Micropigmentation"
                loading="lazy"
                width={1080}
                height={1440}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow">Δημήτρης Σπανούδης · Ιδρυτής</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
                Γιατί ξεκίνησα το DS SMP.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Μετά από μια δεκαετία στον χώρο - πρώτα στο realism tattoo, μετά αποκλειστικά στο
                  scalp micropigmentation - άνοιξα το DS ως το αντίδοτο στις κλινικές «γραμμής
                  παραγωγής». Εδώ, κάθε συνεδρία είναι δική μου. Κάθε βελόνα είναι δική μου. Κάθε
                  αποτέλεσμα είναι δική μου ευθύνη.
                </p>
                <p>
                  Πιστεύω ότι μια καλή γραμμή μαλλιών πρέπει να δείχνει σαν να ήταν πάντα εκεί. Αυτό
                  απαιτεί υπομονή, μάτι καλλιτέχνη και βαθύ σεβασμό για το τι κάνει η απώλεια
                  μαλλιών στην αυτοεικόνα ενός άνδρα. Δεν πουλάμε συνεδρίες. Επαναφέρουμε κάτι που
                  χάθηκε.
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
                Κλείσε Συνεδρία <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-12 text-center">
          {[
            { n: "8+", t: "Χρόνια εξειδίκευσης στο SMP" },
            { n: "500+", t: "Θεραπείες" },
            { n: "4.9", t: "Μέση βαθμολογία πελατών" },
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