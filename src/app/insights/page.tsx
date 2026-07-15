import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/institutional-page";
import { getInstitutionalPage } from "@/lib/institutional-content";

export const metadata: Metadata = {
  title: "Insights",
  description: "BLACK& analysis, explainers and strategic briefings on intelligence-led company creation and technology.",
  alternates: { canonical: "https://blackandi.com/insights" },
};

export default function InsightsPage() {
  return <InstitutionalPage page={getInstitutionalPage("/insights")!} />;
}
