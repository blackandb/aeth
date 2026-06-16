import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — BLACK&",
  description: "Contact BLACK& to discuss strategic partnerships, opportunities, investments, and business development initiatives.",
};

export default function ContactPage() {
  return (
    <>
      <section className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center py-24 text-center">
        <div className="eyebrow">Contact BLACK&</div>
        <h1 className="max-w-[600px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[36px]">
          Let&apos;s discuss opportunities.
        </h1>
        <p className="mt-6 max-w-[480px] text-lg leading-[1.5] text-secondary">
          Contact us to discuss partnerships, investments, business development,
          or strategic opportunities across our active industries.
        </p>

        <form className="mt-12 w-full max-w-[440px] space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="system-label mb-1.5 block text-left">Name</label>
              <input type="text" placeholder="Your name" className="w-full border border-[rgba(255,255,255,0.1)] bg-transparent px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/50 focus:border-accent-cyan/50" />
            </div>
            <div>
              <label className="system-label mb-1.5 block text-left">Company</label>
              <input type="text" placeholder="Company name" className="w-full border border-[rgba(255,255,255,0.1)] bg-transparent px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/50 focus:border-accent-cyan/50" />
            </div>
          </div>
          <div>
            <label className="system-label mb-1.5 block text-left">Email</label>
            <input type="email" placeholder="you@company.com" className="w-full border border-[rgba(255,255,255,0.1)] bg-transparent px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/50 focus:border-accent-cyan/50" />
          </div>
          <div>
            <label className="system-label mb-1.5 block text-left">Message</label>
            <textarea rows={3} placeholder="Tell us about the opportunity..." className="w-full resize-none border border-[rgba(255,255,255,0.1)] bg-transparent px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/50 focus:border-accent-cyan/50" />
          </div>
          <button type="submit" className="btn btn-primary w-full text-center">
            Send Message
          </button>
        </form>

        <p className="mt-6 font-[var(--font-mono)] text-[10px] uppercase tracking-wider text-secondary">
          Or email us directly at <span className="text-accent-cyan">contact@blackandi.com</span>
        </p>
      </section>
    </>
  );
}
