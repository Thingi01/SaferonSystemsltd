"use client";

import { useState, useEffect, useRef } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/lib/constants";

// ─── DATA ───────────────────────────────────────────────────────────────────

const TABS = [
  { id: "security", label: "Security Systems", icon: "🔒" },
  { id: "it", label: "IT & Networking", icon: "💻" },
  { id: "vt", label: "Vehicle Tracking", icon: "🚗" },
  { id: "communication", label: "Communications", icon: "📡" },
  { id: "power", label: "Power Solutions", icon: "⚡" },
  { id: "office", label: "Other Solutions", icon: "🖨️" },
];

const SERVICE_CARDS: Record<string, { title: string; desc: string; img: string; href: string }[]> = {
  security: [
    { title: "CCTV Surveillance", desc: "High-definition IP cameras with 24/7 monitoring and remote access capabilities", img: "/images/solution-cctv.jpg", href: "/services/cctv-surveillance" },
    { title: "Intruder Alarms", desc: "Advanced motion detection and perimeter protection systems", img: "https://asset.quotientapp.com/image/quote-example/file/security-01-thumb.jpg", href: "/services/intruder-alarms" },
    { title: "Fire Alarms", desc: "Comprehensive fire detection and suppression systems", img: "https://solarfiresystems.com/assets/news/_newsMainImage/Guide-to-the-type-of-Fire-Alarm-Systems-www.Solarfiresystems.jpg", href: "/services/fire-alarms" },
    { title: "Access Control", desc: "Biometric and card-based access management solutions", img: "/images/women-hand-reaching-to-use-rfid-key-card-to-access-to-office-building-area-and-workspace-in-building-security-only-for-authorized-person-free-photo.jpg", href: "/services/access-control" },
    { title: "Audio Entry Systems", desc: "Intercom and video door entry systems", img: "https://support.urmet.co.uk/hs-fs/hubfs/Alpha%20(edited)%20(10).png?width=688&height=413&name=Alpha%20(edited)%20(10).png", href: "/services/access-control" },
    { title: "Bollards & Barriers", desc: "Vehicle access control and crash-rated barriers", img: "/images/bollards.jpg", href: "/services/bollards" },
    { title: "Automatic Gates", desc: "Automated gate systems with remote control", img: "/images/auto-gate-motor-supplier-in-pune.png", href: "/services/automatic-gate" },
    { title: "Smart Locks", desc: "Keyless entry and remote lock management", img: "/images/illustration-of-smart-door-lock-with-smartphone-colored-for-website-design-simple-design-on-transparent-background-ai-photo.jpg", href: "/services/smart-locks" },
    { title: "Razor Wire", desc: "Professional razor wire installation for maximum security", img: "https://srilakshmiwirenetting.com/wp-content/uploads/2024/10/Razor-Wire-1.jpg", href: "/services/perimeter-razor" },
    { title: "Walk-through Scanners", desc: "Metal detectors and security screening equipment", img: "https://image.made-in-china.com/2f0j00ELgqtkeRuIbr/Full-Body-Scanner-for-Airport-Security-Walk-Through-Metal-Detector.webp", href: "/services/walk-through-scanners" },
    { title: "Sirens & Strobes", desc: "High-visibility alarm notification systems", img: "https://m.media-amazon.com/images/I/51FwjswdW5L._AC_SL1284_.jpg", href: "/services/sirens-strobes" },
  ],
  it: [
    { title: "Fiber Optic Cabling", desc: "High-speed fiber infrastructure installation", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop", href: "/services/fiber-optic" },
    { title: "WiFi & Access Points", desc: "Enterprise-grade wireless network solutions", img: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop", href: "/services/wifi-access-point" },
    { title: "Cyber Security", desc: "Network security, firewalls, and threat protection", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop", href: "/services/cyber-security" },
    { title: "Structured Cabling", desc: "Professional Cat6/Cat7 network cabling", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop", href: "/services/structured-cabling" },
    { title: "IP Phones", desc: "VoIP phone systems and unified communications", img: "https://acmatel.com/wp-content/uploads/2023/02/Buy_Sangoma_-P330_-IP_-Desk_-Phone.png", href: "/services/ip-telephone" },
    { title: "Network Infrastructure", desc: "Servers, switches, and network equipment", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop", href: "/services/network-infrastructure" },
  ],
  vt: [
    { title: "Vehicle Tracking", desc: "Real-time GPS fleet management solutions", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop", href: "/services/vehicle-tracking" },
    { title: "Fleet Management", desc: "Efficient fleet management for companies", img: "https://iotbeat.com/assets/images/asset-tracking.png", href: "/services/fleet-management" },
  ],
  communication: [
    { title: "VHF/UHF Radio", desc: "Two-way radio communication systems", img: "https://unicomradio.com/wp-content/uploads/2023/08/Icom-IC-T10-VHF-UHF-Dual-Band-FM-Handheld-Transceiver-3.jpg", href: "/services/vhf-uhf-radio" },
    { title: "Parking Systems", desc: "Smart parking management and barrier systems", img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=400&h=300&fit=crop", href: "/services/parking-systems" },
  ],
  power: [
    { title: "UPS Systems | Power Inverters | Solar Power", desc: "Uninterruptible power supply for critical systems", img: "https://5.imimg.com/data5/TS/KV/MY-12329626/ups-system-1000x1000.jpg", href: "/services/power-solutions" },
    { title: "Solar Lights", desc: "Energy-efficient solar lighting solutions", img: "/images/solar.jpg", href: "/services/solar-lights" },
  ],
  office: [
    { title: "Printers & Scanners", desc: "Enterprise printing and scanning solutions", img: "https://www.barcodestore.co.uk/image/cache/catalog/Honeywell/Honeywell%20PM45c%20Compact%20Industrial%20Label%20Printer/sps-ppr-PSS_PM45C_Industrial%20Printer_Main_screen_highres-500x500.jpg", href: "/services/printer-scanners" },
    { title: "Booking Systems", desc: "Room and resource management systems", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop", href: "/services/booking-systems" },
  ],
};

const BRANDS = [
  { name: "Hikvision", src: "https://tse3.mm.bing.net/th/id/OIP.uMt2GiovtIWnFdfCuLXWJwHaBf?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "D-Link", src: "https://www.windowsblogitalia.com/wp-content/uploads/2014/09/DLink_Logo.jpg" },
  { name: "Jovision", src: "https://www.itelleqq.com/sites/default/files/logos/partners/logo-jovision.jpg" },
  { name: "Dahua", src: "https://th.bing.com/th/id/R.9378a710d9d9a188b9d86e7029737f52?rik=5C7XBjC3UXUbug&pid=ImgRaw&r=0" },
  { name: "Sophos", src: "https://freshersarea.in/wp-content/uploads/2024/09/sophos-software-engineer-fresher-1.jpg" },
  { name: "Teltonika", src: "https://trackersbd.com/wp-content/uploads/2019/10/Teltonika_Logo.png" },
  { name: "Texecom", src: "https://www.balancesystems.co.uk/wp-content/uploads/2016/05/Texecom-logo-1024x200.jpg" },
  { name: "Panasonic", src: "https://brandgenetics.com/wp-content/uploads/2019/11/panasonic-logo-scaled.jpg" },
  { name: "ZKTeco", src: "https://vectorseek.com/wp-content/uploads/2023/08/Zkteco-Logo-Vector.svg-.png" },
  { name: "Risco", src: "https://logowiki.net/wp-content/uploads/imgp/Risco-Group-Logo-1-7475.png" },
  { name: "Honeywell", src: "https://th.bing.com/th/id/R.c134c9ccf7d950af3debbcff525d2bce?rik=AWfw8HeM361srA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f08%2fHoneywell_logo.png&ehk=EiJSEaevkuNizEmKbCti8ya9TIFSNSLU0K6deuGK6VU%3d&risl=&pid=ImgRaw&r=0" },
  { name: "Ring", src: "https://logos-world.net/wp-content/uploads/2024/01/Ring-Logo.png" },
  { name: "Microsoft", src: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" },
  { name: "Ruijie", src: "https://cdn.connectec.uk/uploads/blog/65aaa06aab080_ruijie-logo.png?format=jpg&scale.width=1200" },
  { name: "Arista", src: "https://www.arista.com/assets/images/logo/arista_logo_blue_bg_500x280.jpg" },
  { name: "PeopleLink", src: "https://images.yourstory.com/cs/images/companies/PeopleLinklogo-1598598860092.jpg" },
  { name: "LILIN", src: "https://th.bing.com/th/id/R.c3504566c03b96b6cbe51ca88f400291?rik=3QRoAYU5NwzJow&riu=http%3a%2f%2fnetworkcamerastore.com%2fcdn%2fshop%2ffiles%2fLILIN-LOGO__55795.1657830115.1280.1280.jpg%3fv%3d1704291146%26width%3d1024&ehk=GQF0gCptk%2fenVcmqLbYuwoUZCo%2bbJ1Rdg%2fF9s2Ck%2b54%3d&risl=&pid=ImgRaw&r=0" },
];

const WHY_ITEMS = [
  { icon: "🏆", title: "30+ Years Experience", desc: "Three decades of proven excellence in security and IT solutions" },
  { icon: "👨‍🔧", title: "Certified Technicians", desc: "Highly trained professionals with industry certifications" },
  { icon: "🔧", title: "24/7 Support", desc: "Round-the-clock technical support and monitoring services" },
  { icon: "🕒", title: "Maintenance", desc: "Scheduled and emergency maintenance for all installed systems" },
  { icon: "⚡", title: "Latest Technology", desc: "Cutting-edge systems from leading global manufacturers" },
  { icon: "📋", title: "Customized Solutions", desc: "Tailored systems designed specifically for your needs" },
];

const STATS = [
  { value: "30+", label: "Years of Experience" },
  { value: "1000+", label: "Completed Projects" },
  { value: "100%", label: "Client Commitment" },
  { value: "25+", label: "Genuine Product Brands" },
];

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────

function useCountUp(target: string, inView: boolean) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target.replace(/\D/g, ""));
    const suffix = target.replace(/[0-9]/g, "");
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(num / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setDisplay(`${num}${suffix}`); clearInterval(timer); }
      else setDisplay(`${start}${suffix}`);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return display;
}

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const display = useCountUp(value, inView);
  return (
    <div ref={ref} className="text-center text-white py-8 border-r border-white/20 last:border-r-0 px-4">
      <div className="text-5xl font-extrabold mb-2" style={{ color: "#f59e0b" }}>{display}</div>
      <p className="text-lg opacity-90 font-medium">{label}</p>
    </div>
  );
}

// ─── CONTACT FORM LOGIC ──────────────────────────────────────────────────────

async function submitToFormSubmit(data: Record<string, string>) {
  const res = await fetch("https://formsubmit.co/ajax/info@saferonsystems.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ ...data, _captcha: "false", _subject: `New Inquiry from ${data.name}` }),
  });
  return res.ok;
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("security");
  const [readMore, setReadMore] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [sideFormOpen, setSideFormOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [sideFormStatus, setSideFormStatus] = useState<"idle" | "sending" | "success">("idle");

  async function handleModalSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("sending");
    const fd = new FormData(e.currentTarget);
    const ok = await submitToFormSubmit(Object.fromEntries(fd.entries()) as Record<string, string>);
    setFormStatus(ok ? "success" : "error");
    if (ok) { (e.target as HTMLFormElement).reset(); setTimeout(() => { setModalOpen(false); setFormStatus("idle"); }, 4000); }
  }

  async function handleSideSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSideFormStatus("sending");
    const fd = new FormData(e.currentTarget);
    await submitToFormSubmit(Object.fromEntries(fd.entries()) as Record<string, string>);
    setSideFormStatus("success");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => { setSideFormOpen(false); setSideFormStatus("idle"); }, 3000);
  }

  return (
    <PageLayout>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative text-white text-center py-32 px-6 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(30,58,138,0.95) 0%, rgba(15,23,42,0.95) 100%), url('https://www.security.org/app/uploads/2024/09/best-systems-page-3.jpg') center/cover no-repeat`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(circle at 30% 50%, rgba(59,130,246,0.2) 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-4 py-1.5 text-sm font-medium">
            Trusted Since 1990 · 30+ Years of Excellence
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            Security & ICT Solutions<br />
            <span style={{ color: "#f59e0b" }}>You Can Trust.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
            Over 30 years of experience delivering reliable security, surveillance,
            and IT infrastructure solutions across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-amber-500/40 hover:-translate-y-1"
            >
              Get a Free Quote
            </button>
            
             <a href="#services"
              className="border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:bg-white/10 hover:-translate-y-1"
            >
              Our Solutions ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 px-6" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold section-underline" style={{ color: "#1e3a8a" }}>
              About Saferon Systems
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://coolspaces.tv/wp-content/uploads/2024/01/Smart-Home-Security-Solutions-1000x572.jpg"
                alt="Saferon Systems"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Established in 1990, <strong className="text-gray-800">SAFERON SYSTEMS LIMITED</strong> stands
                as one of the longest serving electronic security and IT providers in Nairobi, Kenya, committed
                to delivering dependable and cutting-edge security and IT infrastructure services to both
                private and commercial sectors.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[{ num: "30+", label: "Years of Excellence" }, { num: "1000+", label: "Projects Completed" }].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                    <span className="block text-4xl font-extrabold mb-1" style={{ color: "#3b82f6" }}>{s.num}</span>
                    <span className="text-gray-500 text-sm font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
              {readMore && (
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  Specializing in the Security and IT sectors, our skilled Engineers excel in implementing
                  security and IT solutions for a diverse clientele including Commercial, Industrial,
                  Diplomatic Missions, schools, private premises, and property management companies.
                  Empowered by modern technology and state-of-the-art equipment, our competent engineering
                  teams ensure the highest standards of security implementation and maintenance.
                </p>
              )}
              <button
                onClick={() => setReadMore(!readMore)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                {readMore ? "Read Less ↑" : "Read More ↓"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section id="vision-mission" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold section-underline" style={{ color: "#1e3a8a" }}>
              Our Vision & Mission
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Our Vision",
                text: "Our vision at Saferon Systems is to establish ourselves as the undisputed market leader, celebrated for our delivery of customized security and IT solutions characterized by unparalleled professionalism and innovation.",
              },
              {
                title: "Our Mission",
                text: "Our mission is to redefine the standards of excellence within the Security and IT Solutions domain, continuously raising the bar for quality and performance. Central to our ethos is a steadfast commitment to prioritizing our customers — customer-centricity is bred into the culture of our operations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl p-10 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-t-4"
                style={{ borderTopColor: "#3b82f6" }}
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#1e3a8a" }}>{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES TABS ── */}
      <section id="services" className="py-20 px-6" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-extrabold section-underline" style={{ color: "#1e3a8a" }}>
              Our Core Solutions
            </h2>
          </div>
          <p className="text-center text-gray-500 text-lg max-w-2xl mx-auto mb-10">
            Comprehensive security and IT solutions tailored to protect and empower your business
          </p>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-blue-800 text-white border-blue-800 shadow-md"
                    : "bg-white text-gray-700 border-transparent hover:border-blue-400 hover:bg-blue-500 hover:text-white"
                }`}
              >
                <span>{tab.icon}</span> {tab.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICE_CARDS[activeTab]?.map((card) => (
              
              <a  key={card.title}
                href={card.href}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"; }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-base mb-2" style={{ color: "#1e3a8a" }}>{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{card.desc}</p>
                  <span className="mt-3 text-blue-600 text-sm font-semibold group-hover:text-amber-500 transition-colors">
                    Learn more →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS MARQUEE ── */}
      <section id="brands" className="py-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center mb-10">
          <h2 className="text-4xl font-extrabold section-underline" style={{ color: "#1e3a8a" }}>
            Trusted Brand Partners
          </h2>
          <p className="text-gray-500 text-lg mt-6 max-w-2xl mx-auto">
            We partner with world-leading manufacturers to deliver cutting-edge security and IT solutions
          </p>
        </div>
        <div className="relative">
          <div className="marquee-track flex gap-8 px-4">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-44 h-24 bg-white rounded-xl shadow-sm flex items-center justify-center p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="max-w-full max-h-14 object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-200"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold section-underline" style={{ color: "#1e3a8a" }}>
              Why Choose Saferon Systems
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_ITEMS.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-b-4"
                style={{ borderBottomColor: "#3b82f6" }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1e3a8a" }}>{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        className="py-4"
        style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => <StatItem key={s.label} {...s} />)}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="contact"
        className="py-24 px-6 text-center text-white relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(30,58,138,0.95) 0%, rgba(15,23,42,0.95) 100%), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=600&fit=crop') center/cover`,
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            SAFERON
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            All Your ICT, Fire And Security Solutions — All In One Place.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-amber-500 hover:bg-amber-400 text-white px-10 py-4 rounded-full text-xl font-bold transition-all duration-200 border-2 border-amber-500 hover:border-white hover:-translate-y-1 shadow-lg hover:shadow-white/30"
          >
            Contact Us
          </button>
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
            <form onSubmit={handleModalSubmit} className="space-y-4 mt-2">
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
                <Textarea name="message" required placeholder="How can we help you?" className="min-h-24" />
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

      {/* ── SIDE CONTACT FORM ── */}
      <Sheet open={sideFormOpen} onOpenChange={setSideFormOpen}>
        <SheetContent side="right" className="w-96 overflow-y-auto">
          <SheetHeader className="pb-4 border-b" style={{ background: "linear-gradient(135deg, #1e3a8a, #0f172a)", margin: "-24px -24px 24px", padding: "24px" }}>
            <SheetTitle className="text-white text-xl">📨 Get in Touch</SheetTitle>
          </SheetHeader>
          {sideFormStatus === "success" ? (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 text-center font-semibold mt-4">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSideSubmit} className="space-y-4">
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
                <label className="block text-sm font-semibold text-gray-700 mb-1">Service Interested In *</label>
                <select name="service" required className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => <option key={s.href} value={s.label}>{s.label}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                <Textarea name="message" required placeholder="How can we help?" className="min-h-24" />
              </div>
              <button
                type="submit"
                disabled={sideFormStatus === "sending"}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-lg font-bold transition-all duration-200"
              >
                {sideFormStatus === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </SheetContent>
      </Sheet>

      {/* ── WHATSAPP FLOATS ── */}
      <a href="https://wa.me/254716325789" target="_blank" rel="noopener noreferrer"
        className="fixed z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        style={{ bottom: "100px", right: "24px", backgroundColor: "#25d366", boxShadow: "0 4px 15px rgba(37,211,102,0.4)" }}
        aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <a href="https://wa.me/254728652354" target="_blank" rel="noopener noreferrer"
        className="fixed z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        style={{ bottom: "24px", right: "24px", backgroundColor: "#25d366", boxShadow: "0 4px 15px rgba(37,211,102,0.4)" }}
        aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* ── SIDE FORM TRIGGER ── */}
      <button
        onClick={() => setSideFormOpen(true)}
        className="fixed z-40 text-white text-sm font-bold py-3 px-4 rounded-l-xl shadow-lg hover:px-6 transition-all duration-200"
        style={{ top: "50%", right: 0, transform: "translateY(-50%) rotate(0deg)", background: "linear-gradient(135deg, #1e3a8a, #3b82f6)", writingMode: "vertical-rl", textOrientation: "mixed" }}
        aria-label="Open contact form"
      >
        📨 Get in Touch
      </button>

    </PageLayout>
  );
}