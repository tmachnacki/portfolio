export interface Skill {
  name: string;
  description?: string;
}

export const SKILLS: Record<string, Skill> = {
  TYPESCRIPT: {
    name: "TypeScript",
    description: "Less bad JavaScript",
  },
  JAVASCRIPT: {
    name: "JavaScript",
  },
  REACT: {
    name: "React",
    description: "UI framework",
  },
  TAILWIND: {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
  },
  NEXT: {
    name: "NextJS",
    description: "Fullstack React framework",
  },
  VERTICAL: {
    name: "Vertical",
    description: "Vertical",
  },
};
