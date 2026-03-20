import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Booking Systems Solutions",
  subtitle:
    "Streamlined booking and scheduling systems designed to enhance efficiency, reduce errors, and improve the client experience.",
  heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",

  overview: [
    "Efficient scheduling and appointment management are essential for businesses, organizations, and service providers. A reliable booking system reduces administrative workload, minimizes scheduling conflicts, and provides a seamless experience for both staff and clients.",
    "Modern booking systems integrate with calendars, reminders, and payment gateways to optimize operations, improve accuracy, and provide actionable insights.",
  ],

  featuresTitle: "Booking Solutions for Every Business",
  features: [
    {
      icon: "🏢",
      title: "For Offices & Meeting Rooms",
      description:
        "Manage rooms, equipment, and staff availability effortlessly. Prevent double bookings and scheduling errors while integrating with calendars and communication tools for smooth collaborative workflow.",
    },
    {
      icon: "🏨",
      title: "For Hotels & Event Venues",
      description:
        "Allow guests to book rooms or venues online in real-time. Track availability and maximize utilization while providing easy self-service booking options for a superior client experience.",
    },
    {
      icon: "💼",
      title: "For Service Providers",
      description:
        "Automate scheduling for healthcare, salons, or professional services. Reduce no-shows with automated SMS or email reminders and monitor booking trends and peak times with data insights.",
    },
    {
      icon: "📅",
      title: "Calendar Integration",
      description:
        "Seamlessly syncs with Google Calendar, Outlook, and other platforms — giving staff and clients a unified view of availability and automatically preventing scheduling conflicts.",
    },
    {
      icon: "💳",
      title: "Payment Gateway Integration",
      description:
        "Accept deposits and full payments at the time of booking through secure payment gateway integration — reducing no-shows and simplifying your revenue collection process.",
    },
    {
      icon: "📊",
      title: "Analytics & Reporting",
      description:
        "Detailed booking reports, occupancy trends, peak hour analysis, and customer behaviour insights help you make data-driven decisions to optimize operations and grow your business.",
    },
  ],

  customSectionTitle: "Tailored Booking Solutions",
  customSectionContent: [
    "Saferon provides customized booking system solutions to fit the unique needs of your business or organization. Streamline scheduling, reduce errors, and enhance client satisfaction with a solution designed just for you.",
    "Contact us today to explore a tailored booking system that improves efficiency and provides a seamless experience for both staff and clients.",
  ],

  relatedServices: [
    { label: "Network Infrastructure", href: "/services/network-infrastructure" },
    { label: "WiFi Access Points", href: "/services/wifi-access-point" },
    { label: "IP Telephone", href: "/services/ip-telephone" },
    { label: "Printers & Scanners", href: "/services/printer-scanners" },
    { label: "Structured Cabling", href: "/services/structured-cabling" },
  ],

  ctaTitle: "Streamline Your Bookings Today",
  ctaSubtitle:
    "Contact Saferon Systems for a professional booking system solution tailored to your business needs.",
};

export default function BookingSystemsPage() {
  return <ServicePageLayout data={data} />;
}