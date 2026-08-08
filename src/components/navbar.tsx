"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Intelligence", href: "/intelligence" },
  { label: "Company", href: "/company" },
  { label: "Trust", href: "/trust" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <nav className="black-nav" aria-label="Primary navigation">
      <div className="black-nav-inner">
        <Link href="/" className="brand" aria-label="BLACK& home">BLACK&</Link>
        <div className="black-nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href || pathname.startsWith(`${link.href}/`) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="black-nav-actions">
          <Link href="/contact" className="nav-engage">Engage BLACK& <span aria-hidden="true">↗</span></Link>
          <button className={`menu-trigger${menuOpen ? " is-open" : ""}`} type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation">
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <i /><i />
          </button>
        </div>
      </div>
        <div id="mobile-navigation" className={`mobile-navigation${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
          <div className="mobile-nav-label">Navigation / BLACK&</div>
          {navLinks.map((link, index) => <Link onClick={() => setMenuOpen(false)} key={link.href} href={link.href}><span>0{index + 1}</span>{link.label}</Link>)}
          <Link onClick={() => setMenuOpen(false)} href="/industries/government" className="mobile-government"><span>Priority</span>Government & Public Sector</Link>
          <Link onClick={() => setMenuOpen(false)} href="/contact" className="mobile-engage">Engage BLACK& ↗</Link>
        </div>
    </nav>
  );
}
