import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Mojtaba Beheshti",
  initials: "MB",
  url: "https://this.is-a.dev",
  location: "Alanya, Turkey",
  locationLink: "https://www.google.com/maps/place/alanya+turkey",
  description:
    "Senior Full-Stack Developer with 5+ years of experience in scalable web development, specializing in JavaScript (React, Node.js, TypeScript), cloud services, REST APIs, and efficient modern architectures.",
  summary:
    "Senior Full-Stack Developer with 5+ years of experience in scalable web development, specializing in JavaScript (React, Node.js, TypeScript), cloud services, REST APIs, and efficient modern architectures. Demonstrated impact in fintech, AI, blockchain, and e-commerce, delivering over 15 cross-functional projects focused on security, rapid delivery, and measurable performance improvements. Adept leader with a passion for code quality and technical mentorship.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "moji2002@gmail.com",
    tel: "+98 XXX XXX XXXX",
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
      title: "Senior Full-Stack Developer",
      logoUrl: "",
      start: "Aug 2023",
      end: "Present",
      description:
        "Developed a highly scalable order matching system using RabbitMQ, supporting 1M+ daily trading requests. Built and launched 3 PWA products (Next.js 14, TypeScript, i18next), expanding market to 4 languages, including RTL support, in 30 days. Led Agile team of 3 developers; improved overall productivity by 20% via mentorship and technical reviews. Standardized TypeScript adoption, reducing type-related bugs by 90%. Migrated 5 legacy PHP apps to React stack, achieving 30% faster page loads and improved maintainability. Integrated NextAuth.js for OAuth (Google, GitHub); deployed real-time trading modules with WebSocket and Socket.io. Supported technical recruitment and onboarding of 12+ engineers.",
    },
    {
      company: "Arad Dasht",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "",
      start: "Sep 2022",
      end: "Aug 2023",
      description:
        "Mentored 5 junior developers in React/TypeScript, raising overall code quality and review effectiveness. Built interactive store locator with dynamic API integration (React, OpenStreetMaps). Enhanced frontend stability by 20% through advanced debugging and refactoring. Developed logo-attachment feature for user-driven product customization.",
    },
    {
      company: "Kimiagaran",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "",
      start: "Sep 2020",
      end: "Sep 2022",
      description:
        "Engineered real-time data services (Node.js, WebSocket) for 100+ crypto and stock assets, boosting research capacity 50%. Led migration from WordPress to Next.js, increasing customer engagement by 8%. Built secure cryptocurrency wallet app (React, Web3, cryptography) in 30 days. Advanced Core Web Vitals 40% by optimizing code splitting, lazy loading, and image delivery.",
    },
  ],
  education: [
    {
      school: "Self-Taught Web Developer",
      href: "#",
      degree: "Independent Learning",
      logoUrl: "",
      start: "",
      end: "",
    },
    {
      school: "Meta",
      href: "https://www.meta.com",
      degree: "Meta Advanced React and JavaScript Certificate",
      logoUrl: "",
      start: "2023",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Crypto Exchange Platform",
      href: "#",
      dates: "",
      active: true,
      description:
        "Scalable order matching system using RabbitMQ and WebSocket. Reduced latency for high-volume transactions, supporting 1M+ daily trading requests.",
      technologies: [
        "Next.js",
        "TypeScript",
        "RabbitMQ",
        "WebSocket",
        "Node.js",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Multi-language PWA Suite",
      href: "#",
      dates: "",
      active: true,
      description:
        "Delivered 3 mobile-first products in 1 month. Enabled 4-language support including RTL localization using Next.js 14, TypeScript, and i18next.",
      technologies: ["Next.js", "TypeScript", "i18next", "PWA"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Legacy System Migration",
      href: "#",
      dates: "",
      active: true,
      description:
        "Modernized 5 PHP projects to React & TypeScript, improving UI/UX and maintainability. Achieved 30% faster page loads.",
      technologies: ["React", "TypeScript", "Next.js"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Cryptocurrency Wallet",
      href: "#",
      dates: "",
      active: true,
      description:
        "Developed robust wallet application using React, Node.js, and Web3. Cut app startup time by 20% through optimization.",
      technologies: ["React", "Node.js", "Web3", "Cryptography"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "WordPress to Next.js Redesign",
      href: "#",
      dates: "",
      active: true,
      description:
        "Led migration from WordPress to Next.js, increasing engagement by 8%, Time-on-Site by 25%, and Web Vitals by 40%.",
      technologies: ["Next.js", "React", "TypeScript"],
      links: [],
      image: "",
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
