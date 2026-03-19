import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Access Control Solutions",
  subtitle:
    "Intelligent access control systems designed to secure entry points, manage movement, and enhance safety across offices, homes, and apartments.",
  heroImage: "/images/women-hand-reaching-to-use-rfid-key-card-to-access-to-office-building-area-and-workspace-in-building-security-only-for-authorized-person-free-photo.jpg",

  overview: [
    "Access control solutions are fundamental to managing and securing entry points in various environments. By regulating who can enter specific areas, these systems enhance security, improve operational efficiency, and provide valuable insights into access patterns.",
    "Whether for offices, homes, or apartment complexes, access control systems provide precise, flexible, and reliable security tailored to your needs.",
  ],

  featuresTitle: "Solutions for Every Environment",
  features: [
    {
      icon: "🏢",
      title: "For Offices",
      description:
        "Restrict access to sensitive areas and protect confidential information. Automated entry using cards, biometrics, or PINs reduces delays, while detailed access logs help track movements and identify unusual activity.",
    },
    {
      icon: "🏠",
      title: "For Homes",
      description:
        "Secure doors and gates against unauthorized access. Smart locks and keypads eliminate physical keys and allow remote access management with real-time smartphone alerts.",
    },
    {
      icon: "🏬",
      title: "For Apartments",
      description:
        "Secure common areas such as lobbies, parking, and shared facilities. Enable tenants to grant visitor access through intercoms or remote systems, and combine with CCTV for complete building protection.",
    },
    {
      icon: "🔐",
      title: "Biometric Access",
      description:
        "Fingerprint, facial recognition, and iris scanning provide the highest level of identity verification — eliminating the risk of lost cards or forgotten PINs.",
    },
    {
      icon: "💳",
      title: "Card & PIN Systems",
      description:
        "RFID proximity cards and PIN-based entry offer fast, convenient access for staff while maintaining complete audit trails of all entry and exit events.",
    },
    {
      icon: "📊",
      title: "Audit & Monitoring",
      description:
        "Real-time monitoring dashboards and detailed access logs help you track movements, generate compliance reports, and respond instantly to security incidents.",
    },
  ],

  customSectionTitle: "Tailored Access Control Solutions",
  customSectionContent: [
    "At Saferon Systems Limited, we recognize that each property has unique access control requirements. Our solutions are designed to deliver the right balance of security, convenience, and control.",
    "Our experienced team will assess your environment and design a customized access control system that enhances security and operational efficiency using the latest technologies — from standalone door controllers to fully networked enterprise systems.",
  ],

  brands: [
    { name: "ZKTeco", src: "https://vectorseek.com/wp-content/uploads/2023/08/Zkteco-Logo-Vector.svg-.png" },
    { name: "Hikvision", src: "https://tse3.mm.bing.net/th/id/OIP.uMt2GiovtIWnFdfCuLXWJwHaBf?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Honeywell", src: "https://th.bing.com/th/id/R.c134c9ccf7d950af3debbcff525d2bce?rik=AWfw8HeM361srA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f08%2fHoneywell_logo.png&ehk=EiJSEaevkuNizEmKbCti8ya9TIFSNSLU0K6deuGK6VU%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Dahua", src: "https://th.bing.com/th/id/R.9378a710d9d9a188b9d86e7029737f52?rik=5C7XBjC3UXUbug&pid=ImgRaw&r=0" },
  ],

  relatedServices: [
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Smart Locks", href: "/services/smart-locks" },
    { label: "Automatic Gates", href: "/services/automatic-gate" },
    { label: "Intruder Alarms", href: "/services/intruder-alarms" },
    { label: "Walk-Through Scanners", href: "/services/walk-through-scanners" },
  ],

  ctaTitle: "Upgrade Your Access Control Today",
  ctaSubtitle:
    "Contact Saferon Systems for a professional assessment and a customized access control solution.",
};

export default function AccessControlPage() {
  return <ServicePageLayout data={data} />;
}