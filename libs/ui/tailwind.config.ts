import type { Config } from 'tailwindcss';
import sharedConfig from '@irachus/tailwind/tailwind.config';

const config: Config = {
  content: [
    './src/atoms/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/molecules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/organismes/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      logo: ['Oswald']
    },

    extend: {
      colors: {
        ...sharedConfig.theme.extend.colors
      }
    }
  },
  plugins: []
};
export default config;
