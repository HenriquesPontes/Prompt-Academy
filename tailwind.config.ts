import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        ink: "#2A2A2A",
        "ink-soft": "#5A5A5A",
        "chrome-bg": "#F2EEE6",
        "chrome-text": "#3D3D3D",
        "chrome-text-soft": "#7A7A7A",
        hairline: "#E4DFD4",
        accent: "#1E2A3A",
        "accent-deep-green": "#2D5F4A",
        "accent-warm": "#B8732A",
        selection: "#D6E4D8",
        highlight: "#EFE8D8",
        success: "#2D5F4A",
        warning: "#8B5A1E",
        error: "#8B2D2A",
        "ai-surface": "#FFFFFF",
        "ai-reference-bg": "#E8F3FF",
        "ai-reference-text": "#1F5D88",
        submit: "#000000",
        "submit-hover": "#1F1F1F",
      },
      fontFamily: {
        geist: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: [
          "IBM Plex Serif",
          "Iowan Old Style",
          "Georgia",
          "serif",
        ],
        mono: ["JetBrains Mono", "SF Mono", "Menlo", "monospace"],
      },
      fontSize: {
        doc: ["1.125rem", { lineHeight: "1.7" }],
        "doc-h3": ["1.5rem", { lineHeight: "1.3" }],
        "doc-h2": ["2rem", { lineHeight: "1.2" }],
        "doc-h1": ["3rem", { lineHeight: "1.1" }],
        display: ["2.5rem", { lineHeight: "1.1" }],
        "display-md": ["3.25rem", { lineHeight: "1.05" }],
        "display-lg": ["5rem", { lineHeight: "1.05" }],
      },
      borderRadius: {
        DEFAULT: "6px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        pill: "999px",
      },
      boxShadow: {
        modal: "0 4px 24px rgb(42 42 42 / 8%)",
        composer: "0 10px 30px rgb(42 42 42 / 12%)",
        doc: "0 1px 2px rgb(42 42 42 / 8%)",
        hero: "0 24px 48px -12px rgb(42 42 42 / 10%), 0 8px 20px -8px rgb(42 42 42 / 6%)",
      },
      maxWidth: {
        measure: "44rem",
        page: "72rem",
      },
      transitionTimingFunction: {
        skribe: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
