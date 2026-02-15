import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Leaf Automotive | Mobile Diagnostics, Coding, and Retrofits",
  description:
    "Mobile VWAG diagnostics, coding, retrofits, pre-purchase checks, and ADAS reset support across Lincolnshire, Nottinghamshire, Derbyshire, and South Yorkshire.",
  metadataBase: new URL("https://newleafautomotive.com"),
  keywords: [
    "New Leaf Automotive",
    "mobile VAG diagnostics",
    "VAG coding",
    "reverse camera retrofit",
    "VW coding",
    "Audi diagnostics",
    "Skoda diagnostics",
    "SEAT diagnostics",
    "pre purchase vehicle diagnostics",
    "Lincolnshire mobile diagnostics"
  ],
  openGraph: {
    title: "New Leaf Automotive",
    description:
      "Mobile diagnostics, coding, and retrofit support for VW, Audi, SEAT, and Skoda across four counties.",
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
      <body>{children}</body>
    </html>
  );
}
