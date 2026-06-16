import Link from "next/link";

const systemLinks = [
  { label: "Industries", href: "/features" },
  { label: "How We Build", href: "/how-it-works" },
  { label: "Opportunities", href: "/pricing" },
  { label: "About", href: "/about" },
];

const protocolLinks = [
  { label: "Insights", href: "/blog" },
  { label: "Updates", href: "/changelog" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="mt-16">
      <div className="border-t border-[rgba(255,255,255,0.08)] pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto_auto_auto]">
          <div>
            <Link href="/" className="brand text-xl">
              BLACK&
            </Link>
            <p className="mt-4 font-[var(--font-mono)] text-[11px] uppercase leading-relaxed tracking-[0.15em] text-accent-cyan">
              Built on Intelligence. Driven by Opportunity.
            </p>
            <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-secondary">
              BLACK& develops companies, technology, and strategic initiatives across multiple industries.
            </p>
          </div>

          <div>
            <div className="mb-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-secondary">
              Company
            </div>
            <div className="flex flex-col gap-3">
              {systemLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-primary transition-colors hover:text-accent-cyan">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-secondary">
              Resources
            </div>
            <div className="flex flex-col gap-3">
              {protocolLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-primary transition-colors hover:text-accent-cyan">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <Link href="/contact" className="btn btn-secondary mb-4 block text-center">
              Contact Us
            </Link>
            <a href="mailto:contact@blackandi.com" className="block font-[var(--font-mono)] text-[11px] text-secondary transition-colors hover:text-accent-cyan">
              <span className="text-accent-cyan">&gt;</span> contact@blackandi.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-[rgba(255,255,255,0.08)] py-6">
        <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary">
          © 2026 BLACK&. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent-cyan" />
          <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary">
            Platform_Online
          </span>
        </div>
      </div>
    </footer>
  );
}
