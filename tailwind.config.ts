import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl2: "1440px",
        xl3: "1768px",
        xl4: "1920px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        poppins: ["var(--font-poppins)"],
        alumni: ["var(--font-alumni)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;
