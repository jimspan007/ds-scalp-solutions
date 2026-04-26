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
      { title: "DS Scalp Micropigmentation — Premium SMP για άνδρες" },
      {
        name: "description",
        content:
          "Επανάφερε τη γραμμή των μαλλιών σου με ρεαλιστικό, μη ανιχνεύσιμο scalp micropigmentation. Πιστοποιημένος ειδικός. Κλείσε την ιδιωτική συνεδρία γνωριμίας σου σήμερα.",
      },
      { property: "og:title", content: "DS Scalp Micropigmentation — Premium SMP για άνδρες" },
      {
        property: "og:description",
        content: "Ρεαλιστικό, μη ανιχνεύσιμο scalp micropigmentation από πιστοποιημένο ειδικό.",
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
          <p className="eyebrow animate-fade-up">Scalp Micropigmentation</p>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.92] text-balance animate-fade-up delay-100">
           Η ιδανική λύση για αραίωση με φυσικό αποτέλεσμα<br />
            <span className="italic text-gold"></span>
          </h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
            Το SMP ή αλλιώς παραϊατρική δερματοστιξία κεφαλής είναι μια εξειδικευμένη, μη επεμβατική τεχνική 
            που δημιουργεί την όψη φυσικών θυλάκων τρίχας.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
            >
              Δωρεάν Συνεδρία Γνωριμίας
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-border text-foreground text-xs font-medium tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-colors"
            >
              Δες Αποτελέσματα
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
                <span className="text-foreground font-medium">500+ άνδρες</span> · 4.9 μέση βαθμολογία
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-in delay-300">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={heroPortrait}
              alt="Άνδρας με ολοκληρωμένο αποτέλεσμα scalp micropigmentation"
              className="w-full h-full object-cover"
              width={1080}
              height={1440}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background border border-border p-5 max-w-[220px] hidden md:block">
            <p className="eyebrow text-[0.6rem]">Θεραπεία</p>
            <p className="mt-2 font-display text-lg leading-tight">Αποκατάσταση πυκνότητας · 3 συνεδρίες</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "Πιστοποιημένος",
    "Πλήρως Ασφαλισμένος",
    "Ιατρικής Ποιότητας Pigments",
    "500+ Θεραπείες",
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
      title: "Μη ανιχνεύσιμο",
      body: "Pigments προσαρμοσμένα στον τόνο του δέρματός σου και στο φυσικό μοτίβο των τριχοθυλακίων. Ακόμα και από κοντά, κανείς δεν το καταλαβαίνει.",
    },
    {
      icon: Sparkles,
      title: "Ανώδυνο πρωτόκολλο",
      body: "Εξειδικευμένη και επιμελημένη τεχνική κάνουν τους περισσότερους πελάτες να περιγράφουν την αίσθηση ως ένα ελαφρύ τσίμπημα.",
    },
    {
      icon: Award,
      title: "Διάρκεια",
      body: "Μόνιμα αποτελέσματα με ελαφριά συντήρηση μετά από 4–5 χρόνια. Πάντα στον δικό σου έλεγχο.",
    },
  ];
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Η υπόσχεσή μας</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              Φυσικό και άμεσο αποτέλεσμα <span className="italic text-gold">σε 3 συνεδρίες</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <p className="text-muted-foreground leading-relaxed text-lg">
          Κάθε εφαρμογή προσαρμόζεται στις δικές σας ανάγκες, με προσοχή στη λεπτομέρεια που αναδεικνύει την εικόνα σας χωρίς υπερβολές.
          Δίνουμε έμφαση στην υγιεινή, την ασφάλεια και την ποιότητα, ώστε να νιώθετε σιγουριά σε κάθε στάδιο της διαδικασίας. 
          Στόχος μας είναι μια διακριτική αλλά ουσιαστική αλλαγή που ενισχύει την αυτοπεποίθησή σας.
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
            <p className="eyebrow">Πραγματικά αποτελέσματα</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
              Πριν & Μετά
            </h2>
          </div>
          <Link
            to="/gallery"
            className="text-sm text-gold hover:text-gold-soft transition-colors flex items-center gap-2 group"
          >
            Δες όλη τη γκαλερί
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { src: beforeAfter1, label: "Κορυφή · Αποκατάσταση πυκνότητας" },
            { src: beforeAfter3, label: "Μπροστινή όψη · Ολική μεταμόρφωση" },
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
    { n: "01", t: "Ειδικός, όχι σαλόνι", b: "Το SMP είναι το μόνο που κάνουμε. Όχι νύχια, όχι φρύδια — απόλυτη εστίαση, απόλυτη μαεστρία." },
    { n: "02", t: "Σχεδιασμένες με το χέρι γραμμές", b: "Σκιαγραφούμε τη γραμμή σου ζωντανά, ακολουθώντας τη δομή του προσώπου σου και τη φυσική πτώση των μαλλιών." },
    { n: "03", t: "Διακριτικό ιδιωτικό studio", b: "Οι θεραπείες γίνονται σε ιδιωτικό χώρο — χωρίς αίθουσες αναμονής, χωρίς κοινό." },
    { n: "04", t: "Προνομιακή τιμή εφ' όρου ζωής", b: "Όλοι οι πελάτες απολαμβάνουν προνομιακή τιμή σε κάθε μελλοντικό touch-up. Για πάντα." },
  ];
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <div className="sticky top-32">
            <p className="eyebrow">Γιατί DS</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              Επιλογή ανδρών που δεν συμβιβάζονται.
            </h2>
            <div className="gold-line w-24 my-8" />
            <img
              src={clinic}
              alt="Ιδιωτικό studio DS Scalp Micropigmentation"
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
    { n: "01", t: "Συνεδρία γνωριμίας", b: "Δωρεάν, ιδιωτική και χωρίς πίεση. Αξιολογούμε την περίπτωσή σου, ακούμε τις ανάγκες σου και καθορίζουμε μαζί τη γραμμή που θα ακολουθήσουμε." },
    { n: "02", t: "Συνεδρία 01", b: "Σχεδιασμός hairline(αν χρειάζεται),επιλογή κατάλληλου Pigment και διαμέτρου βελόνας.Τοποθετούμε τη βασική στρώση των microdots, χτίζοντας την πρώτη βάση." },
    { n: "03", t: "Συνεδρία 02", b: "Στη δεύτερη συνεδρία αξιολογούμε την απορρόφηση του χρώματος και την εξέλιξη της πρώτης εφαρμογής και συνεχίζουμε με περαιτέρω ενίσχυση της πυκνότητας για ένα πιο ομοιόμορφο και φυσικό αποτέλεσμα. ." },
    { n: "04", t: "Συνεδρία 03", b: "Στην τελευταία συνεδρία ολοκληρώνουμε το αποτέλεσμα, πραγματοποιώντας τυχόν διορθώσεις και blending όπου χρειάζεται. Στόχος μας είναι η απόλυτη ομοιομορφία και φυσικότητα, ώστε να τελειοποιηθεί πλήρως το τελικό αποτέλεσμα." },
  ];
  return (
    <section className="py-28 md:py-36 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow">Η διαδικασία</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] max-w-2xl">
             <span className="italic text-gold"></span>
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
      q: "Περίμενα οκτώ χρόνια για να το κάνω. Έπρεπε να είχα έρθει στο DS νωρίτερα. Άλλαξε πραγματικά τον τρόπο που βλέπω τον εαυτό μου στον καθρέφτη.",
      n: "Μάρκος Τ.",
      d: "Τραπεζίτης · 41",
    },
    {
      q: "Διακριτικός, επαγγελματίας, χωρίς πιεστικές πωλήσεις. Με κάθισε, σχεδίασε τη γραμμή και έδωσε ακριβώς αυτό που συμφωνήσαμε.",
      n: "Γιάννης Β.",
      d: "Αρχιτέκτονας · 36",
    },
    {
      q: "Ούτε ο κουρέας μου δεν το κατάλαβε. Αυτό είναι το επίπεδο.",
      n: "Ηλίας Ρ.",
      d: "Personal Trainer · 29",
    },
  ];
  return (
    <section className="py-28 md:py-36 bg-surface/30 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-center">Λόγια των πελατών μας</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-center max-w-3xl mx-auto leading-[1.05]">
            Αληθινοί άνδρες. Αληθινές κριτικές.
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
          <p className="eyebrow">Κάνε το πρώτο βήμα</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            Μια κουβέντα 30 λεπτών μπορεί να αλλάξει τα επόμενα <span className="italic text-gold">30 χρόνια</span>.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Δωρεάν, εμπιστευτική, χωρίς δέσμευση. Θα συζητήσουμε τους στόχους σου και θα σου δείξουμε
            τι είναι εφικτό — χωρίς πίεση για κράτηση.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
            >
              Κλείσε τη Συνεδρία σου
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/302100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-foreground text-xs font-medium tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-colors"
            >
              Στείλε μήνυμα στο WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
