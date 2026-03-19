import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "CCTV Surveillance Solutions",
  subtitle:
    "Advanced IP CCTV systems designed to protect your people, property, and assets with complete visibility and control.",
  heroImage: "/images/solution-cctv.jpg",

  overview: [
    "In an era where security is paramount, CCTV systems have become an indispensable tool for businesses and homeowners alike. CCTV systems provide continuous surveillance, acting as both a deterrent to potential criminals and a vital resource for incident investigation.",
    "Whether for monitoring entrances, safeguarding valuable assets, or ensuring the safety of your premises, a reliable CCTV system is a critical component of any security strategy.",
  ],

  featuresTitle: "IP CCTV Systems",
  features: [
    {
      icon: "📡",
      title: "Enhanced Security with IP Technology",
      description:
        "Unlike traditional analog systems, IP CCTV systems offer superior image quality and greater flexibility. These systems deliver high-definition video for clear identification and are easily scalable as your security needs grow.",
    },
    {
      icon: "📱",
      title: "Mobile Functionality",
      description:
        "View live feeds and recordings from your smartphone, tablet, or computer — anywhere, anytime. Stay connected whether you are in the office, traveling, or at home.",
    },
    {
      icon: "💾",
      title: "Recording & Storage Options",
      description:
        "Supports motion detection, scheduled recording, and 24/7 continuous surveillance. Footage can be stored on NVRs or securely in the cloud with expandable storage options.",
    },
    {
      icon: "🔍",
      title: "High-Definition Video",
      description:
        "Crystal-clear 4K and HD resolution cameras ensure every detail is captured with precision — from facial recognition to license plate identification.",
    },
    {
      icon: "🌙",
      title: "Night Vision & Low Light",
      description:
        "Advanced infrared and low-light technology ensures your property is monitored around the clock, even in complete darkness.",
    },
    {
      icon: "🤖",
      title: "AI-Powered Analytics",
      description:
        "Smart motion detection, people counting, intrusion detection, and automated alerts keep you informed of events the moment they occur.",
    },
  ],

  customSectionTitle: "Tailored Solutions for Your Needs",
  customSectionContent: [
    "At Saferon Systems Limited, we understand that every property has unique security requirements. Our IP CCTV solutions are designed to provide flexibility, reliability, and advanced features tailored to your environment.",
    "Our team is ready to assess your needs and design a customized surveillance system that ensures complete control and visibility — from single-site installations to multi-site enterprise deployments.",
    "Let us help you secure what matters most.",
  ],

  brands: [
    { name: "Hikvision", src: "https://tse3.mm.bing.net/th/id/OIP.uMt2GiovtIWnFdfCuLXWJwHaBf?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Dahua", src: "https://th.bing.com/th/id/R.9378a710d9d9a188b9d86e7029737f52?rik=5C7XBjC3UXUbug&pid=ImgRaw&r=0" },
    { name: "Jovision", src: "https://www.itelleqq.com/sites/default/files/logos/partners/logo-jovision.jpg" },
    { name: "LILIN", src: "https://th.bing.com/th/id/R.c3504566c03b96b6cbe51ca88f400291?rik=3QRoAYU5NwzJow&riu=http%3a%2f%2fnetworkcamerastore.com%2fcdn%2fshop%2ffiles%2fLILIN-LOGO__55795.1657830115.1280.1280.jpg%3fv%3d1704291146%26width%3d1024&ehk=GQF0gCptk%2fenVcmqLbYuwoUZCo%2bbJ1Rdg%2fF9s2Ck%2b54%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Panasonic", src: "https://brandgenetics.com/wp-content/uploads/2019/11/panasonic-logo-scaled.jpg" },
  ],

  relatedServices: [
    { label: "Intruder Alarms", href: "/services/intruder-alarms" },
    { label: "Access Control", href: "/services/access-control" },
    { label: "Electric Fencing", href: "/services/electric-fencing" },
    { label: "Fire Alarms", href: "/services/fire-alarms" },
    { label: "Smart Locks", href: "/services/smart-locks" },
  ],

  ctaTitle: "Ready to Secure Your Property?",
  ctaSubtitle:
    "Contact Saferon Systems today for a professional CCTV consultation and customized surveillance solution.",
};

export default function CCTVPage() {
  return <ServicePageLayout data={data} />;
}