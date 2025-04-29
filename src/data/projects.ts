// altcn assets
import Altcn from "@/assets/altcn/altcn.webp";
import AltcnWide from "@/assets/altcn/altcn-wide.webp";

// podvex assets
import Account_PV from "@/assets/podvex/account.webp";
import Billing_PV from "@/assets/podvex/billing.webp";
import Checkout_PV from "@/assets/podvex/checkout.webp";
import Create_PV from "@/assets/podvex/create.webp";
import Discover_PV from "@/assets/podvex/discover.webp";
import GetVerified_PV from "@/assets/podvex/get-verified.webp";
import History_PV from "@/assets/podvex/history.webp";
import HomeDarkLight_PV from "@/assets/podvex/home-dark-light.webp";
import HomeDark_PV from "@/assets/podvex/home-dark.webp";
import HomeLight_PV from "@/assets/podvex/home-light.webp";
import PodcastDetails_PV from "@/assets/podvex/podcast-details.webp";
import Profile_PV from "@/assets/podvex/profile.webp";
import Signup_PV from "@/assets/podvex/signup.webp";
import HomeDarkWide_PV from "@/assets/podvex/home-dark-wide.webp";

// sharebase assets
import Auth_SB from "@/assets/sharebase/auth.webp";
import Create_SB from "@/assets/sharebase/create.webp";
import Details_SB from "@/assets/sharebase/details.webp";
import HomeDarkLight_SB from "@/assets/sharebase/home-dark-light.webp";
import HomeDark_SB from "@/assets/sharebase/home-dark.webp";
import HomeLight_SB from "@/assets/sharebase/home-light.webp";
import Messages_SB from "@/assets/sharebase/messages.webp";
import Profile_SB from "@/assets/sharebase/profile.webp";
import HomeDarkWide_SB from "@/assets/sharebase/home-dark-wide.webp";

// v2
import Home_V2 from "@/assets/v2/home.webp";
import HomeWide_V2 from "@/assets/v2/home-wide.webp";

// v1
import HomeWide_V1 from "@/assets/v1/home-wide.webp";

// twitter sentiment
import Results_TS from "@/assets/twitter-sentiment/results.webp";

// graphblog
import HomeWide_GB from "@/assets/graph-blog/home-wide.webp";

// asm
import HomeWide_ASM from "@/assets/asm/home-wide.webp";

// cc
import HomeWide_CC from "@/assets/cc/home-wide.webp";

export interface ProjectImage {
  label: string;
  image: ImageMetadata;
  compare?: boolean;
  compareImages?: {
    labelOne: string;
    imageOne: ImageMetadata;
    labelTwo: string;
    imageTwo: ImageMetadata;
  };
}

export interface ProjectSkill {
  name: string;
  description?: string;
}

export interface ProjectProps {
  title: string;
  badge?: string;
  date?: string;
  subtitle?: string;
  description?: string;
  thumbnail?: ImageMetadata;
  thumbnailWide: ImageMetadata;
  images?: ProjectImage[];
  skills?: ProjectSkill[];
  features?: { name: string; description: string }[];
  actions?: {
    demo?: string; // hosted url
    source?: string; // github repo url
    details?: string; // project details page
    writeup?: string; // project writeup - twitter sentiment
    poster?: string; // project poster - twitter sentiment
  };
}

