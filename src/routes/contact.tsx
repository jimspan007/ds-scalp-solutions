import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, MessageCircle, Clock, Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Κλείσε Συνεδρία — DS Scalp Micropigmentation" },
      {
        name: "description",
        content:
          "Κλείσε δωρεάν, ιδιωτική συνεδρία γνωριμίας SMP. Επικοινώνησε με φόρμα, WhatsApp ή επισκέψου το studio μας.",
      },
      { property: "og:title", content: "Κλείσε Συνεδρία — DS Scalp Micropigmentation" },
      { property: "og:description", content: "Κλείσε σήμερα την ιδιωτική σου συνεδρία SMP." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Συμπλήρωσε το όνομά σου").max(80),
  email: z.string().trim().email("Δώσε ένα έγκυρο email").max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Πες μας λίγα λόγια για τους στόχους σου").max(1200),
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Επικοινωνία"
        title="Ας μιλήσουμε. Χωρίς πίεση, χωρίς δέσμευση."
        intro="Μια ιδιωτική συνεδρία 30 λεπτών δεν κοστίζει τίποτα και σου λέει όσα χρειάζεσαι να ξέρεις. Στείλε μας μήνυμα παρακάτω ή στο WhatsApp για ταχύτερη απάντηση."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              {submitted ? (
                <div className="border border-gold p-12 text-center">
                  <Check className="w-12 h-12 text-gold mx-auto" strokeWidth={1.4} />
                  <h2 className="mt-6 font-display text-3xl">Το μήνυμά σου ελήφθη</h2>
                  <p className="mt-3 text-muted-foreground">
                    Σ' ευχαριστούμε. Θα επικοινωνήσουμε μαζί σου εντός μιας εργάσιμης ημέρας.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6" noValidate>
                  <Field
                    label="Όνομα"
                    name="name"
                    required
                    error={errors.name}
                    autoComplete="name"
                  />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      required
                      error={errors.email}
                      autoComplete="email"
                    />
                    <Field
                      label="Τηλέφωνο"
                      name="phone"
                      type="tel"
                      error={errors.phone}
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label className="eyebrow text-[0.6rem] block mb-3">
                      Πες μας για τους στόχους σου *
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      maxLength={1200}
                      className="w-full bg-surface/40 border border-border focus:border-gold focus:outline-none p-4 text-foreground transition-colors resize-none"
                      placeholder="Λίγες γραμμές για το τι θέλεις να πετύχεις..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
                  >
                    Αποστολή Μηνύματος
                  </button>
                </form>
              )}
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-10">
              <a
                href="https://wa.me/302100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-border hover:border-gold p-6 transition-colors group"
              >
                <MessageCircle className="w-6 h-6 text-gold" strokeWidth={1.4} />
                <p className="mt-4 font-display text-xl group-hover:text-gold transition-colors">
                  Στείλε μας στο WhatsApp
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ταχύτερη απάντηση · εντός 30 λεπτών στις ώρες λειτουργίας
                </p>
              </a>

              <div className="space-y-5 text-sm">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="eyebrow text-[0.6rem]">Studio</p>
                    <p className="mt-1 text-foreground">Αθήνα</p>
                    <p className="text-muted-foreground">Ελλάδα</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="eyebrow text-[0.6rem]">Τηλέφωνο</p>
                    <p className="mt-1 text-foreground">+30 210 000 0000</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="eyebrow text-[0.6rem]">Email</p>
                    <p className="mt-1 text-foreground">info@dsscalp.gr</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="eyebrow text-[0.6rem]">Ώρες</p>
                    <p className="mt-1 text-foreground">Τρ – Σα · 10:00 – 19:00</p>
                    <p className="text-muted-foreground">Μόνο με ραντεβού</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <Reveal>
            <p className="eyebrow mb-6">Βρες μας</p>
            <div className="aspect-[16/7] overflow-hidden border border-border">
              <iframe
                title="Τοποθεσία studio DS Scalp Micropigmentation"
                src="https://www.openstreetmap.org/export/embed.html?bbox=23.7200%2C37.9700%2C23.7500%2C37.9900&layer=mapnik&marker=37.9800%2C23.7350"
                className="w-full h-full grayscale contrast-[1.1] brightness-90"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="eyebrow text-[0.6rem] block mb-3">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        maxLength={200}
        className="w-full bg-surface/40 border border-border focus:border-gold focus:outline-none p-4 text-foreground transition-colors"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}