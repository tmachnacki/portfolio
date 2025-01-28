import Signs365Logo from "@/assets/experience/signs-logo.png";

export interface ExperienceProps {
  timePeriod: string;
  logo?: ImageMetadata;
  badge?: string;
  title: string;
  company: string;
  companyUrl?: string;
  bullets: string[];
  skills?: string[];
}

export const EXPERIENCE: ExperienceProps[] = [
  {
    timePeriod: "Mar. 2023 - Present",
    logo: Signs365Logo,
    title: "Frontend Software Engineer",
    company: "Signs365",
    companyUrl: "https://signs365.com",
    bullets: [
      "Lead UI design and implementation of new t-shirt ordering interface. Curated and documented over 35 UI components using Tailwind, headless UI libraries, and Storybook.",
      "Increased client chat performance by 66%. Redesigned and implemented an improved chat user interface and added proper handling of loading and error states.",
      "Successfully delivered a new 'Promos' page where users can claim promotional images and discounts from concept to completion within one week. 1,300 customers claimed the 4th of July promo after launching.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "jQuery",
      "SASS",
      "Node.js",
      "Cypress",
      "Storybook",
      "Git",
      "Figma",
    ],
  },
  {
    timePeriod: "Aug. 2023 - Present",
    // logo: "",
    badge: "alpha",
    title: "Web Developer",
    company: "Recruiting Arena",
    companyUrl: "https://google.com",
    bullets: [
      "Leveraged knowledge of React, TypeScript, and Tailwind CSS to build a UI component library",
      "Did some other cool thing with some tech and code",
      "Did another other cool thing with some tech and code",
    ],
    skills: ["Astro", "Javascript", "HTML", "Tailwind CSS", "DaisyUI"],
  },
  {
    timePeriod: "April 2023",
    // logo: "",
    title: "React Native Developer",
    company: "Buy My Spot",
    companyUrl: "https://google.com",
    bullets: [
      "Leveraged knowledge of React, TypeScript, and Tailwind CSS to build a UI component library",
      "Did some other cool thing with some tech and code",
      "Did another other cool thing with some tech and code",
    ],
    skills: ["Typescript", "React Native", "Tailwind CSS", "Expo"],
  },
];
