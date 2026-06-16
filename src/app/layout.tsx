// DsNexa Solutions — Premium Engineering Platform
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dsnexasolutions.co.in"),
  title: {
    default: "DsNexa Solutions | System Architecture · AI Integration · Digital Transformation",
    template: "%s | DsNexa Solutions",
  },
  description:
    "Premium engineering studio specializing in cloud-native architecture, edge intelligence, AI integration, and digital transformation. We build systems that scale.",
  keywords: [
    "software development India",
    "software consulting company",
    "cloud-native engineering",
    "edge intelligence",
    "AI integration",
    "digital transformation",
    "system architecture",
    "data strategy",
    "automation workflows",
    "DsNexa Solutions",
    "enterprise software",
    "SaaS engineering",
  ],
  authors: [{ name: "DsNexa Solutions", url: "https://dsnexasolutions.co.in" }],
  creator: "DsNexa Solutions",
  publisher: "DsNexa Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DsNexa Solutions | System Architecture · AI Integration · Digital Transformation",
    description:
      "Premium engineering studio — cloud-native architecture, edge intelligence, and AI integration.",
    url: "https://dsnexasolutions.co.in",
    siteName: "DsNexa Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DsNexa Solutions Branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DsNexa Solutions | System Architecture · AI Integration · Digital Transformation",
    description:
      "Premium engineering studio — cloud-native architecture, edge intelligence, and AI integration.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/brand/logo.png",
    shortcut: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
