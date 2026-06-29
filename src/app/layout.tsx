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
  title: "BLACK& — Built on Intelligence. Driven by Opportunity.",
  description:
    "BLACK& develops intelligence technologies, deploys strategic capital and builds companies across sectors where insight creates opportunity and execution creates value.",
  metadataBase: new URL("https://blackandi.com"),
  openGraph: {
    title: "BLACK& — Built on Intelligence. Driven by Opportunity.",
    description:
      "BLACK& develops intelligence technologies, deploys strategic capital and builds companies.",
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
    title: "BLACK& — Built on Intelligence. Driven by Opportunity.",
    description:
      "BLACK& develops intelligence technologies, deploys strategic capital and builds companies.",
    images: ["https://blackandi.com/og-image.jpg"],
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
