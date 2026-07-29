import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Little Sun Workshop",
    template: "%s · Little Sun Workshop",
  },
  description:
    "Small-batch, handmade beaded jewelry inspired by color, desert light, and everyday joy.",
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
