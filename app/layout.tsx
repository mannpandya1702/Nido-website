import type { Metadata, Viewport } from "next";
import { Fraunces, Jost } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const siteUrl = "https://nido-cafe.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NIDO — A Rooftop Café · Coffee. Food. Conversations.",
    template: "%s · NIDO",
  },
  description:
    "NIDO means nest — a soft little escape from the rush of everyday life. A premium rooftop café for slow coffee, honest food and good conversations. Find your corner.",
  keywords: [
    "NIDO",
    "rooftop cafe",
    "café",
    "coffee",
    "brunch",
    "conversations",
    "cozy cafe",
    "Biscoff latte",
  ],
  openGraph: {
    title: "NIDO — A Rooftop Café",
    description:
      "A soft little escape from the rush of everyday life. Coffee. Food. Conversations.",
    url: siteUrl,
    siteName: "NIDO Café",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIDO — A Rooftop Café",
    description: "Coffee. Food. Conversations. Find your corner.",
  },
};

export const viewport: Viewport = {
  themeColor: "#5B6B3A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
