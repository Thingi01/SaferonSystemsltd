import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Wi-Fi & Access Point Solutions",
  subtitle:
    "Reliable access points, routers, and extenders for seamless, high-speed Wi-Fi connectivity in every environment.",
  heroImage: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=1600&q=80",

  overview: [
    "In today's digital world, reliable Wi-Fi is essential. Access points, routers, and extenders work together to provide strong, secure, and seamless connectivity across offices, homes, and apartment complexes.",
  ],

  featuresTitle: "Wireless Solutions for Every Environment",
  features: [
    {
      icon: "🏢",
      title: "For Offices",
      description:
        "Ensure high-speed Wi-Fi coverage for all employees and devices. Access points manage traffic and reduce downtime for critical applications while supporting laptops, smartphones, printers, and IoT equipment.",
    },
    {
      icon: "🏠",
      title: "For Homes",
      description:
        "Eliminate dead zones in basements, multi-story homes, and outdoor areas. Reliable connectivity for smart home devices, streaming, and remote work with easy management via mobile apps.",
    },
    {
      icon: "🏬",
      title: "For Apartments",
      description:
        "Provide consistent Wi-Fi in all units and shared areas like lobbies and gyms. Supports multiple residents and devices simultaneously for smooth streaming, gaming, and online work.",
    },
    {
      icon: "📶",
      title: "Routers & Extenders",
      description:
        "Centralized routers manage network traffic and security while extenders boost Wi-Fi range to cover hard-to-reach areas — maintaining strong, stable connectivity throughout your property.",
    },
    {
      icon: "🏢",
      title: "Enterprise Access Points",
      description:
        "High-density enterprise access points support hundreds of simultaneous connections with advanced features like band steering, beamforming, and seamless roaming across large campuses.",
    },
    {
      icon: "🔒",
      title: "Secure Network Management",
      description:
        "Cloud-managed Wi-Fi with centralized dashboards, guest network isolation, content filtering, and real-time monitoring keep your network performing optimally and securely.",
    },
  ],

  customSectionTitle: "Tailored Networking Solutions",
  customSectionContent: [
    "Saferon provides customized Wi-Fi solutions that meet your property's unique connectivity needs. From offices and homes to apartments, our solutions ensure reliable, high-speed network access everywhere.",
    "Contact us today to design a network that eliminates dead zones, supports multiple devices, and ensures seamless internet performance.",
  ],

  brands: [
    { name: "D-Link", src: "https://www.windowsblogitalia.com/wp-content/uploads/2014/09/DLink_Logo.jpg" },
    { name: "Ruijie", src: "https://cdn.connectec.uk/uploads/blog/65aaa06aab080_ruijie-logo.png?format=jpg&scale.width=1200" },
    { name: "Arista", src: "https://www.arista.com/assets/images/logo/arista_logo_blue_bg_500x280.jpg" },
  ],

  relatedServices: [
    { label: "Network Infrastructure", href: "/services/network-infrastructure" },
    { label: "Structured Cabling", href: "/services/structured-cabling" },
    { label: "Fiber Optic", href: "/services/fiber-optic" },
    { label: "Cyber Security", href: "/services/cyber-security" },
    { label: "IP Telephone", href: "/services/ip-telephone" },
  ],

  ctaTitle: "Upgrade Your Network Today",
  ctaSubtitle:
    "Reach out to Saferon Systems for professional Wi-Fi, access point, router, and extender solutions designed for your space.",
};

export default function WiFiAccessPointPage() {
  return <ServicePageLayout data={data} />;
}