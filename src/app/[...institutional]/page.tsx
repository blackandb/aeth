import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InstitutionalPage } from "@/components/institutional-page";
import {
  getInstitutionalPage,
  institutionalPaths,
} from "@/lib/institutional-content";

export const dynamicParams = false;

export function generateStaticParams() {
  const staticRoutes = new Set(["/industries", "/opportunities", "/insights"]);
  return institutionalPaths
    .filter((path) => !path.startsWith("/insights/") && !staticRoutes.has(path))
    .map((path) => ({ institutional: path.split("/").filter(Boolean) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ institutional: string[] }>;
}): Promise<Metadata> {
  const { institutional } = await params;
  const path = `/${institutional.join("/")}`;
  const page = getInstitutionalPage(path);
  if (!page) return {};

  const canonical = `https://blackandi.com${page.path}`;
  return {
    title: `${page.title} | BLACK&`,
    description: page.description,
    alternates: { canonical },
    openGraph: {
      title: `${page.title} | BLACK&`,
      description: page.description,
      url: canonical,
      type: page.kind === "article" ? "article" : "website",
    },
  };
}

export default async function InstitutionalRoute({
  params,
}: {
  params: Promise<{ institutional: string[] }>;
}) {
  const { institutional } = await params;
  const page = getInstitutionalPage(`/${institutional.join("/")}`);
  if (!page) notFound();
  return <InstitutionalPage page={page} />;
}
