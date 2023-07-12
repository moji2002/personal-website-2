"use client";
import CountTracker from "@/utils/count-tracker";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};

export default function Editor({ children }: Props) {
  const pathName = usePathname();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleClick = (key: string, alerts: string[]) => {
    return () => {
      const tracker = new CountTracker(key);

      switch (tracker.count) {
        case 5:
          alert(frustratedAlerts[0]);
          break;

        case 10:
          alert(frustratedAlerts[1]);
          break;

        case 11:
          alert(frustratedAlerts[2]);
          break;

        case 50:
          alert(frustratedAlerts[3]);
          break;

        default:
          alert(alerts[tracker.count % alerts.length]);
          break;
      }

      tracker.increment();
    };
  };

  return (
    <div className=" flex items-center justify-center h-screen w-full ">
      <div className="w-full h-[600px] max-w-[1024px] flex flex-col rounded-[10px] overflow-hidden shadow-2xl ">
        <div className=" h-[34px] flex justify-between bg-[#22252a] shrink-0 p-[10px]">
          <div className="gap-[8px] flex">
            <button
              onClick={handleClick("close", closeAlerts)}
              className="w-[12px] h-[12px] cursor-default bg-[#ed6a5e] rounded-full  hover:saturate-150 "
            >
              <span className="sr-only">close</span>
            </button>
            <button
              onClick={handleClick("minimize", minimizeAlerts)}
              className="w-[12px] h-[12px] cursor-default bg-[#f4be50] rounded-full  hover:saturate-150 "
            >
              {" "}
              <span className="sr-only">minimize</span>
            </button>
            <button
              onClick={handleClick("maximize", maximizeAlerts)}
              className="w-[12px] h-[12px] cursor-default bg-[#61c554] rounded-full  hover:saturate-150 "
            >
              <span className="sr-only">maximize</span>
            </button>
          </div>
          <div className="flex">
            <Link
              href="https://github.com/moji2002"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-[10px] block select-none text-[#cccccc] opacity-50 hover:opacity-100"
            >
              github
            </Link>
            <Link
              href="https://www.linkedin.com/in/mojtaba-beheshti/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-[10px] block select-none text-[#cccccc] opacity-50 hover:opacity-100"
            >
              linkedin
            </Link>
          </div>
        </div>
        <div className="h-[34px] flex shrink-0 bg-[#22252a]">
          <EditorLink label="profile.ts" href="/" active={pathName === "/"} />
          <EditorLink
            label="work.ts"
            href="/work"
            active={pathName === "/work"}
          />
        </div>
        <div className="bg-[#292c33] grow overflow-auto text-[10px] sm:text-xs md:text-sm">
          {children}
        </div>
        <div className="h-[22px] bg-[#22252a] shrink-0"></div>
      </div>
    </div>
  );
}

type LinkProps = {
  label: string;
  href: string;
  active: boolean;
};

const EditorLink = ({ active, href, label }: LinkProps) => {
  return (
    <Link
      className={`text-xs p-[10px] h-full block font-mono select-none text-[#dcc193] border-r-2 border-[#181a1f] ${
        active ? "bg-[#292c33]" : ""
      }`}
      href={href}
    >
      {label}
    </Link>
  );
};

const commonAlerts = [
  "Let's not do that, okay?",
  "Oh. Nope. Not going to happen!",
];

const closeAlerts = [
  "Did you really want to close the editor? 🤔",
  "Bye bye I guess?",
  "oops! scripts may close only the windows that were opened by them.",
  ...commonAlerts,
];

const maximizeAlerts = [
  "This is not a real editor, do you want to fullscreen your _actual_ editor?",
  ...commonAlerts,
];

const minimizeAlerts = [
  "I do not want to be smol",
  "Please don't try to minimize this editor. The page will feel empty.",
  "I might get tiny",
  ...commonAlerts,
];

const frustratedAlerts = [
  "You clicked it 5 times, what do you expect from me?",
  "You clicked it 10 times now, what do you WANT FROM ME?",
  "LEAVE ME ALONE 😭",
  "You do realize that you clicked this button 50 times now right?",
];
