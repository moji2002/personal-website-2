"use client";

import * as React from 'react';

function getInitialIsLight(): boolean {
    if (typeof window === 'undefined') return false;
    try {
        const stored = window.localStorage.getItem('theme');
        if (stored === 'light') return true;
        if (stored === 'dark') return false;
        return window.matchMedia('(prefers-color-scheme: light)').matches;
    } catch {
        return false;
    }
}

export default function ThemeToggle(): JSX.Element {
    const [isLight, setIsLight] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsLight(getInitialIsLight());
    }, []);

    React.useEffect(() => {
        if (typeof document === 'undefined') return;
        if (isLight) {
            document.documentElement.classList.add('light');
            try { localStorage.setItem('theme', 'light'); } catch {}
        } else {
            document.documentElement.classList.remove('light');
            try { localStorage.setItem('theme', 'dark'); } catch {}
        }
    }, [isLight]);

    return (
        <button
            type="button"
            aria-label="Toggle theme"
            className="inline-flex items-center gap-2 rounded-md border border-[hsl(var(--surface-outline))] px-3 py-1.5 text-sm text-zinc-200 hover:bg-[hsl(var(--surface-overlay))] transition-colors"
            onClick={() => setIsLight(v => !v)}
        >
            {isLight ? (
                <span>Light</span>
            ) : (
                <span>Dark</span>
            )}
        </button>
    );
}


