import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './content/**/*.{md,mdx}',
        './pages/**/*.{ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                surface: {
                    DEFAULT: 'hsl(var(--surface))',
                    overlay: 'hsl(var(--surface-overlay))',
                    outline: 'hsl(var(--surface-outline))',
                },
                accent: 'hsl(var(--accent))'
            },
            borderRadius: {
                md: '0.6rem',
                lg: '1rem'
            },
            boxShadow: {
                soft: '0 8px 30px rgba(0,0,0,0.12)'
            }
        }
    },
    plugins: []
};

export default config;

