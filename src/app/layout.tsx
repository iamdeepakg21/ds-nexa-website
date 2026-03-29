import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
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
  title: "Ds Nexa Solutions | Engineering Scalable Digital Universes",
  description:
    "Premium software studio — distributed systems, AI integrations, and immersive product engineering. Next.js, cloud-native backends, and cinematic interfaces.",
  keywords: [
    "software development agency",
    "distributed systems",
    "Next.js",
    "AI solutions",
    "Kubernetes",
    "microservices",
    "Ds Nexa Solutions",
  ],
  authors: [{ name: "Ds Nexa Solutions" }],
  openGraph: {
    title: "Ds Nexa Solutions | Engineering Scalable Digital Universes",
    description:
      "Premium software studio — distributed systems, AI integrations, and immersive product engineering.",
    type: "website",
    locale: "en_US",
    siteName: "Ds Nexa Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ds Nexa Solutions | Engineering Scalable Digital Universes",
    description:
      "Premium software studio — distributed systems, AI integrations, and immersive product engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
