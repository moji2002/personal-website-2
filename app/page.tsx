import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const HeroVisualPlaceholder = dynamic(() => import('../components/HeroVisualPlaceholder'), { ssr: false });
const IconDemo = dynamic(() => import('../components/IconDemo'), { ssr: false });
const SectionHeader = dynamic(() => import('../components/SectionHeader'));

export default function HomePage() {
    return (
        <main>
            {/* Hero Section */}
            <header className="container-grid pt-24 pb-20" aria-label="Site hero">
                <div className="relative">
                    {/* Hero Visual Placeholder */}
                    <motion.div
                        className="absolute -inset-8 -z-10 glass rounded-2xl"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 22 }}
                        aria-hidden="true"
                    />
                    <HeroVisualPlaceholder />
                    <div className="grid gap-6 md:grid-cols-2 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                                Mojtaba Beheshti
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-300 font-medium">
                                Senior Full-Stack Developer
                            </p>
                            <p className="text-lg text-zinc-300 max-w-prose">
                                I build fast, resilient, beautifully engineered web experiences.
                            </p>
                            <nav className="flex gap-3" aria-label="Hero CTAs">
                                <Link
                                    href="#work"
                                    className="px-5 py-2.5 rounded-lg bg-[hsl(var(--color-accent))] text-black font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    View Work
                                </Link>
                                <Link
                                    href="#contact"
                                    className="px-5 py-2.5 rounded-lg border border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    Get in touch
                                </Link>
                            </nav>
                        </div>
                        {/* Hero Visual Demo Placeholder for WebGL/Three.js experiment later */}
                        <motion.div
                            className="h-64 md:h-80 rounded-2xl glass"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </header>

            {/* Selected Projects Section */}
            <section id="work" className="container-grid py-24" aria-labelledby="projects-heading">
                <SectionHeader title="Selected Projects" subtitle="Featured Work" />
                <div className="grid gap-8 md:grid-cols-3">
                    {[1, 2, 3].map(i => (
                        <motion.article
                            key={i}
                            className="rounded-2xl glass p-0 flex flex-col h-full group hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: 'spring', stiffness: 110, damping: 22, delay: 0.1 * i }}
                            tabIndex={0}
                        >
                            {/* Video preview area (auto-plays on hover/focus) */}
                            <div className="w-full aspect-video bg-zinc-950 flex items-center justify-center relative">
                                <video
                                    className="w-full h-full object-cover rounded-t-2xl transition-all duration-300 group-hover:scale-105"
                                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    onMouseOver={e => (e.currentTarget as HTMLVideoElement).play()}
                                    onFocus={e => (e.currentTarget as HTMLVideoElement).play()}
                                    onMouseOut={e => (e.currentTarget as HTMLVideoElement).pause()}
                                    onBlur={e => (e.currentTarget as HTMLVideoElement).pause()}
                                    tabIndex={-1}
                                    aria-label="Project video preview"
                                >
                                    Sorry, your browser does not support video.
                                </video>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-semibold mb-3 group-hover:text-[hsl(var(--color-accent))] transition-colors">Project {i}</h3>
                                <p className="text-zinc-300 mb-4 flex-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Project goal and summary goes here.
                                </p>
                                <div className="mb-5 text-sm text-[hsl(var(--color-accent))] font-mono">
                                    +38% conversion
                                </div>
                                <Link
                                    href="#"
                                    className="px-5 py-2 rounded-lg font-medium bg-[hsl(var(--color-accent))] text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-auto self-start"
                                    aria-label={`View case study for Project ${i}`}
                                >
                                    View Case
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* Individual Project Case Study Preview */}
            <section className="container-grid py-24" aria-labelledby="casestudy-heading">
                <h2 id="casestudy-heading" className="text-3xl md:text-5xl font-bold mb-10">Project Case Study</h2>
                <article className="bg-[#23272F] rounded-2xl p-10 shadow-lg max-w-3xl mx-auto">
                    <header>
                        <h3 className="text-2xl font-bold mb-1">Example Project Name</h3>
                        <div className="text-zinc-400 mb-4 text-md font-mono">Next.js, TypeScript, Tailwind CSS</div>
                        <div className="mb-6 text-sm text-[hsl(var(--color-accent))] font-mono">+145% engagement / Launched 2025</div>
                    </header>
                    <section className="mb-7">
                        <h4 className="font-semibold mb-2">Problem</h4>
                        <p className="text-zinc-300">Describe the challenge and constraints. E.g., legacy stack, user dropoff, scaling issues, tight timeframe.</p>
                    </section>
                    <section className="mb-7">
                        <h4 className="font-semibold mb-2">Approach</h4>
                        <p className="text-zinc-300">Outline what you did: refactor, upgrade, implement, collaborate, optimize, etc. Mention key tech choices.</p>
                    </section>
                    <section className="mb-4">
                        <h4 className="font-semibold mb-2">Outcome & Metrics</h4>
                        <ul className="list-disc ml-5 text-zinc-300">
                            <li>+145% engagement increase</li>
                            <li>Deployed globally in 10 days</li>
                            <li>Passed audits: perf 98, a11y 100, best 100, SEO 100</li>
                        </ul>
                    </section>
                </article>
            </section>

            {/* Skills & Services Section */}
            <section className="container-grid py-24" aria-labelledby="skills-heading">
                <h2 id="skills-heading" className="text-3xl md:text-5xl font-bold mb-10">Skills & Services</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Capabilities Map */}
                    <div>
                        <ul className="space-y-4">
                            <li><span className="font-semibold text-lg">Frontend:</span> React, Next.js, TypeScript, Tailwind CSS, Framer Motion</li>
                            <li><span className="font-semibold text-lg">Backend:</span> Node.js, Express.js, PostgreSQL, GraphQL</li>
                            <li><span className="font-semibold text-lg">Cloud & DevOps:</span> Vercel, Docker, AWS S3, Nginx, CI/CD</li>
                            <li><span className="font-semibold text-lg">Other:</span> Zustand, Redux, Playwright, Jest, WebSocket, PWA</li>
                        </ul>
                    </div>
                    {/* Toolstack Badges */}
                    <div className="flex flex-wrap gap-3 items-start">
                        {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'PostgreSQL', 'Vercel', 'Docker', 'AWS', 'Redux', 'Playwright'].map(tool => (
                            <span
                                key={tool}
                                className="inline-block px-4 py-2 rounded-full text-xs font-semibold bg-[hsl(var(--color-glass))] text-zinc-100 border border-white/10 shadow-sm hover:scale-105 hover:bg-[hsl(var(--color-accent))]/10 transition-transform backdrop-blur"
                                aria-label={tool + ' badge'}
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="container-grid py-24" aria-labelledby="about-heading">
                <h2 id="about-heading" className="text-3xl md:text-5xl font-bold mb-10">About</h2>
                <div className="grid md:grid-cols-2 gap-14 items-center">
                    {/* Parallax Photo Placeholder */}
                    <motion.div
                        className="rounded-full overflow-hidden w-48 h-48 shadow-2xl mx-auto mb-10 md:mb-0 bg-[hsl(var(--color-surface))]"
                        whileHover={{ scale: 1.045, y: -6 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                        aria-label="Profile photo placeholder"
                    >
                        {/* Photo img would be here in production */}
                        <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--color-accent))]/70 to-slate-600 flex items-center justify-center text-5xl text-white font-bold tracking-tight select-none">MB</div>
                    </motion.div>
                    {/* Details */}
                    <div className="space-y-6">
                        <section>
                            <h3 className="font-semibold text-xl mb-1">Principles</h3>
                            <ul className="list-disc ml-5 text-zinc-300 space-y-1">
                                <li>Clarity over cleverness</li>
                                <li>Details create trust</li>
                                <li>Accessibility first, always</li>
                                <li>Performance is product quality</li>
                                <li>Automation compounds impact</li>
                            </ul>
                        </section>
                        <section>
                            <h3 className="font-semibold text-xl mb-1">Recognitions / Awards</h3>
                            <ul className="list-disc ml-5 text-zinc-300 space-y-1">
                                <li>Awwwards Site of the Day (nominee)</li>
                                <li>Stack Overflow 10k+ Rep Club</li>
                                <li>Top Speaker – Next.js Conf 2024</li>
                            </ul>
                        </section>
                        <section>
                            <h3 className="font-semibold text-xl mb-1">Conferences</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Next.js Conf", "React Summit", "JSConf Asia", "Frontend Masters", "DevCon"].map(conf => (
                                    <span key={conf} className="px-3 py-1 rounded-full bg-[hsl(var(--color-glass))] text-xs text-zinc-100 border border-white/10 hover:bg-[hsl(var(--color-accent))]/20 transition-colors">{conf}</span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            {/* Writing Section */}
            <section className="container-grid py-24" aria-labelledby="writing-heading">
                <SectionHeader title="Writing" subtitle="Blog & Notes" />
                {/* List of blog/notes */}
                <div className="grid md:grid-cols-2 gap-10 mb-12">
                    {[
                        { title: "Composing Animation with Framer Motion", tags: ["Animation", "Framer Motion", "React"], time: "6 min read", summary: "Best practices for physics-aware UI with Framer Motion and React." },
                        { title: "Optimizing Next.js Apps for Performance", tags: ["Next.js", "Performance", "Web"], time: "8 min read", summary: "Essential strategies for shipping high-performance sites with Next.js." },
                    ].map(post => (
                        <article key={post.title} className="rounded-2xl glass p-7 group">
                            <header className="mb-2">
                                <h3 className="text-xl font-bold group-hover:text-[hsl(var(--color-accent))] transition-colors">{post.title}</h3>
                                <div className="mb-1 flex gap-2 flex-wrap">
                                    {post.tags.map(t => (
                                        <span key={t} className="px-2.5 py-0.5 rounded-full bg-[hsl(var(--color-accent))]/10 text-xs text-[hsl(var(--color-accent))] font-semibold border border-[hsl(var(--color-accent))]/20">{t}</span>
                                    ))}
                                </div>
                                <div className="text-zinc-400 text-xs font-mono mb-1">{post.time}</div>
                            </header>
                            <p className="text-zinc-300 max-w-prose">{post.summary}</p>
                        </article>
                    ))}
                </div>
                {/* Code Block with Copy/Expand Button */}
                <CodeBlock
                    code={`const fadeIn = {\n  initial: { opacity: 0, y: 18 },\n  animate: { opacity: 1, y: 0 },\n  transition: { type: 'spring', stiffness: 120, damping: 18 },\n};`}
                    expanded={false}
                />
            </section>

            {/* Testimonials Section */}
            <section className="container-grid py-24" aria-labelledby="testimonials-heading">
                <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-bold mb-10">Testimonials</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {[
                        {
                            quote: 'Working with Mojtaba raised our engineering quality bar. His attention to UX and accessibility is unmatched.',
                            name: 'Sara J. Winters',
                            title: 'VP Engineering, ExampleCorp',
                            logo: '/logo-placeholder-1.svg',
                        },
                        {
                            quote: 'He delivered the impossible early and led our migration with zero downtime. A force-multiplier!',
                            name: 'Jason Park',
                            title: 'CTO, DevX Labs',
                            logo: '/logo-placeholder-2.svg',
                        },
                    ].map((t, i) => (
                        <figure
                            key={i}
                            className="rounded-2xl glass p-8 flex flex-col items-start gap-5 shadow-lg h-full border border-white/10"
                        >
                            <blockquote className="font-medium text-lg md:text-xl text-zinc-200 mb-3">“{t.quote}”</blockquote>
                            <figcaption className="flex items-center gap-3 mt-auto">
                                <span className="inline-flex w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--color-accent))]/70 to-slate-700 items-center justify-center mr-2">
                                    {/* Avatar initial */}
                                    <span className="text-2xl text-white font-semibold">{t.name[0]}</span>
                                </span>
                                <div>
                                    <div className="font-semibold text-zinc-100 text-base">{t.name}</div>
                                    <div className="text-xs text-zinc-400 font-mono">{t.title}</div>
                                </div>
                                {/* Logo */}
                                <div className="ml-5 w-10 h-10 rounded overflow-hidden">
                                    <Image src={i === 0 ? '/logo-placeholder-1.svg' : '/logo-placeholder-2.svg'} alt={`${t.name} company logo`} width={40} height={40} className="w-10 h-10" />
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="container-grid py-24" aria-labelledby="contact-heading">
                <h2 id="contact-heading" className="text-3xl md:text-5xl font-bold mb-10">Contact</h2>
                <div className="flex flex-col md:flex-row gap-14">
                    {/* Contact Form */}
                    <form
                        className="flex-1 rounded-2xl glass p-8 shadow-lg max-w-xl mx-auto mb-8 md:mb-0"
                        autoComplete="off"
                        onSubmit={e => { e.preventDefault(); alert('Form submitted! (not wired yet)'); }}
                        aria-label="Contact form"
                    >
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-1 text-zinc-300 font-medium">Name</label>
                            <input name="name" id="name" type="text" className="w-full p-3 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-100 mb-2 focus-visible:outline-[hsl(var(--color-accent))] required" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-1 text-zinc-300 font-medium">Email</label>
                            <input name="email" id="email" type="email" className="w-full p-3 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-100 mb-2 focus-visible:outline-[hsl(var(--color-accent))] required" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-1 text-zinc-300 font-medium">Message</label>
                            <textarea name="message" id="message" rows={5} className="w-full p-3 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-100 resize-none focus-visible:outline-[hsl(var(--color-accent))] required"></textarea>
                        </div>
                        <button type="submit" className="inline-block px-6 py-2 rounded-lg font-semibold bg-[hsl(var(--color-accent))] text-black shadow hover:bg-[hsl(var(--color-accent-alt))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Send Message</button>
                    </form>

                    <div className="flex-1 flex flex-col gap-8">
                        <div className="rounded-xl glass p-5 mb-8">
                            <div className="mb-2 text-zinc-300 font-semibold">Direct:</div>
                            <a href="mailto:moji2002@gmail.com" className="text-lg font-mono text-[hsl(var(--color-accent))] underline">moji2002@gmail.com</a>
                        </div>
                        <div>
                            <div className="mb-2 text-zinc-300 font-semibold">Find me:</div>
                            <nav aria-label="Social">
                                <div className="flex gap-3">
                                    <a href="#" className="rounded-full bg-[hsl(var(--color-glass))] border border-[hsl(var(--color-accent))]/30 px-4 py-2 text-[hsl(var(--color-accent))] text-xs font-bold shadow hover:bg-[hsl(var(--color-accent))]/30 focus-visible:outline focus-visible:outline-2" aria-label="GitHub">GitHub</a>
                                    <a href="#" className="rounded-full bg-[hsl(var(--color-glass))] border border-[hsl(var(--color-accent))]/30 px-4 py-2 text-[hsl(var(--color-accent))] text-xs font-bold shadow hover:bg-[hsl(var(--color-accent))]/30 focus-visible:outline focus-visible:outline-2" aria-label="LinkedIn">LinkedIn</a>
                                    <a href="#" className="rounded-full bg-[hsl(var(--color-glass))] border border-[hsl(var(--color-accent))]/30 px-4 py-2 text-[hsl(var(--color-accent))] text-xs font-bold shadow hover:bg-[hsl(var(--color-accent))]/30 focus-visible:outline focus-visible:outline-2" aria-label="Twitter">Twitter</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="w-full py-10 border-t border-zinc-800/60 bg-zinc-900 mt-20" aria-label="site footer">
                <div className="container-grid flex flex-col md:flex-row items-center justify-between gap-3 text-zinc-400 text-sm">
                    <nav className="flex flex-wrap gap-6 mb-3 md:mb-0" aria-label="Footer nav">
                        <a href="#work" className="hover:text-[hsl(var(--color-accent))]">Work</a>
                        <a href="#about" className="hover:text-[hsl(var(--color-accent))]">About</a>
                        <a href="#writing" className="hover:text-[hsl(var(--color-accent))]">Writing</a>
                        <a href="#contact" className="hover:text-[hsl(var(--color-accent))]">Contact</a>
                    </nav>
                    <div className="text-xs">© {new Date().getFullYear()} Mojtaba Beheshti. All rights reserved.</div>
                </div>
            </footer>

            {/* Badge + MetricDisplay Demo Section */}
            <section className="container-grid py-20" aria-labelledby="component-demo-heading">
                <SectionHeader title="Component Demo" subtitle="CTA, Timeline, Testimonial" />
                <div className="flex gap-8 flex-wrap items-start mb-12">
                    <CTAButton variant="primary">Primary CTA</CTAButton>
                    <CTAButton variant="secondary">Secondary Action</CTAButton>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <TestimonialCard quote="She delivers every project with polish and performance!" name="Alex Reza" title="Lead PM, WebLab" />
                    <TestimonialCard quote="Brilliantly collaborative and focused on user outcomes." name="Mina Ghotbi" title="Founder, PixelSpace" />
                </div>
                <Timeline
                    events={[{ year: '2021', title: 'Launched SaaS', desc: 'Prod release, scaled to 10k users.' }, { year: '2022', title: 'Awarded SOTD', desc: 'Recognized by Awwwards panel.' }, { year: '2023', title: 'Open Source Lead', desc: 'Published major OSS tools.' }]}
                />
            </section>

            {/* Form Fields Demo */}
            <section className="container-grid py-20" aria-labelledby="form-demo-heading">
                <SectionHeader title="Form Fields Demo" subtitle="Reusable Components" />
                <form onSubmit={e => { e.preventDefault(); }} autoComplete="off" className="max-w-md">
                    <FormInput label="Full Name" id="demo-name" placeholder="Full Name" required />
                    <FormInput label="Email Address" id="demo-email" type="email" placeholder="mail@email.com" required error="Sample error message" />
                    <FormTextarea label="Message" id="demo-msg" rows={4} placeholder="What's up?" />
                    <FormButton>Send</FormButton>
                </form>
            </section>

            {/* SkeletonLoader component */}
            function SkeletonLoader({width, height, rounded = 'md'}: {width: number|string, height: number|string, rounded?: string}) {
              const h = typeof height === 'number' ? `${height}px` : height;
            const w = typeof width === 'number' ? `${width}px` : width;
            return (
            <div className={`bg-zinc-700/40 animate-pulse ${rounded === 'full' ? 'rounded-full' : 'rounded-md'}`} style={{ width: w, height: h }} aria-hidden="true" />
            );
            }

            {/* Interaction States Demo */}
            <section className="container-grid py-20" aria-labelledby="interaction-demo-heading">
                <SectionHeader title="Interaction States Demo" subtitle="UI & Feedbacks" />
                <div className="mb-8">
                    <div className="mb-2 text-xs font-bold text-zinc-400">Button States</div>
                    <div className="flex gap-4 flex-wrap">
                        <button className="px-6 py-2 rounded-lg font-semibold bg-[hsl(var(--color-accent))]/90 text-black shadow border border-white/10 hover:bg-[hsl(var(--color-accent))] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Hover/Active/Focus</button>
                        <button className="px-6 py-2 rounded-lg font-semibold bg-zinc-700 text-zinc-300 animate-pulse cursor-wait">Loading</button>
                        <button className="px-6 py-2 rounded-lg font-semibold bg-green-500 text-black hover:bg-green-400">Success</button>
                        <button className="px-6 py-2 rounded-lg font-semibold bg-[hsl(var(--color-error))]/90 text-white hover:bg-[hsl(var(--color-error))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Error</button>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="mb-2 text-xs font-bold text-zinc-400">Input States</div>
                    <div className="flex gap-4 flex-wrap items-end">
                        <input placeholder="Focus" className="p-3 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-100 w-40 mb-1 focus-visible:outline-[hsl(var(--color-accent))]" />
                        <input placeholder="Error" className="p-3 rounded-md bg-zinc-950 border border-[hsl(var(--color-error))] text-zinc-100 w-40 mb-1" aria-invalid="true" />
                        <SkeletonLoader width={160} height={43} />
                        <input type="text" disabled value="Disabled" className="p-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-500 w-40 mb-1 cursor-not-allowed" />
                    </div>
                    <div className="text-xs text-[hsl(var(--color-error))] mt-1">Sample error message</div>
                </div>
            </section>

            {/* Icon demo row */}
            <IconDemo />
        </main>
    );
}

// SectionHeader moved to components/SectionHeader

// CodeBlock component
function CodeBlock({ code, expanded = false, language = 'typescript' }: { code: string; expanded?: boolean; language?: string }) {
    const [isExpanded, setIsExpanded] = useState(expanded);
    const [copied, setCopied] = useState(false);
    const isLong = code.split('\n').length > 5;
    const visibleCode = isExpanded || !isLong ? code : code.split('\n').slice(0, 5).join('\n') + '\n// ...';

    async function handleCopy() {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
    }

    return (
        <div className="relative bg-[#23272F] rounded-xl p-6 font-mono text-[15px] text-zinc-200 shadow-md max-w-2xl mx-auto mb-5 border border-white/8">
            <pre className="overflow-x-auto mb-7"><code>{visibleCode}</code></pre>
            <div className="absolute top-4 right-4 flex gap-2">
                <button
                    aria-label="Copy code"
                    onClick={handleCopy}
                    className={`px-3 py-1.5 bg-[hsl(var(--color-accent))] text-black text-xs font-semibold rounded-md shadow hover:bg-[hsl(var(--color-accent-alt))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${copied ? 'ring-2 ring-green-400' : ''}`}
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
                {isLong && (
                    <button
                        aria-label={isExpanded ? 'Collapse code block' : 'Expand code block'}
                        onClick={() => setIsExpanded(x => !x)}
                        className="px-3 py-1.5 bg-zinc-900 text-zinc-200 text-xs font-semibold rounded-md shadow border border-zinc-700/70 hover:bg-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {isExpanded ? 'Collapse' : 'Expand'}
                    </button>
                )}
            </div>
        </div>
    );
}

// Badge component
function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[hsl(var(--color-accent))]/10 text-[hsl(var(--color-accent))] border border-[hsl(var(--color-accent))]/20 mr-2 mb-2 select-none">
            {children}
        </span>
    );
}

