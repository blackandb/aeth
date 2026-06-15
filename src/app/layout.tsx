import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

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
  title: "AETH — Built for the AI Era",
  description:
    "AETH helps founders build websites that are clear to visitors, readable by AI, structured for search, and designed to turn attention into pipeline.",
  openGraph: {
    title: "AETH — Built for the AI Era",
    description:
      "An intelligent website platform for humans, AI agents, and search engines.",
    siteName: "AETH",
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
        <div className="grid-overlay" />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
