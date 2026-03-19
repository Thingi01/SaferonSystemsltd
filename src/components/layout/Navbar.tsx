"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SERVICES } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md"
      style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/images/saferon-banner.png"
              alt="Saferon Systems Limited"
              className="h-14 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            {/* Fallback text logo if image missing */}
            <span className="text-white font-bold text-xl hidden">
              Saferon Systems
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white hover:bg-white/15 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-white/90 hover:text-white hover:bg-white/15 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200"
              >
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 max-h-96 overflow-y-auto"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {SERVICES.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 text-gray-700 hover:text-blue-700 text-sm transition-colors"
                    >
                      <span>{service.icon}</span>
                      <span>{service.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="ml-2 bg-amber-500 hover:bg-amber-400 text-white px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-amber-500/40 hover:-translate-y-0.5"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden text-white p-2 rounded-lg hover:bg-white/15 transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 bg-gray-900 border-gray-700 text-white p-0"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="p-6 border-b border-gray-700"
                  style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)" }}>
                  <p className="text-white font-bold text-lg">Saferon Systems</p>
                  <p className="text-amber-400 text-xs tracking-widest uppercase mt-1">
                    Security & ICT Solutions
                  </p>
                </div>

                {/* Mobile Links */}
                <nav className="flex-1 overflow-y-auto py-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center px-6 py-3 text-gray-200 hover:text-white hover:bg-white/10 font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}

                  {/* Mobile Services Accordion */}
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full px-6 py-3 text-gray-200 hover:text-white hover:bg-white/10 font-medium transition-colors"
                  >
                    Solutions
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="bg-gray-800/50">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-3 pl-10 pr-6 py-2.5 text-gray-300 hover:text-white hover:bg-white/10 text-sm transition-colors"
                        >
                          <span>{service.icon}</span>
                          <span>{service.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </nav>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-gray-700">
                  
                   <a href="tel:+254728652354"
                    className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-white py-3 rounded-full font-semibold transition-colors"
                  >
                    📞 Call Us Now
                  </a>
                  
                   <a href="https://wa.me/254716325789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full mt-3 bg-green-600 hover:bg-green-500 text-white py-3 rounded-full font-semibold transition-colors"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}