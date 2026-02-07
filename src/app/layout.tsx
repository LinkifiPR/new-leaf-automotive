import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800", "900"]
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "New Leaf Automotive | Mobile VAG Diagnostics & Coding",
  description:
    "Mobile VAG diagnostics, coding, and retrofits for VW, Audi, SEAT, and Skoda. New Leaf Automotive covers Lincolnshire with home and work appointments.",
  metadataBase: new URL("https://newleafautomotive.com"),
  keywords: [
    "New Leaf Automotive",
    "mobile VAG diagnostics",
    "VAG coding",
    "VW coding",
    "Audi diagnostics",
    "Skoda diagnostics",
    "SEAT diagnostics",
    "Lincolnshire mobile diagnostics"
  ],
  openGraph: {
    title: "New Leaf Automotive",
    description:
      "Mobile diagnostics and coding for VW, Audi, SEAT, and Skoda across Lincolnshire.",
    type: "website",
    url: "https://newleafautomotive.com"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${rajdhani.variable}`}>{children}</body>
    </html>
  );
}
