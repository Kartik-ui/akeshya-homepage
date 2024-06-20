import { FaDribbble, FaFile, FaGlobe, FaTachometerAlt } from "react-icons/fa";
import styles from "../../styles/service.module.css";
import {
  RiWindowLine,
  RiCodeBoxLine,
  RiCreativeCommonsByLine,
  RiPlayCircleLine,
  RiSearchEyeLine,
  RiTodoLine,
  RiMapPinLine,
  RiBarChartGroupedLine,
  RiContactsBookLine,
  RiDiscLine,
  RiCalendarEventLine,
  RiAdvertisementFill,
} from "react-icons/ri";

export const CARDS = [
  {
    image: <FaDribbble className={styles.iconImage} />,
    title: "Design",
    description:
      "Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.",
  },
  {
    image: <FaFile className={styles.iconImage} />,
    title: "Development",
    description:
      "Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.",
  },
  {
    image: <FaGlobe className={styles.iconImage} />,
    title: "Marketing",
    description:
      "A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.",
  },
  {
    image: <FaTachometerAlt className={styles.iconImage} />,
    title: "Support",
    description:
      "Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available.",
  },
];

export const OURPROCESS = [
  {
    title: "1. Planning",
    description:
      "We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.",
    image: "/assets/more-services-1.jpg",
  },
  {
    title: "2. Design",
    description:
      "We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.",
    image: "/public/assets/more-services-2.jpg",
  },
  {
    title: "3. Development",
    description:
      "We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.",
    image: "/public/assets/more-services-3.jpg",
  },
  {
    title: "4. Marketing",
    description:
      "We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.",
    image: "/public/assets/more-services-4.jpg",
  },
];

export const FEATURES = [
  {
    icon: <RiWindowLine style={{ color: "#ffbb2c" }} />,
    title: "Web design",
  },
  {
    icon: <RiCodeBoxLine style={{ color: "#5578ff" }} />,
    title: "Development",
  },
  {
    icon: <RiCreativeCommonsByLine style={{ color: "#e80368" }} />,
    title: "Branding",
  },
  {
    icon: <RiPlayCircleLine style={{ color: "#e361ff" }} />,
    title: "Media buying",
  },
  {
    icon: <RiSearchEyeLine style={{ color: "#47aeff" }} />,
    title: "Search engine",
  },
  {
    icon: <RiTodoLine style={{ color: "#ffa76e" }} />,
    title: "Brand strategy",
  },
  {
    icon: <RiMapPinLine style={{ color: "#dbce11" }} />,
    title: "Local search marketing",
  },
  {
    icon: <RiBarChartGroupedLine style={{ color: "#4233ff" }} />,
    title: "Lead Tracking & Management",
  },
  {
    icon: <RiContactsBookLine style={{ color: "#b2904f" }} />,
    title: "Contact management",
  },
  {
    icon: <RiDiscLine style={{ color: "#b20969" }} />,
    title: "Media management",
  },
  {
    icon: <RiCalendarEventLine style={{ color: "#ff5828" }} />,
    title: "Social scheduling",
  },
  {
    icon: <RiAdvertisementFill style={{ color: "#29cc61" }} />,
    title: "Ad retargeting",
  },
];
