import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Συχνές Ερωτήσεις — Scalp Micropigmentation | DS" },
      {
        name: "description",
        content:
          "Πόνος, διάρκεια, ανάρρωση, συντήρηση — κάθε ερώτηση που κάνουν οι άνδρες πριν κλείσουν SMP, απαντημένη ειλικρινά.",
      },
      { property: "og:title", content: "Συχνές Ερωτήσεις — DS Scalp Micropigmentation" },
      {
        property: "og:description",
        content: "Ειλικρινείς απαντήσεις στις πιο συχνές ερωτήσεις για SMP.",
      },
    ],
  }),
  component: Faq,
});

const sections: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Ερωτήσεις",
    items: [
      {
        q: "Πονάει το scalp micropigmentation;",
        a: "Όχι η αίσθηση είναι αρκετά ήπια.Οι περισσότεροι το περιγράφουν ως ελαφρύ τσίμπημα.",
      },
      {
        q: "Πόσο διαρκεί κάθε συνεδρία;",
        a: "Οι συνεδρίες διαρκούν συνήθως 2-4 ώρες, εξαρτάται από τον τύπο δέρματος και από την έκταση της περιοχής που πρέπει να καλυφθεί.",
      },
      {
        q: "Πόσες συνεδρίες θα χρειαστώ;",
        a: "2-3 συνεδρίες, ανάλογα με το κάθε περιστατικό.",
      },
    ],
  },
  {
    title: "",
    items: [
      {
        q: "Είναι μόνο για άντρες;",
        a: "Όχι το smp εφαρμόζεται πολύ συχνά και στις γυναίκες, οι οποίες έχουν αραίωση λόγω γυναικείας αλωπεκίας, είτε λόγω στρες ή ορμονών. ",
      },
      {
        q: "Πόσο διαρκεί το SMP;",
        a: "Το SMP διαρκεί 5-6 χρόνια, ενώ με ένα απλό refresh μπορούμε να επαναφέρουμε το αποτέλεσμα όποτε χρειαστεί.",
      },
      {
        q: "Είναι ίδιο με το τατουάζ ;",
        a: "Παρότι μοιάζει εξωτερικά στη διασικασία δεν είναι τατουάζ.Είναι μια εξειδικευμένη μέθοδος στην οποία χρησιμοποιείται ειδική τεχνική και διαφορετικές χρωστικές.",
      },
    ],
  },
  {
    title: "",
    items: [
      {
        q: "Πώς είναι η ανάρρωση;",
        a: "Ελάχιστη. Το κεφάλι σου μπορεί να είναι ελαφρώς κόκκινο για 24–48 ώρες. Πρέπει να μείνει στεγνό για 4 ημέρες και να αποφύγεις έντονη εφίδρωση, ήλιο και πισίνες για 7 ημέρες. Αυτό είναι όλο.",
      },
      {
        q: "Υπάρχει περίπτωση να αλλάξει το χρώμα;",
        a: "Όταν χρησιμοποιούνται οι σωστές χρωστικές και εφαρμόζεται σωστά η τεχνική,το αποτέλεσμα παραμένει σε φυσικούς τόνους και δεν αλλάζει το χρώμα.",
      },
      {
        q: "Μπορεί να συνδυαστεί με μεταμόσχευση;",
        a: "Φυσικά και μπορεί,ειδικά όταν υπάρχει ακόμα έλλειψη πυκνότητας μετά τη μεταμόσχευση,αλλά και για να καλυφθούν πιθανές ουλές που μπορούν να προκύψουν στη δότρια περιοχή.",
      },
    ],
  },
];

function Faq() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Ερωτήσεις"
        title="Όλα όσα ήθελες να ρωτήσεις, απαντημένα."
        intro="Τα έχουμε ακούσει όλα. Παρακάτω είναι απαντημένες οι πιο συχνές ερωτήσεις και απορίες των πελατών."
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
              Έχεις ακόμα ερώτηση; Ρώτα μας απευθείας.
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 px-7 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
            >
              Επικοινώνησε <ArrowRight className="w-4 h-4" />
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