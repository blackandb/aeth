"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <section className="flex min-h-[calc(100vh-120px)] items-center justify-center">
      <div className="w-full max-w-[400px]">
        <div className="aeth-card">
          <div className="mb-8">
            <Link href="/" className="brand text-xl">
              BLACK&
            </Link>
            <p className="mt-3 text-sm text-secondary">
              {isSignUp
                ? "Create your BLACK& account."
                : "Sign in to access the BLACK& platform."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="system-label mb-1.5 block">Full Name</label>
                <input type="text" placeholder="Your name" className="w-full border border-[rgba(255,255,255,0.1)] bg-transparent px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/50 focus:border-accent-cyan/50" />
              </div>
            )}

            <div>
              <label className="system-label mb-1.5 block">Company Email</label>
              <input type="email" placeholder="name@company.com" className="w-full border border-[rgba(255,255,255,0.1)] bg-transparent px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/50 focus:border-accent-cyan/50" />
            </div>

            <div>
              <label className="system-label mb-1.5 block">Password</label>
              <input type="password" placeholder="••••••••" className="w-full border border-[rgba(255,255,255,0.1)] bg-transparent px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/50 focus:border-accent-cyan/50" />
            </div>

            <button type="submit" className="btn btn-primary w-full text-center">
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button onClick={() => setIsSignUp(!isSignUp)} className="text-sm text-secondary transition-colors hover:text-primary">
              {isSignUp ? "Already have an account? Sign in" : "Don&apos;t have an account? Create one"}
            </button>
          </div>
        </div>

        <p className="mt-6 text-center font-[var(--font-mono)] text-[10px] uppercase tracking-wider text-secondary">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-primary">Terms</Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
        </p>
      </div>
    </section>
  );
}
