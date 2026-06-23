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
    <div className="relative z-20 flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 px-4 py-24 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {children}
      </main>
      {!isLogin && <Footer />}
    </div>
  );
}
