import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Intruder Alarm Systems",
  subtitle:
    "Advanced GSM-enabled intruder alarm systems delivering real-time alerts, remote monitoring, and reliable protection for homes, offices, and apartments.",
  heroImage: "https://asset.quotientapp.com/image/quote-example/file/security-01-thumb.jpg",

  overview: [
    "In today's world, ensuring the security of your property is more crucial than ever. Intruder alarm systems equipped with GSM (Global System for Mobile Communications) technology offer a powerful and reliable security solution.",
    "These systems provide real-time alerts and communication capabilities, enabling effective monitoring and rapid response whenever a security threat occurs.",
  ],

  featuresTitle: "Protection for Every Property",
  features: [
    {
      icon: "🏢",
      title: "For Offices",
      description:
        "Instant notifications to security teams or management when a breach occurs. Monitor office security remotely from mobile devices and integrate seamlessly with CCTV and access control systems.",
    },
    {
      icon: "🏠",
      title: "For Homes",
      description:
        "Receive instant alerts on your mobile phone when an intrusion is detected. Stay connected to your home's security even when away with a user-friendly interface for easy control.",
    },
    {
      icon: "🏬",
      title: "For Apartments",
      description:
        "Property managers receive real-time alerts for coordinated response while residents are instantly notified of security incidents. Scalable systems cover individual units and shared common areas.",
    },
    {
      icon: "📶",
      title: "GSM Technology",
      description:
        "GSM-enabled alarms communicate over mobile networks — meaning they work even if landlines are cut. Reliable connectivity ensures alerts reach you no matter where you are.",
    },
    {
      icon: "🚨",
      title: "Motion & Perimeter Detection",
      description:
        "Passive infrared (PIR) motion sensors, door and window contacts, and glass break detectors provide comprehensive coverage of all entry points and internal zones.",
    },
    {
      icon: "🔗",
      title: "Full System Integration",
      description:
        "Integrates with CCTV cameras, electric fencing, sirens, strobes, and access control for a fully automated and coordinated security response when an alarm is triggered.",
    },
  ],

  customSectionTitle: "Tailored Solutions for Your Needs",
  customSectionContent: [
    "At Saferon Systems Limited, we understand that each property has unique security requirements. Our GSM-enabled intruder alarm systems are designed to meet the specific needs of offices, homes, and apartment complexes.",
    "Our experts are ready to design a customized alarm solution that ensures your property is protected and that you are always informed. Let us help you enhance your security with reliable GSM alarm systems.",
  ],

  brands: [
    { name: "Texecom", src: "https://www.balancesystems.co.uk/wp-content/uploads/2016/05/Texecom-logo-1024x200.jpg" },
    { name: "Risco", src: "https://logowiki.net/wp-content/uploads/imgp/Risco-Group-Logo-1-7475.png" },
    { name: "Honeywell", src: "https://th.bing.com/th/id/R.c134c9ccf7d950af3debbcff525d2bce?rik=AWfw8HeM361srA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f08%2fHoneywell_logo.png&ehk=EiJSEaevkuNizEmKbCti8ya9TIFSNSLU0K6deuGK6VU%3d&risl=&pid=ImgRaw&r=0" },
  ],

  relatedServices: [
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Electric Fencing", href: "/services/electric-fencing" },
    { label: "Sirens & Strobes", href: "/services/sirens-strobes" },
    { label: "Access Control", href: "/services/access-control" },
    { label: "Fire Alarms", href: "/services/fire-alarms" },
  ],

  ctaTitle: "Need a Reliable Intruder Alarm System?",
  ctaSubtitle:
    "Contact Saferon Systems today for a professional security assessment and a customized GSM alarm solution.",
};

export default function IntruderAlarmsPage() {
  return <ServicePageLayout data={data} />;
}