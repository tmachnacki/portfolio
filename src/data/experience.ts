export interface ExperienceProps {
  timePeriod: string;
  logo?: ImageMetadata;
  badge?: string;
  title: string;
  jobType?: string;
  company: string;
  companyUrl?: string;
  description?: string;
  bullets?: string[];
  skills?: string[];
}

export const EXPERIENCE: ExperienceProps[] = [
  {
    timePeriod: "Mar. 2023 - Present",
    title: "Frontend Software Engineer ·",
    jobType: "Full-Time",
    company: "Signs365",
    companyUrl: "https://signs365.com",
    description:
      "Leading frontend architecture and development of new v5 site using React 19, Tanstack (React) Query, React Router v7, and Zod. Designed and implemented a new t-shirt ordering interface, developing 35+ reusable and accessible UI components using React, TypeScript, and Tailwind CSS, while maintaining documentation through Storybook for team-wide adoption. Work with backend engineers, designers, and management to develop and maintain application features.",
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
    badge: "startup",
    title: "Web Developer ·",
    jobType: "Freelance",
    company: "Recruiting Arena",
    companyUrl: "https://recruitingarena.com/",
    description:
      "Led the design and development of 8 responsive pages in a multi-page application through close collaboration with backend leads and primary stakeholders, additionally creating 2 high-fidelity Figma prototypes for profile and messaging features to drive future development. Currently in alpha testing with 100+ student-athletes across two high schools.",
    skills: ["Astro", "Javascript", "HTML", "Tailwind CSS", "DaisyUI", "Figma"],
  },
  {
    timePeriod: "April 2023",
    title: "React Native Developer ·",
    jobType: "Contract",
    company: "Buy My Spot",
    companyUrl: "https://www.buymyspot.com/",
    description:
      "Delivered a streamlined five-step user onboarding experience in collaboration with design leadership, implementing progressive multi-step form validation to enhance new user activation.",
    skills: ["Typescript", "React Native", "Tailwind CSS", "Expo"],
  },
];
