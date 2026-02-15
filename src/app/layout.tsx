import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
      <body>
        <header className="site-header" aria-label="Primary site header">
          <div className="site-header-inner">
            <Link className="logo-wrap" href="/" aria-label="New Leaf Automotive home">
              <Image
                src="/brand/logo.jpeg"
                alt="New Leaf Automotive logo"
                width={200}
                height={200}
                priority
              />
            </Link>
            <nav className="hero-nav" aria-label="Primary navigation">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/#work">Work</Link>
              <Link className="nav-cta" href="/#book">
                Book Mobile Visit
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
