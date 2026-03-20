import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Walkthrough Scanner Solutions",
  subtitle:
    "Advanced, non-intrusive walkthrough scanners designed to detect concealed threats and enhance safety across high-security environments.",
  heroImage: "https://image.made-in-china.com/2f0j00ELgqtkeRuIbr/Full-Body-Scanner-for-Airport-Security-Walk-Through-Metal-Detector.webp",

  overview: [
    "Walkthrough scanner solutions are critical components of modern security systems, designed to detect concealed items and ensure safety across a wide range of facilities.",
    "These systems provide a fast, non-invasive method for screening individuals, making them ideal for offices, buildings, malls, airports, hotels, and embassies.",
  ],

  featuresTitle: "Security Screening for Every Facility",
  features: [
    {
      icon: "🏢",
      title: "For Offices",
      description:
        "Detect concealed weapons or prohibited items with non-intrusive screening that requires no physical contact. Helps meet workplace security standards and protects employees and visitors.",
    },
    {
      icon: "🏗️",
      title: "For Buildings",
      description:
        "Control access at entry points with rapid threat identification. Space-efficient designs integrate easily into building entrances without disrupting visitor flow.",
    },
    {
      icon: "🛍️",
      title: "For Malls",
      description:
        "High-throughput screening handles large crowds efficiently. Detects prohibited items early and integrates with CCTV systems for a comprehensive security response.",
    },
    {
      icon: "✈️",
      title: "For Airports",
      description:
        "Aviation-grade passenger screening handles large volumes quickly. Complements ID verification and baggage screening systems for a complete checkpoint security solution.",
    },
    {
      icon: "🏨",
      title: "For Hotels & Embassies",
      description:
        "Screen guests and visitors discreetly with seamless integration into check-in flows. High-security rated scanners detect concealed risks and integrate with CCTV and access control.",
    },
    {
      icon: "🔗",
      title: "Full System Integration",
      description:
        "Walkthrough scanners integrate seamlessly with CCTV cameras, access control systems, and security management platforms for a coordinated, automated security response.",
    },
  ],

  customSectionTitle: "Tailored Solutions for Your Needs",
  customSectionContent: [
    "At Saferon Systems Limited, we design walkthrough scanner solutions tailored to the specific requirements of each facility. Our experts assess your environment to deliver the most effective and efficient security setup.",
  ],

  brands: [
    { name: "Garrett", src: "https://mma.prnewswire.com/media/715096/Garrett_Metal_Detectors_Logo.jpg?p=publish&w=950" },
    { name: "Honeywell", src: "https://th.bing.com/th/id/R.c134c9ccf7d950af3debbcff525d2bce?rik=AWfw8HeM361srA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f08%2fHoneywell_logo.png&ehk=EiJSEaevkuNizEmKbCti8ya9TIFSNSLU0K6deuGK6VU%3d&risl=&pid=ImgRaw&r=0" },
  ],

  relatedServices: [
    { label: "Access Control", href: "/services/access-control" },
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Bollards & Barriers", href: "/services/bollards" },
    { label: "Intruder Alarms", href: "/services/intruder-alarms" },
    { label: "Parking Systems", href: "/services/parking-systems" },
  ],

  ctaTitle: "Need a Professional Walkthrough Scanner?",
  ctaSubtitle:
    "Contact Saferon Systems today for expert consultation and installation.",
};

export default function WalkThroughScannersPage() {
  return <ServicePageLayout data={data} />;
}