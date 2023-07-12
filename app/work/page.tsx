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
];

let frameworks = [
  'React',
  'Next',
  'Tailwind', 
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
