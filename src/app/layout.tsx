// DS Nexa Solutions - Premium Engineering Platform
import type { Metadata, Viewport } from "next";
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
    default: "Ds Nexa Solutions | Engineering Scalable Digital Universes",
    template: "%s | Ds Nexa Solutions",
  },
  description:
    "Premium software studio specializing in high-scale distributed systems, AI integrations, custom Shopify apps, and immersive product engineering. We build for the future with Next.js, Go, and cloud-native architecture.",
  keywords: [
    "software development India",
    "custom software engineering",
    "Shopify experts",
    "AI development agency",
    "distributed systems",
    "Next.js agency",
    "SaaS product development",
    "Ds Nexa Solutions",
    "scalable architecture",
    "high-performance web apps",
  ],
  authors: [{ name: "Ds Nexa Solutions", url: "https://dsnexasolutions.co.in" }],
  creator: "Ds Nexa Solutions",
  publisher: "Ds Nexa Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ds Nexa Solutions | Engineering Scalable Digital Universes",
    description:
      "Premium software studio — high-scale distributed systems, AI integrations, and immersive product engineering.",
    url: "https://dsnexasolutions.co.in",
    siteName: "Ds Nexa Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ds Nexa Solutions Branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ds Nexa Solutions | Engineering Scalable Digital Universes",
    description:
      "Premium software studio — high-scale distributed systems, AI integrations, and immersive product engineering.",
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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='ds-nexa-theme';var s=localStorage.getItem(k);if(s==='light'||s==='dark')document.documentElement.setAttribute('data-theme',s);}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
