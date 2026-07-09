import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "AZVA | Purpose Aligned. Value Delivered.";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
            fontSize: 42,
            letterSpacing: "-0.06em",
            fontWeight: 600,
          }}
        >
          AZVA
        </div>

        <div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 0.92,
              letterSpacing: "-0.075em",
              fontWeight: 600,
              maxWidth: 940,
            }}
          >
            Purpose Aligned.
            <br />
            Value Delivered.
          </div>

          <div
            style={{
              marginTop: 34,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#0E0E0E",
              maxWidth: 820,
            }}
          >
            Strategic transformation, operational intelligence, venture partnerships, and PRIZM.
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
          azva.us
        </div>
      </div>
    ),
    size
  );
}