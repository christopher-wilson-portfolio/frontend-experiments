/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "index.html",
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {},
        fontSize: {
            'xl': '1.5rem',
            '2xl': '2rem',
            '3xl': '3rem',
        }
    },
    plugins: [],
}