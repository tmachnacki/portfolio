export interface ExperienceProps {
  timePeriod: string;
  logo?: ImageMetadata;
  badge?: string;
  title: string;
  jobType?: string;
  company: string;
  companyUrl?: string;
  bullets: string[];
  skills?: string[];
}

export const EXPERIENCE: ExperienceProps[] = [
  {
    timePeriod: "Mar. 2023 - Present",
    title: "Frontend Software Engineer ·",
    jobType: "Full-Time",
    company: "Signs365",
    companyUrl: "https://signs365.com",
    bullets: [
      "Leading complete frontend architecture and development of new v5 application using React 19, integrating modern tools such as Tanstack (React) Query for advanced async state management and React Router v7 for client-side routing.",
      "Designed and implemented a new t-shirt ordering interface, developing 35+ reusable and accessible UI components using React, TypeScript, and Tailwind CSS, while maintaining documentation through Storybook for team-wide adoption.",
      "Decreased client chat network load by 66% with rendering optimization. Redesigned and implemented an improved chat user interface, adding proper handling of loading and error states, as well as infinite-scrolling message history.",
      "Spearheaded the end-to-end design and development of a new “Promos” page within a one-week sprint, driving 1,300+ customer conversions through the successful launch of a 4th of July campaign.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "jQuery",
      "SCSS",
      "Node.js",
      "Cypress",
      "Storybook",
      "Git",
      "Figma",
    ],
  },
  {
    timePeriod: "Aug. 2023 - Present",
    badge: "alpha",
    title: "Web Developer ·",
    jobType: "Freelance",
    company: "Recruiting Arena",
    companyUrl: "https://google.com",
    bullets: [
      "Leveraged knowledge of React, TypeScript, and Tailwind CSS to build a UI component library",
      "Did some other cool thing with some tech and code",
      "Did another other cool thing with some tech and code",
    ],
    skills: ["Astro", "Javascript", "HTML", "Tailwind CSS", "DaisyUI", "Figma"],
  },
  {
    timePeriod: "April 2023",
    title: "React Native Developer ·",
    jobType: "Contract",
    company: "Buy My Spot",
    companyUrl: "https://www.buymyspot.com/",
    bullets: [
      "Delivered a streamlined 5-step user onboarding experience in collaboration with design leadership, implementing progressive multi-step form validation to enhance new user activation.",
    ],
    skills: ["Typescript", "React Native", "Tailwind CSS", "Expo"],
  },
];
