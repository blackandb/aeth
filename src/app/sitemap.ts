import type { MetadataRoute } from "next";
import { institutionalPaths } from "@/lib/institutional-content";
import { publishedResearchPapers } from "@/lib/research-papers";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/contact", "/privacy", "/terms"];
  const researchReaderPaths = publishedResearchPapers.map((paper) => paper.htmlUrl);
  return [...new Set([...staticPaths, ...institutionalPaths, ...researchReaderPaths])].map((path) => ({
    url: `https://blackandi.com${path}`,
    lastModified: new Date("2026-07-15"),
    changeFrequency: path === "" || path === "/newsroom" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").filter(Boolean).length === 1 ? 0.9 : 0.75,
  }));
}
