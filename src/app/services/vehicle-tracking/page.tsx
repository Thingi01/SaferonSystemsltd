import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Vehicle Tracking Solutions",
  subtitle:
    "Real-time GPS vehicle tracking and fleet management solutions for businesses, individuals, and logistics operations.",
  heroImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=80",

  overview: [
    "Vehicle tracking systems provide real-time location, movement, and operational insights for your vehicles. They enhance security, optimize fleet performance, and ensure operational efficiency by delivering actionable data on driver behavior, fuel usage, and maintenance needs.",
  ],

  featuresTitle: "Tracking Solutions for Every Need",
  features: [
    {
      icon: "🏢",
      title: "For Offices & Fleet Operators",
      description:
        "Know the exact location of each vehicle at all times. Improve delivery times and reduce fuel consumption with route optimization, and quickly respond to theft or unauthorized use with real-time alerts.",
    },
    {
      icon: "🚗",
      title: "For Individuals & Private Vehicles",
      description:
        "Track and recover stolen vehicles quickly with real-time GPS. Monitor vehicle location remotely for added security and receive notifications for scheduled maintenance or abnormal activity.",
    },
    {
      icon: "🚚",
      title: "For Logistics & Transport Companies",
      description:
        "Optimize routes, reduce downtime, and enhance scheduling for maximum fleet efficiency. Analyze fuel consumption, driver behavior, and vehicle performance with detailed compliance and safety reporting.",
    },
    {
      icon: "📍",
      title: "Real-Time GPS Tracking",
      description:
        "Live map views show the exact position of every vehicle updated every few seconds. Geofencing alerts notify you instantly when a vehicle enters or leaves a defined zone.",
    },
    {
      icon: "📊",
      title: "Reports & Analytics",
      description:
        "Detailed reports on mileage, fuel consumption, idling time, speeding events, and driver scores help you make data-driven decisions to reduce costs and improve fleet performance.",
    },
    {
      icon: "🔧",
      title: "Maintenance Scheduling",
      description:
        "Automated maintenance reminders based on mileage or engine hours keep your vehicles in peak condition, reducing unexpected breakdowns and extending vehicle lifespan.",
    },
  ],

  customSectionTitle: "Tailored Vehicle Tracking Solutions",
  customSectionContent: [
    "At Saferon, we design vehicle tracking systems that provide real-time monitoring, enhanced security, and actionable insights. Our solutions are customized for businesses, fleets, and private vehicle owners to optimize performance and safety.",
    "Contact us today to implement a vehicle tracking system that improves security, efficiency, and operational control for your vehicles.",
  ],

  brands: [
    { name: "Teltonika", src: "https://trackersbd.com/wp-content/uploads/2019/10/Teltonika_Logo.png" },
  ],

  relatedServices: [
    { label: "Fleet Management", href: "/services/fleet-management" },
    { label: "Parking Systems", href: "/services/parking-systems" },
    { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
    { label: "Network Infrastructure", href: "/services/network-infrastructure" },
  ],

  ctaTitle: "Stay Connected to Your Vehicles",
  ctaSubtitle:
    "Reach out to Saferon Systems for professional vehicle tracking solutions tailored to your operations.",
};

export default function VehicleTrackingPage() {
  return <ServicePageLayout data={data} />;
}