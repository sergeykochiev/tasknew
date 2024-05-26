import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "blank-tile-flip": "flip 1s linear"
      },
      keyframes: {
        "flip": {
          "0%": { transform: "rotate3d(0)" },
          "100%": { transform: "rotate3d(180)" }
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minHeight: {
        smscreen: "100svh"
      },
      gridTemplateColumns: {
        "3x128": "repeat(3, 128px)",
        "6x128": "repeat(6, 128px)",
        "12x128": "repeat(12, 128px)",
      },
      gridTemplateRows: {
        "4x128": "repeat(4, 128px)",
        "back-grid": "repeat(6, 128px)"
      },
      gridAutoRows: {
        "main": "128px"
      },
      gridAutoColumns: {
        "main": "128px"
      },
      colors: {
        "accent": "#40ACCE",
        "back": "#F3F3F3",
        "dark": "#494949"
      },
    },
  },
  plugins: [],
};
export default config;
