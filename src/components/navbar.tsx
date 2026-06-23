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

  // Blochează scroll când meniul e deschis
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-b border-[rgba(255,255,255,0.08)] bg-[rgba(5,5,5,0.95)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo — mereu vizibil, nu se încalecă */}
            <Link
              href="/"
              className="brand shrink-0 text-base font-bold tracking-tight text-white transition-colors hover:text-accent-cyan sm:text-lg"
            >
              BLACK&
            </Link>

            {/* Desktop nav — centrat, ascuns pe mobil */}
            <div className="hidden items-center gap-6 md:flex">
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

            {/* Right side: status + login + hamburger */}
            <div className="flex items-center gap-4">
              <div className="status-bits hidden xl:block">
                {time} UTC // V1.01
              </div>

              <Link
                href="/login"
                className="hidden border border-[rgba(255,255,255,0.15)] px-4 py-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-white transition-all hover:border-accent-cyan hover:text-accent-cyan sm:block"
              >
                LOGIN
              </Link>

              {/* Hamburger — doar pe mobil */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span
                  className={`block h-px w-5 bg-white transition-all duration-300 ${
                    menuOpen ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-px w-5 bg-white transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-px w-5 bg-white transition-all duration-300 ${
                    menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay — full screen, fundal solid */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[rgba(5,5,5,0.98)] backdrop-blur-xl md:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-[var(--font-mono)] text-lg uppercase tracking-[0.15em] transition-colors hover:text-accent-cyan ${
                  isActive(link.href) ? "text-accent-cyan" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 h-px w-16 bg-[rgba(255,255,255,0.2)]" />

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="font-[var(--font-mono)] text-lg uppercase tracking-[0.15em] text-accent-cyan transition-colors hover:text-white"
            >
              LOGIN →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
