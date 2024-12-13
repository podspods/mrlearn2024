import type { Config } from "tailwindcss";
import sharedConfig from '@irachus/tailwind/tailwind.config';
import sharedConfigUI from '@irachus/ui/tailwind.config';

const config: Config = {
  ...sharedConfigUI,
  content: [
    "./src/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@irachus/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
    // "@irachus/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      
      colors: {
        ...sharedConfigUI.theme?.extend?.colors,
        primary: {
          100: '#f6eaea',
          200: '#ecd0d0',
          300: '#e4bdbd',
          400: '#d29797',
          500: '#d29797',
          600: '#a95959',
          700: '#8d4848',
          800: '#763e3e',
          900: '#643838'
        },
      }
    },
  },
  plugins: [],
};
export default config;
