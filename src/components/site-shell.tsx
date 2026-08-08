"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ConsentManager } from "@/components/consent-manager";
import { IntelligenceAssistant } from "@/components/intelligence-assistant";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="black-site">
      <div className="black-grid" aria-hidden="true" />
      <Navbar />
      <main className="black-content">{children}</main>
      <Footer />
      <ConsentManager />
      <IntelligenceAssistant />
    </div>
  );
}
