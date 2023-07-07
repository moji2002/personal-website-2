"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  // docco,
  atomOneDark,
  // atomOneDarkReasonable,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  code: string;
};
export default function Editor({ code }: Props) {
  // const router = useRouter();
  const pathName = usePathname();

  const handleClose = () => {
    alert("close");
  };
  const handleMaximum = () => {
    alert("max");
  };
  const handleMinimize = () => {
    alert("min");
  };
  return (
    <div className=" flex items-center justify-center h-screen w-full">
      <div className="w-full h-[500px] flex flex-col rounded-[10px] overflow-hidden shadow-xl ">
        <div className=" h-[34px] flex justify-between bg-[#22252a] shrink-0 p-[10px]">
          <div className="gap-[8px] flex">
            <button
              onClick={handleClose}
              className="w-[12px] h-[12px] bg-[#ed6a5e] rounded-full"
            >
              <span className="sr-only">close</span>
            </button>
            <button
              onClick={handleMinimize}
              className="w-[12px] h-[12px] bg-[#f4be50] rounded-full"
            >              <span className="sr-only">minimize</span>
            </button>
            <button
              onClick={handleMaximum}
              className="w-[12px] h-[12px] bg-[#61c554] rounded-full"
            >              <span className="sr-only">maximize</span>
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
          <SyntaxHighlighter
            showLineNumbers
            wrapLines
            language="typescript"
            style={atomOneDark}
            wrapLongLines
          >
            {code}
          </SyntaxHighlighter>
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
