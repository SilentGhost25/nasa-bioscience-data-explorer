import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NASA Biospace - Interactive Research Dashboard",
  description: "Explore 608 NASA bioscience publications through AI-powered visualizations and interactive games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}