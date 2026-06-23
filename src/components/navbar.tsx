"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Industries", href: "/industries" },
  { label: "How We Build", href: "/how-we-build" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Updates", href: "/updates" },
];

export function Navbar() {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[rgba(255,255,255,0.08)] bg-[rgba(5,5,5,0.85)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="relative flex items-center justify-between">
          <Link
            href="/"
            className="brand shrink-0 text-lg font-bold tracking-tight transition-colors hover:text-accent-cyan"
          >
            BLACK&
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] transition-colors hover:text-accent-cyan ${
                  isActive(link.href)
                    ? "text-accent-cyan"
                    : "text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <div className="status-bits hidden xl:block">
              {time} UTC // V1.01
            </div>

            <Link
              href="/login"
              className="hidden border border-[rgba(255,255,255,0.15)] px-4 py-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-primary transition-all hover:border-accent-cyan hover:text-accent-cyan sm:block"
            >
              LOGIN
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
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

        {menuOpen && (
          <div className="mt-6 flex flex-col gap-4 border-t border-[rgba(255,255,255,0.08)] pt-6 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] transition-colors hover:text-accent-cyan ${
                  isActive(link.href) ? "text-accent-cyan" : "text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-accent-cyan"
            >
              LOGIN →
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
