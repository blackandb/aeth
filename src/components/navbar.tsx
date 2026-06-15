"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Product", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Changelog", href: "/changelog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav>
      <div className="relative flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="brand shrink-0">
          AETH
        </Link>

        {/* Center: Nav links — absolutely centered on page */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] transition-colors hover:text-primary ${
                pathname === link.href || pathname.startsWith(link.href + "/") ? "text-accent-cyan" : "text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Status + Dashboard */}
        <div className="flex items-center gap-5">
          <div className="status-bits hidden xl:block">
            {time} UTC // NODE_01
          </div>
          <Link
            href="/login"
            className="hidden border border-[rgba(255,255,255,0.15)] px-4 py-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-primary transition-colors hover:border-accent-cyan hover:text-accent-cyan sm:block"
          >
            Dashboard
          </Link>
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-5 bg-primary transition-all ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-primary transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-primary transition-all ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mt-6 flex flex-col gap-4 border-t border-[rgba(255,255,255,0.08)] pt-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-accent-cyan"
          >
            Dashboard →
          </Link>
        </div>
      )}
    </nav>
  );
}
