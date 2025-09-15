/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0B1C2C',
                secondary: '#E6E6E6',
                tertiary: '#3A3F47',
                background: '#FAFAFA',
                cta: '#1177FF',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};


