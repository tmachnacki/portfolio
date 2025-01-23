import type { Props as ProjectProps } from "@/components/home/project.astro";

// podvex assets
import Account from "@/assets/podvex/account.webp";
import Billing from "@/assets/podvex/billing.webp";
import Checkout from "@/assets/podvex/checkout.webp";
import Create from "@/assets/podvex/create.webp";
import Discover from "@/assets/podvex/discover.webp";
import GetVerified from "@/assets/podvex/get-verified.webp";
import History from "@/assets/podvex/history.webp";
import HomeDarkLight from "@/assets/podvex/home-dark-light.webp";
import HomeDark from "@/assets/podvex/home-dark.webp";
import HomeLight from "@/assets/podvex/home-light.webp";
import PodcastDetails from "@/assets/podvex/podcast-details.webp";
import Profile from "@/assets/podvex/profile.webp";
import Signup from "@/assets/podvex/signup.webp";

// sharebase assets
import Auth_SB from "@/assets/sharebase/auth.webp";
import Create_SB from "@/assets/sharebase/create.webp";
import Details_SB from "@/assets/sharebase/details.webp";
import HomeDarkLight_SB from "@/assets/sharebase/home-dark-light.webp";
import HomeDark_SB from "@/assets/sharebase/home-dark.webp";
import HomeLight_SB from "@/assets/sharebase/home-light.webp";
import Messages_SB from "@/assets/sharebase/messages.webp";
import Profile_SB from "@/assets/sharebase/profile.webp";

export const PROJECTS: ProjectProps[] = [
  {
    title: "Podvex",
    date: "Aug. 2024",
    subtitle: "A podcast streaming platform",
    description: "A podcast streaming platform featuring light and dark modes, responsive design, subscription payments, real-time database updates, audio playback controls, and multi-voice AI text-to-speech generation.",
    thumbnail: HomeDarkLight,
    images: [
      {
        label: "Home",
        image: HomeDarkLight,
        compare: true,
        compareImages: {
          labelOne: "Home (Dark)",
          imageOne: HomeDark,
          labelTwo: "Home (Light)",
          imageTwo: HomeLight,
        },
      },
      {
        label: "Create",
        image: Create,
      },
      {
        label: "Podcast Details",
        image: PodcastDetails,
      },
      {
        label: "Profile",
        image: Profile,
      },
      {
        label: "Discover",
        image: Discover,
      },
      {
        label: "History",
        image: History,
      },
      {
        label: "Get Verified",
        image: GetVerified,
      },
      {
        label: "Checkout",
        image: Checkout,
      },
      {
        label: "Billing",
        image: Billing,
      },
      {
        label: "Account",
        image: Account,
      },
      {
        label: "Signup",
        image: Signup,
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
    description: "A social media platform featuring light and dark modes, responsive design, and real-time messaging. Users can create and edit posts, follow others, tag friends, add comments, send messages, and more.",
    thumbnail: HomeDarkLight,
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
        name: "Firebase",
        description: "Document-based database",
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
];
