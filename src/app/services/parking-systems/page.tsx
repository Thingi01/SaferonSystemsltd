import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Parking System Solutions",
  subtitle:
    "Streamlined parking management solutions that enhance security, convenience, and efficiency for your property.",
  heroImage: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1600&q=80",

  overview: [
    "As urban areas become more crowded, efficient parking solutions are critical. These systems streamline parking management, enhance security, and improve convenience for offices, homes, and apartment complexes.",
  ],

  featuresTitle: "Smart Parking for Every Property",
  features: [
    {
      icon: "🏢",
      title: "For Offices",
      description:
        "Automates parking space allocation for employees and visitors. License plate recognition and cameras ensure vehicle safety while integration with access systems creates secure, controlled parking zones.",
    },
    {
      icon: "🏠",
      title: "For Homes",
      description:
        "Maximize available parking space, especially in limited areas. Automated barriers and surveillance protect vehicles from theft and vandalism with remote access for convenient management.",
    },
    {
      icon: "🏬",
      title: "For Apartments",
      description:
        "Ensures residents have assigned spots and visitors find temporary parking easily. Integrated cameras and access controls enhance safety while property managers control access and monitor usage.",
    },
    {
      icon: "🚗",
      title: "License Plate Recognition",
      description:
        "Automated number plate recognition (ANPR) cameras identify and log every vehicle entering or exiting your facility — enabling ticketless entry, blacklist enforcement, and detailed access records.",
    },
    {
      icon: "🚧",
      title: "Barrier & Boom Gates",
      description:
        "Automated boom gates and barriers control vehicle flow with precision. Integrated with access cards, remote controls, or ANPR for seamless entry and exit management.",
    },
    {
      icon: "📊",
      title: "Parking Management Software",
      description:
        "Centralized dashboards give property managers real-time visibility of occupancy, permit management, revenue reporting, and usage analytics for smarter parking operations.",
    },
  ],

  customSectionTitle: "Tailored Solutions for Your Needs",
  customSectionContent: [
    "At Saferon, we understand that each property has unique parking needs. Our parking system solutions are designed to improve efficiency, security, and convenience for offices, homes, and apartment complexes.",
    "Our team can design a customized parking solution tailored to your property, creating a seamless and effective parking experience with the latest technology.",
  ],

  relatedServices: [
    { label: "Bollards & Barriers", href: "/services/bollards" },
    { label: "Automatic Gates", href: "/services/automatic-gate" },
    { label: "Access Control", href: "/services/access-control" },
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Vehicle Tracking", href: "/services/vehicle-tracking" },
  ],

  ctaTitle: "Optimize Your Parking Today",
  ctaSubtitle:
    "Contact Saferon Systems for professional parking solutions and customized management systems for your property.",
};

export default function ParkingSystemsPage() {
  return <ServicePageLayout data={data} />;
}