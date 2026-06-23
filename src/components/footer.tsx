import Link from "next/link";

const systemLinks = [
  { label: "Industries", href: "/industries" },
  { label: "How We Build", href: "/how-we-build" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "About", href: "/about" },
];

const protocolLinks = [
  { label: "Insights", href: "/insights" },
  { label: "Updates", href: "/updates" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/blackand" },
  { label: "Twitter/X", href: "https://twitter.com/blackandgroup" },
];

export function Footer() {
  return (
    <footer className="mt-16">
      <div className="border-t border-[rgba(255,255,255,0.08)] pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_auto_auto_auto_auto]">
          <div>
            <Link href="/" className="brand text-xl">
              BLACK&
            </Link>

            <p className="mt-4 font-[var(--font-mono)] text-[11px] uppercase leading-relaxed tracking-[0.15em] text-accent-cyan">
              Built on Intelligence. Driven by Opportunity.
            </p>

            <p className="mt-3 max-w-[320px] text-sm leading-relaxed text-secondary">
              BLACK& develops companies, technology, and strategic initiatives across
              construction, defense, clothing, food industry, hospitality, and
              emerging opportunities.
            </p>

            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary transition-colors hover:text-accent-cyan"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-secondary">
              Company
            </div>
            <div className="flex flex-col gap-3">
              {systemLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary transition-colors hover:text-accent-cyan"
                >
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
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-primary transition-colors hover:text-accent-cyan"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-secondary">
              Contact
            </div>
            <a
              href="mailto:contact@blackandi.com"
              className="block font-[var(--font-mono)] text-[11px] text-secondary transition-colors hover:text-accent-cyan"
            >
              <span className="text-accent-cyan">&gt;</span> contact@blackandi.com
            </a>
            <a
              href="https://blackandi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block font-[var(--font-mono)] text-[11px] text-secondary transition-colors hover:text-accent-cyan"
            >
              <span className="text-accent-cyan">&gt;</span> blackandi.com
            </a>
          </div>

          <div>
            <Link
              href="/contact"
              className="btn btn-secondary mb-4 block text-center"
            >
              Contact Us
            </Link>
            <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary">
              Open to partnerships, investments, and strategic opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.08)] py-6 sm:flex-row">
        <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary">
          © 2026 BLACK&. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://blackandi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary transition-colors hover:text-accent-cyan"
          >
            BLACKANDI.COM
          </a>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary">
              GROUP_ONLINE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
