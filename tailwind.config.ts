import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#8B1A1A",
          "red-dark": "#6B1414",
          "red-light": "#A52020",
        },
        surface: {
          white: "#FFFFFF",
          grey: "#F5F5F5",
        },
        text: {
          heading: "#1A1A1A",
          body: "#4A4A4A",
          light: "#6B7280",
        },
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
