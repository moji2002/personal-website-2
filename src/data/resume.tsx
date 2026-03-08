import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Code2 } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
export const DATA = {
  name: "Mojtaba Beheshti",
  initials: "MB",
  url: "https://this.is-a.dev",
  location: "North Cyprus",
  locationLink: "https://www.google.com/maps/place/north+cyprus",
  description:
    "Senior Front-End Engineer with 5+ years of experience focusing on React and Next.js applications. I specialize in building, testing, and maintaining large-scale web systems.",
  summary:
    "Front-End Engineer with 5+ years of experience focusing on React and Next.js applications. I specialize in building, testing, and maintaining large-scale web systems. My work involves migrating legacy projects to modern frameworks, leading small teams to improve engineering processes, and ensuring application stability through strict type-safety and performance optimizations. I am comfortable working in remote environments and possess a background in full-stack integration and real-time data handling.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Node.js", icon: Nodejs },
    { name: "TanStack Query", icon: Code2 },
    { name: "Zod", icon: Code2 },
    { name: "Vitest", icon: Code2 },
    { name: "Playwright", icon: Code2 },
    { name: "Web3.js", icon: Code2 },
    { name: "GraphQL", icon: Code2 },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "moji2002@gmail.com",
    tel: "+90 533 851 9791",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/moji2002",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mojtaba-beheshti",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:moji2002@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ayande Nevisan",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Senior Front-End Engineer",
      start: "Aug 2023",
      end: "Present",
      highlights: [
        "Architected and deployed production-grade Progressive Web Applications (PWAs) using Next.js, prioritizing offline-first functionality and mobile responsiveness.",
        "Directed a front-end engineering team of three, implementing rigorous code review protocols and architectural standards that increased team velocity.",
        "Engineered a contract-first API integration layer using Zodios, ensuring end-to-end type safety and reducing production runtime errors by approximately 90%.",
        "Spearheaded the migration of legacy PHP applications to a React-based architecture, achieving a 35% improvement in Core Web Vitals.",
        "Developed real-time monitoring dashboards utilizing WebSockets to provide low-latency data visualization for internal operational tools.",
      ],
    },
    {
      company: "Arad Dasht",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Front-End Developer",
      start: "Sep 2022",
      end: "Aug 2023",
      highlights: [
        "Mentored five junior developers, establishing a structured onboarding curriculum that reduced average ramp-up time by 50%.",
        "Developed a localized store-discovery engine utilizing geolocation APIs and advanced map filtering, directly improving user conversion rates.",
        "Designed an automated image processing utility for dynamic branding application, significantly reducing manual design overhead.",
        "Collaborated with cross-functional teams to refine API specifications, resulting in a 30% reduction in integration-related deployment delays.",
      ],
    },
    {
      company: "Kimiagaran",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Front-End Developer",
      start: "Sep 2020",
      end: "Sep 2022",
      highlights: [
        "Optimized application performance via advanced code-splitting and asset-loading, yielding a 40% improvement in Time to Interactive (TTI).",
        "Built a Web3-integrated cryptocurrency wallet within a high-pressure 30-day cycle, focusing on secure transaction signing.",
        "Integrated Next.js solutions with headless WordPress via REST APIs, increasing organic user engagement by 25%.",
        "Developed Node.js microservices to handle real-time synchronization of financial market data for the frontend.",
      ],
    },
  ],
  education: [
    {
      school: "Meta",
      href: "https://www.coursera.org/account/accomplishments/verify/QI5VJ4DBCYM9",
      degree:
        "Meta Front-End Developer Professional Certificate (via Coursera)",
      logoUrl: "/meta-icon.png",
      start: "",
      end: "",
    },
    {
      school: "Meta",
      href: "https://www.coursera.org/account/accomplishments/verify/P62JLRTXGVMP",
      degree: "Advanced React (via Coursera)",
      logoUrl: "/meta-icon.png",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "Purifai",
      href: "https://github.com/moji2002/purifai",
      dates: "",
      active: true,
      description:
        "Ultra-secure HTML sanitizer with advanced XSS protection. Zero-dependency, TypeScript-native library achieving 100% success rate against 64 attack vectors—including polyglot attacks that bypass DOMPurify and sanitize-html.",
      technologies: ["TypeScript", "XSS", "Security", "npm"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/moji2002/purifai",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/blog-purifai.png",
      video: "",
    },
  ],
  hackathons: [] as Array<{
    title: string;
    dates?: string;
    location?: string;
    description?: string;
    image?: string;
    links?: Array<{
      title: string;
      href: string;
      icon: React.ReactElement;
    }>;
  }>,
} as const;
