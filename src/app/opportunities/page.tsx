import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/institutional-page";
import { getInstitutionalPage } from "@/lib/institutional-content";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Defined routes to build, partner, discuss strategic capital or work with BLACK&.",
  alternates: { canonical: "https://blackandi.com/opportunities" },
};

export default function OpportunitiesPage() {
  return <InstitutionalPage page={getInstitutionalPage("/opportunities")!} />;
}
