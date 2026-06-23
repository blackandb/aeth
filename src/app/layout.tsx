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
  title: "BLACK& — Built on Intelligence. Driven by Opportunity.",
  description:
    "BLACK& is a diversified business group focused on identifying opportunities, building companies, and creating long-term value across strategic industries including construction, defense, clothing, food industry, and hospitality.",
  keywords: [
    "BLACK&", "business group", "investment", "private equity",
    "construction", "defense", "technology", "clothing", "food industry", "hospitality",
    "strategic partnerships", "company building", "long-term value"
  ],
  authors: [{ name: "BLACK&" }],
  creator: "BLACK&",
  publisher: "BLACK&",
  metadataBase: new URL("https://blackandi.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BLACK& — Built on Intelligence. Driven by Opportunity.",
    description:
      "A diversified business group building companies and creating long-term value across strategic industries.",
    url: "https://blackandi.com",
    siteName: "BLACK&",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BLACK& — Built on Intelligence. Driven by Opportunity.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BLACK& — Built on Intelligence. Driven by Opportunity.",
    description:
      "A diversified business group building companies and creating long-term value across strategic industries.",
    images: ["/og-image.jpg"],
    creator: "@blackandgroup",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#050505" />
        
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BLACK&",
              alternateName: "BLACKAND",
              url: "https://blackandi.com",
              logo: "https://blackandi.com/logo.png",
              sameAs: [
                "https://linkedin.com/company/blackand",
                "https://twitter.com/blackandgroup",
              ],
              description:
                "A diversified business group focused on identifying opportunities, building companies, and creating long-term value across strategic industries.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "RO",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-bg text-primary antialiased">
        <div className="grid-overlay" />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
