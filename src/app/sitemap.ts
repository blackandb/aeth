import type { MetadataRoute } from "next";
import { institutionalPaths } from "@/lib/institutional-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/contact", "/privacy", "/terms"];
  return [...new Set([...staticPaths, ...institutionalPaths])].map((path) => ({
    url: `https://blackandi.com${path}`,
    lastModified: new Date("2026-07-15"),
    changeFrequency: path === "" || path === "/newsroom" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").filter(Boolean).length === 1 ? 0.9 : 0.75,
  }));
}

