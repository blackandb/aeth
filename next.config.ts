import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  
  async redirects() {
    return [
      {
        source: "/pricing",
        destination: "/opportunities",
        permanent: true,
      },
      {
        source: "/features",
        destination: "/industries",
        permanent: true,
      },
      {
        source: "/how-it-works",
        destination: "/model",
        permanent: true,
      },
      {
        source: "/how-we-build",
        destination: "/model",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/company/overview",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/changelog",
        destination: "/newsroom",
        permanent: true,
      },
      {
        source: "/updates",
        destination: "/newsroom",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "images.unsplash.com" },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
