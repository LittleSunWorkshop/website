import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Little Sun Workshop",
    template: "%s · Little Sun Workshop",
  },
  description:
    "Handcrafted jewelry made in Phoenix, Arizona—small-batch pieces inspired by color, desert light, and everyday joy.",
  keywords: [
    "handcrafted jewelry",
    "Phoenix jewelry",
    "Arizona maker",
    "beaded jewelry",
    "Little Sun Workshop",
  ],
  openGraph: {
    title: "Little Sun Workshop",
    description:
      "Handcrafted jewelry made with color, care, and a little Phoenix sun.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
