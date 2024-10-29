"use client";
import { useState } from "react";
import PageBorder, { PageBorderProps } from "./components/PageBorder";

export default function Page(): JSX.Element {
  const [borderColor, setBorderColor] =
    useState<PageBorderProps["borderColor"]>("blue");
  const [borderSize, setBorderSize] =
    useState<PageBorderProps["borderSize"]>(12);
  const [roundSize, setRoundSize] = useState<PageBorderProps["roundSize"]>(12);

  return (
    <PageBorder
      borderColor={borderColor}
      borderSize={
        typeof borderSize === "string" ? parseInt(borderSize, 10) : borderSize
      }
      roundSize={
        typeof roundSize === "string" ? parseInt(roundSize, 10) : roundSize
      }
    >
      <div>
        <div>
          <label>borderColor: </label>
          <select onChange={(e) => setBorderColor(e.currentTarget.value)}>
            <option value="blue">blue</option>
            <option value="red">red</option>
            <option value="yellow">yellow</option>
          </select>
        </div>
        <div>
          <label>borderSize: </label>
          <input
            onChange={(e) => setBorderSize(e.currentTarget.value)}
            type="number"
            value={borderSize}
          />
        </div>
        <div>
          <label>roundSize: </label>
          <input
            onChange={(e) => setRoundSize(e.currentTarget.value)}
            type="number"
            value={roundSize}
          />
        </div>
      </div>
      <hr />
      <ul>
        {Array(100)
          .fill(undefined)
          .map((_, index) => (
            <li key={index}>hoge</li>
          ))}
      </ul>
    </PageBorder>
  );
}