// MetricDisplay component
function MetricDisplay({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col items-center justify-center px-3 py-2 rounded-xl glass border border-white/10 shadow gap-1 min-w-[80px] mx-2 mb-2">
            <div className="text-2xl font-bold text-[hsl(var(--color-accent))]">{value}</div>
            <div className="text-xs text-zinc-300 font-mono tracking-wide mt-0.5">{label}</div>
        </div>
    );
}

// CTAButton component
function CTAButton({ children, variant = 'primary', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }) {
    const base = 'px-6 py-3 rounded-lg font-semibold text-lg shadow transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
    const classes = variant === 'primary'
        ? `${base} bg-[hsl(var(--color-accent))] text-black hover:bg-[hsl(var(--color-accent-alt))]`
        : `${base} bg-zinc-800 text-zinc-100 border border-white/20 hover:bg-zinc-800/80`;
    return <button className={classes} {...props}>{children}</button>;
}

// Timeline component
function Timeline({ events }: { events: { year: string, title: string, desc: string }[] }) {
    return (
        <ol className="relative border-l-2 border-[hsl(var(--color-accent))]/40 ml-3 pl-7 space-y-7">
            {events.map(ev => (
                <li key={ev.year + ev.title} className="group">
                    <span className="absolute -left-[31px] top-1.5 w-5 h-5 rounded-full bg-[hsl(var(--color-accent))]/60 border-2 border-[hsl(var(--color-accent))] shadow-lg" aria-hidden="true"></span>
                    <div className="text-xl font-semibold text-zinc-100 mb-1">{ev.title} <span className="text-xs ml-2 font-mono text-zinc-400">{ev.year}</span></div>
                    <div className="text-zinc-300 text-sm">{ev.desc}</div>
                </li>
            ))}
        </ol>
    );
}

