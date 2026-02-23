import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-mango': 'linear-gradient(135deg, #FFB74D 0%, #FFA726 100%)',
        'gradient-chocolate': 'linear-gradient(135deg, #8D6E63 0%, #5D4037 100%)',
        'gradient-pomegranate': 'linear-gradient(135deg, #E57373 0%, #C62828 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
