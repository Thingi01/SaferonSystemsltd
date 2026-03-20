import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Perimeter Razor Wire Systems",
  subtitle:
    "Heavy-duty physical perimeter barriers designed to deter intrusion, delay unauthorized access, and strengthen overall property security.",
  heroImage: "https://srilakshmiwirenetting.com/wp-content/uploads/2024/10/Razor-Wire-1.jpg",

  overview: [
    "Perimeter security plays a vital role in safeguarding property, assets, and people. Razor wire is one of the most effective physical deterrents available, creating a formidable barrier that is extremely difficult to breach.",
    "Razor wire offers a cost-effective, low-maintenance security solution that significantly enhances perimeter protection when installed on walls, fences, or boundary structures.",
  ],

  featuresTitle: "Protection for Every Property Type",
  features: [
    {
      icon: "🏢",
      title: "For Offices",
      description:
        "Prevent unauthorized access to office premises and safeguard sensitive information and equipment. Works effectively as a layered security measure alongside CCTV and electric fencing.",
    },
    {
      icon: "🏠",
      title: "For Homes",
      description:
        "Secure walls and boundary fences to deter intruders before they attempt entry. Long-lasting protection with minimal upkeep gives homeowners consistent peace of mind.",
    },
    {
      icon: "🏬",
      title: "For Apartments",
      description:
        "Secure apartment boundaries effectively to reduce the risk of unauthorized access. Complements access control and surveillance for a complete perimeter security solution.",
    },
    {
      icon: "🪢",
      title: "Concertina Razor Wire",
      description:
        "Coiled concertina wire expands to form an imposing barrier across walls and fence tops. Its sharp barbs and spring-steel construction make it one of the most effective anti-climb deterrents available.",
    },
    {
      icon: "🔩",
      title: "Flat Wrap Razor Wire",
      description:
        "Flat wrap razor wire is installed flat along wall tops and fence lines, providing a low-profile yet highly effective barrier that is difficult to defeat without specialized tools.",
    },
    {
      icon: "🔗",
      title: "System Integration",
      description:
        "Razor wire installations integrate seamlessly with electric fencing, intruder alarms, CCTV, and access control systems to create a comprehensive, layered perimeter defence.",
    },
  ],

  customSectionTitle: "Tailored Solutions for Your Needs",
  customSectionContent: [
    "Every property has unique security challenges. At Saferon Systems Limited, we assess your perimeter layout and threat level to design a razor wire solution that offers maximum protection.",
    "Our installations are professional, durable, and designed to integrate seamlessly with other security systems for complete perimeter defence.",
  ],

  relatedServices: [
    { label: "Electric Fencing", href: "/services/electric-fencing" },
    { label: "Bollards & Barriers", href: "/services/bollards" },
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Intruder Alarms", href: "/services/intruder-alarms" },
    { label: "Automatic Gates", href: "/services/automatic-gate" },
  ],

  ctaTitle: "Strengthen Your Perimeter Security",
  ctaSubtitle:
    "Contact Saferon Systems today for professional razor wire installation and perimeter security solutions.",
};

export default function PerimeterRazorPage() {
  return <ServicePageLayout data={data} />;
}