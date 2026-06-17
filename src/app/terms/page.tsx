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
              By accessing, browsing, or using the BLACK& website, services,
              content, applications, or digital platforms, you acknowledge that
              you have read, understood, and agree to be bound by these Terms of
              Service and all applicable laws and regulations.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              2. Company Activities
            </h2>

            <p>
              BLACK& operates as a diversified business group engaged in the
              development of companies, technology, strategic projects, and
              commercial activities across multiple industries, including but not
              limited to technology, construction, defense, clothing, food
              industry, hospitality, and related sectors.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              3. Use of Website
            </h2>

            <p>
              Users may access the website solely for lawful purposes. You agree
              not to use the website in any manner that could damage, disable,
              overburden, or impair the website, its infrastructure, or interfere
              with any other party's use of the services.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              4. Intellectual Property
            </h2>

            <p>
              All content available through BLACK&, including trademarks, logos,
              branding elements, text, graphics, software, designs, reports,
              business materials, and proprietary information, are owned by or
              licensed to BLACK& and are protected under applicable intellectual
              property laws.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              5. No Investment Advice
            </h2>

            <p>
              Information presented on this website is provided for general
              informational purposes only and does not constitute investment,
              financial, legal, tax, or professional advice. Nothing contained on
              this website should be interpreted as an offer, solicitation, or
              recommendation to buy, sell, or invest in any asset, security,
              company, or financial instrument.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              6. Limitation of Liability
            </h2>

            <p>
              BLACK& shall not be liable for any direct, indirect, incidental,
              consequential, or special damages arising from the use of, or
              inability to use, this website, its content, services, or any
              information made available through the platform.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              7. Third-Party Links
            </h2>

            <p>
              The website may contain links to third-party websites or resources.
              BLACK& is not responsible for the availability, content, accuracy,
              or practices of any external websites and does not endorse any
              third-party content unless explicitly stated.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              8. Modifications
            </h2>

            <p>
              BLACK& reserves the right to modify these Terms of Service at any
              time. Continued use of the website following the publication of
              updated terms constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              9. Governing Law
            </h2>

            <p>
              These Terms shall be governed and interpreted in accordance with the
              applicable laws governing the jurisdiction in which BLACK& is
              incorporated and operates.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-primary">
              10. Contact
            </h2>

            <p>
              For legal inquiries, compliance matters, or questions regarding
              these Terms of Service, please contact:
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
