import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NIDO — A Rooftop Café. Coffee. Food. Conversations.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const birdSvg =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#F6F1E6'><path d='M14.4 12.4 22 6.6l-1.9 6.6z'/><ellipse cx='12' cy='13.2' rx='6.2' ry='4.5' transform='rotate(-17 12 13.2)'/><circle cx='7.5' cy='9.7' r='2.95'/><path d='M5.1 9.1 1.4 9.7l3.7 1.5z'/></svg>`,
  );

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(160deg, #3B4326 0%, #2E3319 55%, #4A5330 100%)",
          color: "#F6F1E6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#CBD3B0",
          }}
        >
          A Rooftop Café
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 18,
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={birdSvg}
            width={64}
            height={64}
            alt=""
            style={{ position: "absolute", top: -34, left: 128 }}
          />
          <div style={{ fontSize: 190, fontWeight: 600, letterSpacing: -6 }}>
            nido
          </div>
        </div>
        <div
          style={{
            fontSize: 40,
            marginTop: 6,
            fontStyle: "italic",
            color: "#E6E9D6",
          }}
        >
          Coffee. Food. Conversations.
        </div>
      </div>
    ),
    { ...size },
  );
}
