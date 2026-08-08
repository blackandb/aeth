import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "@/app/page";
import { InstitutionalPage } from "@/components/institutional-page";
import { corporatePageMap } from "@/lib/corporate-content";
import { getInstitutionalPage } from "@/lib/institutional-content";

const locales = ["ro", "de", "fr"] as const;
const localeNames = { ro: "Română", de: "Deutsch", fr: "Français" } as const;

type Params = Promise<{ locale: string; localized?: string[] }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, localized = [] } = await params;
  if (!locales.includes(locale as typeof locales[number])) return {};
  const path = `/${localized.join("/")}`;
  const page = localized.length ? corporatePageMap.get(path) ?? getInstitutionalPage(path) : undefined;
  const title = page?.title ?? "The Intelligence Company Builder";
  const description = page?.description ?? "Transforming Intelligence Into Enterprise.";
  const canonical = `https://blackandi.com/${locale}${path === "/" ? "" : path}`;
  return { title: `${title} | BLACK&`, description, alternates: { canonical, languages: { en: `https://blackandi.com${path === "/" ? "" : path}`, ro: `https://blackandi.com/ro${path === "/" ? "" : path}`, de: `https://blackandi.com/de${path === "/" ? "" : path}`, fr: `https://blackandi.com/fr${path === "/" ? "" : path}` } }, other: { "content-language": locale, "translation-status": `Interface locale: ${localeNames[locale as keyof typeof localeNames]}; institutional source content remains review-controlled.` } };
}

export default async function LocalizedPage({ params }: { params: Params }) {
  const { locale, localized = [] } = await params;
  if (!locales.includes(locale as typeof locales[number])) notFound();
  if (!localized.length) return <Home />;
  const path = `/${localized.join("/")}`;
  const page = corporatePageMap.get(path) ?? getInstitutionalPage(path);
  if (!page) notFound();
  return <InstitutionalPage page={page} />;
}
