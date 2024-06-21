import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "tt-blue": "#00A3FF",
                "tt-white": "#FAFAFA",
                "tt-lightgray": "#EEEEEE",
                "tt-gray": "#BABABA",
                "tt-red": "#FF3535",
                "tt-black": "#121212",
                "tt-darkgray": "#686868"
            },
            fontSize: {
                "tiny": "10px",
                "caption": "12px",
                "button": "14px",
                "body": "16px",
                "subtitle": "20px",
                "title": "24px",
                "heading": "32px",
                "biggest": "48px"
            },
            gap: {
                "tiny": "8px",
                "small": "12px",
                "regular": "16px",
                "def": "20px",
                "big": "32px",
                "bigger": "48px",
                "biggest": "64px"
            },
            height: {
                "def": "44px"
            }
        },
    },
    plugins: [],
};
export default config;
