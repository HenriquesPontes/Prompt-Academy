import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#0a2947",
        ink: "#ffffff",
        "ink-soft": "#b8d1ea",
        "chrome-bg": "#071b30",
        "chrome-text": "#ffffff",
        "chrome-text-soft": "#a6c1db",
        hairline: "rgba(255,255,255,0.3)",
        accent: "#f2a93b",
        "accent-deep-green": "#e09825",
        "accent-warm": "#f2a93b",
        selection: "rgba(242, 169, 59, 0.2)",
        highlight: "#123759",
        success: "#6fd6a8",
        warning: "#f2a93b",
        error: "#ef6f5c",
        "ai-surface": "#071b30",
        "ai-reference-bg": "#123759",
        "ai-reference-text": "#ffffff",
        submit: "#ffffff",
        "submit-hover": "#e2e2e2",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["IBM Plex Mono", "JetBrains Mono", "monospace"],
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
