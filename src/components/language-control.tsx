"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const locales = ["en", "ro", "de", "fr"] as const;

export function LanguageControl() {
  const pathname = usePathname(); const router = useRouter();
  const [locale, setLocale] = useState("en");
  useEffect(() => {
    const saved = localStorage.getItem("blackand-locale");
    const detected = navigator.language.split("-")[0].toLowerCase();
    const timer = window.setTimeout(() => setLocale(saved || (locales.includes(detected as typeof locales[number]) ? detected : "en")), 0);
    return () => window.clearTimeout(timer);
  }, []);
  return <label className="language-control" aria-label="Language preference">◎
    <select value={locale} onChange={(event) => {
      const next = event.target.value;
      localStorage.setItem("blackand-locale", next);
      document.cookie = `blackand-locale=${next}; path=/; max-age=31536000; samesite=lax`;
      setLocale(next);
      const clean = pathname.replace(/^\/(ro|de|fr)(?=\/|$)/, "") || "/";
      router.push(next === "en" ? clean : `/${next}${clean === "/" ? "" : clean}`);
    }}>
      <option value="en">English</option><option value="ro">Română</option><option value="de">Deutsch</option><option value="fr">Français</option>
    </select>
  </label>;
}
