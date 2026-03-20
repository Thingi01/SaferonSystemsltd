import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Sirens & Strobes Solutions",
  subtitle:
    "High-visibility and high-decibel alert systems designed to provide immediate notification during security breaches, fire incidents, and emergency situations.",
  heroImage: "/images/sirens and strobes.jpg",

  overview: [
    "Sirens and strobes play a critical role in modern security and safety systems. They provide immediate audible and visual alerts that warn occupants, deter intruders, and prompt rapid response during emergencies.",
    "At Saferon Systems Limited, we supply and install reliable siren and strobe solutions that integrate seamlessly with intruder alarms, fire alarm systems, and access control platforms.",
  ],

  featuresTitle: "Alert Solutions for Every Environment",
  features: [
    {
      icon: "🏢",
      title: "For Offices",
      description:
        "Notify staff instantly during security or fire incidents. Loud sirens discourage unauthorized access while seamless integration with intruder alarms and fire detection systems ensures a coordinated response.",
    },
    {
      icon: "🏠",
      title: "For Homes",
      description:
        "Alerts occupants during break-ins or emergencies while strobe lights notify neighbours and first responders. Provides reassurance and active protection even when you are away from home.",
    },
    {
      icon: "🏬",
      title: "For Apartments",
      description:
        "Notify multiple residents simultaneously with centralized alert systems. Clear visual strobes in common areas ensure emergency visibility, with scalable systems suitable for single units and large complexes.",
    },
    {
      icon: "🏟️",
      title: "Commercial & Public Spaces",
      description:
        "Alert large groups quickly and clearly for mass notification during emergencies. Supports orderly evacuation and safety procedures while meeting required safety and security compliance standards.",
    },
    {
      icon: "🔊",
      title: "Indoor & Outdoor Sirens",
      description:
        "Weatherproof outdoor sirens with high-decibel output and tamper-resistant housings ensure reliable performance in all conditions — audible from significant distances to deter intruders effectively.",
    },
    {
      icon: "💡",
      title: "LED Strobe Lights",
      description:
        "High-intensity LED strobe lights provide unmistakable visual alerts in low-light or noisy environments where sirens alone may not be sufficient — ideal for warehouses, factories, and public spaces.",
    },
  ],

  customSectionTitle: "Tailored Solutions for Your Needs",
  customSectionContent: [
    "At Saferon Systems Limited, we understand that different environments require different alerting strategies. Our siren and strobe solutions are selected and installed based on noise levels, visibility requirements, and system integration needs.",
    "Our experts are ready to design a customized alert system that ensures fast response, clear notification, and enhanced safety for your property.",
  ],

  relatedServices: [
    { label: "Intruder Alarms", href: "/services/intruder-alarms" },
    { label: "Fire Alarms", href: "/services/fire-alarms" },
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Access Control", href: "/services/access-control" },
    { label: "Electric Fencing", href: "/services/electric-fencing" },
  ],

  ctaTitle: "Need Reliable Sirens & Strobes?",
  ctaSubtitle:
    "Contact Saferon Systems today for professional advice and installation of siren and strobe alert systems.",
};

export default function SirensStrobesPage() {
  return <ServicePageLayout data={data} />;
}