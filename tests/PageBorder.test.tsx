import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { PageBorder } from "../src";

describe("PageBorder", () => {
  it("renders children", () => {
    const { getByText } = render(
      <PageBorder borderColor="red" borderSize={4} roundSize={8}>
        <span>inside</span>
      </PageBorder>,
    );
    expect(getByText("inside")).toBeInTheDocument();
  });

  it("emits 4 bars and 4 corners", () => {
    const { container } = render(<PageBorder borderColor="red" borderSize={4} roundSize={8} />);
    expect(container.querySelectorAll("[data-part^='bar-']")).toHaveLength(4);
    expect(container.querySelectorAll("[data-part^='corner-']")).toHaveLength(4);
  });

  it("sets CSS variables from props", () => {
    const { container } = render(
      <PageBorder borderColor="rgb(0, 255, 0)" borderSize="16px" roundSize="24px" />,
    );
    const root = container.querySelector<HTMLElement>("[data-page-border]")!;
    expect(root.style.getPropertyValue("--rpb-border-color")).toBe("rgb(0, 255, 0)");
    expect(root.style.getPropertyValue("--rpb-border-size")).toBe("16px");
    expect(root.style.getPropertyValue("--rpb-round-size")).toBe("24px");
  });

  it("coerces numeric sizes to px", () => {
    const { container } = render(<PageBorder borderColor="red" borderSize={12} roundSize={20} />);
    const root = container.querySelector<HTMLElement>("[data-page-border]")!;
    expect(root.style.getPropertyValue("--rpb-border-size")).toBe("12px");
    expect(root.style.getPropertyValue("--rpb-round-size")).toBe("20px");
    expect(root.style.margin).toBe("12px");
  });

  it("uses marginSize override when provided", () => {
    const { container } = render(
      <PageBorder borderColor="red" borderSize={12} roundSize={20} marginSize={32} />,
    );
    const root = container.querySelector<HTMLElement>("[data-page-border]")!;
    expect(root.style.margin).toBe("32px");
  });

  it("applies zIndex to fixed pieces", () => {
    const { container } = render(
      <PageBorder borderColor="red" borderSize={4} roundSize={8} zIndex={500} />,
    );
    const top = container.querySelector<HTMLElement>("[data-part='bar-top']")!;
    expect(top.style.zIndex).toBe("500");
  });
});
