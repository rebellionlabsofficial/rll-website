import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Studio palette: warm paper, near-black ink, and the lion red from the logo.
        canvas: {
          DEFAULT: "#F7F6F3",
          deep: "#EFEDE8",
        },
        ink: {
          DEFAULT: "#0E0E10",
          soft: "#3B3B41",
          muted: "#66666E",
        },
        line: {
          DEFAULT: "#E4E1DA",
          strong: "#D3CFC6",
        },
        lion: {
          DEFAULT: "#941818",
          dark: "#7A1313",
          tint: "#F5E6E3",
        },
        // PADLR. palette, matching playpadlr.app.
        padlr: {
          neon: "#C8FF00",
          "neon-soft": "#D4FF33",
          ink: "#080809",
          card: "#131314",
          raised: "#1A191B",
          line: "#262527",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "ui-serif", "Georgia", "serif"],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      maxWidth: {
        page: "76rem",
      },
      boxShadow: {
        card: "0 1px 2px rgb(14 14 16 / 0.04), 0 12px 32px -16px rgb(14 14 16 / 0.14)",
        lift: "0 2px 4px rgb(14 14 16 / 0.05), 0 28px 56px -28px rgb(14 14 16 / 0.32)",
        phone:
          "0 50px 100px -40px rgb(0 0 0 / 0.6), 0 30px 60px -30px rgb(0 0 0 / 0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
