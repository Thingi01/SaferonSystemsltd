import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Smart Lock Solutions",
  subtitle:
    "Modern smart lock systems that deliver secure, keyless, and intelligent access control.",
  heroImage: "/images/illustration-of-smart-door-lock-with-smartphone-colored-for-website-design-simple-design-on-transparent-background-ai-photo.jpg",

  overview: [
    "Smart locks combine advanced security technology with unmatched convenience. They eliminate the need for physical keys while giving you full control over who can access your property.",
    "Whether for offices, homes, or apartment complexes, smart locks provide flexibility, monitoring, and peace of mind.",
  ],

  featuresTitle: "Smart Access for Every Property",
  features: [
    {
      icon: "🏢",
      title: "For Offices",
      description:
        "Keyless and biometric access eliminates lost key risks. Remote access management lets administrators grant or revoke access instantly, while detailed audit trails support compliance and security reviews.",
    },
    {
      icon: "🏠",
      title: "For Homes",
      description:
        "Smartphone-controlled locks let you lock and unlock your door from anywhere. Grant remote guest access without being present and integrate seamlessly with smart home automation systems.",
    },
    {
      icon: "🏬",
      title: "For Apartments",
      description:
        "Centralized access management for property managers with secure resident entry and virtual keys. Eliminate costly physical key replacements and simplify access for maintenance and visitors.",
    },
    {
      icon: "📱",
      title: "Mobile & Remote Access",
      description:
        "Control and monitor your locks from anywhere via smartphone app. Receive real-time notifications of every lock and unlock event, and share temporary digital keys with guests or contractors.",
    },
    {
      icon: "🔐",
      title: "Multiple Authentication Methods",
      description:
        "Supports PIN codes, RFID cards, fingerprint biometrics, facial recognition, and Bluetooth proximity — giving users flexible options while maintaining the highest security standards.",
    },
    {
      icon: "📋",
      title: "Access Logs & Audit Trails",
      description:
        "Every access event is logged with timestamp and user identity — providing a complete audit trail for security monitoring, compliance reporting, and incident investigation.",
    },
  ],

  customSectionTitle: "Tailored Smart Lock Solutions",
  customSectionContent: [
    "At Saferon Systems Limited, we understand that each property has unique access requirements. Our smart lock solutions are designed to provide the perfect balance of security, convenience, and control.",
    "Our team will assess your needs and recommend the right smart lock system — from single door installations to multi-site enterprise deployments with centralized management.",
  ],

  brands: [
    { name: "ZKTeco", src: "https://vectorseek.com/wp-content/uploads/2023/08/Zkteco-Logo-Vector.svg-.png" },
    { name: "Hikvision", src: "https://tse3.mm.bing.net/th/id/OIP.uMt2GiovtIWnFdfCuLXWJwHaBf?rs=1&pid=ImgDetMain&o=7&rm=3" },
  ],

  relatedServices: [
    { label: "Access Control", href: "/services/access-control" },
    { label: "Automatic Gates", href: "/services/automatic-gate" },
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Intruder Alarms", href: "/services/intruder-alarms" },
    { label: "Bollards & Barriers", href: "/services/bollards" },
  ],

  ctaTitle: "Upgrade to Smart Access",
  ctaSubtitle:
    "Contact Saferon Systems for a professional smart lock consultation and installation.",
};

export default function SmartLocksPage() {
  return <ServicePageLayout data={data} />;
}