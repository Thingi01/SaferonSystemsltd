import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Cybersecurity Solutions",
  subtitle:
    "Protect your business and digital assets with advanced cybersecurity solutions tailored to your needs.",
  heroImage: "https://images.unsplash.com/photo-1581090700220-8f0e0327f1d0?auto=format&fit=crop&w=1600&q=80",

  overview: [
    "In today's digital world, cyber threats are increasing daily. Data breaches, ransomware attacks, and identity theft pose serious risks to businesses and individuals. Implementing effective cybersecurity measures protects your financial assets, company reputation, and customer trust.",
    "Investing in cybersecurity ensures your business can operate smoothly without constant fear of cyberattacks, allowing you to focus on growth, innovation, and success.",
  ],

  featuresTitle: "Protection for Every Environment",
  features: [
    {
      icon: "🏢",
      title: "For Businesses",
      description:
        "Safeguard sensitive company and customer information from cyber threats. Monitor and protect all digital infrastructure from intrusion while ensuring adherence to cybersecurity regulations and standards.",
    },
    {
      icon: "👤",
      title: "For Individuals",
      description:
        "Prevent identity theft and safeguard personal data online. Protect computers, smartphones, and smart home devices from malware with guidance on password management and phishing prevention.",
    },
    {
      icon: "🏛️",
      title: "For Institutions",
      description:
        "Safeguard networks, servers, and databases with critical infrastructure protection. Ensure quick detection and mitigation of cyber threats with encrypted and secure communication channels.",
    },
    {
      icon: "🛡️",
      title: "Firewall & Network Security",
      description:
        "Next-generation firewalls and intrusion detection systems monitor and filter all incoming and outgoing network traffic to block threats before they reach your systems.",
    },
    {
      icon: "🔑",
      title: "Endpoint Protection",
      description:
        "Comprehensive protection for all devices on your network — laptops, desktops, mobile devices, and servers — against malware, ransomware, and zero-day exploits.",
    },
    {
      icon: "⚡",
      title: "Incident Response",
      description:
        "Rapid detection, containment, and recovery from security incidents to minimize downtime and data loss, with detailed post-incident reporting and recommendations.",
    },
  ],

  customSectionTitle: "Tailored Cybersecurity Solutions",
  customSectionContent: [
    "At Saferon, we understand that every business has unique cybersecurity needs. Our team can design a customized cybersecurity strategy to protect your digital assets and align with your business requirements.",
    "Contact us today to discuss solutions that secure your systems, protect your data, and provide peace of mind.",
  ],

  brands: [
    { name: "Sophos", src: "https://freshersarea.in/wp-content/uploads/2024/09/sophos-software-engineer-fresher-1.jpg" },
    { name: "Microsoft", src: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" },
    { name: "Honeywell", src: "https://th.bing.com/th/id/R.c134c9ccf7d950af3debbcff525d2bce?rik=AWfw8HeM361srA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f08%2fHoneywell_logo.png&ehk=EiJSEaevkuNizEmKbCti8ya9TIFSNSLU0K6deuGK6VU%3d&risl=&pid=ImgRaw&r=0" },
  ],

  relatedServices: [
    { label: "Network Infrastructure", href: "/services/network-infrastructure" },
    { label: "Structured Cabling", href: "/services/structured-cabling" },
    { label: "WiFi Access Points", href: "/services/wifi-access-point" },
    { label: "Fiber Optic", href: "/services/fiber-optic" },
    { label: "IP Telephone", href: "/services/ip-telephone" },
  ],

  ctaTitle: "Protect Your Digital Assets",
  ctaSubtitle:
    "Reach out to Saferon Systems for professional cybersecurity solutions tailored to your business or personal needs.",
};

export default function CyberSecurityPage() {
  return <ServicePageLayout data={data} />;
}