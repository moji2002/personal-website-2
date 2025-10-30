"use client";

import * as React from 'react';

export default function HeroVisualPlaceholder(): JSX.Element {
    return (
        <div
            className="absolute inset-0 rounded-2xl z-0 overflow-hidden pointer-events-none"
            aria-label="Hero visual placeholder for future Three.js/WebGL"
        >
            <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--color-accent))]/[.12] to-zinc-900 blur-2xl animate-pulse" />
        </div>
    );
}


