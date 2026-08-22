import { ImageResponse } from "next/og";

export const alt = "react-page-border";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

const TITLE = "react-page-border";
const DESCRIPTION = "React component that frames the whole page with a rounded border.";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 90px",
        background: "#0b0b0f",
        color: "#ffffff",
      }}
    >
      {/* このパッケージがやることを画像そのものに適用する。
          右に図を置くより、枠が出ている状態を見せるほうが早い */}
      <div
        style={{
          border: "10px solid #38bdf8",
          borderRadius: 40,
          display: "flex",
          height: 574,
          left: 28,
          position: "absolute",
          top: 28,
          width: 1144,
        }}
      />
      <div
        style={{
          display: "flex",
          fontSize: 68,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        {TITLE}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 32,
          marginTop: 28,
          lineHeight: 1.4,
          color: "#a1a1aa",
        }}
      >
        {DESCRIPTION}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 26,
          marginTop: 56,
          color: "#71717a",
        }}
      >
        kkweb.io
      </div>
    </div>,
    size,
  );
}
