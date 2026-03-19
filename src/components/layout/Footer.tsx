import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f172a" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-2">Saferon Systems</h3>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-4">
              Security & ICT Solutions
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Over 30 years of delivering reliable security, surveillance,
              and IT infrastructure solutions across Kenya. Trusted since 1990.
            </p>
            <p className="text-amber-400 text-sm font-medium border border-amber-500/30 bg-amber-500/10 rounded-lg px-3 py-2">
              🕐 24/7 Emergency Support Available
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-amber-400 font-bold text-base mb-5 uppercase tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+254728652354"
                  className="text-gray-400 hover:text-amber-400 text-sm flex items-center gap-2 transition-colors">
                  📞 +254 728 652 354
                </a>
              </li>
              <li>
                <a href="tel:+254716325789"
                  className="text-gray-400 hover:text-amber-400 text-sm flex items-center gap-2 transition-colors">
                  📞 +254 716 325 789
                </a>
              </li>
              <li>
                <a href="tel:+254710513624"
                  className="text-gray-400 hover:text-amber-400 text-sm flex items-center gap-2 transition-colors">
                  📞 +254 710 513 624
                </a>
              </li>
              <li>
                <a href="tel:+254732300035"
                  className="text-gray-400 hover:text-amber-400 text-sm flex items-center gap-2 transition-colors">
                  📞 +254 732 300 035
                </a>
              </li>
              <li>
                <a href="mailto:info@saferonsystems.com"
                  className="text-gray-400 hover:text-amber-400 text-sm flex items-center gap-2 transition-colors">
                  📧 info@saferonsystems.com
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                📍 The Crescent, P.O Box 58324-00200, Nairobi, Kenya
              </li>
            </ul>
          </div>

          {/* Quick Links - Services */}
          <div>
            <h4 className="text-amber-400 font-bold text-base mb-5 uppercase tracking-wide">
              Our Solutions
            </h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 10).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-amber-400 text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    → {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & More Services */}
          <div>
            <h4 className="text-amber-400 font-bold text-base mb-5 uppercase tracking-wide">
              Follow Us
            </h4>
            <ul className="space-y-3 mb-8">
              <li>
                <a href="https://web.facebook.com/saferonsystems/"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white bg-white/5 hover:bg-blue-600 px-4 py-2.5 rounded-lg text-sm transition-all duration-200">
                  <span>📘</span> Facebook
                </a>
              </li>
              <li>
                <a href="https://ke.linkedin.com/company/saferon-systems-limited"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white bg-white/5 hover:bg-blue-700 px-4 py-2.5 rounded-lg text-sm transition-all duration-200">
                  <span>💼</span> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/saferon_systems/"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white bg-white/5 hover:bg-pink-600 px-4 py-2.5 rounded-lg text-sm transition-all duration-200">
                  <span>📸</span> Instagram
                </a>
              </li>
              <li>
                <a href="https://wa.me/254716325789"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white bg-white/5 hover:bg-green-600 px-4 py-2.5 rounded-lg text-sm transition-all duration-200">
                  <span>💬</span> WhatsApp
                </a>
              </li>
            </ul>

            <h4 className="text-amber-400 font-bold text-base mb-3 uppercase tracking-wide">
              More Solutions
            </h4>
            <ul className="space-y-2">
              {SERVICES.slice(10, 18).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-amber-400 text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    → {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Saferon Systems Limited. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Security & ICT Solutions — Trusted Since 1990
          </p>
        </div>
      </div>
    </footer>
  );
}