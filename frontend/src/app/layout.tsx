import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonis Bergman | Software Engineer",
  description:
    "Software engineer with experience in React, TypeScript and operational tools. Explore my projects, technical demos and approach to building usable web applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
