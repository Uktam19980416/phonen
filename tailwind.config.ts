import { FC } from 'react';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cloud': "url('/images/HG.png')",
        'mountain': "url('/images/MG.png')",
        'list': "url('/images/nextbg.png')",
        'image_18': "url('/images/image_18.png')",
        'image_18_1': "url('/images/image_18_1.png')",
        'image_18_2': "url('/images/image_18_2.png')",
        'dark_hor': "url('/images/Dark_horizontal.png')",
      },
    },
    // backgroundColor: {
    //   'footer-dark': 'rgb(35, 30, 30)',
    // },
    fontFamily: {
      'tenor': ['Tenor Sans', 'sans-serif'],
    }
  },
  plugins: [],
};
export default config;
