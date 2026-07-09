import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Perspectives by AZVA";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function PerspectivesOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F8F4EE",
          color: "#1E2A38",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 36,
            letterSpacing: "-0.05em",
            fontWeight: 600,
          }}
        >
          AZVA / Perspectives
        </div>

        <div>
          <div
            style={{
              fontSize: 88,
              lineHeight: 0.94,
              letterSpacing: "-0.075em",
              fontWeight: 600,
              maxWidth: 980,
            }}
          >
            Ideas that sharpen judgment.
          </div>

          <div
            style={{
              marginTop: 34,
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(14,14,14,0.72)",
              maxWidth: 860,
            }}
          >
            Essays, operating notes, and frameworks on strategy, transformation,
            operational intelligence, venture building, and aligned execution.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#B56E46",
            fontSize: 22,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 70, height: 1, background: "#B56E46" }} />
          azva.us/perspectives
        </div>
      </div>
    ),
    size
  );
}