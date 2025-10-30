"use client";

import * as React from 'react';
import SectionHeader from './SectionHeader';

export default function IconDemo(): JSX.Element {
    return (
        <section className="container-grid py-16" aria-labelledby="icon-demo-heading">
            <SectionHeader title="Iconography Demo" subtitle="Thin-stroke, Grid, Monochrome" />
            <div className="flex gap-8 items-center bg-zinc-900/40 p-8 rounded-xl border border-zinc-800 justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-label="Home icon"><path d="M3 11.4 12 4l9 7.4" /><path d="M9 21V14h6v7" /><path d="M19 21V12.7M5 21V12.7" /></svg>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-label="Code icon"><path d="M16 18 22 12 16 6" /><path d="M8 6 2 12l6 6" /></svg>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-label="Link icon"><path d="M10 14 21 3M17 3h4v4" /><rect x="3" y="9" width="10" height="13" rx="2" /></svg>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-label="Mail icon"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 8.1 7.1a2 2 0 0 0 2.6 0L21 7" /></svg>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-label="Check icon"><path d="m5 13 4 4L19 7" /></svg>
            </div>
        </section>
    );
}


