/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "rgb(var(--app-primary) / <alpha-value>)",
                "background-light": "#f5f8f8",
                "background-dark": "rgb(var(--app-bg-dark) / <alpha-value>)",
                "surface-dark": "rgb(var(--app-surface-dark) / <alpha-value>)",
                "border-dark": "rgb(var(--app-border-dark) / <alpha-value>)",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
    plugins: [],
}