export const PROJECTS: ProjectProps[] = [
  {
    title: "Altcn",
    badge: "In Progress",
    date: "In Progress",
    description:
      "A collection of alternatively styled shadcn/ui component variants.",
    thumbnail: Altcn,
    thumbnailWide: AltcnWide,
    skills: [
      {
        name: "TypeScript",
      },
      {
        name: "React",
      },
      {
        name: "Next.js",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Radix UI",
      },
      {
        name: "shadcn/ui",
      },
    ],
    actions: {
      demo: "https://altcn.vercel.app/",
      source: "https://github.com/tmachnacki/altcn",
    },
  },
  {
    title: "Podvex",
    date: "Aug. 2024",
    subtitle: "A podcast streaming platform",
    description:
      "A podcast streaming platform featuring light and dark modes, responsive design, subscription payments, real-time database updates, audio playback controls, multi-voice AI text-to-speech generation, and more.",
    thumbnail: HomeDark_PV,
    thumbnailWide: HomeDarkWide_PV,
    images: [
      {
        label: "Home",
        image: HomeDarkLight_PV,
        compare: true,
        compareImages: {
          labelOne: "Home (Dark)",
          imageOne: HomeDark_PV,
          labelTwo: "Home (Light)",
          imageTwo: HomeLight_PV,
        },
      },
      {
        label: "Create",
        image: Create_PV,
      },
      {
        label: "Podcast Details",
        image: PodcastDetails_PV,
      },
      {
        label: "Profile",
        image: Profile_PV,
      },
      {
        label: "Discover",
        image: Discover_PV,
      },
      {
        label: "History",
        image: History_PV,
      },
      {
        label: "Get Verified",
        image: GetVerified_PV,
      },
      {
        label: "Checkout",
        image: Checkout_PV,
      },
      {
        label: "Billing",
        image: Billing_PV,
      },
      {
        label: "Account",
        image: Account_PV,
      },
      {
        label: "Signup",
        image: Signup_PV,
      },
    ],
    skills: [
      {
        name: "TypeScript",
        description: "Less bad JavaScript",
      },
      {
        name: "React",
        description: "UI framework",
      },
      {
        name: "Next.js",
        description: "Fullstack React framework",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework",
      },
      {
        name: "shadcn/ui",
        description: "Components",
      },
      {
        name: "Convex",
        description: "Real-time TS backend",
      },
      {
        name: "Clerk",
        description: "Authentication",
      },
      {
        name: "Stripe",
        description: "Payment processing",
      },
      {
        name: "Unreal Speech AI",
        description: "Text-to-speech",
      },
      {
        name: "Vercel",
        description: "Hosting",
      },
    ],
    features: [
      {
        name: "Robust Authentication",
        description:
          "Secure authentication with Google OAuth and email OTP using Clerk",
      },
      {
        name: "Account Management",
        description: "Manage your account information with Clerk",
      },
      {
        name: "Home Page",
        description:
          "Showcases trending podcasts, recent podcasts, top creators, and more",
      },
      {
        name: "Podcast Player",
        description:
          "Features backward/forward controls, as well as mute/unmute functionality",
      },
      {
        name: "Create Podcast page",
        description:
          "File uploads and text-to-speech audio generation with form validation",
      },
      {
        name: "Multi-Voice AI",
        description:
          "Generate audio with 5 voice presets from Unreal Speech AI",
      },
      {
        name: "Discover Page",
        description: "Find new podcasts with search functionality",
      },
      {
        name: "History Page",
        description: "View your recently played podcasts",
      },
      {
        name: "Library Page",
        description: "View your saved podcasts",
      },
      {
        name: "Podcast Details Page",
        description:
          "View podcast information, including creator details, number of plays, and transcript. Edit, delete, or get a link to share",
      },
      {
        name: "Profile Page",
        description:
          "View a creator's number of listeners, number of plays, and podcasts",
      },
      {
        name: "Get Verified Page",
        description: "Choose a subscription plan to get a verified badge",
      },
      {
        name: "Subscription Payments",
        description:
          "Manage billing information and create checkout sessions with Stripe's API integrations",
      },
      {
        name: "Light and dark modes",
        description: "Switch between light, dark, and system themes",
      },
      {
        name: "Responsive design",
        description: "A seamless experience on all devices",
      },
    ],
    actions: {
      demo: "https://podvex.vercel.app/",
      source: "https://github.com/tmachnacki/podvex",
      details: "/projects/podvex",
    },
  },
  {
    title: "ShareBase",
    date: "Aug. 2024",
    subtitle: "A social media platform",
    description:
      "A social media platform featuring light and dark modes, responsive design, and real-time messaging. Users can create and edit posts, follow others, tag friends, add comments, send messages, and more.",
    thumbnail: HomeDark_SB,
    thumbnailWide: HomeDarkWide_SB,
    images: [
      {
        label: "Home",
        image: HomeDarkLight_SB,
        compare: true,
        compareImages: {
          labelOne: "Home (Dark)",
          imageOne: HomeDark_SB,
          labelTwo: "Home (Light)",
          imageTwo: HomeLight_SB,
        },
      },
      {
        label: "Create Post",
        image: Create_SB,
      },
      {
        label: "Post Details",
        image: Details_SB,
      },
      {
        label: "Profile",
        image: Profile_SB,
      },
      {
        label: "Messages",
        image: Messages_SB,
      },
      {
        label: "Auth",
        image: Auth_SB,
      },
    ],
    skills: [
      {
        name: "TypeScript",
        description: "Less bad JavaScript",
      },
      {
        name: "React",
        description: "UI framework",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework",
      },
      {
        name: "shadcn/ui",
        description: "Components",
      },
      {
        name: "Zustand",
        description: "State management",
      },
      {
        name: "React Router",
        description: "Client-side routing",
      },
      {
        name: "Firebase",
        description: "Backend as a service",
      },
      {
        name: "Vite",
        description: "Frontend tooling",
      },
      {
        name: "Vercel",
        description: "Hosting",
      },
    ],
    features: [
      {
        name: "Home Page",
        description:
          "View latest posts in your feed, and discover new users to follow",
      },
      {
        name: "Create Post",
        description:
          "Add an image, caption, location, and tagged users, all with form validation",
      },
      {
        name: "Post Interactions",
        description: "Like, save, comment on, share, and edit posts",
      },
      {
        name: "Post Details Page",
        description: "A detailed view of a post, also display related content",
      },
      {
        name: "Profile Page",
        description:
          "View a user's profile, including their posts, followers, and following",
      },
      {
        name: "Live Messaging",
        description:
          "Send and receive messages with Firebase realtime database subscriptions",
      },
      {
        name: "Explore Page",
        description: "View posts from users you don't follow yet",
      },
      {
        name: "Firebase BaaS",
        description:
          "Firebase authentication with Google OAuth, Firestore document database, realtime database, and file storage",
      },
      {
        name: "Light and dark modes",
        description: "Switch between light, dark, and system themes",
      },
      {
        name: "Responsive design",
        description: "A seamless experience on all devices",
      },
    ],
    actions: {
      demo: "https://sharebase.vercel.app/",
      source: "https://github.com/tmachnacki/sharebase",
      details: "/projects/sharebase",
    },
  },
  {
    title: "Portfolio V2",
    date: "Jan. 2025",
    subtitle: "My portfolio website",
    description:
      "You're already here! Take a look around. Built by yours truly in Visual Studio Code with accessibility in mind.",
    thumbnail: Home_V2,
    thumbnailWide: HomeWide_V2,
    skills: [
      {
        name: "TypeScript",
      },
      {
        name: "Astro",
      },
      {
        name: "React",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Vercel",
      },
    ],
    actions: {
      source: "https://github.com/tmachnacki/portfolio",
    },
  },
  {
    title: "Portfolio V1 (Deprecated)",
    date: "2023",
    description: "A static portfolio site hosted on Github Pages.",
    thumbnailWide: HomeWide_V1,
    actions: {
      source: "https://github.com/tmachnacki/portfolio",
      demo: "https://tmachnacki.github.io",
    },
    skills: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Twitter Sentiment",
    date: "2022",
    description:
      "A web app that analyzes Twitter sentiment over time. The app retrieves and classifies tweets matching a user-provided topic and time-frame then displays the sentiment data in a line graph as well as the query's frequency in a bar graph. This was a 5-person project for EECS 486. See the writeup and poster for more details.",
    thumbnailWide: Results_TS,
    skills: [
      {
        name: "Python",
      },
      {
        name: "Flask",
      },
      {
        name: "matplotlib",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "Formal Writing",
      },
    ],
    actions: {
      source: "https://github.com/tmachnacki/twitter-sentiment",
      writeup:
        "https://drive.google.com/file/d/1NnzhO_Cg7km2E2oRIrUnVsmDQFjly4HM/view?usp=drive_link",
      poster:
        "https://drive.google.com/file/d/1VOtA0GdK1Y_g4Ek5s_n1KzlkV3VzV_Pp/view?usp=drive_link",
    },
  },
  {
    title: "GraphBlog",
    date: "2023",
    description:
      "A modern, responsive CMS blog app complete with featured posts carousel, recent posts, categories, full markdown articles, author information, functional comments, and more.",
    thumbnailWide: HomeWide_GB,
    actions: {
      source: "https://github.com/tmachnacki/graphBlog",
      demo: "https://graph-blog-tau.vercel.app/",
    },
    skills: [
      {
        name: "React",
        description: "UI framework",
      },
      {
        name: "NextJS",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Vercel",
      },
    ],
  },
  {
    title: "AntiSocialMedia",
    date: "2023",
    description:
      "A MERN stack social media app featuring light and dark modes, responsive design, media uploads, and more.",
    thumbnailWide: HomeWide_ASM,
    skills: [
      {
        name: "MongoDB",
      },
      {
        name: "Express",
      },
      {
        name: "React",
      },
      {
        name: "NodeJS",
      },
      {
        name: "MUI",
      },
    ],
    actions: {
      source: "https://github.com/tmachnacki/MERN-AntiSocialMedia",
    },
  },
  {
    title: "Coursework Calculator",
    date: "2021",
    description:
      "An SPA to help University of Michigan students calculate their upcoming coursework load using data scraped from UMich Atlas. Users can add and remove courses from their backpack and/or schedule, then view the calculated estimation of hours/week. This was a 4-person project for EECS 493.",
    thumbnailWide: HomeWide_CC,
    skills: [
      {
        name: "Vue",
      },
      {
        name: "Vuetify",
      },
      {
        name: "Python",
      },
      {
        name: "Beautiful Soup",
      },
      {
        name: "Flask",
      },
    ],
    actions: {
      source: "https://github.com/tmachnacki/coursework-calculator",
    },
  },
];
