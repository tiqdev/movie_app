/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./public/index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'm_black': '#121212',
                'm_yellow': '#ffc800',
                'm_brown': "#74420f"
            },

        },
    },
    plugins: [],
}

