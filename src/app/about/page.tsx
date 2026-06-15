import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — AETH",
  description: "Building the operating system for digital presence. Learn about our mission, values, and vision for the future of the web.",
};

const values = [
  { num: "01", title: "Owned infrastructure", desc: "We believe every business deserves to own its digital presence, not rent it from algorithms." },
  { num: "02", title: "AI-native thinking", desc: "AI is not an add-on. It is the foundation of how we design, build, and optimize every layer." },
  { num: "03", title: "Clarity over complexity", desc: "The best systems feel simple. We obsess over removing friction, not adding features." },
  { num: "04", title: "Future-ready by default", desc: "Every decision we make prepares your digital presence for how the internet is evolving." },
];

export default function AboutPage() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <div className="eyebrow">System Origin</div>
        <h1 className="max-w-[600px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          Building the operating system for digital presence.
        </h1>
        <p className="mt-6 max-w-[500px] text-lg leading-[1.5] text-secondary">
          AETH was created for a simple reason: the websites we build today are not
          designed for how the internet works tomorrow. We set out to change that.
        </p>
      </section>

      <section className="py-24">
        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="max-w-[400px] shrink-0">
            <div className="eyebrow">Mission</div>
            <h2 className="text-[40px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[28px]">
              A website should be more than a brochure.
            </h2>
          </div>
          <div className="max-w-[500px] space-y-6 text-sm leading-relaxed text-secondary">
            <p>In 2026, the internet is no longer just about human visitors browsing pages. AI agents, LLMs, recommendation systems, and automated workflows are now primary consumers of digital content.</p>
            <p>Yet most websites are still built as static brochures — beautiful to look at, but invisible to machines, fragmented across tools, and disconnected from the systems that drive modern growth.</p>
            <p>AETH exists to close that gap. We are building a platform where founders, creators, and modern businesses can create intelligent websites that work simultaneously for humans, AI agents, and search engines.</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="eyebrow">Core Values</div>
        <h2 className="text-[40px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[28px]">What we believe.</h2>
        <div className="mt-12 grid grid-cols-1 gap-px md:grid-cols-2">
          {values.map((v) => (
            <div key={v.num} className="aeth-card">
              <span className="section-number">[{v.num}]</span>
              <h3 className="mt-3 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="eyebrow">Vision</div>
        <h2 className="max-w-[500px] text-[40px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[28px]">Where we are going.</h2>
        <p className="mt-6 max-w-[500px] text-sm leading-relaxed text-secondary">
          We envision a world where every business has access to intelligent digital
          infrastructure — where your website is not just a cost center, but a strategic
          asset that gets smarter over time, attracts the right attention, and converts
          it into lasting relationships.
        </p>
        <div className="mt-8">
          <Link href="/login" className="btn btn-primary">Join the Mission</Link>
        </div>
      </section>
    </>
  );
}
