import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Fire Alarm Systems",
  subtitle:
    "Reliable fire detection and alarm solutions designed to protect lives, property, and assets through early warning and rapid response.",
  heroImage: "https://solarfiresystems.com/assets/news/_newsMainImage/Guide-to-the-type-of-Fire-Alarm-Systems-www.Solarfiresystems.jpg",

  overview: [
    "Fire safety is a critical aspect of protecting lives, property, and assets. A reliable fire alarm system is the first line of defence against fire-related disasters, providing early detection and warning that can save lives and minimise damage.",
    "Whether for commercial buildings, industrial facilities, or residential properties, having an effective fire alarm system in place is essential for safety and compliance.",
  ],

  featuresTitle: "Fire Alarm System Types & Solutions",
  features: [
    {
      icon: "📍",
      title: "Addressable Fire Alarm Systems",
      description:
        "Advanced systems that provide precise identification of the location of a fire or fault. Each device has a unique address, allowing the control panel to pinpoint the exact source — ideal for large or complex facilities requiring fast, accurate response.",
    },
    {
      icon: "🔔",
      title: "Non-Addressable Fire Alarm Systems",
      description:
        "Cost-effective and simpler systems for smaller or less complex buildings. Easy to install and maintain, these systems indicate a general zone where a fire or fault has occurred — sufficient for smaller environments.",
    },
    {
      icon: "🏠",
      title: "DIY Detectors for Residential Use",
      description:
        "Battery-operated smoke and heat detectors for homes, especially kitchens where fire risks are higher. Easy to install with minimal maintenance, providing early detection and valuable reaction time.",
    },
    {
      icon: "🌡️",
      title: "Heat & Smoke Detectors",
      description:
        "A combination of heat detectors, optical smoke detectors, and multi-sensor devices ensures comprehensive coverage and minimizes false alarms across all environments.",
    },
    {
      icon: "🔗",
      title: "System Integration",
      description:
        "Fire alarm systems integrate with sprinkler systems, emergency lighting, PA systems, and building management platforms for a fully coordinated emergency response.",
    },
    {
      icon: "✅",
      title: "Compliance & Certification",
      description:
        "All installations are designed and commissioned in compliance with local fire safety regulations and international standards, ensuring your property meets required legal obligations.",
    },
  ],

  customSectionTitle: "Tailored Fire Safety Solutions",
  customSectionContent: [
    "At Saferon Systems Limited, we understand that fire safety requirements differ depending on the environment. From advanced addressable systems for large facilities to simple DIY detectors for homes, we offer solutions that fit your needs.",
    "Our experienced team is ready to design a customised fire alarm solution that aligns with your specific requirements, ensuring full protection against fire risks.",
  ],

  brands: [
    { name: "Honeywell", src: "https://th.bing.com/th/id/R.c134c9ccf7d950af3debbcff525d2bce?rik=AWfw8HeM361srA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f08%2fHoneywell_logo.png&ehk=EiJSEaevkuNizEmKbCti8ya9TIFSNSLU0K6deuGK6VU%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Texecom", src: "https://www.balancesystems.co.uk/wp-content/uploads/2016/05/Texecom-logo-1024x200.jpg" },
    { name: "Risco", src: "https://logowiki.net/wp-content/uploads/imgp/Risco-Group-Logo-1-7475.png" },
  ],

  relatedServices: [
    { label: "Intruder Alarms", href: "/services/intruder-alarms" },
    { label: "Sirens & Strobes", href: "/services/sirens-strobes" },
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Access Control", href: "/services/access-control" },
    { label: "Power Solutions", href: "/services/power-solutions" },
  ],

  ctaTitle: "Protect Lives & Property with Reliable Fire Alarms",
  ctaSubtitle:
    "Contact Saferon Systems today for a professional fire safety assessment and a customised fire alarm solution.",
};

export default function FireAlarmsPage() {
  return <ServicePageLayout data={data} />;
}