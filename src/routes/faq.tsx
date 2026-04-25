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
    title: "Η θεραπεία",
    items: [
      {
        q: "Πονάει το scalp micropigmentation;",
        a: "Η ενόχληση είναι ελάχιστη. Εφαρμόζουμε ιατρικής ποιότητας τοπική αναισθησία πριν από κάθε συνεδρία. Οι περισσότεροι το περιγράφουν ως ελαφρύ γρατζούνισμα — πολλοί αποκοιμιούνται μέσα στη συνεδρία.",
      },
      {
        q: "Πόσο διαρκεί κάθε συνεδρία;",
        a: "Οι συνεδρίες διαρκούν συνήθως 3–5 ώρες ανάλογα με το μέγεθος της περιοχής και το επίπεδο λεπτομέρειας. Ποτέ δεν βιαζόμαστε — η ποιότητα δεν διαπραγματεύεται.",
      },
      {
        q: "Πόσες συνεδρίες θα χρειαστώ;",
        a: "Οι περισσότερες θεραπείες απαιτούν 2–4 συνεδρίες με μεσοδιαστήματα 10–14 ημερών. Αυτή η σταδιακή προσέγγιση χτίζει βάθος και επιτρέπει ακριβή τελειοποίηση.",
      },
    ],
  },
  {
    title: "Αποτελέσματα & διάρκεια",
    items: [
      {
        q: "Θα δείχνει φυσικό;",
        a: "Απολύτως — όταν γίνεται από ειδικό. Σχεδιάζουμε γραμμές που ταιριάζουν στη δομή του προσώπου και χρησιμοποιούμε πολυτονικά pigments που αναπαράγουν την πραγματική παραλλαγή των τριχοθυλακίων.",
      },
      {
        q: "Πόσο θα κρατήσει το SMP μου;",
        a: "Τα αποτελέσματα κρατούν συνήθως 4–6 χρόνια πριν συστήνεται ελαφρύ top-up. Η έκθεση στον ήλιο, ο τύπος δέρματος και η περιποίηση επηρεάζουν τη διάρκεια.",
      },
      {
        q: "Είναι αναστρέψιμο;",
        a: "Ναι. Παρότι το SMP σχεδιάζεται ως μόνιμο, μπορεί να ξανοίξει ή να αφαιρεθεί με laser αν αλλάξεις γνώμη.",
      },
    ],
  },
  {
    title: "Ανάρρωση & συντήρηση",
    items: [
      {
        q: "Πώς είναι η ανάρρωση;",
        a: "Ελάχιστη. Το κεφάλι σου μπορεί να είναι ελαφρώς κόκκινο για 24–48 ώρες. Πρέπει να μείνει στεγνό για 4 ημέρες και να αποφύγεις έντονη εφίδρωση, ήλιο και πισίνες για 7 ημέρες. Αυτό είναι όλο.",
      },
      {
        q: "Πρέπει να ξυρίζω το κεφάλι μου;",
        a: "Για θεραπείες πλήρους κάλυψης, ναι — ένα κοντό ξύρισμα κάθε 1–3 ημέρες διατηρεί το look. Για θεραπείες πυκνότητας πάνω σε υπάρχοντα μαλλιά, δεν χρειάζεται ξύρισμα.",
      },
      {
        q: "Τι περιλαμβάνει η μετέπειτα φροντίδα;",
        a: "Παρέχουμε πλήρες aftercare kit και αναλυτικό πρωτόκολλο. Μακροπρόθεσμα, καθημερινό SPF και ήπια ενυδάτωση είναι οι μόνες απαιτήσεις.",
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
        intro="Τα έχουμε ακούσει όλα. Παρακάτω είναι οι ερωτήσεις που πραγματικά κάνουν οι άνδρες στις συνεδρίες — απαντημένες ειλικρινά, χωρίς πωλησιακή ρητορική."
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