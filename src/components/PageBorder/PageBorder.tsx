import type { CSSProperties, ReactNode } from "react";

export type PageBorderProps = {
  children?: ReactNode;
  borderColor: string;
  borderSize: string | number;
  roundSize: string | number;
  /** Margin applied to children content. Defaults to `borderSize`. */
  marginSize?: string | number;
  /** Extra CSS applied to every border/corner piece. */
  borderStyle?: CSSProperties;
  /** Stacking context for the fixed pieces. */
  zIndex?: number;
  /** Class for the wrapper element. */
  className?: string;
  /** Inline style for the wrapper element. */
  style?: CSSProperties;
};

function toPx(v: string | number): string {
  return typeof v === "number" ? `${v}px` : v;
}

const FIXED_BASE: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
};

const CORNER_BASE: CSSProperties = {
  ...FIXED_BASE,
  overflow: "hidden",
};

const CORNER_MASK: CSSProperties = {
  content: '""',
  display: "block",
  position: "absolute",
  inset: "inherit",
  width: "200%",
  height: "200%",
  maskImage: "radial-gradient(circle, transparent calc(100% / 3 * 2.15), #000 0%)",
  WebkitMaskImage: "radial-gradient(circle, transparent calc(100% / 3 * 2.15), #000 0%)",
  maskComposite: "exclude",
  WebkitMaskComposite: "source-out",
};

export function PageBorder({
  children,
  borderColor,
  borderSize,
  roundSize,
  marginSize,
  borderStyle,
  zIndex,
  className,
  style,
}: PageBorderProps) {
  const sizeCss = toPx(borderSize);
  const roundCss = toPx(roundSize);
  const margin = toPx(marginSize ?? borderSize);

  const cssVars = {
    "--rpb-border-color": borderColor,
    "--rpb-border-size": sizeCss,
    "--rpb-round-size": roundCss,
  } as CSSProperties;

  const wrapperStyle: CSSProperties = {
    margin,
    ...cssVars,
    ...style,
  };

  const horizontalBar: CSSProperties = {
    ...FIXED_BASE,
    background: "var(--rpb-border-color)",
    left: 0,
    right: 0,
    marginInline: "var(--rpb-border-size)",
    height: "var(--rpb-border-size)",
    width: "calc(100dvw - var(--rpb-border-size) * 2)",
    zIndex: typeof zIndex === "number" ? zIndex : undefined,
    ...borderStyle,
  };

  const verticalBar: CSSProperties = {
    ...FIXED_BASE,
    background: "var(--rpb-border-color)",
    top: 0,
    bottom: 0,
    width: "var(--rpb-border-size)",
    height: "100dvh",
    zIndex: typeof zIndex === "number" ? zIndex : undefined,
    ...borderStyle,
  };

  const cornerStyle: CSSProperties = {
    ...CORNER_BASE,
    width: "var(--rpb-round-size)",
    height: "var(--rpb-round-size)",
    margin: "var(--rpb-border-size)",
    zIndex: typeof zIndex === "number" ? zIndex : undefined,
  };

  const cornerInnerStyle: CSSProperties = {
    ...CORNER_MASK,
    background: "var(--rpb-border-color)",
    ...borderStyle,
  };

  return (
    <div data-page-border="" className={className} style={wrapperStyle}>
      {/* Top bar */}
      <div data-part="bar-top" style={{ ...horizontalBar, top: 0 }} />
      {/* Bottom bar */}
      <div data-part="bar-bottom" style={{ ...horizontalBar, bottom: 0 }} />
      {/* Left bar */}
      <div data-part="bar-left" style={{ ...verticalBar, left: 0 }} />
      {/* Right bar */}
      <div data-part="bar-right" style={{ ...verticalBar, right: 0 }} />
      {/* Corners */}
      <div data-part="corner-tl" style={{ ...cornerStyle, inset: "0 auto auto 0" }}>
        <div style={cornerInnerStyle} />
      </div>
      <div data-part="corner-tr" style={{ ...cornerStyle, inset: "0 0 auto auto" }}>
        <div style={cornerInnerStyle} />
      </div>
      <div data-part="corner-br" style={{ ...cornerStyle, inset: "auto 0 0 auto" }}>
        <div style={cornerInnerStyle} />
      </div>
      <div data-part="corner-bl" style={{ ...cornerStyle, inset: "auto auto 0 0" }}>
        <div style={cornerInnerStyle} />
      </div>
      {children}
    </div>
  );
}
