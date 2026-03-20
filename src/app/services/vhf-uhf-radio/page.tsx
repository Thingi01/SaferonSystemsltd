import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "VHF/UHF Radio Solutions",
  subtitle:
    "Reliable, secure, and instant voice communication solutions for offices, industrial sites, and emergency operations.",
  heroImage: "https://unicomradio.com/wp-content/uploads/2023/08/Icom-IC-T10-VHF-UHF-Dual-Band-FM-Handheld-Transceiver-3.jpg",

  overview: [
    "VHF (Very High Frequency) and UHF (Ultra High Frequency) radios provide reliable, real-time communication across offices, industrial sites, campuses, and public facilities. Operating independently of cellular networks, these radios ensure uninterrupted connectivity even in remote or network-limited areas.",
    "Rugged and easy-to-use, VHF/UHF radios enhance safety, coordination, and operational efficiency across all settings, including critical events and emergencies.",
  ],

  featuresTitle: "Communication Solutions for Every Setting",
  features: [
    {
      icon: "🏢",
      title: "For Offices",
      description:
        "Quickly reach colleagues or security staff across the premises with instant push-to-talk communication. Smooth coordination during meetings, events, or emergencies with secure channels that protect sensitive discussions.",
    },
    {
      icon: "🏭",
      title: "For Industrial Sites & Warehouses",
      description:
        "Coordinate tasks and equipment handling in real-time for maximum operational efficiency. Quickly alert teams to hazards or incidents with rugged radios built to withstand harsh environments and heavy daily usage.",
    },
    {
      icon: "🏟️",
      title: "For Public Facilities & Emergency Services",
      description:
        "Maintain connectivity during critical situations with wide coverage across large areas including outdoors and remote locations. Ensure communication even when cellular and other networks fail.",
    },
    {
      icon: "📡",
      title: "Network Independent",
      description:
        "Unlike smartphones and IP phones, VHF/UHF radios operate on dedicated frequencies — functioning without internet, cellular coverage, or power infrastructure, making them ideal for emergency preparedness.",
    },
    {
      icon: "🔒",
      title: "Secure & Private Channels",
      description:
        "Programmable channels and encryption options ensure your communications remain private and protected from unauthorized listening — critical for security operations and sensitive environments.",
    },
    {
      icon: "🔋",
      title: "Long Battery Life",
      description:
        "Professional-grade radios offer extended battery life of 12–24 hours per charge with rapid charging options — keeping your teams connected throughout long shifts and extended operations.",
    },
  ],

  customSectionTitle: "Tailored VHF/UHF Radio Solutions",
  customSectionContent: [
    "At Saferon, we provide VHF/UHF radio systems designed for offices, industrial sites, and public facilities. We recommend the right devices, frequencies, and system setup to ensure secure, reliable, and efficient communication.",
    "Contact us today to implement a customized VHF/UHF radio solution that enhances coordination, safety, and operational efficiency for your property.",
  ],

  relatedServices: [
    { label: "IP Telephone", href: "/services/ip-telephone" },
    { label: "Network Infrastructure", href: "/services/network-infrastructure" },
    { label: "Fleet Management", href: "/services/fleet-management" },
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Intruder Alarms", href: "/services/intruder-alarms" },
  ],

  ctaTitle: "Enhance Your Communication Today",
  ctaSubtitle:
    "Reach out to Saferon Systems for professional VHF/UHF radio solutions tailored to your operations.",
};

export default function VHFUHFRadioPage() {
  return <ServicePageLayout data={data} />;
}