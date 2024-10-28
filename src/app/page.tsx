"use client";
import PageBorder from "./components/PageBorder";

export default function Page(): JSX.Element {
  return (
    <PageBorder borderColor="blue" borderSize={12} roundSize={12}>
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
