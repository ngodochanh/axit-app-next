import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['raleway'],
      },
      keyframes: {
        slideDown: {
          from: { transform: 'translateX(-100%)' },
          top: { transform: 'translateX(0%)' },
        },
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
      },
      backgroundImage: {
        'slider-bg': 'url("/Images/header.jpg")',
      },
      backgroundPosition: {
        'center-top': 'center top',
      },
      colors: {
        desc: '#ccc',
        primary: '#ff8b38',
        primarySecond: '#ff9b51',
        title: '#333',
        whiteSecond: '#f5f5f5',
      },
      screens: {
        's': '454px',
      },
    },
  },
  plugins: [],
};
export default config;
