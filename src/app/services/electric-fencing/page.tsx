import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Perimeter Electric Fence Systems",
  subtitle:
    "High-voltage perimeter protection systems designed to deter intruders, detect breaches instantly, and secure your property with confidence.",
  heroImage: "/images/electrical-fencing-1000x1000.png",

  overview: [
    "Electric fence systems form the first line of defence in modern perimeter security. By delivering a safe but powerful electric pulse, these systems deter intruders while instantly detecting and reporting fence interference.",
    "At Saferon Systems Limited, we design and install high-quality electric fencing solutions that integrate seamlessly with alarm systems, CCTV, and access control platforms.",
  ],

  featuresTitle: "Protection Across Every Property Type",
  features: [
    {
      icon: "🏠",
      title: "For Homes",
      description:
        "Prevent unauthorized entry before it happens with instant alerts when the fence is touched or cut. Designed to meet safety standards for residential use — safe for families yet effective against intruders.",
    },
    {
      icon: "🏢",
      title: "For Offices & Commercial Properties",
      description:
        "Secure office compounds and sensitive areas with perimeter protection that works alongside CCTV and intruder alarms, enhancing security while reducing heavy manpower and guarding costs.",
    },
    {
      icon: "🏭",
      title: "For Industrial Facilities",
      description:
        "Protect factories and warehouses with high-security perimeters built for harsh environments. 24/7 real-time tamper detection ensures your assets are always protected.",
    },
    {
      icon: "🏫",
      title: "For Institutions & Compounds",
      description:
        "Secure schools, hospitals, and estates with clearly visible fencing that discourages intrusion. Scalable designs are suitable for both small residential boundaries and large institutional perimeters.",
    },
    {
      icon: "⚡",
      title: "Instant Breach Detection",
      description:
        "The moment the fence is touched, cut, or tampered with, the system triggers an immediate alert — giving your security team real-time awareness of any perimeter threat.",
    },
    {
      icon: "🔗",
      title: "Full System Integration",
      description:
        "Integrates with CCTV cameras, intruder alarm panels, access control systems, and monitoring centres for a fully unified and automated security response.",
    },
  ],

  customSectionTitle: "Tailored Solutions for Your Needs",
  customSectionContent: [
    "Every property has unique perimeter challenges. At Saferon Systems Limited, we assess your site layout, risk level, and security objectives to design a customized electric fence solution.",
    "Our systems are professionally installed, fully compliant with safety regulations, and supported by reliable maintenance services to keep your perimeter secure year-round.",
  ],

  relatedServices: [
    { label: "Perimeter Razor Wire", href: "/services/perimeter-razor" },
    { label: "Intruder Alarms", href: "/services/intruder-alarms" },
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Bollards & Barriers", href: "/services/bollards" },
    { label: "Automatic Gates", href: "/services/automatic-gate" },
  ],

  ctaTitle: "Secure Your Perimeter Today",
  ctaSubtitle:
    "Contact Saferon Systems for professional electric fence installation and perimeter security solutions.",
};

export default function ElectricFencingPage() {
  return <ServicePageLayout data={data} />;
}