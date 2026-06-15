// DSN EXA Solutions — Premium Engineering Platform
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
    default: "DSN EXA Solutions | System Architecture · AI Integration · Digital Transformation",
    template: "%s | DSN EXA Solutions",
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
    "DSN EXA Solutions",
    "enterprise software",
    "SaaS engineering",
  ],
  authors: [{ name: "DSN EXA Solutions", url: "https://dsnexasolutions.co.in" }],
  creator: "DSN EXA Solutions",
  publisher: "DSN EXA Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DSN EXA Solutions | System Architecture · AI Integration · Digital Transformation",
    description:
      "Premium engineering studio — cloud-native architecture, edge intelligence, and AI integration.",
    url: "https://dsnexasolutions.co.in",
    siteName: "DSN EXA Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DSN EXA Solutions Branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DSN EXA Solutions | System Architecture · AI Integration · Digital Transformation",
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
