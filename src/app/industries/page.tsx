import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/institutional-page";
import { corporatePageMap } from "@/lib/corporate-content";

export const metadata: Metadata = {
  title: "Industries",
  description: "BLACK& engineering and intelligence capability across government, finance, healthcare, infrastructure, industrial, logistics, maritime and enterprise environments.",
  alternates: { canonical: "https://blackandi.com/industries" },
};

export default function IndustriesPage() {
  return <InstitutionalPage page={corporatePageMap.get("/industries")!} />;
}
