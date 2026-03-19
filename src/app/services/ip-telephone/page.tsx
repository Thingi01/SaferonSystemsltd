import ServicePageLayout, { ServicePageData } from "@/components/layout/ServicePageLayout";

const data: ServicePageData = {
  title: "IP Telephony Systems",
  subtitle:
    "Modern, flexible, and cost-effective communication solutions designed to connect your business efficiently.",
  heroImage: "https://acmatel.com/wp-content/uploads/2023/02/Buy_Sangoma_-P330_-IP_-Desk_-Phone.png",

  overview: [
    "IP Telephony Systems, also known as VoIP, transmit voice calls over the internet, providing flexible, scalable, and cost-effective communication for businesses. They integrate voice, video, and data for seamless collaboration, saving costs on long-distance and international calls.",
    "Advanced features like call forwarding, voicemail to email, and auto attendants can be customized for your business. These systems grow with your company, ensuring a reliable and robust communication infrastructure.",
  ],

  featuresTitle: "Key Features & Benefits",
  features: [
    {
      icon: "💰",
      title: "Cost Efficiency",
      description:
        "Reduce expenses on long-distance and international calls. Minimize infrastructure costs compared to traditional phone lines and enjoy low maintenance with scalable solutions that fit any budget.",
    },
    {
      icon: "⚡",
      title: "Enhanced Productivity",
      description:
        "Integrate voice, video, and data for seamless team collaboration. Advanced features like auto attendants and voicemail-to-email improve workflow while remote connectivity keeps teams connected from anywhere.",
    },
    {
      icon: "📈",
      title: "Scalable Solutions",
      description:
        "Expand your system easily as your business grows. Supports multiple locations and remote employees with customizable configurations to meet unique communication requirements.",
    },
    {
      icon: "📞",
      title: "Advanced Call Features",
      description:
        "Call forwarding, call recording, conference calling, auto attendants, hunt groups, and IVR menus give your business enterprise-grade communication capabilities at a fraction of the cost.",
    },
    {
      icon: "🌐",
      title: "Unified Communications",
      description:
        "Bring together voice calls, video conferencing, instant messaging, and file sharing into a single unified platform — improving team collaboration and customer service.",
    },
    {
      icon: "🔗",
      title: "Easy Integration",
      description:
        "Integrates with CRM systems, email platforms, and business applications for a fully connected workflow. Compatible with existing network infrastructure for minimal disruption during deployment.",
    },
  ],

  customSectionTitle: "Tailored IP Telephony Solutions",
  customSectionContent: [
    "At Saferon, we design IP Telephony systems customized for your business needs. Whether you need integration with existing applications or a new communication setup, our team ensures your system is reliable, flexible, and efficient.",
    "Contact us today to discuss a tailored IP Telephony solution that enhances collaboration, reduces costs, and improves communication efficiency.",
  ],

  brands: [
    { name: "Panasonic", src: "https://brandgenetics.com/wp-content/uploads/2019/11/panasonic-logo-scaled.jpg" },
    { name: "PeopleLink", src: "https://images.yourstory.com/cs/images/companies/PeopleLinklogo-1598598860092.jpg" },
    { name: "D-Link", src: "https://www.windowsblogitalia.com/wp-content/uploads/2014/09/DLink_Logo.jpg" },
  ],

  relatedServices: [
    { label: "Network Infrastructure", href: "/services/network-infrastructure" },
    { label: "Structured Cabling", href: "/services/structured-cabling" },
    { label: "WiFi Access Points", href: "/services/wifi-access-point" },
    { label: "Fiber Optic", href: "/services/fiber-optic" },
    { label: "VHF/UHF Radio", href: "/services/vhf-uhf-radio" },
  ],

  ctaTitle: "Upgrade Your Communication Today",
  ctaSubtitle:
    "Reach out to Saferon Systems for professional IP Telephony solutions tailored to your business needs.",
};

export default function IPTelephonePage() {
  return <ServicePageLayout data={data} />;
}