"use client";

import { useState } from "react";
import { PageBorder } from "@/components/PageBorder";

export default function Home() {
  const [borderColor, setBorderColor] = useState("#f59e0b");
  const [borderSize, setBorderSize] = useState(12);
  const [roundSize, setRoundSize] = useState(16);

  return (
    <PageBorder borderColor={borderColor} borderSize={borderSize} roundSize={roundSize} zIndex={10}>
      <div className="container">
        <h1 className="title">react-page-border</h1>
        <p className="subtitle">
          A fixed, rounded border framing the entire page. Tweak the controls below — the border
          updates live.
        </p>

        <section className="section">
          <h2>Live controls</h2>
          <p>
            <code>borderColor</code>, <code>borderSize</code>, <code>roundSize</code>.
          </p>
          <div className="controls">
            <label>
              color
              <input
                type="color"
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
              />
            </label>
            <label>
              borderSize ({borderSize}px)
              <input
                type="range"
                min={2}
                max={32}
                value={borderSize}
                onChange={(e) => setBorderSize(Number(e.target.value))}
              />
            </label>
            <label>
              roundSize ({roundSize}px)
              <input
                type="range"
                min={0}
                max={48}
                value={roundSize}
                onChange={(e) => setRoundSize(Number(e.target.value))}
              />
            </label>
          </div>
        </section>

        <a
          className="github-link"
          href="https://github.com/piro0919/react-page-border"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub →
        </a>
      </div>
    </PageBorder>
  );
}
