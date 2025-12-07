/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#00df9a',
                secondary: '#00b37e',
                dark: '#101010', // Updated to match reference rgb(16, 16, 16)
                darkLight: '#1d1d1d', // Slightly lighter for cards
                textMain: '#dfdfdf', // rgb(223, 223, 223)
                textMuted: '#9ca3af', // approx rgba(243, 243, 243, 0.596)
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
