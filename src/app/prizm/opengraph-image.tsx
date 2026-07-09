import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "PRIZM by AZVA";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function PrizmOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1E2A38",
          color: "#F8F4EE",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 34,
            letterSpacing: "-0.05em",
            fontWeight: 600,
          }}
        >
          <span>AZVA</span>
          <span style={{ color: "#B56E46" }}>PRIZM™</span>
        </div>

        <div>
          <div
            style={{
              fontSize: 86,
              lineHeight: 0.94,
              letterSpacing: "-0.075em",
              fontWeight: 600,
              maxWidth: 980,
            }}
          >
            Quantifying confidence in operational intelligence.
          </div>

          <div
            style={{
              marginTop: 34,
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(248,244,238,0.72)",
              maxWidth: 860,
            }}
          >
            Automation readiness. Transformation potential. Enterprise value.
          </div>
        </div>

        <div style={{ display: "flex", gap: 18 }}>
          {["AFI", "AVI", "ARI", "ACI"].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid rgba(248,244,238,0.18)",
                borderRadius: 24,
                padding: "18px 28px",
                fontSize: 30,
                fontWeight: 600,
                letterSpacing: "-0.05em",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}