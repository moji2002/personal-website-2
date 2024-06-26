"use client";

import Editor from "@/components/editor";
import Highlighter from "@/components/syntax-highlighter";
import useTyping from "@/hooks/useTyping";

const codeStr = `// Personal information
const name = "Mojtaba Beheshti";

// Hobbies
const hobbies = [
  "Programming",
  "Eating food",
  "More programming",
  "Gym",
  "Removing useless comments in code" , //Like the one above the variable name... 
];
`;
export default function HomePage() {
  const { code } = useTyping(codeStr);

  return (
    <Editor>
      <Highlighter code={code} />
    </Editor>
  );
}
