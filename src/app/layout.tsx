import type { Metadata } from "next";
import "./globals.css";
import "ress";

export const metadata: Metadata = {
  title: "react-page-border",
  description:
    "react-page-border is a react component that adds rounded borders to the entire page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
