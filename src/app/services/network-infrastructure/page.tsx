import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Network Infrastructure Solutions",
  subtitle:
    "Reliable, scalable, and secure network infrastructure designed to support offices, homes, and apartment complexes.",
  heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",

  overview: [
    "A robust network infrastructure is the backbone of modern operations. It ensures seamless communication, fast data transfer, and uninterrupted connectivity across all devices and applications. Well-designed infrastructure supports current needs and scales for future growth while enhancing security and performance.",
  ],

  featuresTitle: "Solutions for Every Environment",
  features: [
    {
      icon: "🏢",
      title: "For Offices",
      description:
        "Connect workstations, servers, and VoIP systems efficiently. Protect sensitive business information from cyber threats with scalable infrastructure that supports business growth and new technologies.",
    },
    {
      icon: "🏠",
      title: "For Homes",
      description:
        "Reliable Wi-Fi coverage in all rooms including basements and multi-story homes. Seamlessly connects security cameras, smart locks, and automation systems with easy setup and maintenance.",
    },
    {
      icon: "🏬",
      title: "For Apartments",
      description:
        "Ensures all residents enjoy consistent high-speed internet access with centralized management for easier maintenance. Supports CCTV, access control, and other building security systems.",
    },
    {
      icon: "🖧",
      title: "Switches & Routers",
      description:
        "Enterprise-grade managed switches and routers from leading manufacturers ensure high-performance, low-latency connectivity across your entire network with full VLAN and QoS support.",
    },
    {
      icon: "🖥️",
      title: "Server Solutions",
      description:
        "From rack-mounted servers to NAS storage systems, we design and deploy server infrastructure that meets your processing, storage, and redundancy requirements.",
    },
    {
      icon: "🔒",
      title: "Network Security",
      description:
        "Firewalls, VPNs, network segmentation, and intrusion detection systems protect your infrastructure from internal and external threats while maintaining compliance with industry standards.",
    },
  ],

  customSectionTitle: "Tailored Network Infrastructure Solutions",
  customSectionContent: [
    "At Saferon, we design and implement network infrastructure customized for offices, homes, and apartments. Our solutions ensure secure, scalable, and high-performance networks tailored to your specific requirements.",
    "Contact us today to discuss a network infrastructure solution that strengthens connectivity, improves performance, and future-proofs your property's network.",
  ],

  brands: [
    { name: "D-Link", src: "https://www.windowsblogitalia.com/wp-content/uploads/2014/09/DLink_Logo.jpg" },
    { name: "Ruijie", src: "https://cdn.connectec.uk/uploads/blog/65aaa06aab080_ruijie-logo.png?format=jpg&scale.width=1200" },
    { name: "Arista", src: "https://www.arista.com/assets/images/logo/arista_logo_blue_bg_500x280.jpg" },
    { name: "Microsoft", src: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" },
  ],

  relatedServices: [
    { label: "Structured Cabling", href: "/services/structured-cabling" },
    { label: "Fiber Optic", href: "/services/fiber-optic" },
    { label: "WiFi Access Points", href: "/services/wifi-access-point" },
    { label: "Cyber Security", href: "/services/cyber-security" },
    { label: "IP Telephone", href: "/services/ip-telephone" },
  ],

  ctaTitle: "Enhance Your Network Today",
  ctaSubtitle:
    "Reach out to Saferon Systems for professional network infrastructure solutions tailored to your property.",
};

export default function NetworkInfrastructurePage() {
  return <ServicePageLayout data={data} />;
}