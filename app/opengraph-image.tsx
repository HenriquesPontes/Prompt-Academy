import { ImageResponse } from "next/og";

export const alt =
  "Prompt Academy — The Ultimate Vibe Coding Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a2947", // Blueprint navy
          color: "#ffffff", // White text
          padding: "96px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{ fontSize: 36, letterSpacing: "-0.01em", fontWeight: 500 }}
        >
          Prompt Academy
        </div>
        <div
          style={{
            fontSize: 84,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Master Vibe Coding.</span>
          <span style={{ color: "#6fd6a8" }}>Build modern software with AI.</span>
        </div>
        <div style={{ fontSize: 28, color: "#f2a93b" }}>
          By Henrique Pontes
        </div>
      </div>
    ),
    size,
  );
}
