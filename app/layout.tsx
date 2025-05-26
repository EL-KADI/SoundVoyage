import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoundVoyage",
  description:
    "Discover traditional musical instruments from cultures around the world through interactive exploration and authentic sounds.",
  keywords: "music, instruments, culture, traditional, world music, heritage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning className={inter.className}>
        {children}
      </body>
    </html>
  );
}
