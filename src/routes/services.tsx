import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import processImg from "@/assets/process-detail.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Υπηρεσίες - Θεραπείες Scalp Micropigmentation | DS" },
      {
        name: "description",
        content:
          "Αποκατάσταση γραμμής, θεραπείες πυκνότητας, κάλυψη ουλών και γυναικείο SMP. Ανακάλυψε ποια υπηρεσία scalp micropigmentation είναι ιδανική για σένα.",
      },
      { property: "og:title", content: "Υπηρεσίες - DS Scalp Micropigmentation" },
      {
        property: "og:description",
        content: "Αποκατάσταση γραμμής, πυκνότητα, κάλυψη ουλών και άλλα.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    n: "01",
    title: "Πλήρες Buzzcut Effect",
    body: "Το χαρακτηριστικό look-μια απόλυτα καθαρή,κοντοκουρεμένη-ξυρισμένη εμφάνιση για ολική απώλεια μαλλιών.",
    bullets: ["Ολική μεταμόρφωση", "Ομοιόμορφη κάλυψη σε όλη την περιοχή","Φυσικό Hairline", "3 συνεδρίες"],
  },
  {
    n: "02",
    title: "Density-Πύκνωση",
    body: "Αύξηση πυκνότητας σε αραιωμένες περιοχές της κεφαλής, χωρίς να επηρεάζει τα υπάρχοντα μαλλιά.",
    bullets: ["Συνδυάζεται με τα υπάρχοντα μαλλιά", "Εξαλείφει την αραίωση", "2–3 συνεδρίες"],
  },
  {
    n: "03",
    title: "Κάλυψη Ουλών",
    body: "Καλύπτουμε ουλές από μεταμόσχευση FUT/FUE, ατυχήματα και περιοχές αλωπεκίας με ακριβές pigmentation.",
    bullets: ["Κάλυψη strip scar", "Kάλυψη ουλών απο FUE", "Ουλές από δερματικές παθήσεις","Ουλές απο ιατρικές αιτίες","2-3 συνεδρίες"],
  },
  {
    n: "04",
    title: "Κάλυψη Ουλών",
    body: "Καλύπτουμε ουλές από μεταμόσχευση FUT/FUE, ατυχήματα και περιοχές αλωπεκίας με ακριβές pigmentation.",
    bullets: ["Κάλυψη strip scar", "Προσαρμοσμένο pigment", "2-3 συνεδρίες"],
  },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Υπηρεσίες"
        title=""
        intro="Το Scalp micropigmentation είναι μια εξειδικευμένη, μη επεμβατική τεχνική που δημιουργεί την όψη φυσικών θυλάκων τρίχας.Δες παρακάτω τις υπηρεσίες μας."
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
              alt="Macro λήψη βελόνας SMP στο κεφάλι"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow">Απαντάμε στους φόβους</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
                Ειλικρινείς απαντήσεις σε ό,τι ρωτά κάθε άνδρας.
              </h2>
            </Reveal>
            <div className="mt-10 space-y-8">
              {[
                {
                  q: "Πονάει;",
                  a: "Όχι η αίσθηση είναι αρκετά ήπια.Οι περισσότεροι το περιγράφουν ως ελαφρύ τσίμπημα.",
                },
                {
                  q: "Θα δείχνει ψεύτικο;",
                  a: "Όχι. Όταν η εφαρμογή γίνεται σωστά, το αποτέλεσμα είναι απόλυτα φυσικό και διακριτικό. Τηρούμε αυστηρά όλα τα πρωτόκολλα, χρησιμοποιούμε κορυφαίας ποιότητας pigments και εφαρμόζουμε με ακρίβεια την τεχνική, ώστε να σας εξασφαλίσουμε το καλύτερο δυνατό αποτέλεσμα.",
                },
                {
                  q: "Είναι πραγματικά μόνιμο;",
                  a: "Τα pigments κρατούν 4–6 χρόνια πριν χρειαστεί ελαφρύ touch-up. Η επένδυσή σου, στον δικό σου χρόνο, πάντα αναστρέψιμη αν χρειαστεί.",
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
                Συζήτησε τη Θεραπεία σου <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}