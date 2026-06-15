import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — AETH",
  description: "Terms and conditions for using the AETH platform.",
};

export default function TermsPage() {
  return (
    <>
      <section className="flex min-h-[60vh] flex-col justify-center py-24">
        <div className="eyebrow">Legal</div>
        <h1 className="text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
          Terms of Service
        </h1>
        <p className="mt-6 max-w-[600px] text-lg leading-[1.5] text-secondary">
          Last updated: March 2026
        </p>

        <div className="mt-16 max-w-[700px] space-y-8 text-sm leading-relaxed text-secondary">
          <div>
            <h2 className="mb-3 text-base font-bold text-primary">1. Acceptance of Terms</h2>
            <p>By accessing or using AETH, you agree to be bound by these terms. If you do not agree, you may not use our services.</p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold text-primary">2. Service Description</h2>
            <p>AETH provides a platform for building intelligent web presences optimized for human visitors, AI systems, and search engines. Features include page building, content structuring, automation workflows, and analytics.</p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold text-primary">3. User Responsibilities</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You agree not to use the service for any unlawful purpose.</p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold text-primary">4. Intellectual Property</h2>
            <p>Content you create using AETH remains your property. The AETH platform, its design, code, and branding are owned by AETH and protected by intellectual property laws.</p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold text-primary">5. Contact</h2>
            <p>For questions about these terms, contact us at <span className="text-accent-cyan">legal@aeth.com</span>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
