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
            backgroundImage: {
                overlay_pattern_dark_bottom:
                    "linear-gradient(to bottom, transparent, #121212 90%)",
                overlay_pattern_dark_top:
                    "linear-gradient(to top, transparent, #121212 90%)",

            }

        },
    },
    plugins: [],
}

