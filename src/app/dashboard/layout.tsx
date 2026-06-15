"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const sidebarLinks = [
  { label: "Overview", href: "/dashboard" },
  { label: "Editor", href: "/dashboard/editor" },
  { label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-bg text-primary">
      {/* Mobile warning */}
      <div className="flex flex-col items-center justify-center gap-4 p-8 text-center md:hidden">
        <span className="text-xl font-bold">⚙ AETH // DASHBOARD</span>
        <p className="text-sm text-secondary">Dashboard is optimized for desktop. Please open on a larger screen for the full experience.</p>
        <a href="/" className="btn btn-secondary">← Back to Site</a>
      </div>

      {/* Top HUD bar */}
      <header className="hidden items-center justify-between border-b border-[rgba(255,255,255,0.08)] px-6 py-3 md:flex">
        <div>
          <div className="system-label">Latency: 24ms &nbsp; Memory: 4.2GB / 16GB</div>
          <div className="mt-1 flex items-center gap-3">
            <span className="text-xl font-bold tracking-[-0.05em] text-accent-cyan">⚙ AETH // DASHBOARD</span>
          </div>
          <div className="system-label mt-0.5">Main System Overview // Site as a System</div>
        </div>
        <div className="text-right">
          <div className="system-label">Node_01 &nbsp; Uptime: 1,248:12:44</div>
          <div className="mt-1 text-3xl font-bold tracking-[-0.02em]">{time} <span className="text-xs font-normal text-secondary">UTC</span></div>
          <div className="system-label mt-0.5 text-accent-cyan">System_Ready: True</div>
        </div>
      </header>

      <div className="hidden flex-1 md:flex">
        {/* Sidebar */}
        <aside className="hidden w-48 flex-col border-r border-[rgba(255,255,255,0.08)] md:flex">
          <div className="flex flex-1 flex-col gap-0.5 p-3">
            {sidebarLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 font-[var(--font-mono)] text-xs uppercase tracking-wider transition-colors ${
                    active ? "bg-[rgba(0,240,255,0.1)] text-accent-cyan" : "text-secondary hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="border-t border-[rgba(255,255,255,0.08)] p-3">
            <Link href="/" className="block px-3 py-2 font-[var(--font-mono)] text-xs uppercase tracking-wider text-secondary hover:text-primary">
              ← Back to Site
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 overflow-auto p-6">{children}</div>
      </div>
    </div>
  );
}
