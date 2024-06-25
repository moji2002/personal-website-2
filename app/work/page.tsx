"use client";
import Editor from "@/components/editor";
import Highlighter from "@/components/syntax-highlighter";
import useTyping from "@/hooks/useTyping";

const codeStr = `// Work information
let profession = 'Front-end Developer';
let employer = 'Arad';

// Most important skills
let languages = [
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind', 
];

let frameworks = [
  'React',
  'Next',
];
`;
export default function WorkPage() {
  const { code } = useTyping(codeStr);

  return (
    <Editor>
      <Highlighter code={code} />
    </Editor>
  );
}
