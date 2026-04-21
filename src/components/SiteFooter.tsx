import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-gold text-gold font-display text-lg">
                DS
              </span>
              <div>
                <p className="font-display text-lg text-foreground">DS Scalp Micropigmentation</p>
                <p className="eyebrow text-[0.55rem]">Restoring confidence — one follicle at a time</p>
              </div>
            </div>
            <p className="mt-8 max-w-md text-sm text-muted-foreground leading-relaxed">
              Premium scalp micropigmentation by a certified specialist. Realistic, undetectable
              results designed exclusively for the modern man.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Before & After" },
                { to: "/pricing", label: "Pricing" },
                { to: "/faq", label: "FAQ" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Studio</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold" /> 14 Marlowe Street, London W1</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-gold" /> +44 7700 900 123</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-gold" /> hello@dsscalp.co</li>
              <li className="flex gap-2"><Instagram className="w-4 h-4 mt-0.5 text-gold" /> @dsscalp</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row gap-3 justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} DS Scalp Micropigmentation. All rights reserved.</p>
          <p>Certified · Licensed · Fully Insured</p>
        </div>
      </div>
    </footer>
  );
}