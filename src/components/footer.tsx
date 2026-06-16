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
return ( <footer className="mt-16">
{/* Main footer content */} <div className="border-t border-[rgba(255,255,255,0.08)] pt-16"> <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto_auto_auto]">
{/* Brand column */} <div> <Link href="/" className="brand text-xl">
BLACK& </Link>

```
        <p className="mt-4 font-[var(--font-mono)] text-[11px] uppercase leading-relaxed tracking-[0.15em] text-accent-cyan">
          Built on Intelligence. Driven by Opportunity.
        </p>

        <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-secondary">
          BLACK& develops companies, technology, and strategic initiatives across
          construction, defense, clothing, food industry, hospitality, and
          emerging opportunities.
        </p>
      </div>

      {/* Company column */}
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

      {/* Resources column */}
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

      {/* Contact column */}
      <div>
        <Link
          href="/contact"
          className="btn btn-secondary mb-4 block text-center"
        >
          Contact Us
        </Link>

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
    </div>
  </div>

  {/* Bottom bar */}
  <div className="mt-12 flex items-center justify-between border-t border-[rgba(255,255,255,0.08)] py-6">
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
        <span className="h-2 w-2 rounded-full bg-accent-cyan" />
        <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary">
          GROUP_ONLINE
        </span>
      </div>
    </div>
  </div>
</footer>
);
}
