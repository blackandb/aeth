"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shellRef = useRef<HTMLDivElement>(null);
  const isDashboard = pathname.startsWith("/dashboard");
  const isLogin = pathname === "/login";

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <div
      ref={shellRef}
      className="black-site"
      onMouseMove={(event) => {
        const element = shellRef.current;
        if (!element) return;
        element.style.setProperty("--pointer-x", `${event.clientX}px`);
        element.style.setProperty("--pointer-y", `${event.clientY}px`);
      }}
    >
      <div className="black-ambient" aria-hidden="true" />
      <Navbar />
      {/* Spacer pentru a compensa navbar-ul fixat */}
      <div className="h-[120px] md:h-[120px]" />
      <main className="black-content relative z-20 flex min-h-screen flex-col justify-between p-[60px] pt-0 max-md:p-6 max-md:pt-0">
        <div className="flex-1">{children}</div>
        {!isLogin && <Footer />}
      </main>
    </div>
  );
}
