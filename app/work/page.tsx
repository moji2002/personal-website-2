"use client";
import Editor from "@/components/editor";
import Highlighter from "@/components/syntax-highlighter";
import useTyping from "@/hooks/useTyping";

const codeStr = `// Work information
const profession = 'Front-end Developer';
const employer = 'Ayande Nevisan';
const yearsOfExperience = 4;

// Most important skills
const languages = [
  'TypeScript',
  'JavaScript',
];

const skills = [
  'React',
  'Next',
  'React Native',
  'Tailwind', 
  'Shadcn-UI',
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
