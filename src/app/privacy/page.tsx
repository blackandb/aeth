import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AETH",
  description: "How AETH collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="flex min-h-[60vh] flex-col justify-center py-24">
        <div className="eyebrow">Legal</div>
        <h1 className="text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
          Privacy Policy
        </h1>
        <p className="mt-6 max-w-[600px] text-lg leading-[1.5] text-secondary">
          Last updated: March 2026
        </p>

        <div className="mt-16 max-w-[700px] space-y-8 text-sm leading-relaxed text-secondary">
          <div>
            <h2 className="mb-3 text-base font-bold text-primary">1. Information We Collect</h2>
            <p>We collect information you provide directly, such as your name, email address, and company name when you create an account or contact us. We also collect usage data including pages visited, features used, and interaction patterns.</p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold text-primary">2. How We Use Your Information</h2>
            <p>We use collected information to provide and improve our services, communicate with you about your account, send relevant updates, and ensure the security of our platform.</p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold text-primary">3. Data Storage and Security</h2>
            <p>Your data is stored on secure, encrypted servers. We implement industry-standard security measures to protect your information from unauthorized access, alteration, or destruction.</p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold text-primary">4. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data at any time. Contact us at privacy@aeth.com for any data-related requests.</p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold text-primary">5. Contact</h2>
            <p>For questions about this privacy policy, contact us at <span className="text-accent-cyan">privacy@aeth.com</span>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
