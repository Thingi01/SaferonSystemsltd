"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 text-sm text-white"
        style={{ backgroundColor: "#0a0a0a" }}>
        <div className="flex items-center gap-6">
          <a href="tel:+254728652354" className="flex items-center gap-2 hover:text-red-400 transition-colors">
            <Phone className="w-3.5 h-3.5" /> +254 728 652 354
          </a>
          <a href="mailto:info@saferonsystems.com" className="flex items-center gap-2 hover:text-red-400 transition-colors">
            <Mail className="w-3.5 h-3.5" /> info@saferonsystems.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          24/7 Emergency Support Available
        </div>
      </div>

      {/* ── LOGO BANNER ── */}
      <div className="w-full text-center py-6 px-4" style={{ backgroundColor: "#0f172a" }}>
        <Link href="/">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl font-black tracking-widest text-white"
              style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.15em" }}>
              SAFERON
            </h1>
            <div className="h-1 w-full mt-1" style={{ backgroundColor: "#dc2626" }} />
            <p className="text-gray-300 text-sm md:text-base mt-2 tracking-widest uppercase font-light">
              Security, Fire & ICT Solutions — Trusted Since 1990
            </p>
          </div>
        </Link>
      </div>

      {/* ── MAIN NAV ── */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "shadow-2xl" : ""
        }`}
        style={{ backgroundColor: "#dc2626" }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 w-full justify-center">
            <Link href="/"
              className="text-white font-semibold px-5 py-2 rounded hover:bg-white/20 transition-all text-sm tracking-wide">
              Home
            </Link>
            <Link href="/#about"
              className="text-white font-semibold px-5 py-2 rounded hover:bg-white/20 transition-all text-sm tracking-wide">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-white font-semibold px-5 py-2 rounded hover:bg-white/20 transition-all text-sm tracking-wide">
                Solutions <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-72 bg-white rounded-b-xl shadow-2xl border-t-4 border-red-600 z-50 py-2 max-h-96 overflow-y-auto">
                  {SERVICES.map((s) => (
                    <Link key={s.href} href={s.href}
                      className="flex items-center gap-3 px-5 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 text-sm font-medium transition-colors">
                      <span className="text-base">{s.icon}</span>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#contact"
              className="text-white font-semibold px-5 py-2 rounded hover:bg-white/20 transition-all text-sm tracking-wide">
              Contact
            </Link>

            <a href="tel:+254728652354"
              className="ml-4 bg-white text-red-600 font-bold px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition-all shadow-lg">
              📞 Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t-4 border-red-600 shadow-2xl max-h-screen overflow-y-auto">
            <div className="flex flex-col divide-y divide-gray-100">
              {[{ label: "Home", href: "/" }, { label: "About", href: "/#about" }, { label: "Contact", href: "/#contact" }].map((l) => (
                <Link key={l.href} href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-6 py-4 text-gray-800 font-semibold hover:text-red-600 hover:bg-red-50 transition-colors">
                  {l.label}
                </Link>
              ))}

              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 text-gray-800 font-semibold hover:text-red-600">
                  Solutions <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="bg-gray-50">
                    {SERVICES.map((s) => (
                      <Link key={s.href} href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 pl-10 pr-6 py-3 text-gray-600 hover:text-red-600 text-sm font-medium">
                        <span>{s.icon}</span> {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col gap-3">
                <a href="tel:+254728652354"
                  className="flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-full font-bold">
                  📞 +254 728 652 354
                </a>
                <a href="https://wa.me/254716325789" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-full font-bold">
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}