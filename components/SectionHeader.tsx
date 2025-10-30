"use client";

import * as React from 'react';

export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }): JSX.Element {
    return (
        <header className="mb-10 flex flex-col items-start" aria-label={title + (subtitle ? `: ${subtitle}` : '')}>
            {subtitle && (
                <span className="uppercase tracking-widest text-xs mb-1 font-bold text-[hsl(var(--color-accent))]">{subtitle}</span>
            )}
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[hsl(var(--color-accent))] to-white/90 drop-shadow">{title}</h2>
        </header>
    );
}


