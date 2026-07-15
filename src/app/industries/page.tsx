import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/institutional-page";
import { getInstitutionalPage } from "@/lib/institutional-content";

export const metadata: Metadata = {
  title: "Industries",
  description: "BLACK& industry intelligence across technology, infrastructure, security, energy, food production, consumer systems and hospitality.",
  alternates: { canonical: "https://blackandi.com/industries" },
};

export default function IndustriesPage() {
  return <InstitutionalPage page={getInstitutionalPage("/industries")!} />;
}
