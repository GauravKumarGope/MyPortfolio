import gmailIcon from "../../assets/gmail.png";
import linkedinIcon from "../../assets/linkedin.png";
import instagramIcon from "../../assets/instagram.png";
import resumeIcon from "../../assets/resume.png";

const contactItems = [
  {
    id: "gmail",
    title: "GMAIL",
    info: "gauravgope9@gmail.com",
    icon: gmailIcon,
    href: "mailto:gauravgope9@gmail.com",
    position: "card-left-top",
  },
  {
    id: "linkedin",
    title: "LINKEDIN",
    info: "linkedin.com/in/gaurav-kumar-gope-2293a7259",
    icon: linkedinIcon,
    href: "https://www.linkedin.com/in/gaurav-kumar-gope-2293a7259/",
    position: "card-right-top",
  },
  {
    id: "instagram",
    title: "INSTAGRAM",
    info: "@gauravgope_",
    icon: instagramIcon,
    href: "https://www.instagram.com/gatling_god/",
    position: "card-left-bottom",
  },
  {
    id: "resume",
    title: "RESUME",
    info: "View my resume",
    icon: resumeIcon,
    href: "/Gaurav_Gope_Resume.pdf",
    position: "card-right-bottom",
  },
];

export default contactItems;