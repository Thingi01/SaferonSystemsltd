"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sideFormOpen, setSideFormOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle"|"sending"|"success"|"error">("idle");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        setTimeout(() => { setSideFormOpen(false); setFormStatus("idle"); }, 3500);
      }
    } catch { setFormStatus("error"); }
  }

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 text-sm text-white"
        style={{ backgroundColor: "#0a0a0a" }}>
        <div className="flex items-center gap-6">
          <a href="tel:+254728652354"
            className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Phone className="w-3.5 h-3.5" /> +254 728 652 354
          </a>
          <a href="mailto:info@saferonsystems.com"
            className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Mail className="w-3.5 h-3.5" /> info@saferonsystems.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-xs">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          24/7 Emergency Support Available
        </div>
      </div>

      {/* ── LOGO BANNER ── */}
     <div className="w-full text-center py-4 px-4" style={{ backgroundColor: "#0f172a" }}>
  <Link href="/">
    <div className="inline-flex flex-col items-center">
      <h1
        className="text-4xl md:text-5xl font-black text-white"
        style={{
          fontFamily: "var(--font-heading)",
          letterSpacing: "0.3em",
          fontWeight: 900,
          textShadow: "0 2px 12px rgba(59,130,246,0.3)",
        }}>
        SAFERON
      </h1>
      <div className="mt-1 mb-1.5" style={{ width: "100%", height: "2px", backgroundColor: "#dc2626", borderRadius: "1px" }} />
      <p
        className="text-gray-400 uppercase font-semibold text-center w-full"
        style={{
          fontSize: "10px",
          letterSpacing: "0.18em",
          whiteSpace: "nowrap",
        }}>
        Security &nbsp;·&nbsp; Fire &nbsp;·&nbsp; ICT Solutions &nbsp;·&nbsp; Trusted Since 1990
      </p>
    </div>
  </Link>
</div>

      {/* ── MAIN NAV ── */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "shadow-2xl" : ""}`}
        style={{ backgroundColor: "#1e3a8a" }}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-13">

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 w-full justify-center py-2">
            {[{ label: "Home", href: "/" }, { label: "About", href: "/#about" }, { label: "Contact", href: "/#contact" }].map((l) => (
              <Link key={l.href} href={l.href}
                className="text-white/90 hover:text-white hover:bg-white/15 font-semibold px-5 py-2 rounded-lg text-sm tracking-wide transition-all">
                {l.label}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-white/90 hover:text-white hover:bg-white/15 font-semibold px-5 py-2 rounded-lg text-sm tracking-wide transition-all">
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 bg-white rounded-xl shadow-2xl border-t-4 z-50 py-2 max-h-96 overflow-y-auto"
                  style={{ borderTopColor: "#1e3a8a" }}>
                  {SERVICES.map((s) => (
                    <Link key={s.href} href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 px-5 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-800 text-sm font-medium transition-colors">
                      <span>{s.icon}</span>{s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Get a Quote CTA */}
            <button
              onClick={() => setSideFormOpen(true)}
              className="ml-4 bg-amber-400 hover:bg-amber-300 text-gray-900 font-black px-6 py-2 rounded-full text-sm transition-all shadow-lg hover:-translate-y-0.5">
              Get a Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-white p-2 ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t-4 shadow-2xl"
            style={{ borderTopColor: "#1e3a8a" }}>
            <div className="flex flex-col divide-y divide-gray-100">
              {[{ label: "Home", href: "/" }, { label: "About", href: "/#about" }, { label: "Contact", href: "/#contact" }].map((l) => (
                <Link key={l.href} href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-6 py-4 text-gray-800 font-semibold hover:text-blue-800 hover:bg-blue-50 transition-colors">
                  {l.label}
                </Link>
              ))}
              <div>
                <button onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 text-gray-800 font-semibold hover:text-blue-800">
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="bg-gray-50 max-h-64 overflow-y-auto">
                    {SERVICES.map((s) => (
                      <Link key={s.href} href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 pl-10 pr-6 py-3 text-gray-600 hover:text-blue-800 text-sm font-medium">
                        <span>{s.icon}</span>{s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col gap-3">
                <button onClick={() => { setSideFormOpen(true); setMobileOpen(false); }}
                  className="w-full bg-amber-400 text-gray-900 py-3 rounded-full font-black text-sm">
                  Get a Free Quote
                </button>
                <a href="tel:+254728652354"
                  className="flex items-center justify-center gap-2 bg-blue-800 text-white py-3 rounded-full font-bold text-sm">
                  📞 Call Us Now
                </a>
                <a href="https://wa.me/254716325789" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-full font-bold text-sm">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ══════════════════════════════════════════
          SIDE CONTACT FORM
      ══════════════════════════════════════════ */}

      {/* Backdrop */}
      {sideFormOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setSideFormOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full z-50 w-full max-w-md flex flex-col bg-white shadow-2xl transition-transform duration-300"
        style={{ transform: sideFormOpen ? "translateX(0)" : "translateX(100%)" }}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 text-white"
          style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)" }}>
          <div>
            <h3 className="text-xl font-black tracking-wide">Get in Touch</h3>
            <p className="text-blue-200 text-xs mt-0.5">We'll respond within 24 hours</p>
          </div>
          <button onClick={() => setSideFormOpen(false)}
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {formStatus === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl">✓</div>
              <h4 className="text-xl font-black text-gray-900">Message Sent!</h4>
              <p className="text-gray-500 text-sm max-w-xs">
                Thank you for reaching out. Our team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSideSubmit} className="flex flex-col gap-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name" required placeholder="John Kamau"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  name="email" type="email" required placeholder="john@company.com"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  name="phone" type="tel" required placeholder="+254 700 000 000"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Service Interested In
                </label>
                <select
                  name="service"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white appearance-none">
                  <option value="">Select a service...</option>
                  {SERVICES.map((s) => (
                    <option key={s.href} value={s.label}>{s.label}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message" required placeholder="Tell us about your security needs..."
                  rows={4}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white resize-none"
                />
              </div>

              {formStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm font-medium">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full text-white font-black py-4 rounded-xl text-base transition-all hover:-translate-y-0.5 disabled:opacity-60 shadow-lg mt-2"
                style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)" }}>
                {formStatus === "sending" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </span>
                ) : "Send Message →"}
              </button>

              {/* Quick contact alternatives */}
              <div className="border-t border-gray-100 pt-4 mt-2">
                <p className="text-xs text-gray-400 text-center mb-3 font-medium uppercase tracking-wider">Or reach us directly</p>
                <div className="grid grid-cols-2 gap-3">
                  <a href="tel:+254728652354"
                    className="flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-800 text-gray-600 py-2.5 rounded-xl text-xs font-bold transition-colors">
                    📞 Call Us
                  </a>
                  <a href="https://wa.me/254716325789" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-green-500 hover:text-green-600 text-gray-600 py-2.5 rounded-xl text-xs font-bold transition-colors">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Side form trigger tab */}
      <button
        onClick={() => setSideFormOpen(true)}
        className="fixed z-30 text-white text-xs font-black py-3 px-3 shadow-xl transition-all hover:px-4"
        style={{
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          background: "linear-gradient(180deg, #1e3a8a 0%, #0f172a 100%)",
          borderRadius: "8px 0 0 8px",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          letterSpacing: "0.1em",
        }}>
        📨 Contact Us
      </button>
    </>
  );
}