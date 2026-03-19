import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenRub | China AI API Gateway - Access ERNIE, Kimi, Spark & More",
  description: "The most comprehensive gateway for Chinese AI APIs. Access ERNIE 4.0, Kimichat K2.5, iFlytek Spark, Doubao, GLM-4 and more. Developer-friendly pricing, global CDN, 99.9% uptime. Sign up for $10 free credits.",
  keywords: "AI API, Chinese AI, ERNIE API, Kimichat, iFlytek Spark, Doubao, LLM API, AI gateway, machine learning API, Chinese language AI, multimodal AI, API provider",
  authors: [{ name: "OpenRub" }],
  creator: "OpenRub",
  publisher: "OpenRub",
  openGraph: {
    title: "OpenRub | China AI API Gateway",
    description: "Access China's premier AI models through a single API. ERNIE, Kimichat, Spark, and more.",
    url: "https://openrub.com",
    siteName: "OpenRub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenRub | China AI API Gateway",
    description: "Access China's premier AI models through a single API. $10 free credits for new users.",
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
  alternates: {
    canonical: "https://openrub.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        <link rel="alternate" hrefLang="en" href="https://openrub.com" />
        <link rel="alternate" hrefLang="x-default" href="https://openrub.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
