import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Demo — AETH",
  description: "Schedule a walkthrough of the AETH platform. See how intelligent web infrastructure can work for your business.",
};

export default function ContactPage() {
  return (
    <>
      <section className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center py-24 text-center">
        <div className="eyebrow">Request Access</div>
        <h1 className="max-w-[600px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[36px]">
          See AETH in action.
        </h1>
        <p className="mt-6 max-w-[480px] text-lg leading-[1.5] text-secondary">
          Book a 15-minute walkthrough. We&apos;ll show you how the platform works for your specific use case.
        </p>

        <form className="mt-12 w-full max-w-[440px] space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="system-label mb-1.5 block text-left">Name</label>
              <input type="text" placeholder="Jane Doe" className="w-full border border-[rgba(255,255,255,0.1)] bg-transparent px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/50 focus:border-accent-cyan/50" />
            </div>
            <div>
              <label className="system-label mb-1.5 block text-left">Company</label>
              <input type="text" placeholder="Acme Inc." className="w-full border border-[rgba(255,255,255,0.1)] bg-transparent px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/50 focus:border-accent-cyan/50" />
            </div>
          </div>
          <div>
            <label className="system-label mb-1.5 block text-left">Email</label>
            <input type="email" placeholder="you@company.com" className="w-full border border-[rgba(255,255,255,0.1)] bg-transparent px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/50 focus:border-accent-cyan/50" />
          </div>
          <div>
            <label className="system-label mb-1.5 block text-left">What are you building?</label>
            <textarea rows={3} placeholder="Tell us about your project..." className="w-full resize-none border border-[rgba(255,255,255,0.1)] bg-transparent px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/50 focus:border-accent-cyan/50" />
          </div>
          <button type="submit" className="btn btn-primary w-full text-center">
            Request Demo
          </button>
        </form>

        <p className="mt-6 font-[var(--font-mono)] text-[10px] uppercase tracking-wider text-secondary">
          Or email us directly at <span className="text-accent-cyan">hello@aeth.com</span>
        </p>
      </section>
    </>
  );
}
