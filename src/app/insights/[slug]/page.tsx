import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InstitutionalPage } from "@/components/institutional-page";
import {
  getInstitutionalPage,
  institutionalPaths,
} from "@/lib/institutional-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return institutionalPaths
    .filter((path) => path.startsWith("/insights/"))
    .map((path) => ({ slug: path.split("/").at(-1)! }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getInstitutionalPage(`/insights/${slug}`);
  if (!page) return {};
  return {
    title: `${page.title} | BLACK& Insights`,
    description: page.description,
    alternates: { canonical: `https://blackandi.com${page.path}` },
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getInstitutionalPage(`/insights/${slug}`);
  if (!page) notFound();
  return <InstitutionalPage page={page} />;
}
