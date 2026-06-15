import Link from "next/link";

const systemLinks = [
  { label: "Product", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

const protocolLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Changelog", href: "/changelog" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="mt-16">
      {/* Main footer content */}
      <div className="border-t border-[rgba(255,255,255,0.08)] pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto_auto_auto]">
          {/* Brand column */}
          <div>
            <Link href="/" className="brand text-xl">AETH</Link>
            <p className="mt-4 font-[var(--font-mono)] text-[11px] uppercase leading-relaxed tracking-[0.15em] text-accent-cyan">
              Owned digital infrastructure for the AI era.
            </p>
            <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-secondary">
              AETH helps founders build websites that work for people, AI systems, and search.
            </p>
          </div>

          {/* System column */}
          <div>
            <div className="mb-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-secondary">System</div>
            <div className="flex flex-col gap-3">
              {systemLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-primary transition-colors hover:text-accent-cyan">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Protocol column */}
          <div>
            <div className="mb-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-secondary">Protocol</div>
            <div className="flex flex-col gap-3">
              {protocolLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-primary transition-colors hover:text-accent-cyan">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA column */}
          <div>
            <Link href="/contact" className="btn btn-secondary mb-4 block text-center">
              Book a Demo
            </Link>
            <a href="mailto:hello@aeth.com" className="block font-[var(--font-mono)] text-[11px] text-secondary transition-colors hover:text-accent-cyan">
              <span className="text-accent-cyan">&gt;</span> hello@aeth.com
            </a>
            <a href="https://github.com/mksvlbv" target="_blank" rel="noopener noreferrer" className="mt-2 block font-[var(--font-mono)] text-[11px] text-secondary transition-colors hover:text-accent-cyan">
              <span className="text-accent-cyan">&gt;</span> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 flex items-center justify-between border-t border-[rgba(255,255,255,0.08)] py-6">
        <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary">
          © 2026 AETH. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/mksvlbv" target="_blank" rel="noopener noreferrer" className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary transition-colors hover:text-accent-cyan">
            GitHub
          </a>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-cyan" />
            <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary">
              System_Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
