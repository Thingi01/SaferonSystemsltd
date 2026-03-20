import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Solar Light Solutions",
  subtitle:
    "Illuminate your world with sustainable and efficient solar lighting solutions for every environment.",
  heroImage: "https://images.unsplash.com/photo-1590364090734-0c24dcd3b6b4?auto=format&fit=crop&w=1600&q=80",

  overview: [
    "Our solar lighting solutions provide exceptional benefits including energy efficiency, sustainability, cost-effectiveness, and versatility for industrial, commercial, and residential applications.",
  ],

  featuresTitle: "Solar Lighting for Every Environment",
  features: [
    {
      icon: "🏭",
      title: "For Manufacturers",
      description:
        "Enhance safety and operational efficiency in warehouses and production areas. Improve visibility for employees and machinery while significantly reducing energy costs.",
    },
    {
      icon: "🏗️",
      title: "For Buildings",
      description:
        "Improve building exteriors, entryways, parking lots, and pathways with reliable solar lighting that enhances both security and aesthetic appeal simultaneously.",
    },
    {
      icon: "🛍️",
      title: "For Malls",
      description:
        "Create welcoming outdoor spaces, parking lots, and signage with solar-powered lighting. Enhance customer experience with energy-efficient, low-maintenance illumination.",
    },
    {
      icon: "🏬",
      title: "For Apartments",
      description:
        "Provide efficient, eco-friendly lighting for common areas, walkways, and parking facilities. Improve safety and ambiance without increasing utility bills for residents.",
    },
    {
      icon: "🏠",
      title: "For Homes",
      description:
        "Transform gardens, driveways, and pathways with elegant solar-powered lighting. Reduce electricity costs while supporting a greener, more sustainable lifestyle.",
    },
    {
      icon: "🏢",
      title: "For Offices",
      description:
        "Enhance outdoor office environments, pathways, parking lots, and building exteriors. Improve visibility, security, and sustainability while reducing energy expenses.",
    },
  ],

  customSectionTitle: "Need Assistance?",
  customSectionContent: [
    "If you're unsure which solar light solution best fits your needs, our team is ready to assist. We can tailor a solar lighting solution specifically for your environment and requirements.",
    "Contact Saferon today to explore solutions that illuminate your property efficiently and sustainably, helping you achieve a brighter future.",
  ],

  relatedServices: [
    { label: "Power Solutions", href: "/services/power-solutions" },
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Electric Fencing", href: "/services/electric-fencing" },
    { label: "Intruder Alarms", href: "/services/intruder-alarms" },
  ],

  ctaTitle: "Illuminate Your World Today",
  ctaSubtitle:
    "Reach out to Saferon Systems for advanced solar lighting solutions designed to meet your specific needs.",
};

export default function SolarLightsPage() {
  return <ServicePageLayout data={data} />;
}