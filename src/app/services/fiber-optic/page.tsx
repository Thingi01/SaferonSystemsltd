import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Fiber Optic Solutions",
  subtitle:
    "High-speed, reliable fiber optic networks designed to support your connectivity and security needs.",
  heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80",

  overview: [
    "Fiber optic technology is the backbone of modern high-speed communication. At Saferon, we provide robust fiber optic solutions that ensure ultra-fast internet, secure data transmission, and reliable connectivity for businesses, institutions, and residential properties.",
  ],

  featuresTitle: "Connectivity for Every Environment",
  features: [
    {
      icon: "🏢",
      title: "For Offices",
      description:
        "Enable fast and stable internet for all office operations. Supports VoIP, video conferencing, and cloud applications seamlessly with scalable infrastructure that grows with your business.",
    },
    {
      icon: "🏠",
      title: "For Homes",
      description:
        "Consistent high-speed connectivity for streaming, gaming, and remote work. Minimal latency and interference for smooth online experiences — future-ready for smart home devices.",
    },
    {
      icon: "🏬",
      title: "For Apartments",
      description:
        "Efficiently provides high-speed internet to multiple residents with secure network protocols to protect residents' data. Fiber optic infrastructure requires minimal maintenance and provides long-term reliability.",
    },
    {
      icon: "🏫",
      title: "For Institutions",
      description:
        "High bandwidth supports multiple users, online learning, and research applications simultaneously. Ensures sensitive information is transmitted safely with minimal downtime for critical operations.",
    },
    {
      icon: "🚀",
      title: "Ultra-Fast Speeds",
      description:
        "Fiber optic cables transmit data at the speed of light — delivering symmetrical upload and download speeds that far exceed traditional copper-based infrastructure.",
    },
    {
      icon: "🔒",
      title: "Secure Data Transmission",
      description:
        "Unlike copper cables, fiber optic cables are extremely difficult to tap, making them inherently more secure for transmitting sensitive business and personal data.",
    },
  ],

  customSectionTitle: "Tailored Fiber Optic Solutions",
  customSectionContent: [
    "At Saferon, we design fiber optic networks tailored to your unique connectivity and security needs. Whether for offices, homes, apartments, or institutions, our solutions provide high-speed, secure, and future-ready networks.",
    "Contact our team today to explore customized fiber optic solutions that ensure reliable performance and long-term scalability for your property or organization.",
  ],

  brands: [
    { name: "D-Link", src: "https://www.windowsblogitalia.com/wp-content/uploads/2014/09/DLink_Logo.jpg" },
    { name: "Ruijie", src: "https://cdn.connectec.uk/uploads/blog/65aaa06aab080_ruijie-logo.png?format=jpg&scale.width=1200" },
    { name: "Arista", src: "https://www.arista.com/assets/images/logo/arista_logo_blue_bg_500x280.jpg" },
  ],

  relatedServices: [
    { label: "Structured Cabling", href: "/services/structured-cabling" },
    { label: "Network Infrastructure", href: "/services/network-infrastructure" },
    { label: "WiFi Access Points", href: "/services/wifi-access-point" },
    { label: "Cyber Security", href: "/services/cyber-security" },
    { label: "IP Telephone", href: "/services/ip-telephone" },
  ],

  ctaTitle: "Upgrade Your Connectivity Today",
  ctaSubtitle:
    "Reach out to Saferon Systems for professional fiber optic solutions and high-speed network installations tailored to your needs.",
};

export default function FiberOpticPage() {
  return <ServicePageLayout data={data} />;
}