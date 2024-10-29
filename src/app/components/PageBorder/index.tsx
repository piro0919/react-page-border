import { CSSProperties, ReactNode } from "react";
import styled from "@emotion/styled";
import styleToCss from "style-object-to-css-string";

type BorderWrapperProps = {
  borderColor: string;
  borderSize: string | number;
  borderStyle?: CSSProperties;
  marginSize?: string | number;
  roundSize: string | number;
  zIndex?: number;
};

const BorderWrapper = styled.div<BorderWrapperProps>`
  --border-color: ${({ borderColor }) => borderColor};
  --border-size: ${({ borderSize }) =>
    typeof borderSize === "number" ? `${borderSize}px` : borderSize};
  --round-size: ${({ roundSize }) =>
    typeof roundSize === "number" ? `${roundSize}px` : roundSize};
  margin: ${({ borderSize, marginSize }) => {
    const margin = marginSize ?? borderSize;

    return typeof margin === "number" ? `${margin}px` : margin;
  }};
  &::before,
  &::after {
    background: var(--border-color);
    content: "";
    display: block;
    height: var(--border-size);
    left: 0;
    margin-inline: var(--border-size);
    pointer-events: none;
    position: fixed;
    right: 0;
    width: calc(100dvw - var(--border-size) * 2);
    z-index: ${({ zIndex }) => (typeof zIndex === "number" ? zIndex : "auto")};
    ${({ borderStyle }) => (borderStyle ? styleToCss(borderStyle) : "")};
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
`;

type BorderInnerProps = {
  borderStyle?: CSSProperties;
  zIndex?: number;
};

const BorderInner = styled.div<BorderInnerProps>`
  &::before,
  &::after {
    content: "";
    background: var(--border-color);
    bottom: 0;
    display: block;
    height: 100lvh;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: var(--border-size);
    z-index: ${({ zIndex }) => (typeof zIndex === "number" ? zIndex : "auto")};
    ${({ borderStyle }) => (borderStyle ? styleToCss(borderStyle) : "")};
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;
const corner = `
  height: var(--round-size);
  margin: var(--border-size);
  overflow: hidden;
  position: fixed;
  width: var(--round-size);
  &&::before {
    background: var(--border-color);
    content: "";
    display: block;
    height: 200%;
    inset: inherit;
    mask-image: radial-gradient(
      circle,
      transparent calc(100% / 3 * 2.15),
      #000 0%
    );
    mask-composite: exclude;
    position: absolute;
    width: 200%;
    z-index: inherit;
  }
`;

type CornerTopLeftProps = {
  borderStyle?: CSSProperties;
  zIndex?: number;
};

const CornerTopLeft = styled.div<CornerTopLeftProps>`
  ${corner}
  inset: 0 auto auto 0;
  z-index: ${({ zIndex }) => (typeof zIndex === "number" ? zIndex : "auto")};
  &&::before {
    ${({ borderStyle }) => (borderStyle ? styleToCss(borderStyle) : "")};
  }
`;

type CornerTopRightProps = {
  borderStyle?: CSSProperties;
  zIndex?: number;
};

const CornerTopRight = styled.div<CornerTopRightProps>`
  ${corner}
  inset: 0 0 auto auto;
  z-index: ${({ zIndex }) => (typeof zIndex === "number" ? zIndex : "auto")};
  &&::before {
    ${({ borderStyle }) => (borderStyle ? styleToCss(borderStyle) : "")};
  }
`;

type CornerBottomRightProps = {
  borderStyle?: CSSProperties;
  zIndex?: number;
};

const CornerBottomRight = styled.div<CornerBottomRightProps>`
  ${corner}
  inset: auto 0 0 auto;
  z-index: ${({ zIndex }) => (typeof zIndex === "number" ? zIndex : "auto")};
  &&::before {
    ${({ borderStyle }) => (borderStyle ? styleToCss(borderStyle) : "")};
  }
`;

type CornerBottomLeftProps = {
  borderStyle?: CSSProperties;
  zIndex?: number;
};

const CornerBottomLeft = styled.div<CornerBottomLeftProps>`
  ${corner}
  inset: auto auto 0 0;
  z-index: ${({ zIndex }) => (typeof zIndex === "number" ? zIndex : "auto")};
  &&::before {
    ${({ borderStyle }) => (borderStyle ? styleToCss(borderStyle) : "")};
  }
`;

export type PageBorderProps = Pick<
  BorderWrapperProps,
  | "borderColor"
  | "borderSize"
  | "borderStyle"
  | "marginSize"
  | "roundSize"
  | "zIndex"
> &
  Pick<BorderInnerProps, "borderStyle" | "zIndex"> &
  Pick<CornerTopLeftProps, "borderStyle" | "zIndex"> &
  Pick<CornerTopRightProps, "borderStyle" | "zIndex"> &
  Pick<CornerBottomRightProps, "borderStyle" | "zIndex"> &
  Pick<CornerBottomLeftProps, "borderStyle" | "zIndex"> & {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
  };

export default function PageBorder({
  borderColor,
  borderSize,
  borderStyle,
  children,
  className,
  marginSize,
  roundSize,
  style,
  zIndex,
}: PageBorderProps): JSX.Element {
  return (
    <BorderWrapper
      borderColor={borderColor}
      borderSize={borderSize}
      borderStyle={borderStyle}
      className={className}
      marginSize={marginSize}
      roundSize={roundSize}
      style={style}
      zIndex={zIndex}
    >
      <BorderInner borderStyle={borderStyle} zIndex={zIndex}>
        {children}
      </BorderInner>
      <CornerTopLeft borderStyle={borderStyle} zIndex={zIndex} />
      <CornerTopRight borderStyle={borderStyle} zIndex={zIndex} />
      <CornerBottomRight borderStyle={borderStyle} zIndex={zIndex} />
      <CornerBottomLeft borderStyle={borderStyle} zIndex={zIndex} />
    </BorderWrapper>
  );
}
