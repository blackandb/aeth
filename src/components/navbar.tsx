"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Company", href: "/company" },
  { label: "Model", href: "/model" },
  { label: "Companies", href: "/companies" },
  { label: "Technologies", href: "/technologies" },
  { label: "Industries", href: "/industries" },
  { label: "Research", href: "/research" },
  { label: "Insights", href: "/insights" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Opportunities", href: "/opportunities" },
];

const newsItems = [
  "BLACK& Board v1.1 strengthens secure executive collaboration.",
  "27 July 2026: BLACK& Secure Board Communication Network launches.",
  "SYSTEM INC AI coordinates specialist AI departments around one company context.",
  "BLACK& Research publishes the first three papers in the Intelligence Infrastructure Series.",
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
    <nav className="fixed left-0 right-0 top-0 z-50 bg-[rgba(5,5,5,0.95)] backdrop-blur-xl">

      {/* ============================
          NEWS TICKER
      ============================ */}

      <div className="news-ticker">
        <div className="news-ticker-label">
          <span className="hidden md:inline">BLACK& NEWS</span>
          <span className="md:hidden">NEWS</span>
        </div>

        <div className="news-ticker-viewport">
          <div className="news-ticker-track">
            {[...newsItems, ...newsItems].map((item, index) => (
              <div key={index} className="news-ticker-item">
                <span className="news-ticker-dot" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================
          NAVBAR
      ============================ */}

      <div className="border-b border-[rgba(255,255,255,0.08)]">

        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 xl:px-8">

          {/* Logo */}

          <Link href="/" className="brand shrink-0">
            BLACK&
          </Link>

          {/* Desktop Navigation */}

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-3 xl:flex 2xl:gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap font-[var(--font-mono)] text-[9px] uppercase tracking-[0.1em] transition-colors hover:text-primary xl:text-[10px] xl:tracking-[0.12em] ${
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/")
                    ? "text-accent-cyan"
                    : "text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right */}

          <div className="flex items-center gap-5">

            <div className="nav-status status-bits">
              {time} UTC // INSTITUTIONAL
            </div>

            <Link
              href="/contact"
              className="hidden border border-[rgba(255,255,255,0.15)] px-4 py-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-primary transition-colors hover:border-accent-cyan hover:text-accent-cyan md:block"
            >
              TALK TO BLACK&
            </Link>

            {/* Mobile */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 xl:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-px w-5 bg-primary transition-all ${
                  menuOpen ? "translate-y-[5px] rotate-45" : ""
                }`}
              />

              <span
                className={`block h-px w-5 bg-primary transition-all ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-px w-5 bg-primary transition-all ${
                  menuOpen ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </button>

          </div>

        </div>

      </div>

      {/* ============================
          MOBILE MENU
      ============================ */}

      {menuOpen && (
        <div className="border-b border-[rgba(255,255,255,0.08)] bg-[rgba(5,5,5,0.98)] px-4 py-6 xl:hidden">

          <div className="flex flex-col gap-4">

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
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="pt-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-accent-cyan"
            >
              TALK TO BLACK& →
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}
