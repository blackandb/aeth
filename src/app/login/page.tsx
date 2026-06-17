```tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
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
              Authorized access only.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="system-label mb-1.5 block">
                Email
              </label>

              <input
                type="email"
                placeholder="name@blackandi.com"
                className="w-full border border-[rgba(255,255,255,0.1)] bg-transparent px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/50 focus:border-accent-cyan/50"
              />
            </div>

            <div>
              <label className="system-label mb-1.5 block">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-[rgba(255,255,255,0.1)] bg-transparent px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/50 focus:border-accent-cyan/50"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full text-center"
            >
              Access Platform
            </button>
          </form>
        </div>

        <p className="mt-6 text-center font-[var(--font-mono)] text-[10px] uppercase tracking-wider text-secondary">
          Restricted platform for authorized users.
        </p>
      </div>
    </section>
  );
}
```
