/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                'custom-cols': '2fr 1fr',
            },
        },
    },
    plugins: [],
};
