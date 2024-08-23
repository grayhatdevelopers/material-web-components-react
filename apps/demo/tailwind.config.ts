import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /opacity-(.)/,
    },
    {
      pattern: /text-(xs|sm|md|lg|xl|2xl|3xl)/,
    },
    {
      pattern: /rounded-(xs|sm|md|lg|xl|2xl|3xl)/,
    },
    {
      pattern: /p(y|t|x|b|l|r)-(.)/,
    },
    {
      pattern: /gap-(y|t|x|b)-(.)/,
    },
    {
      pattern: /flex-(.)/,
    },
    {
      pattern: /bg-(.)/,
    },
    {
      pattern: /bg-[#313033]/,
    },
    {
      pattern: /min-(w|h)-(.)/,
    },
    {
      pattern: /max-(w|h)-(.)/,
    },
    {
      pattern: /([a-zA-Z]+)-./,
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
