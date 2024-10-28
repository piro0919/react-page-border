import { ReactNode } from "react";
import styled from "@emotion/styled";

type BorderWrapperProps = {
  borderColor: string;
  borderSize: string | number;
  roundSize: string | number;
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
    height: var(--border-size);
    left: 0;
    pointer-events: none;
    position: fixed;
    right: 0;
    width: 100dvw;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
`;
const BorderInner = styled.div`
  &::before,
  &::after {
    content: "";
    background: var(--border-color);
    bottom: 0;
    height: 100lvh;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: var(--border-size);
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
  }
`;
const CornerTopLeft = styled.div`
  ${corner}
  inset: 0 auto auto 0;
`;
const CornerTopRight = styled.div`
  ${corner}
  inset: 0 0 auto auto;
`;
const CornerBottomRight = styled.div`
  ${corner}
  inset: auto 0 0 auto;
`;
const CornerBottomLeft = styled.div`
  ${corner}
  inset: auto auto 0 0;
`;

export type PageBorderProps = Pick<
  BorderWrapperProps,
  "borderColor" | "borderSize" | "roundSize"
> & {
  children: ReactNode;
  className?: string;
};

export default function PageBorder({
  borderColor,
  borderSize,
  children,
  className,
  roundSize,
}: PageBorderProps): JSX.Element {
  return (
    <BorderWrapper
      borderColor={borderColor}
      borderSize={borderSize}
      className={className}
      roundSize={roundSize}
    >
      <BorderInner>{children}</BorderInner>
      <CornerTopLeft />
      <CornerTopRight />
      <CornerBottomRight />
      <CornerBottomLeft />
    </BorderWrapper>
  );
}
