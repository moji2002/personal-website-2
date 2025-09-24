"use client";

import Editor from "@/components/editor";
import Highlighter from "@/components/syntax-highlighter";
import useTyping from "@/hooks/useTyping";

const codeStr = `// Personal information
const name = "Mojtaba Beheshti";

// Recent projects
const project = {
  name: 'PurifAI',
  description: 'Ultra-secure HTML sanitizer with Advanced XSS protection',
  technologies: ['TypeScript', 'Zero Dependencies'],
  status: 'Published',
  github: 'https://github.com/moji2002/purifai',
  npm: 'https://www.npmjs.com/package/purifai'
};

// Skills
const skill = {
  frontend: ['React', 'Next.js', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'Hono', 'API Design'],
  tools: ['Git', 'Jest', 'Vercel']
};

// Tech stack
const techs_and_stack = {
  languages: ['TypeScript', 'JavaScript'],
  frameworks: ['React', 'Next.js', 'Express', 'Hono'],
  libraries: ['Tailwind CSS', 'Shadcn-UI', 'Framer Motion', 'React Query'],
  databases: ['MongoDB', 'PostgreSQL', 'Redis'],
  cloud: ['Vercel', 'AWS'],
  tools: ['Git', 'Docker', 'Figma', 'Postman']
};

// Contact
const contact = {
  email: 'moji2002@gmail.com',
  github: 'https://github.com/moji2002',
  linkedin: 'https://linkedin.com/in/mojtaba-beheshti',
};
`;
export default function HomePage() {
  const { code } = useTyping(codeStr);

  return (
    <Editor>
      <Highlighter code={code} />
    </Editor>
  );
}
