import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0a0a" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Brand */}
        <div className="text-center mb-14 pb-10 border-b border-white/10">
          <h2 className="text-5xl font-black tracking-widest text-white mb-1"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.15em" }}>
            SAFERON
          </h2>
          <div className="h-1 w-32 mx-auto mb-3" style={{ backgroundColor: "#dc2626" }} />
          <p className="text-gray-400 tracking-widest uppercase text-sm">
            Security, Fire & ICT Solutions — Trusted Since 1990
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* About */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm border-l-4 pl-3" style={{ borderColor: "#dc2626" }}>
              About Us
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Over 30 years of delivering reliable security, surveillance, and IT infrastructure solutions across Kenya.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg border"
              style={{ borderColor: "#dc2626", color: "#dc2626", backgroundColor: "rgba(220,38,38,0.1)" }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              24/7 Emergency Support
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm border-l-4 pl-3" style={{ borderColor: "#dc2626" }}>
              Contact Us
            </h4>
            <ul className="space-y-2.5">
              {["+254 728 652 354", "+254 716 325 789", "+254 710 513 624", "+254 732 300 035"].map((n) => (
                <li key={n}>
                  <a href={`tel:${n.replace(/\s/g, "")}`}
                    className="text-gray-400 hover:text-red-400 text-sm flex items-center gap-2 transition-colors">
                    📞 {n}
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:info@saferonsystems.com"
                  className="text-gray-400 hover:text-red-400 text-sm flex items-center gap-2 transition-colors">
                  📧 info@saferonsystems.com
                </a>
              </li>
              <li className="text-gray-400 text-sm">📍 The Crescent, P.O Box 58324-00200, Nairobi</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm border-l-4 pl-3" style={{ borderColor: "#dc2626" }}>
              Our Solutions
            </h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 10).map((s) => (
                <li key={s.href}>
                  <Link href={s.href}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors flex items-center gap-1.5">
                    <span className="text-red-600">›</span> {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm border-l-4 pl-3" style={{ borderColor: "#dc2626" }}>
              Follow Us
            </h4>
            <ul className="space-y-3">
              {[
                { icon: "📘", label: "Facebook", href: "https://web.facebook.com/saferonsystems/", color: "#1877f2" },
                { icon: "💼", label: "LinkedIn", href: "https://ke.linkedin.com/company/saferon-systems-limited", color: "#0a66c2" },
                { icon: "📸", label: "Instagram", href: "https://www.instagram.com/saferon_systems/", color: "#e1306c" },
                { icon: "💬", label: "WhatsApp", href: "https://wa.me/254716325789", color: "#25d366" },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-lg text-sm transition-all">
                    <span>{s.icon}</span> {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">© 2026 Saferon Systems Limited. All Rights Reserved.</p>
          <p className="text-gray-500 text-sm">Security & ICT Solutions — Trusted Since 1990</p>
        </div>
      </div>
    </footer>
  );
}