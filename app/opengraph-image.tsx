import { ImageResponse } from "next/og";

export const alt =
  "Skribe — The markdown writing app for people who build with AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          color: "#2a2a2a",
          padding: "96px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "serif",
        }}
      >
        <div
          style={{ fontSize: 36, letterSpacing: "-0.01em", fontWeight: 500 }}
        >
          Skribe
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
          <span>Markdown, made beautiful.</span>
          <span style={{ color: "#5a5a5a" }}>Edited by Claude Code.</span>
        </div>
        <div style={{ fontSize: 28, color: "#5a5a5a" }}>
          macOS · Free · Forever
        </div>
      </div>
    ),
    size,
  );
}
