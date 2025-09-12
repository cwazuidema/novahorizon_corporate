/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                navy: '#0B1C2C',
                platinum: '#E6E6E6',
                graphite: '#3A3F47',
                paper: '#FAFAFA',
                hadfield_blue: '#1177FF',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};


