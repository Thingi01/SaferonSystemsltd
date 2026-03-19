import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Fleet Management Systems",
  subtitle:
    "Comprehensive fleet management solutions to optimise vehicle operations, improve safety, and increase efficiency.",
  heroImage: "https://images.unsplash.com/photo-1611599535336-6ed3c59f0832?auto=format&fit=crop&w=1600&q=80",

  overview: [
    "Fleet Management Systems (FMS) provide real-time monitoring, route optimisation, maintenance scheduling, and driver behaviour tracking, ensuring that your fleet operates efficiently and safely. By reducing downtime, improving fuel efficiency, and enhancing operational control, FMS boosts productivity and lowers costs.",
    "A robust FMS helps businesses maintain compliance, protect assets, and provide better service delivery, making it an essential tool for companies that rely on transportation.",
  ],

  featuresTitle: "Key Features & Benefits",
  features: [
    {
      icon: "📍",
      title: "Real-Time Monitoring",
      description:
        "Know where each vehicle is at any time with live location tracking. Monitor fleet activities and performance to react promptly to emergencies or incidents.",
    },
    {
      icon: "🗺️",
      title: "Route & Fuel Optimization",
      description:
        "Reduce travel time and fuel consumption with intelligent routing. Lower operational expenses and ensure timely deliveries and pickups through optimized route planning.",
    },
    {
      icon: "🛡️",
      title: "Safety & Compliance",
      description:
        "Track driver behaviour including speeding and idling. Ensure adherence to transport laws and standards while reducing accidents and minimizing risk of liability.",
    },
    {
      icon: "🔧",
      title: "Maintenance Scheduling",
      description:
        "Automated maintenance alerts and service scheduling keep your fleet in top condition, reducing unexpected breakdowns and extending vehicle lifespan.",
    },
    {
      icon: "📊",
      title: "Reporting & Analytics",
      description:
        "Detailed reports on vehicle usage, fuel consumption, driver performance, and operational costs give you the insights needed to make data-driven fleet decisions.",
    },
    {
      icon: "📱",
      title: "Mobile Access",
      description:
        "Manage and monitor your entire fleet from your smartphone or tablet with real-time alerts, notifications, and live tracking dashboards available anywhere.",
    },
  ],

  customSectionTitle: "Tailored Fleet Management Solutions",
  customSectionContent: [
    "At Saferon, we design Fleet Management Systems that meet the unique needs of your fleet. From small businesses to large transport operations, our solutions optimize vehicle operations, enhance safety, and reduce operational costs.",
    "Contact us today to implement a customized FMS that improves efficiency, safety, and overall productivity for your fleet.",
  ],

  brands: [
    { name: "Teltonika", src: "https://trackersbd.com/wp-content/uploads/2019/10/Teltonika_Logo.png" },
  ],

  relatedServices: [
    { label: "Vehicle Tracking", href: "/services/vehicle-tracking" },
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Parking Systems", href: "/services/parking-systems" },
    { label: "Network Infrastructure", href: "/services/network-infrastructure" },
  ],

  ctaTitle: "Optimize Your Fleet Today",
  ctaSubtitle:
    "Reach out to Saferon Systems for professional Fleet Management System solutions tailored to your operations.",
};

export default function FleetManagementPage() {
  return <ServicePageLayout data={data} />;
}