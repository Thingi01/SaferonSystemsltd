import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Bollard System Solutions",
  subtitle:
    "Essential for controlling vehicle access, ensuring pedestrian safety, and protecting property across various environments.",
  heroImage: "/images/bollards.jpg",

  overview: [
    "Bollard systems enhance security, manage traffic flow, and prevent unauthorized access. Whether for offices, buildings, malls, airports, hotels, or embassies, a well-designed bollard system is crucial for maintaining safety and operational efficiency.",
  ],

  featuresTitle: "Applications Across Every Facility",
  features: [
    {
      icon: "🏢",
      title: "For Offices",
      description:
        "Manage and restrict vehicle access to sensitive areas like parking lots and delivery zones. Protect pedestrian walkways and complement office aesthetics while maintaining security.",
    },
    {
      icon: "🏗️",
      title: "For Buildings",
      description:
        "Control and direct vehicle flow within premises, parking areas, and loading docks. Safeguard against unauthorized vehicle access while allowing secure emergency vehicle entry.",
    },
    {
      icon: "🛍️",
      title: "For Malls",
      description:
        "Prevent vehicles from accessing pedestrian areas for a safe shopping experience. Manage traffic during events and protect entrances and storefronts from vehicle collisions.",
    },
    {
      icon: "✈️",
      title: "For Airports",
      description:
        "Restrict vehicle access to terminals and security zones. Prevent vehicles from entering pedestrian drop-off areas while ensuring emergency vehicles have clear, immediate access.",
    },
    {
      icon: "🏨",
      title: "For Hotels",
      description:
        "Protect entrances and walkways from vehicle intrusion. Control valet and guest parking efficiently with bollards designed to match hotel aesthetics for a polished look.",
    },
    {
      icon: "🏛️",
      title: "For Embassies",
      description:
        "Protect against vehicle attacks and unauthorized access with high-security rated bollards. Manage controlled vehicle entry to secure zones for staff and official visitors.",
    },
  ],

  customSectionTitle: "Tailored Solutions for Your Needs",
  customSectionContent: [
    "At Saferon, we understand that each facility has unique security and access requirements. Our bollard system solutions are designed to meet your specific needs with precision and flexibility.",
    "Our team can design a customized bollard system solution that enhances security, safety, and operational efficiency for your property. Let us help you implement effective and reliable bollard technology tailored to your needs.",
  ],

  relatedServices: [
    { label: "Automatic Gates", href: "/services/automatic-gate" },
    { label: "Access Control", href: "/services/access-control" },
    { label: "Perimeter Razor Wire", href: "/services/perimeter-razor" },
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Parking Systems", href: "/services/parking-systems" },
  ],

  ctaTitle: "Secure Your Perimeter with Bollards",
  ctaSubtitle:
    "Contact Saferon Systems for a professional assessment and a customized bollard solution for your facility.",
};

export default function BollardsPage() {
  return <ServicePageLayout data={data} />;
}