import type { Metadata } from "next";
import Link from "next/link";
import { EngagementBriefForm } from "@/components/engagement-brief-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Official contact routes for BLACK& institutional, partnership, company-building, research and media enquiries.",
  alternates: { canonical: "https://blackandi.com/contact" },
};

const routes = [
  { label: "Build with BLACK&", text: "Frame a company-building or technology opportunity with a defined problem, evidence and requested relationship.", href: "#engagement-brief" },
  { label: "Institutional partnerships", text: "Discuss a defined collaboration with a corporation, government, institution, researcher or technology provider.", href: "/opportunities/partner-with-us" },
  { label: "Media and research", text: "Request company verification, founder information, research context or approved media resources.", href: "/newsroom/contact" },
  { label: "Privacy and security", text: "Raise a privacy or security concern through the official institutional channel.", href: "/trust" },
];

export default function ContactPage() {
  return (
    <main className="institutional-page pb-24 pt-10">
      <header className="institutional-hero">
        <div className="eyebrow">Contact</div>
        <h1>Start with a defined purpose.</h1>
        <p className="institutional-deck">
          BLACK& receives institutional, company-building, technology, research, media and governance enquiries through one official channel.
        </p>
        <div className="institutional-meta"><span>Official BLACK& contact</span><span>Romania</span></div>
      </header>

      <section className="contact-command">
        <div>
          <span>Institutional contact</span>
          <h2>hq@blackandi.com</h2>
          <p>Identify your organization, the purpose of the enquiry, the responsible person, relevant deadline and the outcome requested.</p>
        </div>
        <a className="btn btn-primary" href="mailto:hq@blackandi.com">Email BLACK&</a>
      </section>

      <EngagementBriefForm />

      <section className="contact-routes">
        {routes.map((route, index) => (
          <Link href={route.href} key={route.href}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h2>{route.label}</h2><p>{route.text}</p></div>
            <i>↗</i>
          </Link>
        ))}
      </section>

      <section className="contact-note">
        <h2>Before sending confidential information</h2>
        <p>Do not send trade secrets, regulated personal data, classified information or security-sensitive architecture until BLACK& confirms an approved confidentiality and data-handling route.</p>
        <Link href="/trust">Review the Trust Center →</Link>
      </section>
    </main>
  );
}
