import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "Printer and Scanner Solutions",
  subtitle:
    "Advanced printer and scanner solutions designed to enhance accuracy, efficiency, and productivity for your business operations.",
  heroImage: "https://images.unsplash.com/photo-1601582588284-7a83f23e88bb?auto=format&fit=crop&w=1600&q=80",

  overview: [
    "Saferon provides top-tier printer and scanner solutions to streamline workflows, improve data capture, and support high-volume business operations. With leading brands like Honeywell and Zebra, our solutions ensure precision, speed, and durability for various industries.",
  ],

  featuresTitle: "Solutions for Every Industry",
  features: [
    {
      icon: "🏭",
      title: "For Manufacturers",
      description:
        "Reliable barcode printing and scanning solutions for production line efficiency. Accurate tracking of materials and components minimizes errors with high-resolution printing and scanning.",
    },
    {
      icon: "🛒",
      title: "For Supermarkets",
      description:
        "Efficient barcode scanning for high-volume checkout transactions. Maintain precise stock levels and keep checkout and inventory processes smooth and fast.",
    },
    {
      icon: "🚚",
      title: "For Logistics Companies",
      description:
        "Track inventory and deliveries efficiently with durable printing and scanning equipment built for high-volume operations. Improve overall warehouse and logistics performance.",
    },
    {
      icon: "🏷️",
      title: "Label & Barcode Printers",
      description:
        "Industrial-grade label and barcode printers from leading brands deliver crisp, durable labels for asset tagging, product labelling, and shipping documentation at high speeds.",
    },
    {
      icon: "📷",
      title: "Barcode & QR Scanners",
      description:
        "Handheld, fixed-mount, and wireless barcode scanners for fast, accurate data capture across retail, warehousing, healthcare, and manufacturing environments.",
    },
    {
      icon: "🖨️",
      title: "Office Multifunction Printers",
      description:
        "High-performance multifunction printers combining printing, scanning, copying, and faxing in one device — reducing costs and improving document workflow efficiency.",
    },
  ],

  customSectionTitle: "Tailored Printer and Scanner Solutions",
  customSectionContent: [
    "Saferon provides customized solutions to meet the unique requirements of your business. Whether for manufacturing, retail, or logistics, our printer and scanner systems improve efficiency, accuracy, and productivity.",
    "Contact us today to discuss how we can design a tailored printing and scanning solution that enhances your operations and supports your growth.",
  ],

  brands: [
    { name: "Honeywell", src: "https://th.bing.com/th/id/R.c134c9ccf7d950af3debbcff525d2bce?rik=AWfw8HeM361srA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f08%2fHoneywell_logo.png&ehk=EiJSEaevkuNizEmKbCti8ya9TIFSNSLU0K6deuGK6VU%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Panasonic", src: "https://brandgenetics.com/wp-content/uploads/2019/11/panasonic-logo-scaled.jpg" },
    { name: "Microsoft", src: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" },
  ],

  relatedServices: [
    { label: "Booking Systems", href: "/services/booking-systems" },
    { label: "Network Infrastructure", href: "/services/network-infrastructure" },
    { label: "Structured Cabling", href: "/services/structured-cabling" },
    { label: "WiFi Access Points", href: "/services/wifi-access-point" },
  ],

  ctaTitle: "Streamline Your Operations",
  ctaSubtitle:
    "Reach out to Saferon Systems for professional Printer and Scanner Solutions tailored to your business needs.",
};

export default function PrinterScannersPage() {
  return <ServicePageLayout data={data} />;
}