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
        "bg-dark": "#2E2E2E",
        "main-blue": "#00C2FF",
        "main-dark": "#404040",
        "tile-gray": "#E2E2E2",
        "main-gray": "#D9D9D9",
        "tile-red": "#F34D4D",
        "blanktile": "#353535",
        "tile-dark-gray": "363636"
      },
    },
  },
  plugins: [],
};
export default config;
