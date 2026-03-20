"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES } from "@/lib/constants";
import { ArrowRight, ArrowUpRight, Shield, Clock, Award, Wrench, Zap, FileText } from "lucide-react";

// ── DATA ──────────────────────────────────────────────────────────────────────

const TABS = [
  { id: "security", label: "Security", icon: "🔒" },
  { id: "it", label: "IT & Network", icon: "💻" },
  { id: "vt", label: "Vehicle", icon: "🚗" },
  { id: "comms", label: "Communications", icon: "📡" },
  { id: "power", label: "Power", icon: "⚡" },
  { id: "office", label: "Other", icon: "🖨️" },
];

const CARDS: Record<string, { title: string; img: string; href: string }[]> = {
  security: [
    { title: "CCTV Surveillance", img: "/images/solution-cctv.jpg", href: "/services/cctv-surveillance" },
    { title: "Intruder Alarms", img: "https://asset.quotientapp.com/image/quote-example/file/security-01-thumb.jpg", href: "/services/intruder-alarms" },
    { title: "Fire Alarms", img: "https://solarfiresystems.com/assets/news/_newsMainImage/Guide-to-the-type-of-Fire-Alarm-Systems-www.Solarfiresystems.jpg", href: "/services/fire-alarms" },
    { title: "Access Control", img: "/images/women-hand-reaching-to-use-rfid-key-card-to-access-to-office-building-area-and-workspace-in-building-security-only-for-authorized-person-free-photo.jpg", href: "/services/access-control" },
    { title: "Electric Fencing", img: "/images/electrical-fencing-1000x1000.png", href: "/services/electric-fencing" },
    { title: "Bollards & Barriers", img: "/images/bollards.jpg", href: "/services/bollards" },
    { title: "Automatic Gates", img: "/images/auto-gate-motor-supplier-in-pune.png", href: "/services/automatic-gate" },
    { title: "Smart Locks", img: "/images/illustration-of-smart-door-lock-with-smartphone-colored-for-website-design-simple-design-on-transparent-background-ai-photo.jpg", href: "/services/smart-locks" },
    { title: "Razor Wire", img: "https://srilakshmiwirenetting.com/wp-content/uploads/2024/10/Razor-Wire-1.jpg", href: "/services/perimeter-razor" },
    { title: "Walk-Through Scanners", img: "https://image.made-in-china.com/2f0j00ELgqtkeRuIbr/Full-Body-Scanner-for-Airport-Security-Walk-Through-Metal-Detector.webp", href: "/services/walk-through-scanners" },
    { title: "Sirens & Strobes", img: "/images/sirens and strobes.jpg", href: "/services/sirens-strobes" },
  ],
  it: [
    { title: "Fiber Optic", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop", href: "/services/fiber-optic" },
    { title: "WiFi & Access Points", img: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop", href: "/services/wifi-access-point" },
    { title: "Cyber Security", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop", href: "/services/cyber-security" },
    { title: "Structured Cabling", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop", href: "/services/structured-cabling" },
    { title: "IP Telephone", img: "https://acmatel.com/wp-content/uploads/2023/02/Buy_Sangoma_-P330_-IP_-Desk_-Phone.png", href: "/services/ip-telephone" },
    { title: "Network Infrastructure", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop", href: "/services/network-infrastructure" },
  ],
  vt: [
    { title: "Vehicle Tracking", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop", href: "/services/vehicle-tracking" },
    { title: "Fleet Management", img: "https://iotbeat.com/assets/images/asset-tracking.png", href: "/services/fleet-management" },
  ],
  comms: [
    { title: "VHF/UHF Radio", img: "https://unicomradio.com/wp-content/uploads/2023/08/Icom-IC-T10-VHF-UHF-Dual-Band-FM-Handheld-Transceiver-3.jpg", href: "/services/vhf-uhf-radio" },
    { title: "Parking Systems", img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=400&h=300&fit=crop", href: "/services/parking-systems" },
  ],
  power: [
    { title: "UPS | Inverters | Solar", img: "https://5.imimg.com/data5/TS/KV/MY-12329626/ups-system-1000x1000.jpg", href: "/services/power-solutions" },
    { title: "Solar Lights", img: "https://images.unsplash.com/photo-1590364090734-0c24dcd3b6b4?w=400&h=300&fit=crop", href: "/services/solar-lights" },
  ],
  office: [
    { title: "Printers & Scanners", img: "https://www.barcodestore.co.uk/image/cache/catalog/Honeywell/Honeywell%20PM45c%20Compact%20Industrial%20Label%20Printer/sps-ppr-PSS_PM45C_Industrial%20Printer_Main_screen_highres-500x500.jpg", href: "/services/printer-scanners" },
    { title: "Booking Systems", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop", href: "/services/booking-systems" },
  ],
};

const BRANDS = [
  { name: "Hikvision", src: "https://tse3.mm.bing.net/th/id/OIP.uMt2GiovtIWnFdfCuLXWJwHaBf?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "D-Link", src: "https://www.windowsblogitalia.com/wp-content/uploads/2014/09/DLink_Logo.jpg" },
  { name: "Dahua", src: "https://th.bing.com/th/id/R.9378a710d9d9a188b9d86e7029737f52?rik=5C7XBjC3UXUbug&pid=ImgRaw&r=0" },
  { name: "Sophos", src: "https://freshersarea.in/wp-content/uploads/2024/09/sophos-software-engineer-fresher-1.jpg" },
  { name: "Teltonika", src: "https://trackersbd.com/wp-content/uploads/2019/10/Teltonika_Logo.png" },
  { name: "Texecom", src: "https://www.balancesystems.co.uk/wp-content/uploads/2016/05/Texecom-logo-1024x200.jpg" },
  { name: "Panasonic", src: "https://brandgenetics.com/wp-content/uploads/2019/11/panasonic-logo-scaled.jpg" },
  { name: "ZKTeco", src: "https://vectorseek.com/wp-content/uploads/2023/08/Zkteco-Logo-Vector.svg-.png" },
  { name: "Honeywell", src: "https://th.bing.com/th/id/R.c134c9ccf7d950af3debbcff525d2bce?rik=AWfw8HeM361srA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f08%2fHoneywell_logo.png&ehk=EiJSEaevkuNizEmKbCti8ya9TIFSNSLU0K6deuGK6VU%3d&risl=&pid=ImgRaw&r=0" },
  { name: "Microsoft", src: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" },
  { name: "Ruijie", src: "https://cdn.connectec.uk/uploads/blog/65aaa06aab080_ruijie-logo.png?format=jpg&scale.width=1200" },
  { name: "Risco", src: "https://logowiki.net/wp-content/uploads/imgp/Risco-Group-Logo-1-7475.png" },
];

const WHY = [
  { icon: <Award className="w-7 h-7" />, title: "30+ Years Experience", desc: "Proven excellence since 1990" },
  { icon: <Shield className="w-7 h-7" />, title: "Certified Technicians", desc: "International industry certified" },
  { icon: <Clock className="w-7 h-7" />, title: "24/7 Support", desc: "Round-the-clock emergency response" },
  { icon: <Wrench className="w-7 h-7" />, title: "Maintenance Plans", desc: "Scheduled & emergency servicing" },
  { icon: <Zap className="w-7 h-7" />, title: "Latest Technology", desc: "Leading global manufacturers" },
  { icon: <FileText className="w-7 h-7" />, title: "Custom Solutions", desc: "Designed for your specific needs" },
];

const STATS = [
  { value: "30+", label: "Years Experience" },
  { value: "1000+", label: "Projects Done" },
  { value: "100%", label: "Client Commitment" },
  { value: "25+", label: "Brand Partners" },
];

// ── COUNTER ───────────────────────────────────────────────────────────────────
function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("0");
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSeen(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!seen) return;
    const num = parseInt(value.replace(/\D/g, ""));
    const suffix = value.replace(/[0-9]/g, "");
    let n = 0;
    const step = Math.ceil(num / 50);
    const t = setInterval(() => {
      n += step;
      if (n >= num) { setDisplay(`${num}${suffix}`); clearInterval(t); }
      else setDisplay(`${n}${suffix}`);
    }, 30);
    return () => clearInterval(t);
  }, [seen, value]);

  return (
    <div ref={ref} className="text-center py-10 px-4 border-r border-white/10 last:border-r-0">
      <div className="text-5xl md:text-6xl font-black text-amber-400 mb-1">{display}</div>
      <p className="text-gray-300 text-sm uppercase tracking-widest font-medium">{label}</p>
    </div>
  );
}

// ── FORM ──────────────────────────────────────────────────────────────────────
async function sendForm(data: Record<string, string>) {
  const res = await fetch("https://formsubmit.co/ajax/info@saferonsystems.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ ...data, _captcha: "false", _subject: `New Inquiry — ${data.name}` }),
  });
  return res.ok;
}

const WA = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeTab, setActiveTab] = useState("security");
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const scrollRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const ok = await sendForm(Object.fromEntries(fd.entries()) as Record<string, string>);
    setStatus(ok ? "success" : "error");
    if (ok) { (e.target as HTMLFormElement).reset(); setTimeout(() => { setModalOpen(false); setStatus("idle"); }, 3500); }
  }

  return (
    <PageLayout>

      {/* ══════════════════════════════════════════
          HERO — split layout
      ══════════════════════════════════════════ */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #0f172a 100%)" }}>

        {/* background pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* LEFT — text */}
          <div>
            <div className="inline-flex items-center gap-2 border border-amber-400/40 bg-amber-400/10 text-amber-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Nairobi, Kenya · Est. 1990
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}>
              Security &<br />
              ICT Solutions<br />
              <span className="text-amber-400">You Can Trust.</span>
            </h2>

            <p className="text-blue-200 text-lg mb-10 max-w-md leading-relaxed">
              30+ years protecting businesses, homes & institutions across Kenya with world-class security and IT infrastructure.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-black px-8 py-4 rounded-full text-base transition-all hover:-translate-y-1 shadow-xl">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </button>
              <a href="#services"
                className="flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:bg-white/10">
                View Solutions
              </a>
            </div>

            {/* quick trust signals */}
            <div className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-white/10">
              {["🔒 Licensed & Certified", "⚡ 24/7 Emergency Support", "🏆 1000+ Projects"].map((t) => (
                <span key={t} className="text-blue-200 text-sm font-medium">{t}</span>
              ))}
            </div>
          </div>

          {/* RIGHT — image + floating stat cards */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ height: "520px" }}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                alt="Security Solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 50%)" }} />
            </div>

            {/* floating cards */}
            <div className="absolute -left-8 top-10 bg-white rounded-2xl shadow-2xl p-5 w-40">
              <div className="text-3xl font-black text-blue-800">30+</div>
              <div className="text-xs text-gray-500 font-medium mt-1">Years of Excellence</div>
            </div>
            <div className="absolute -right-8 bottom-16 bg-amber-400 rounded-2xl shadow-2xl p-5 w-44">
              <div className="text-3xl font-black text-gray-900">1000+</div>
              <div className="text-xs text-gray-700 font-medium mt-1">Projects Completed</div>
            </div>
            <div className="absolute left-6 -bottom-6 bg-blue-800 rounded-2xl shadow-2xl p-5 w-44">
              <div className="text-3xl font-black text-white">25+</div>
              <div className="text-xs text-blue-200 font-medium mt-1">Trusted Brands</div>
            </div>
          </div>
        </div>

        {/* bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES — tabs + swipeable cards
      ══════════════════════════════════════════ */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-blue-700 font-bold uppercase tracking-widest text-sm mb-2">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                Our Solutions
              </h2>
            </div>
            <Link href="/services" className="flex items-center gap-2 text-blue-700 font-bold hover:gap-3 transition-all text-sm">
              View All Solutions <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* TABS — horizontal scroll on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap">
            {TABS.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all whitespace-nowrap border-2 ${
                  activeTab === tab.id
                    ? "bg-blue-800 text-white border-blue-800 shadow-lg scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-400"
                }`}>
                <span>{tab.icon}</span>{tab.label}
              </button>
            ))}
          </div>

          {/* CARDS — grid on desktop, horizontal scroll on mobile */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}>
            {CARDS[activeTab]?.map((card) => (
              <Link key={card.title} href={card.href}
                className="flex-shrink-0 w-56 md:w-auto snap-start group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
                style={{ height: "220px" }}>
                <img src={card.img} alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"; }} />
                {/* dark overlay bottom */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.3) 50%, transparent 100%)" }} />
                {/* text */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                  <h3 className="text-white font-bold text-sm leading-tight">{card.title}</h3>
                  <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 ml-2 group-hover:bg-amber-300 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-gray-900" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* mobile swipe hint */}
          <p className="md:hidden text-center text-gray-400 text-xs mt-3 flex items-center justify-center gap-1">
            <span>←</span> swipe to see more <span>→</span>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s) => <Counter key={s.label} {...s} />)}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-bold uppercase tracking-widest text-sm mb-2">Why Saferon</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {WHY.map((w, i) => (
              <div key={i}
                className="group flex flex-col items-center text-center p-6 rounded-2xl border-2 border-gray-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-800 flex items-center justify-center mb-4 transition-colors text-blue-800 group-hover:text-white">
                  {w.icon}
                </div>
                <h3 className="font-black text-gray-900 text-base mb-1">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT — minimal, visual
      ══════════════════════════════════════════ */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* image */}
          <div className="relative">
            <img src="https://coolspaces.tv/wp-content/uploads/2024/01/Smart-Home-Security-Solutions-1000x572.jpg"
              alt="Saferon Systems" className="w-full rounded-3xl shadow-2xl" />
            {/* badge */}
            <div className="absolute -bottom-5 -right-5 bg-blue-800 text-white rounded-2xl p-6 shadow-2xl text-center hidden md:block">
              <div className="text-4xl font-black text-amber-400">1990</div>
              <div className="text-xs font-bold uppercase tracking-widest mt-1 text-blue-200">Est. Year</div>
            </div>
          </div>

          {/* text — short and punchy */}
          <div>
            <p className="text-blue-700 font-bold uppercase tracking-widest text-sm mb-3">About Us</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}>
              Kenya's Longest-Serving Security Specialist
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Since 1990, SAFERON SYSTEMS LIMITED has delivered dependable security and IT
              infrastructure to commercial, industrial, diplomatic, and residential clients across Kenya.
              Over 30 years — one mission: protect what matters most.
            </p>

            {/* 3 pillars */}
            <div className="space-y-4">
              {[
                { label: "Commercial & Industrial", desc: "Offices, factories, warehouses, malls" },
                { label: "Diplomatic & Institutional", desc: "Embassies, schools, hospitals" },
                { label: "Residential", desc: "Homes, apartments, gated communities" },
              ].map((p) => (
                <div key={p.label} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{p.label}</div>
                    <div className="text-gray-500 text-sm">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRANDS
      ══════════════════════════════════════════ */}
      <section className="py-14 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center mb-8">
          <p className="text-blue-700 font-bold uppercase tracking-widest text-sm mb-2">Our Partners</p>
          <h2 className="text-3xl font-black text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
            Trusted Brands We Supply
          </h2>
        </div>
        <div className="marquee-track flex gap-6 px-4">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <div key={i}
              className="flex-shrink-0 w-36 h-16 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center p-3 hover:shadow-md hover:border-blue-200 transition-all">
              <img src={b.src} alt={b.name}
                className="max-w-full max-h-10 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
                onError={(e) => { e.currentTarget.style.display = "none"; }} />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)" }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Ready to Secure<br />Your Property?
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            All Your ICT, Fire & Security Solutions — All In One Place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setModalOpen(true)}
              className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-black px-10 py-4 rounded-full text-lg transition-all hover:-translate-y-1 shadow-xl">
              Get a Free Quote
            </button>
            <a href="tel:+254728652354"
              className="border-2 border-white/40 hover:border-white text-white font-bold px-10 py-4 rounded-full text-lg transition-all hover:bg-white/10">
              📞 +254 728 652 354
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT MODAL
      ══════════════════════════════════════════ */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-blue-900">Get a Free Quote</DialogTitle>
          </DialogHeader>
          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-6 text-center font-semibold">
              ✓ Sent! We'll be in touch shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name *</label>
                <Input name="name" required placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email *</label>
                <Input name="email" type="email" required placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Phone *</label>
                <Input name="phone" type="tel" required placeholder="+254 700 000 000" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Message *</label>
                <Textarea name="message" required placeholder="How can we help?" className="min-h-20" />
              </div>
              <button type="submit" disabled={status === "sending"}
                className="w-full bg-blue-800 hover:bg-blue-900 disabled:opacity-60 text-white py-3 rounded-xl font-black text-base transition-all">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && <p className="text-red-500 text-sm text-center">Something went wrong. Try again.</p>}
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* ══════════════════════════════════════════
          WHATSAPP FLOATS
      ══════════════════════════════════════════ */}
      {[{ num: "254716325789", bottom: "100px" }, { num: "254728652354", bottom: "24px" }].map((wa) => (
        <a key={wa.num} href={`https://wa.me/${wa.num}`} target="_blank" rel="noopener noreferrer"
          className="fixed z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
          style={{ bottom: wa.bottom, right: "24px", backgroundColor: "#25d366" }}>
          <WA />
        </a>
      ))}

    </PageLayout>
  );
}