"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sideFormOpen, setSideFormOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // close mobile menu on resize
  useEffect(() => {
    const close = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  // prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = sideFormOpen || mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sideFormOpen, mobileOpen]);

  async function handleSideSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("sending");
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@saferonsystems.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _captcha: "false", _subject: `New Inquiry — ${data.name}` }),
      });
      setFormStatus(res.ok ? "success" : "error");
      if (res.ok) {
        (e.target as HTMLFormElement).reset();
        setTimeout(() => { setSideFormOpen(false); setFormStatus("idle"); }, 3000);
      }
    } catch { setFormStatus("error"); }
  }

  const inputCls = "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white";

  return (
    <>
      {/* ── TOP INFO BAR (desktop only) ── */}
      <div className="hidden md:flex items-center justify-between px-6 lg:px-8 py-2 text-xs text-white"
        style={{ backgroundColor: "#0a0a0a" }}>
        <div className="flex items-center gap-6">
          <a href="tel:+254728652354" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
            <Phone className="w-3 h-3" /> +254 728 652 354
          </a>
          <a href="mailto:info@saferonsystems.com" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
            <Mail className="w-3 h-3" /> info@saferonsystems.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          24/7 Emergency Support
        </div>
      </div>

      {/* ── LOGO BANNER ── */}
      <div className="w-full text-center py-3 md:py-4 px-4"
        style={{ backgroundColor: "#0f172a" }}>
        <Link href="/" className="inline-block">
          <div className="inline-flex flex-col items-center">
            <h1
              className="font-black text-white"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.25em",
                fontWeight: 900,
                fontSize: "clamp(1.6rem, 5vw, 2.8rem)",
              }}>
              SAFERON
            </h1>
            <div className="w-full mt-1 mb-1.5" style={{ height: "2px", backgroundColor: "#dc2626" }} />
            <p className="text-gray-400 font-semibold uppercase text-center"
              style={{ fontSize: "clamp(7px, 1.8vw, 10px)", letterSpacing: "0.15em", whiteSpace: "nowrap" }}>
              Security &nbsp;·&nbsp; Fire &nbsp;·&nbsp; ICT Solutions &nbsp;·&nbsp; Trusted Since 1990
            </p>
          </div>
        </Link>
      </div>

      {/* ── MAIN NAV ── */}
      <nav className="sticky top-0 z-50 w-full shadow-lg" style={{ backgroundColor: "#1e3a8a" }}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12 md:h-14">

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 w-full justify-center">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/#about" },
              { label: "Contact", href: "/#contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="text-white/90 hover:text-white hover:bg-white/15 font-semibold px-4 py-2 rounded-lg text-sm tracking-wide transition-all">
                {l.label}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-white/90 hover:text-white hover:bg-white/15 font-semibold px-4 py-2 rounded-lg text-sm transition-all">
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-68 bg-white rounded-xl shadow-2xl border-t-4 z-50 py-2 max-h-80 overflow-y-auto"
                  style={{ borderTopColor: "#1e3a8a", width: "280px" }}>
                  {SERVICES.map((s) => (
                    <Link key={s.href} href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 text-sm font-medium transition-colors">
                      <span>{s.icon}</span>{s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => { setFormStatus("idle"); setSideFormOpen(true); }}
              className="ml-3 bg-amber-400 hover:bg-amber-300 text-gray-900 font-black px-5 py-2 rounded-full text-sm transition-all shadow-md hover:-translate-y-0.5">
              Get a Quote
            </button>
          </div>

          {/* Mobile: logo text + hamburger */}
          <Link href="/" className="md:hidden text-white font-black text-lg tracking-widest"
            style={{ fontFamily: "var(--font-heading)" }}>
            SAFERON
          </Link>
          <button className="md:hidden text-white p-1.5 rounded-lg hover:bg-white/15 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU DRAWER ── */}
      {/* Backdrop */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setMobileOpen(false)} />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 left-0 h-full z-50 w-4/5 max-w-xs bg-white shadow-2xl flex flex-col transition-transform duration-300 md:hidden ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>

        {/* drawer header */}
        <div className="flex items-center justify-between px-5 py-4 text-white"
          style={{ background: "linear-gradient(135deg, #1e3a8a, #0f172a)" }}>
          <div>
            <div className="font-black text-lg tracking-widest" style={{ fontFamily: "var(--font-heading)" }}>SAFERON</div>
            <div className="text-blue-200 text-xs mt-0.5">Security · Fire · ICT Solutions</div>
          </div>
          <button onClick={() => setMobileOpen(false)}
            className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* drawer links */}
        <div className="flex-1 overflow-y-auto">
          <div className="divide-y divide-gray-100">
            {[
              { label: "🏠 Home", href: "/" },
              { label: "ℹ️ About", href: "/#about" },
              { label: "📞 Contact", href: "/#contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block px-5 py-4 text-gray-800 font-semibold text-sm hover:bg-blue-50 hover:text-blue-800 transition-colors">
                {l.label}
              </Link>
            ))}

            {/* accordion */}
            <div>
              <button onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-5 py-4 text-gray-800 font-semibold text-sm hover:bg-blue-50">
                🔒 Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="bg-gray-50 max-h-52 overflow-y-auto">
                  {SERVICES.map((s) => (
                    <Link key={s.href} href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2.5 pl-8 pr-5 py-2.5 text-gray-600 hover:text-blue-800 hover:bg-blue-50 text-xs font-medium transition-colors">
                      <span>{s.icon}</span>{s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* drawer CTA */}
        <div className="p-4 border-t border-gray-100 flex flex-col gap-2.5">
          <button onClick={() => { setSideFormOpen(true); setMobileOpen(false); setFormStatus("idle"); }}
            className="w-full bg-amber-400 text-gray-900 font-black py-3 rounded-full text-sm">
            ✉️ Get a Free Quote
          </button>
          <a href="tel:+254728652354"
            className="w-full flex items-center justify-center gap-2 border-2 border-blue-800 text-blue-800 font-bold py-3 rounded-full text-sm">
            📞 +254 728 652 354
          </a>
          <a href="https://wa.me/254716325789" target="_blank" rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 rounded-full text-sm">
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      {/* ── SIDE FORM BACKDROP ── */}
      {sideFormOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setSideFormOpen(false)} />
      )}

      {/* ── SIDE FORM DRAWER ── */}
      <div className={`fixed top-0 right-0 h-full z-50 flex flex-col bg-white shadow-2xl transition-transform duration-300 ${sideFormOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ width: "min(100vw, 420px)" }}>

        {/* header */}
        <div className="flex items-center justify-between px-5 py-4 text-white flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)" }}>
          <div>
            <h3 className="text-lg font-black">Get in Touch</h3>
            <p className="text-blue-200 text-xs mt-0.5">We'll respond within 24 hours</p>
          </div>
          <button onClick={() => setSideFormOpen(false)}
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* form body */}
        <div className="flex-1 overflow-y-auto p-5">
          {formStatus === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-10">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-black text-gray-900">Message Sent!</h4>
              <p className="text-gray-500 text-sm max-w-xs">Thank you! Our team will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSideSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                <input name="name" required placeholder="John Kamau" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                <input name="email" type="email" required placeholder="john@company.com" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                <input name="phone" type="tel" required placeholder="+254 700 000 000" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Service Interested In</label>
                <select name="service" className={inputCls} style={{ appearance: "none" }}>
                  <option value="">Select a service...</option>
                  {SERVICES.map((s) => <option key={s.href} value={s.label}>{s.label}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                <textarea name="message" required placeholder="Tell us about your security needs..." rows={4}
                  className={`${inputCls} resize-none`} />
              </div>
              {formStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm font-medium">
                  ⚠️ Something went wrong. Please try again or call us.
                </div>
              )}
              <button type="submit" disabled={formStatus === "sending"}
                className="w-full text-white font-black py-3.5 rounded-xl text-sm disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg"
                style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)" }}>
                {formStatus === "sending" ? (
                  <><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg> Sending...</>
                ) : "Send Message →"}
              </button>
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100">
                <a href="tel:+254728652354"
                  className="flex items-center justify-center gap-1.5 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-800 text-gray-500 py-2.5 rounded-xl text-xs font-bold transition-colors">
                  📞 Call Us
                </a>
                <a href="https://wa.me/254716325789" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 border-2 border-gray-200 hover:border-green-500 hover:text-green-600 text-gray-500 py-2.5 rounded-xl text-xs font-bold transition-colors">
                  💬 WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* ── SIDE TAB TRIGGER ── */}
      <button
        onClick={() => { setSideFormOpen(true); setFormStatus("idle"); }}
        className="fixed z-30 text-white font-black shadow-xl transition-all duration-200"
        style={{
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          background: "linear-gradient(180deg, #1e3a8a 0%, #0f172a 100%)",
          borderRadius: "10px 0 0 10px",
          width: "44px",
          padding: "16px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}>
        <span style={{ fontSize: "14px" }}>✉️</span>
        <span style={{
          fontSize: "9px",
          letterSpacing: "0.1em",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          textTransform: "uppercase",
          fontWeight: 800,
        }}>
          Contact
        </span>
        <span style={{ width: "2px", height: "16px", backgroundColor: "#f59e0b", borderRadius: "1px" }} />
      </button>
    </>
  );
}