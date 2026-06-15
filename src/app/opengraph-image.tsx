import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AETH — Built for the AI Era";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,45,85,0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "14px solid transparent",
              borderRight: "14px solid transparent",
              borderBottom: "24px solid #FF2D55",
            }}
          />
          <span style={{ color: "#ffffff", fontSize: 72, fontWeight: 700, letterSpacing: "-0.04em" }}>
            AETH
          </span>
        </div>
        <span style={{ color: "#00F0FF", fontSize: 16, letterSpacing: "0.2em", textTransform: "uppercase" as const, marginBottom: 24 }}>
          Built for the AI Era
        </span>
        <span style={{ color: "#888888", fontSize: 28, maxWidth: 700, textAlign: "center" as const, lineHeight: 1.4 }}>
          Your website should do more than exist.
        </span>
        <div style={{ display: "flex", gap: 24, marginTop: 40 }}>
          <span style={{ color: "#00F0FF", fontSize: 14, letterSpacing: "0.15em" }}>AI_READINESS: 94%</span>
          <span style={{ color: "#00F0FF", fontSize: 14, letterSpacing: "0.15em" }}>LLM_PARSE: 99.8%</span>
          <span style={{ color: "#00F0FF", fontSize: 14, letterSpacing: "0.15em" }}>SEO_HEALTH: 98/100</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
