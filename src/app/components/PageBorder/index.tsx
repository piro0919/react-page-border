import { CSSProperties, ReactNode } from "react";
import styled from "@emotion/styled";

type BorderWrapperProps = {
  borderColor: string;
  borderSize: string | number;
  roundSize: string | number;
  zIndex?: number;
};

const BorderWrapper = styled.div<BorderWrapperProps>`
  --border-color: ${({ borderColor }) => borderColor};
  --border-size: ${({ borderSize }) =>
    typeof borderSize === "number" ? `${borderSize}px` : borderSize};
  --round-size: ${({ roundSize }) =>
    typeof roundSize === "number" ? `${roundSize}px` : roundSize};
  margin: var(--border-size);
  &::before,
  &::after {
    background: var(--border-color);
    content: "";
    display: block;
    height: var(--border-size);
    left: 0;
    pointer-events: none;
    position: fixed;
    right: 0;
    width: 100dvw;
    z-index: ${({ zIndex }) => (typeof zIndex === "number" ? zIndex : "auto")};
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
`;

type BorderInnerProps = {
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
  zIndex?: number;
};

const CornerTopLeft = styled.div<CornerTopLeftProps>`
  ${corner}
  inset: 0 auto auto 0;
  z-index: ${({ zIndex }) => (typeof zIndex === "number" ? zIndex : "auto")};
`;

type CornerTopRightProps = {
  zIndex?: number;
};

const CornerTopRight = styled.div<CornerTopRightProps>`
  ${corner}
  inset: 0 0 auto auto;
  z-index: ${({ zIndex }) => (typeof zIndex === "number" ? zIndex : "auto")};
`;

type CornerBottomRightProps = {
  zIndex?: number;
};

const CornerBottomRight = styled.div<CornerBottomRightProps>`
  ${corner}
  inset: auto 0 0 auto;
  z-index: ${({ zIndex }) => (typeof zIndex === "number" ? zIndex : "auto")};
`;

type CornerBottomLeftProps = {
  zIndex?: number;
};

const CornerBottomLeft = styled.div<CornerBottomLeftProps>`
  ${corner}
  inset: auto auto 0 0;
  z-index: ${({ zIndex }) => (typeof zIndex === "number" ? zIndex : "auto")};
`;

export type PageBorderProps = Pick<
  BorderWrapperProps,
  "borderColor" | "borderSize" | "roundSize" | "zIndex"
> &
  Pick<BorderInnerProps, "zIndex"> &
  Pick<CornerTopLeftProps, "zIndex"> &
  Pick<CornerTopRightProps, "zIndex"> &
  Pick<CornerBottomRightProps, "zIndex"> &
  Pick<CornerBottomLeftProps, "zIndex"> & {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
  };

export default function PageBorder({
  borderColor,
  borderSize,
  children,
  className,
  roundSize,
  style,
  zIndex,
}: PageBorderProps): JSX.Element {
  return (
    <BorderWrapper
      borderColor={borderColor}
      borderSize={borderSize}
      className={className}
      roundSize={roundSize}
      style={style}
      zIndex={zIndex}
    >
      <BorderInner zIndex={zIndex}>{children}</BorderInner>
      <CornerTopLeft zIndex={zIndex} />
      <CornerTopRight zIndex={zIndex} />
      <CornerBottomRight zIndex={zIndex} />
      <CornerBottomLeft zIndex={zIndex} />
    </BorderWrapper>
  );
}
