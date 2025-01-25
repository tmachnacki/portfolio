import type { Props as ProjectProps } from "@/components/home/project.astro";

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

export const PROJECTS: ProjectProps[] = [
  {
    title: "Podvex",
    date: "Aug. 2024",
    subtitle: "A podcast streaming platform",
    description:
      "A podcast streaming platform featuring light and dark modes, responsive design, subscription payments, real-time database updates, audio playback controls, and multi-voice AI text-to-speech generation.",
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
      },
      {
        name: "React",
        description: "UI framework",
      },
      {
        name: "NextJS",
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
        description: "Real-time backend",
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
        description: "Backend",
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
    description: "You're already here! Take a look around.",
    thumbnail: Home_V2,
    thumbnailWide: HomeWide_V2,
    skills: [
      {
        name: "TypeScript",
      },
      {
        name: "Astro",
        description: "Server-first web framework",
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
        name: "Vercel",
        description: "Hosting",
      },
    ],
    actions: {
      source: "https://github.com/tmachnacki/portfolio",
    },
  },
];
