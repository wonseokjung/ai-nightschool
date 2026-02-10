/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#030712',
                'bg-secondary': '#0b1120',
                'bg-card': 'rgba(17, 24, 39, 0.7)',
                'accent-primary': '#3b82f6',
                'accent-secondary': '#8b5cf6',
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
