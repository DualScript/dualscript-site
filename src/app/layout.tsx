import type { Metadata } from "next";
import { DM_Mono, Inter } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DualScript — Vertical Software for Professionals",
  description: "DualScript builds purpose-built software tools for professionals.",
  openGraph: {
    title: "DualScript — Vertical Software for Professionals",
    description: "DualScript builds purpose-built software tools for professionals.",
    url: "https://www.dualscript.io",
    siteName: "DualScript",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DualScript — Vertical Software for Professionals",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DualScript — Vertical Software for Professionals",
    description: "DualScript builds purpose-built software tools for professionals.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmMono.variable} ${dmMono.className} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
