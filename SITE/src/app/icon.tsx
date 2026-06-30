import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0b0f",
          borderRadius: 6,
          border: "1px solid rgba(0,229,199,0.3)",
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "#00e5c7",
            fontFamily: "system-ui",
          }}
        >
          R
        </span>
      </div>
    ),
    { ...size }
  );
}
