import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — BLACK&",
  description: "Get in touch with BLACK& to discuss strategic partnerships, business building opportunities, and investments.",
  alternates: { canonical: "https://blackandi.com/contact" },
  openGraph: {
    title: "Contact — BLACK&",
    description: "Let's build the future together.",
    url: "https://blackandi.com/contact",
    images: [{ url: "/og-contact.jpg", width: 1200, height: 630 }],
  },
};

const contactMethods = [
  {
    label: "Email",
    value: "contact@blackandi.com",
    href: "mailto:contact@blackandi.com",
    description: "For general inquiries and partnership discussions.",
  },
  {
    label: "Partnerships",
    value: "partnerships@blackandi.com",
    href: "mailto:partnerships@blackandi.com",
    description: "For joint ventures and strategic collaboration.",
  },
  {
    label: "Investments",
    value: "invest@blackandi.com",
    href: "mailto:invest@blackandi.com",
    description: "For investment opportunities and capital allocation.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <div className="eyebrow">Contact</div>
        <h1 className="max-w-[600px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          Let's build the future together.
        </h1>
        <p className="mt-6 max-w-[500px] text-lg leading-[1.5] text-secondary">
          We are open to discussing strategic partnerships, investments, and new
          opportunities. Reach out and let's explore what's possible.
        </p>
      </section>

      <section className="py-24">
        <div className="mb-12">
          <div className="eyebrow">Get in Touch</div>
          <h2 className="mt-4 text-[32px] font-bold tracking-[-0.04em]">
            Contact Methods
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              className="aeth-card group transition-all hover:border-accent-cyan/30"
            >
              <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-secondary">
                {method.label}
              </span>
              <span className="mt-2 block text-lg font-bold text-accent-cyan transition-colors group-hover:text-white">
                {method.value}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {method.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-elevated py-24">
        <div className="max-w-2xl">
          <div className="eyebrow">Direct Message</div>
          <h2 className="mt-4 text-[32px] font-bold tracking-[-0.04em]">
            Send a Message
          </h2>
          <p className="mt-4 text-secondary">
            Fill out the form below and we'll get back to you within 48 hours.
          </p>

          <form className="mt-12 space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-secondary">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full border-b border-[rgba(255,255,255,0.1)] bg-transparent py-3 text-primary outline-none transition-colors focus:border-accent-cyan"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-secondary">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full border-b border-[rgba(255,255,255,0.1)] bg-transparent py-3 text-primary outline-none transition-colors focus:border-accent-cyan"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-secondary">
                Company
              </label>
              <input
                type="text"
                className="w-full border-b border-[rgba(255,255,255,0.1)] bg-transparent py-3 text-primary outline-none transition-colors focus:border-accent-cyan"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label className="mb-2 block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-secondary">
                Interest *
              </label>
              <select
                required
                className="w-full border-b border-[rgba(255,255,255,0.1)] bg-transparent py-3 text-primary outline-none transition-colors focus:border-accent-cyan"
              >
                <option value="">Select an option...</option>
                <option value="partnership">Strategic Partnership</option>
                <option value="business-building">Business Building</option>
                <option value="investment">Investment</option>
                <option value="career">Career Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-secondary">
                Message *
              </label>
              <textarea
                required
                rows={4}
                className="w-full border-b border-[rgba(255,255,255,0.1)] bg-transparent py-3 text-primary outline-none transition-colors focus:border-accent-cyan resize-none"
                placeholder="Tell us about your opportunity..."
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
