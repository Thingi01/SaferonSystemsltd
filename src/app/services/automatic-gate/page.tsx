import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Gate Automation Solutions",
  subtitle:
    "Modern access control systems that combine convenience, security, and efficiency for your property.",
  heroImage: "/images/auto-gate-motor-supplier-in-pune.png",

  overview: [
    "In today's fast-paced world, gate automation provides seamless control over entry and exit points while enhancing security. Automated gates are ideal for offices, homes, and apartment complexes, offering significant benefits for safety, convenience, and operational efficiency.",
  ],

  featuresTitle: "Applications for Every Property",
  features: [
    {
      icon: "🏢",
      title: "For Offices",
      description:
        "Integrates with key cards, biometric readers, or remote controls for secure entry. Reduces the need for security personnel, minimizes wait times, and supports scheduled operation to enhance office security.",
    },
    {
      icon: "🏠",
      title: "For Homes",
      description:
        "Control gates via remote, intercom, or smartphone from the comfort of your vehicle. Creates a barrier to unauthorized entry and integrates seamlessly with existing home security systems.",
    },
    {
      icon: "🏬",
      title: "For Apartments",
      description:
        "Controls entry for residents and visitors using key fobs, intercoms, or entry codes. Ensures only authorized individuals can enter and supports programmed open/close schedules.",
    },
    {
      icon: "📱",
      title: "Remote Control",
      description:
        "Manage and monitor your gate remotely via smartphone app — open, close, and check status from anywhere in the world.",
    },
    {
      icon: "🔗",
      title: "System Integration",
      description:
        "Seamlessly integrates with CCTV, intercoms, access control systems, and alarm panels for a fully unified security solution.",
    },
    {
      icon: "⚙️",
      title: "Reliable & Low Maintenance",
      description:
        "Industrial-grade motors and components ensure long-lasting, reliable operation with minimal maintenance requirements even in harsh weather conditions.",
    },
  ],

  customSectionTitle: "Tailored Solutions for Your Needs",
  customSectionContent: [
    "At Saferon, we understand each property has unique access and security needs. Our gate automation solutions are designed to provide convenience, security, and efficiency tailored to your requirements.",
    "Our team can design a customized gate automation system that ensures smooth access management and reliable security. Upgrade your property with the latest in gate automation technology.",
  ],

  relatedServices: [
    { label: "Access Control", href: "/services/access-control" },
    { label: "Bollards & Barriers", href: "/services/bollards" },
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Smart Locks", href: "/services/smart-locks" },
    { label: "Intruder Alarms", href: "/services/intruder-alarms" },
  ],

  ctaTitle: "Upgrade Your Gate Automation Today",
  ctaSubtitle:
    "Contact Saferon Systems for a professional assessment and a customized gate automation solution.",
};

export default function AutomaticGatePage() {
  return <ServicePageLayout data={data} />;
}