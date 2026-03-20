import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Power Backup Systems",
  subtitle:
    "Reliable power backup solutions to keep your business operational during outages, ensuring productivity and data protection.",
  heroImage: "https://5.imimg.com/data5/TS/KV/MY-12329626/ups-system-1000x1000.jpg",

  overview: [
    "Uninterrupted power supply is critical for productivity, data integrity, and continuous operation of essential systems. Power Backup Systems safeguard your business from financial losses, operational downtime, and equipment damage caused by outages or voltage fluctuations.",
  ],

  featuresTitle: "Comprehensive Power Solutions",
  features: [
    {
      icon: "☀️",
      title: "Solar Power Solutions",
      description:
        "Reduce dependency on the grid and save on electricity costs with renewable solar energy. Maintain operations during prolonged outages while minimizing your carbon footprint with clean, sustainable power.",
    },
    {
      icon: "🔋",
      title: "Power Inverters & Batteries",
      description:
        "Convert stored energy into usable electricity with reliable inverters and battery banks. These form the backbone of a robust backup system, keeping essential equipment running continuously during outages.",
    },
    {
      icon: "⚡",
      title: "Uninterruptible Power Supplies (UPS)",
      description:
        "Provide instant power during short outages to safeguard sensitive equipment and data. Prevent disruption to critical business functions with seamless automatic switchover when mains power fails.",
    },
    {
      icon: "🏭",
      title: "Industrial & Commercial UPS",
      description:
        "Heavy-duty UPS systems designed for data centres, server rooms, and industrial facilities where power continuity is mission-critical. Scalable capacity from 1kVA to enterprise-grade multi-hundred kVA systems.",
    },
    {
      icon: "🏠",
      title: "Residential Backup Systems",
      description:
        "Home power backup solutions combining solar panels, battery storage, and inverters to keep your household running through blackouts — powering lights, security systems, and essential appliances.",
    },
    {
      icon: "📊",
      title: "Power Monitoring & Management",
      description:
        "Smart monitoring systems track power consumption, battery health, and backup runtime in real time — giving you full visibility and control over your power infrastructure from any device.",
    },
  ],

  customSectionTitle: "Tailored Power Backup Solutions",
  customSectionContent: [
    "At Saferon, we design power backup systems that meet the unique requirements of your business. From solar power solutions to inverters, batteries, and UPS systems, our solutions ensure continuous operation and operational reliability.",
    "Contact us today to implement a customised power backup solution that secures your operations and maintains productivity during any power outage.",
  ],

  relatedServices: [
    { label: "Solar Lights", href: "/services/solar-lights" },
    { label: "Network Infrastructure", href: "/services/network-infrastructure" },
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Fire Alarms", href: "/services/fire-alarms" },
    { label: "Structured Cabling", href: "/services/structured-cabling" },
  ],

  ctaTitle: "Ensure Uninterrupted Power",
  ctaSubtitle:
    "Reach out to Saferon Systems for professional Power Backup System solutions tailored to your business.",
};

export default function PowerSolutionsPage() {
  return <ServicePageLayout data={data} />;
}