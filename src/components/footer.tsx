import Link from "next/link";
import { LanguageControl } from "@/components/language-control";

const groups = [
  { title: "Build", links: [["Capabilities", "/capabilities"], ["Industries", "/industries"], ["Government", "/industries/government"], ["Operating model", "/company/operating-model"]] },
  { title: "Understand", links: [["Intelligence", "/intelligence"], ["Research", "/intelligence/research"], ["Briefings", "/intelligence/briefings"], ["Case studies", "/case-studies"]] },
  { title: "Assurance", links: [["Trust", "/trust"], ["Security", "/trust/security"], ["EU compliance", "/trust/eu-compliance"], ["Legal", "/legal"]] },
];

export function Footer() {
  return (
    <footer className="black-footer">
      <div className="footer-statement"><span>BLACK&</span><h2>Transforming Intelligence<br />Into Enterprise.</h2></div>
      <div className="footer-grid">
        <div className="footer-company"><p>The Intelligence Company Builder.</p><p>We engineer intelligence systems for environments where reliability, security and operational clarity matter.</p></div>
        {groups.map((group) => <div key={group.title}><h3>{group.title}</h3>{group.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>)}
      </div>
      <div className="footer-bottom"><span>© 2026 BLACK&</span><span>BLACK HOLDINGS S.R.L. · ROMANIA</span><Link href="/legal/privacy">Privacy</Link><button type="button" onClick={() => window.dispatchEvent(new Event("blackand:manage-consent"))}>Cookie settings</button><LanguageControl /></div>
    </footer>
  );
}
