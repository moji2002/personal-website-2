import './globals.css';
import * as React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { DefaultSeo } from 'next-seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Mojtaba Beheshti — Developer Portfolio',
    description: 'I build fast, resilient, beautifully engineered web experiences.',
    metadataBase: new URL('https://mojtaba.dev'),
    openGraph: {
        type: 'website',
        url: 'https://mojtaba.dev',
        siteName: 'Mojtaba Beheshti',
        title: 'Mojtaba Beheshti — Developer Portfolio',
        description: 'I build fast, resilient, beautifully engineered web experiences.',
        images: [
            {
                url: 'https://mojtaba.dev/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Mojtaba Beheshti — Developer Portfolio'
            }
        ],
        locale: 'en_US'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mojtaba Beheshti — Developer Portfolio',
        description: 'I build fast, resilient, beautifully engineered web experiences.',
        images: ['https://mojtaba.dev/og-image.jpg']
    },
    robots: {
        index: true,
        follow: true
    },
    alternates: {
        canonical: 'https://mojtaba.dev'
    },
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
    ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <DefaultSeo
                    titleTemplate="%s | Mojtaba Beheshti"
                    defaultTitle="Mojtaba Beheshti — Developer Portfolio"
                    description="I build fast, resilient, beautifully engineered web experiences."
                    openGraph={{
                        type: 'website',
                        url: 'https://mojtaba.dev',
                        siteName: 'Mojtaba Beheshti',
                        title: 'Mojtaba Beheshti — Developer Portfolio',
                        description: 'I build fast, resilient, beautifully engineered web experiences.',
                        images: [
                            {
                                url: 'https://mojtaba.dev/og-image.jpg',
                                width: 1200,
                                height: 630,
                                alt: 'Mojtaba Beheshti — Developer Portfolio'
                            }
                        ]
                    }}
                    twitter={{
                        cardType: 'summary_large_image'
                    }}
                    additionalMetaTags={[
                        { name: 'theme-color', content: '#0a0a0a', media: '(prefers-color-scheme: dark)' },
                        { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' }
                    ]}
                />
                {/* Default SEO tags (in addition to Next.js Metadata API) */}
                {/* next-seo is installed in package.json */}
                {/* eslint-disable-next-line @next/next/no-head-element */}
                {/* Using DefaultSeo ensures consistent OG/Twitter tags across routes */}
                {/* We keep content aligned with metadata above to avoid divergence */}
                {/* Note: Avoid duplicating tags excessively; Next.js will handle de-duping */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Mojtaba Beheshti",
                        "url": "https://mojtaba.dev",
                        "email": "moji2002@gmail.com",
                        "jobTitle": "Senior Full-Stack Developer",
                        "sameAs": [
                            "https://github.com/moji2002",
                            "https://linkedin.com/in/mojtaba-beheshti"
                        ]
                    }, null, 2)
                }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "Composing Animation with Framer Motion",
                        "description": "Best practices for physics-aware UI with Framer Motion and React.",
                        "author": {
                            "@type": "Person",
                            "name": "Mojtaba Beheshti"
                        },
                        "datePublished": "2025-01-15",
                        "url": "https://mojtaba.dev/blog/composing-animation-framer",
                        "image": "https://mojtaba.dev/og-image.jpg"
                    }, null, 2)
                }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CreativeWork",
                        "name": "Project Name Example",
                        "description": "Refactored a high-scale trading platform UI for speed and reliability.",
                        "url": "https://mojtaba.dev/projects/project-X",
                        "datePublished": "2024-10-01"
                    }, null, 2)
                }} />
            </head>
            <body>
                {/* Sticky Nav */}
                <nav className="sticky top-0 z-50 w-full backdrop-blur bg-zinc-900/70 border-b border-zinc-800/60 shadow-md">
                    <div className="container-grid flex items-center justify-between h-16 px-4 md:px-0">
                        <Link href="/" className="font-bold text-xl text-white tracking-tight">mojtaba.dev</Link>
                        <ul className="flex gap-6 items-center text-zinc-300">
                            <li><Link href="#work" className="hover:text-[hsl(var(--color-accent))]">Work</Link></li>
                            <li><Link href="#about" className="hover:text-[hsl(var(--color-accent))]">About</Link></li>
                            <li><Link href="#writing" className="hover:text-[hsl(var(--color-accent))]">Writing</Link></li>
                            <li><Link href="#contact" className="hover:text-[hsl(var(--color-accent))]">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}