// TestimonialCard component
function TestimonialCard({ quote, name, title }: { quote: string, name: string, title: string }) {
    return (
        <figure className="rounded-2xl glass p-7 flex flex-col items-start shadow-lg border border-white/10 w-full max-w-md mx-auto mb-6">
            <blockquote className="font-medium text-lg text-zinc-200 mb-3">“{quote}”</blockquote>
            <figcaption className="flex items-center gap-3 mt-auto">
                <span className="inline-flex w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--color-accent))]/60 to-zinc-900 items-center justify-center">
                    <span className="text-xl text-white font-bold">{name[0]}</span>
                </span>
                <div>
                    <div className="font-semibold text-zinc-100 text-base">{name}</div>
                    <div className="text-xs text-zinc-400 font-mono">{title}</div>
                </div>
            </figcaption>
        </figure>
    );
}

// FormInput component
function FormInput({ label, id, error, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; id: string; error?: string }) {
    return (
        <div className="mb-6 w-full max-w-md">
            <label htmlFor={id} className="block mb-1 text-zinc-300 font-medium">{label}</label>
            <input id={id} {...props} className={"w-full p-3 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-100 mb-1 focus-visible:outline-[hsl(var(--color-accent))] " + (error ? 'border-[hsl(var(--color-error))]' : '')} aria-invalid={!!error} />
            {error && <div className="text-xs text-[hsl(var(--color-error))] mt-0.5">{error}</div>}
        </div>
    );
}

// FormTextarea component
function FormTextarea({ label, id, error, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; id: string; error?: string }) {
    return (
        <div className="mb-6 w-full max-w-md">
            <label htmlFor={id} className="block mb-1 text-zinc-300 font-medium">{label}</label>
            <textarea id={id} {...props} className={"w-full p-3 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-100 resize-none mb-1 focus-visible:outline-[hsl(var(--color-accent))] " + (error ? 'border-[hsl(var(--color-error))]' : '')} aria-invalid={!!error} />
            {error && <div className="text-xs text-[hsl(var(--color-error))] mt-0.5">{error}</div>}
        </div>
    );
}

// FormButton component
function FormButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button type="submit" className="inline-block px-6 py-2 rounded-lg font-semibold bg-[hsl(var(--color-accent))] text-black shadow hover:bg-[hsl(var(--color-accent-alt))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" {...props}>{children}</button>
    );
}

// HeroVisualPlaceholder moved to components/HeroVisualPlaceholder

// IconDemo moved to components/IconDemo


