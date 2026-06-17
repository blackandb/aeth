import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — BLACK&",
  description:
    "Terms and conditions governing access to and use of BLACK& websites, services, content, and digital platforms.",
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
          Last updated: June 2026
        </p>

        <div className="mt-16 max-w-[700px] space-y-8 text-sm leading-relaxed text-secondary">

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              1. Acceptance of Terms
            </h2>

            <p>
              By accessing or using BLACK& websites, services, platforms, or
              content, you agree to comply with and be bound by these Terms of
              Service. If you do not agree with any part of these terms, you
              should discontinue use of our websites and services.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              2. Service Description
            </h2>

            <p>
              BLACK& operates as a diversified holding and development group
              focused on building companies, developing technology, supporting
              strategic industries, and creating long-term value across
              technology, construction, defense, clothing, food industry,
              hospitality, and related sectors.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              3. User Responsibilities
            </h2>

            <p>
              Users are responsible for ensuring that their use of BLACK&
              websites and services complies with applicable laws and
              regulations. Users agree not to engage in unlawful activities,
              unauthorized access attempts, or actions that could compromise the
              security, availability, or integrity of our systems.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              4. Intellectual Property
            </h2>

            <p>
              All BLACK& trademarks, logos, branding elements, website content,
              graphics, reports, software, designs, and related materials are
              owned by BLACK& or licensed to BLACK& and are protected by
              applicable intellectual property laws. Unauthorized use is
              prohibited.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              5. No Investment Advice
            </h2>

            <p>
              Information presented through BLACK& websites or communications is
              provided for informational purposes only and should not be
              interpreted as investment, financial, legal, tax, or professional
              advice. Nothing on this website constitutes an offer or
              solicitation to buy, sell, or invest in any asset, company, or
              financial instrument.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              6. Limitation of Liability
            </h2>

            <p>
              BLACK& shall not be liable for any direct, indirect, incidental,
              consequential, or special damages arising from the use of, or
              inability to use, the website, its content, services, or any
              information made available through the platform.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              7. Third-Party Links
            </h2>

            <p>
              BLACK& websites may contain links to third-party websites,
              resources, or services. We are not responsible for the content,
              policies, availability, or practices of such external resources.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              8. Modifications
            </h2>

            <p>
              BLACK& reserves the right to modify these Terms of Service at any
              time. Continued use of the website following publication of
              updated terms constitutes acceptance of those modifications.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              9. Governing Law
            </h2>

            <p>
              These Terms shall be governed and interpreted in accordance with
              the laws applicable in the jurisdiction in which BLACK& operates,
              without regard to conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              10. Contact
            </h2>

            <p>
              For legal inquiries, compliance matters, partnership requests, or
              questions regarding these Terms of Service, please contact:
              <span className="text-accent-cyan">
                {" "}legal@blackandi.com
              </span>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
