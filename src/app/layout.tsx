import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { SmoothScroll } from "@/components/smooth-scroll";
import { PageTransition } from "@/components/page-transition";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: {
    default: "BLACK& — The Intelligence Company Builder",
    template: "%s | BLACK&",
  },
  description:
    "BLACK& engineers intelligence systems and builds operating companies for environments where reliability, security and operational clarity matter.",
  metadataBase: new URL("https://blackandi.com"),
  openGraph: {
    title: "BLACK& — The Intelligence Company Builder",
    description:
      "Transforming Intelligence Into Enterprise.",
    url: "https://blackandi.com",
    siteName: "BLACK&",
    type: "website",
    images: [
      {
        url: "https://blackandi.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BLACK&",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BLACK& — The Intelligence Company Builder",
    description:
      "Transforming Intelligence Into Enterprise.",
    images: ["https://blackandi.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://blackandi.com/",
    languages: { en: "https://blackandi.com/", ro: "https://blackandi.com/ro", de: "https://blackandi.com/de", fr: "https://blackandi.com/fr" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-screen bg-bg text-primary antialiased">
        <SmoothScroll>
          <div className="grid-overlay" />
          <PageTransition>
            <SiteShell>{children}</SiteShell>
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
