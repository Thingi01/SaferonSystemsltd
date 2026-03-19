"use client";

import { useState } from "react";
import PageLayout from "./PageLayout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ServicePageData {
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string[];
  featuresTitle?: string;
  features: ServiceFeature[];
  customSectionTitle?: string;
  customSectionContent?: string[];
  brands?: { name: string; src: string }[];
  relatedServices?: { label: string; href: string }[];
  ctaTitle?: string;
  ctaSubtitle?: string;
}

const WA_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

async function submitForm(data: Record<string, string>) {
  const res = await fetch("https://formsubmit.co/ajax/info@saferonsystems.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ ...data, _captcha: "false", _subject: `New Inquiry from ${data.name} - ${data.service || "General"}` }),
  });
  return res.ok;
}

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("sending");
    const fd = new FormData(e.currentTarget);
    const ok = await submitForm(Object.fromEntries(fd.entries()) as Record<string, string>);
    setFormStatus(ok ? "success" : "error");
    if (ok) {
      (e.target as HTMLFormElement).reset();
      setTimeout(() => { setModalOpen(false); setFormStatus("idle"); }, 4000);
    }
  }

  return (
    <PageLayout>

      {/* ── HERO ── */}
      <section
        className="relative text-white text-center py-28 px-6 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(30,41,59,0.90) 100%), url('${data.heroImage}') center/cover no-repeat`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(circle at 30% 50%, rgba(59,130,246,0.15) 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Badge className="mb-5 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-4 py-1.5 text-sm">
            Saferon Systems · Professional Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            {data.title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            {data.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-amber-500/40 hover:-translate-y-1"
            >
              Get a Free Quote
            </button>
            
              <a href="/"
              className="border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:bg-white/10 hover:-translate-y-1"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold section-underline" style={{ color: "#1e3a8a" }}>
              {data.title.split(" ").slice(0, 3).join(" ")} at Saferon
            </h2>
          </div>
          <div className="space-y-5">
            {data.overview.map((para, i) => (
              <p key={i} className="text-gray-600 text-lg leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold section-underline" style={{ color: "#1e3a8a" }}>
              {data.featuresTitle || "Key Features & Benefits"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-t-4"
                style={{ borderTopColor: "#3b82f6" }}
              >
                {f.icon && <div className="text-4xl mb-4">{f.icon}</div>}
                <h3 className="text-xl font-bold mb-3" style={{ color: "#0f172a" }}>{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM SECTION (optional) ── */}
      {data.customSectionContent && data.customSectionContent.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold section-underline" style={{ color: "#1e3a8a" }}>
                {data.customSectionTitle || "Tailored Solutions for Your Needs"}
              </h2>
            </div>
            <div className="space-y-5">
              {data.customSectionContent.map((para, i) => (
                <p key={i} className="text-gray-600 text-lg leading-relaxed">{para}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BRANDS (optional) ── */}
      {data.brands && data.brands.length > 0 && (
        <section className="py-16 px-6" style={{ backgroundColor: "#f8fafc" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold section-underline" style={{ color: "#1e3a8a" }}>
                Brands We Supply
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {data.brands.map((b) => (
                <div key={b.name}
                  className="w-36 h-20 bg-white rounded-xl shadow-sm flex items-center justify-center p-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                  <img src={b.src} alt={b.name}
                    className="max-w-full max-h-12 object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-200"
                    onError={(e) => { e.currentTarget.style.display = "none"; }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED SERVICES (optional) ── */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold section-underline" style={{ color: "#1e3a8a" }}>
                Related Solutions
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {data.relatedServices.map((s) => (
                <a key={s.href} href={s.href}
                  className="bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white border border-gray-200 hover:border-blue-600 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-200">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section
        className="py-24 px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #020617 0%, #0f172a 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {data.ctaTitle || "Ready to Secure Your Property?"}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {data.ctaSubtitle || "Contact Saferon Systems today for a professional consultation and customized solution."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-400 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-200 hover:-translate-y-1 shadow-lg"
            >
              Get a Free Quote
            </button>
            <a href="tel:+254728652354"
              className="border-2 border-white/50 hover:border-white text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-200 hover:bg-white/10 hover:-translate-y-1">
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT MODAL ── */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold" style={{ color: "#1e3a8a" }}>
              Get in Touch
            </DialogTitle>
          </DialogHeader>
          {formStatus === "success" ? (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 text-center font-semibold">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <input type="hidden" name="service" value={data.title} />
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                <Input name="name" required placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                <Input name="email" type="email" required placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                <Input name="phone" type="tel" required placeholder="+254 700 000 000" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                <Textarea name="message" required placeholder={`Tell us about your ${data.title} needs...`} className="min-h-24" />
              </div>
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-lg font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                {formStatus === "sending" ? "Sending..." : "Send Message"}
              </button>
              {formStatus === "error" && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* ── WHATSAPP FLOATS ── */}
      <a href="https://wa.me/254716325789" target="_blank" rel="noopener noreferrer"
        className="fixed z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        style={{ bottom: "100px", right: "24px", backgroundColor: "#25d366" }}
        aria-label="WhatsApp">{WA_SVG}</a>

      <a href="https://wa.me/254728652354" target="_blank" rel="noopener noreferrer"
        className="fixed z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        style={{ bottom: "24px", right: "24px", backgroundColor: "#25d366" }}
        aria-label="WhatsApp">{WA_SVG}</a>

    </PageLayout>
  );
}