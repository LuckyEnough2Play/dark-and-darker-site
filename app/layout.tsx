// /app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import Navbar from "../components/Navbar";
import SessionWrapper from "../components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luck & Loot - Dark and Darker Hub",
  description: "Community guides, patch notes, and more for Dark and Darker.",
  openGraph: {
    title: "Luck & Loot - Dark and Darker Hub",
    description: "Community guides, patch notes, and more for Dark and Darker.",
    url: "https://luckandloot.gg",
    siteName: "Luck & Loot",
    images: [
      {
        url: "/metatag_banner.png",
        width: 1200,
        height: 630,
        alt: "Luck & Loot - Dark and Darker Hub",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luck & Loot - Dark and Darker Hub",
    description: "Community guides, patch notes, and more for Dark and Darker.",
    images: ["/metatag_banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionWrapper>
          <Navbar />
        </SessionWrapper>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
