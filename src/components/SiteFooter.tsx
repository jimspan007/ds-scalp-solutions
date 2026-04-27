import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex flex-col gap-4">
              <img
                src={logo}
                alt="DS Scalp Micropigmentation"
                className="h-20 md:h-24 w-auto object-contain brightness-0 invert opacity-90"
                width={280}
                height={180}
              />
              <p className="eyebrow text-[0.55rem]">Επανακτώντας την αυτοπεποίθηση</p>
            </div>
            <p className="mt-8 max-w-md text-sm text-bone/60 leading-relaxed">
              Premium scalp micropigmentation από πιστοποιημένο ειδικό. Ρεαλιστικά και φυσικά
              αποτελέσματα, σχεδιασμένα για άνδρες και γυναίκες.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">Πλοήγηση</p>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/about", label: "Σχετικά" },
                { to: "/services", label: "Υπηρεσίες" },
                { to: "/gallery", label: "Πριν & Μετά" },
                { to: "/faq", label: "Συχνές Ερωτήσεις" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-bone/60 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Studio</p>
            <ul className="space-y-3 text-sm text-bone/60">
              <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold" /> Θεσσαλονίκη, Ελλάδα</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-gold" /> +30 6943264883</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-gold" /> info@dssmp.gr</li>
              <li className="flex gap-2"><Instagram className="w-4 h-4 mt-0.5 text-gold" /> @ds_smp.gr</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bone/10 flex flex-col md:flex-row gap-3 justify-between text-xs text-bone/50">
          <p>© {new Date().getFullYear()} DS Scalp Micropigmentation. Με την επιφύλαξη παντός δικαιώματος.</p>
          <p>Πιστοποιημένος · Αδειοδοτημένος · Πλήρως Ασφαλισμένος</p>
        </div>
      </div>
    </footer>
  );
}