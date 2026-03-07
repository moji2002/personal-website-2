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
      logoUrl: "https://ui-avatars.com/api/?name=Ayande+Nevisan&size=80&background=6366f1&color=fff",
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
      logoUrl: "https://ui-avatars.com/api/?name=Arad+Dasht&size=80&background=8b5cf6&color=fff",
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
      logoUrl: "https://ui-avatars.com/api/?name=Kimiagaran&size=80&background=ec4899&color=fff",
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
      href: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      degree: "Meta Front-End Developer Professional Certificate (via Coursera)",
      logoUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=80&h=80&fit=crop",
      start: "",
      end: "",
    },
    {
      school: "Independent / Professional Study",
      href: "#",
      degree: "Advanced Software Engineering Immersive — Focus on Distributed Systems, React Architecture, and Performance Optimization",
      logoUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=80&h=80&fit=crop",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "Production PWA Suite",
      href: "#",
      dates: "",
      active: true,
      description:
        "Architected and deployed production-grade PWAs using Next.js with offline-first functionality and mobile responsiveness.",
      technologies: ["Next.js", "TypeScript", "PWA"],
      links: [],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=192&fit=crop",
      video: "",
    },
    {
      title: "Zodios API Integration Layer",
      href: "#",
      dates: "",
      active: true,
      description:
        "Engineered contract-first API integration ensuring end-to-end type safety, reducing production runtime errors by approximately 90%.",
      technologies: ["Zodios", "Zod", "TypeScript"],
      links: [],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=192&fit=crop",
      video: "",
    },
    {
      title: "Legacy PHP to React Migration",
      href: "#",
      dates: "",
      active: true,
      description:
        "Spearheaded migration of legacy PHP applications to React-based architecture, achieving 35% improvement in Core Web Vitals.",
      technologies: ["React", "TypeScript", "Next.js"],
      links: [],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=192&fit=crop",
      video: "",
    },
    {
      title: "Web3 Cryptocurrency Wallet",
      href: "#",
      dates: "",
      active: true,
      description:
        "Built Web3-integrated cryptocurrency wallet in 30 days, focusing on secure transaction signing.",
      technologies: ["React", "Web3.js", "Cryptography"],
      links: [],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=192&fit=crop",
      video: "",
    },
    {
      title: "Store Discovery Engine",
      href: "#",
      dates: "",
      active: true,
      description:
        "Developed localized store-discovery engine with geolocation APIs and advanced map filtering, improving user conversion rates.",
      technologies: ["React", "Geolocation APIs", "TypeScript"],
      links: [],
      image: "https://images.unsplash.com/photo-1524661134-4a815407dd34?w=800&h=192&fit=crop",
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
