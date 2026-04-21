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
      { title: "Book a Consultation — DS Scalp Micropigmentation" },
      {
        name: "description",
        content:
          "Book a free, private SMP consultation. Reach us by form, WhatsApp or visit our London studio.",
      },
      { property: "og:title", content: "Book a Consultation — DS Scalp Micropigmentation" },
      { property: "og:description", content: "Book your private SMP consultation today." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little about your goals").max(1200),
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
        eyebrow="Contact"
        title="Let's talk. No pressure, no obligation."
        intro="A 30-minute private consultation costs nothing and tells you everything you need to know. Reach out below or message us on WhatsApp for a faster reply."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              {submitted ? (
                <div className="border border-gold p-12 text-center">
                  <Check className="w-12 h-12 text-gold mx-auto" strokeWidth={1.4} />
                  <h2 className="mt-6 font-display text-3xl">Message received</h2>
                  <p className="mt-3 text-muted-foreground">
                    Thank you. We'll be in touch within one working day.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6" noValidate>
                  <Field
                    label="Name"
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
                      label="Phone"
                      name="phone"
                      type="tel"
                      error={errors.phone}
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label className="eyebrow text-[0.6rem] block mb-3">
                      Tell us about your goals *
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      maxLength={1200}
                      className="w-full bg-surface/40 border border-border focus:border-gold focus:outline-none p-4 text-foreground transition-colors resize-none"
                      placeholder="A few lines about what you're hoping to achieve..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-10">
              <a
                href="https://wa.me/447700900123"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-border hover:border-gold p-6 transition-colors group"
              >
                <MessageCircle className="w-6 h-6 text-gold" strokeWidth={1.4} />
                <p className="mt-4 font-display text-xl group-hover:text-gold transition-colors">
                  WhatsApp us
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fastest reply · within 30 minutes during studio hours
                </p>
              </a>

              <div className="space-y-5 text-sm">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="eyebrow text-[0.6rem]">Studio</p>
                    <p className="mt-1 text-foreground">14 Marlowe Street</p>
                    <p className="text-muted-foreground">London W1, United Kingdom</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="eyebrow text-[0.6rem]">Call</p>
                    <p className="mt-1 text-foreground">+44 7700 900 123</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="eyebrow text-[0.6rem]">Email</p>
                    <p className="mt-1 text-foreground">hello@dsscalp.co</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="eyebrow text-[0.6rem]">Hours</p>
                    <p className="mt-1 text-foreground">Tue – Sat · 10am – 7pm</p>
                    <p className="text-muted-foreground">By appointment only</p>
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
            <p className="eyebrow mb-6">Find us</p>
            <div className="aspect-[16/7] overflow-hidden border border-border">
              <iframe
                title="DS Scalp Micropigmentation studio location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1437%2C51.5125%2C-0.1337%2C51.5175&layer=mapnik&marker=51.515%2C-0.1387"
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