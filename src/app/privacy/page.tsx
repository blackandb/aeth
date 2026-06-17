import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — BLACK&",
  description:
    "How BLACK& collects, uses, stores, and protects personal information across its websites, platforms, and services.",
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
          Last updated: June 2026
        </p>

        <div className="mt-16 max-w-[700px] space-y-8 text-sm leading-relaxed text-secondary">

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              1. Information We Collect
            </h2>

            <p>
              BLACK& may collect information that you voluntarily provide,
              including your name, email address, company information, phone
              number, and any information submitted through contact forms,
              partnership inquiries, investment discussions, recruitment
              applications, or business communications.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              2. How We Use Your Information
            </h2>

            <p>
              We use collected information to respond to inquiries, evaluate
              partnership opportunities, communicate with users, improve our
              services, support business operations, comply with legal
              obligations, and enhance the security and performance of our
              websites and digital platforms.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              3. Data Storage and Security
            </h2>

            <p>
              BLACK& implements commercially reasonable administrative,
              technical, and organizational safeguards designed to protect
              personal information against unauthorized access, disclosure,
              alteration, misuse, or destruction.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              4. Information Sharing
            </h2>

            <p>
              BLACK& does not sell personal information. Information may be
              shared with trusted service providers, professional advisors,
              legal authorities, or affiliated entities when necessary for
              business operations, legal compliance, or protection of legitimate
              interests.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              5. Cookies and Analytics
            </h2>

            <p>
              Our websites may use cookies, analytics tools, and similar
              technologies to improve functionality, measure performance,
              understand visitor behavior, and enhance user experience.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              6. Your Rights
            </h2>

            <p>
              Subject to applicable law, you may have the right to access,
              update, correct, restrict, or request deletion of your personal
              information. You may also object to certain processing activities
              or request information regarding how your data is used.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              7. International Operations
            </h2>

            <p>
              BLACK& may operate across multiple jurisdictions. Personal
              information may be processed and stored in locations where BLACK&
              or its service providers conduct business, subject to appropriate
              safeguards and applicable legal requirements.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              8. Policy Updates
            </h2>

            <p>
              BLACK& reserves the right to modify this Privacy Policy at any
              time. Updates will be published on this page and become effective
              upon publication unless otherwise stated.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              9. Contact
            </h2>

            <p>
              For privacy-related questions, compliance matters, or requests
              regarding personal information, please contact:
              <span className="text-accent-cyan">
                {" "}privacy@blackandi.com
              </span>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
