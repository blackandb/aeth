"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const isLogin = pathname === "/login";

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <main className="relative z-20 flex min-h-screen flex-col justify-between p-[60px] max-md:p-6">
      <Navbar />
      <div className="flex-1">{children}</div>
      {!isLogin && <Footer />}
    </main>
  );
}
