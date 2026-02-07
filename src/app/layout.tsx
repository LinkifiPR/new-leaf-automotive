import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Leaf Automotive | Trusted Local Auto Care",
  description:
    "New Leaf Automotive offers reliable vehicle inspections, servicing, diagnostics, and repairs with transparent pricing.",
  metadataBase: new URL("https://newleafautomotive.com"),
  keywords: [
    "New Leaf Automotive",
    "auto repair",
    "vehicle servicing",
    "car diagnostics",
    "mechanic"
  ],
  openGraph: {
    title: "New Leaf Automotive",
    description:
      "Reliable servicing and repairs from a local automotive team focused on quality and transparency.",
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
