"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  code: string;
};

export default function Highlighter({ code }: Props) {
  return (
    <SyntaxHighlighter
      showLineNumbers
      wrapLines
      language="typescript"
      style={atomOneDark}
      wrapLongLines
    >
      {code}
    </SyntaxHighlighter>
  );
}
