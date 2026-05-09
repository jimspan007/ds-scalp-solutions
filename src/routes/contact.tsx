import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, MessageCircle, Clock, Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Κλείσε Συνεδρία - DS Scalp Micropigmentation" },
      { name: "description", content: "Κλείσε δωρεάν, ιδιωτική συνεδρία γνωριμίας SMP." },
      { property: "og:title", content: "Κλείσε Συνεδρία - DS Scalp Micropigmentation" },
      { property: "og:description", content: "Κλείσε σήμερα την ιδιωτική σου συνεδρία SMP." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    name: z.string().trim().min(2, t("contact.form.errors.name")).max(80),
    email: z.string().trim().email(t("contact.form.errors.email")).max(160),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    message: z.string().trim().min(10, t("contact.form.errors.message")).max(1200),
  });

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
        eyebrow={t("contact.hero.eyebrow")}
        title={t("contact.hero.title")}
        intro={t("contact.hero.intro")}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              {submitted ? (
                <div className="border border-gold p-12 text-center">
                  <Check className="w-12 h-12 text-gold mx-auto" strokeWidth={1.4} />
                  <h2 className="mt-6 font-display text-3xl">{t("contact.success.title")}</h2>
                  <p className="mt-3 text-muted-foreground">{t("contact.success.body")}</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6" noValidate>
                  <Field
                    label={t("contact.form.name")}
                    name="name"
                    required
                    error={errors.name}
                    autoComplete="name"
                  />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field
                      label={t("contact.form.email")}
                      name="email"
                      type="email"
                      required
                      error={errors.email}
                      autoComplete="email"
                    />
                    <Field
                      label={t("contact.form.phone")}
                      name="phone"
                      type="tel"
                      error={errors.phone}
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label className="eyebrow text-[0.6rem] block mb-3">
                      {t("contact.form.message")} *
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      maxLength={1200}
                      className="w-full bg-surface/40 border border-border focus:border-gold focus:outline-none p-4 text-foreground transition-colors resize-none"
                      placeholder={t("contact.form.messagePlaceholder")}
                    />
                    {errors.message && (
                      <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-ink text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-soft transition-colors"
                  >
                    {t("contact.form.submit")}
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
                  {t("contact.whatsapp.title")}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("contact.whatsapp.sub")}
                </p>
              </a>

              <div className="space-y-5 text-sm">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="eyebrow text-[0.6rem]">{t("contact.info.studio")}</p>
                    <p className="mt-1 text-foreground">{t("contact.info.studioCity")}</p>
                    <p className="text-muted-foreground">{t("contact.info.studioCountry")}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="eyebrow text-[0.6rem]">{t("contact.info.phone")}</p>
                    <p className="mt-1 text-foreground">+30 6943264883</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="eyebrow text-[0.6rem]">{t("contact.info.email")}</p>
                    <p className="mt-1 text-foreground">info@dssmp.gr</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="eyebrow text-[0.6rem]">{t("contact.info.hours")}</p>
                    <p className="mt-1 text-foreground">{t("contact.info.hoursValue")}</p>
                    <p className="text-muted-foreground">{t("contact.info.hoursNote")}</p>
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
            <p className="eyebrow mb-6">{t("contact.mapEyebrow")}</p>
            <div className="aspect-[16/7] overflow-hidden border border-border">
              <iframe
                title={t("contact.mapTitle")}
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
