import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Structured Cabling Solutions",
  subtitle:
    "Organized, scalable, and reliable cabling systems designed to support modern networks for offices, homes, and apartments.",
  heroImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1600&q=80",

  overview: [
    "Structured cabling is the foundation of any modern network. It ensures reliable, high-speed connectivity and supports voice, data, and video transmission efficiently. A well-designed system reduces downtime, simplifies maintenance, and provides scalability for future network expansion.",
  ],

  featuresTitle: "Cabling Solutions for Every Property",
  features: [
    {
      icon: "🏢",
      title: "For Offices",
      description:
        "Supports voice, data, and video applications without interruption. Simplifies troubleshooting and reduces downtime with a clean, organized infrastructure that scales as your business grows.",
    },
    {
      icon: "🏠",
      title: "For Homes",
      description:
        "Supports streaming, smart home devices, and remote work with high-speed wired connections. Reduces clutter and ensures a clean, organized network layout with stable connectivity across all devices.",
    },
    {
      icon: "🏬",
      title: "For Apartments",
      description:
        "Provides high-speed internet and voice services to all units from a centralized distribution point. Supports CCTV, access control, and other networked systems — future-ready for increasing demands.",
    },
    {
      icon: "🔌",
      title: "Cat6 / Cat6A Cabling",
      description:
        "Industry-standard Cat6 and Cat6A twisted pair cabling delivers speeds up to 10Gbps with reduced crosstalk and interference — ideal for modern enterprise and residential network deployments.",
    },
    {
      icon: "🗄️",
      title: "Patch Panels & Server Rooms",
      description:
        "Professional patch panel installations, cable management, and server room setups ensure your network core is neat, organized, and easy to maintain and expand over time.",
    },
    {
      icon: "✅",
      title: "Testing & Certification",
      description:
        "Every installation is tested and certified using professional cable testers to verify performance meets or exceeds industry standards — giving you full confidence in your network infrastructure.",
    },
  ],

  customSectionTitle: "Tailored Structured Cabling Solutions",
  customSectionContent: [
    "At Saferon, we design and install structured cabling systems customized for offices, homes, and apartments. Our solutions ensure reliable, scalable, and future-ready network infrastructures.",
    "Contact us today to discuss a structured cabling solution that provides a strong foundation for your communication and data needs.",
  ],

  brands: [
    { name: "D-Link", src: "https://www.windowsblogitalia.com/wp-content/uploads/2014/09/DLink_Logo.jpg" },
    { name: "Ruijie", src: "https://cdn.connectec.uk/uploads/blog/65aaa06aab080_ruijie-logo.png?format=jpg&scale.width=1200" },
  ],

  relatedServices: [
    { label: "Fiber Optic", href: "/services/fiber-optic" },
    { label: "Network Infrastructure", href: "/services/network-infrastructure" },
    { label: "WiFi Access Points", href: "/services/wifi-access-point" },
    { label: "IP Telephone", href: "/services/ip-telephone" },
    { label: "Cyber Security", href: "/services/cyber-security" },
  ],

  ctaTitle: "Build a Strong Network Foundation",
  ctaSubtitle:
    "Reach out to Saferon Systems for professional structured cabling solutions tailored to your property.",
};

export default function StructuredCablingPage() {
  return <ServicePageLayout data={data} />;
}