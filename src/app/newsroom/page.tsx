import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Newsroom | BLACK&" },
  description: "BLACK& company news, product releases, research and upcoming launches.",
  alternates: { canonical: "https://blackandi.com/newsroom" },
};

const latest = [
  {
    type: "Platform release",
    date: "15 July 2026",
    title: "BLACK& Board v1.1 advances secure executive collaboration",
    summary: "The latest Board platform release improves performance, collaboration and access to reports, intelligence, decisions and protected company information from mobile devices.",
    href: "https://board.blackandi.com/",
    cta: "Open BLACK& Board",
  },
  {
    type: "Product intelligence",
    date: "July 2026",
    title: "SYSTEM INC AI prepares an operating system for AI-native companies",
    summary: "SYSTEM INC AI coordinates specialist departments across legal, finance, operations, sales, marketing, human resources, strategy and customer support around one company context.",
    href: "/companies/system-inc-ai",
    cta: "Explore the platform",
  },
  {
    type: "Research",
    date: "15 July 2026",
    title: "BLACK& publishes five papers in the Intelligence Infrastructure Series",
    summary: "The responsive web series now adds an interactive European energy intelligence landscape to its work on sovereign AI, AI-native company creation, enterprise information and multi-agent architecture.",
    href: "/research",
    cta: "Explore the research series",
  },
];

export default function NewsroomPage() {
  return (
    <main className="news-hub">
      <header className="news-hub-hero">
        <div>
          <div className="eyebrow">BLACK& Newsroom</div>
          <h1>News from the intelligence company builder.</h1>
          <p>Company developments, product releases, research and upcoming launches—organized in one authoritative source.</p>
        </div>
        <div className="news-hub-status">
          <span className="live-dot" />
          <div><strong>News desk online</strong><small>Updated 15 July 2026</small></div>
        </div>
      </header>

      <section className="news-spotlight">
        <article className="news-spotlight-main">
          <div className="news-label">Upcoming launch · 27 July 2026</div>
          <h2>BLACK& Secure Board Communication Network</h2>
          <p>BLACK& will introduce an encrypted communication and video-conferencing environment built exclusively for its Board. Strategic discussions, confidential decisions and Board meetings will take place inside the protected BLACK& ecosystem.</p>
          <div className="news-spotlight-points">
            <span>Encrypted board communication</span>
            <span>Private video conferencing</span>
            <span>Integrated governance context</span>
          </div>
          <Link href="/company/governance">Explore BLACK& governance <span>↗</span></Link>
        </article>

        <aside className="news-briefing-rail" aria-label="Newsroom briefing">
          <div><span>01</span><p>Board v1.1 strengthens the secure mobile governance experience.</p></div>
          <div><span>02</span><p>SYSTEM INC AI moves toward coordinated, AI-operated company departments.</p></div>
          <div><span>03</span><p>Five responsive web papers establish the BLACK& Intelligence Infrastructure Series.</p></div>
        </aside>
      </section>

      <section className="news-latest">
        <div className="news-section-head">
          <div><span>Latest</span><h2>Current developments</h2></div>
          <Link href="/research">BLACK& Research →</Link>
        </div>
        <div className="news-card-grid">
          {latest.map((item, index) => (
            <article className="news-card" key={item.title}>
              <div className="news-card-top"><span>{String(index + 1).padStart(2, "0")}</span><time>{item.date}</time></div>
              <div className="news-label">{item.type}</div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Link href={item.href}>{item.cta} <span>↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="news-calendar">
        <div><span className="news-label">Launch calendar</span><h2>What comes next</h2></div>
        <div className="news-calendar-entry">
          <time><strong>27</strong><span>JUL 2026</span></time>
          <div><h3>Secure Board Communication Network</h3><p>Encrypted communication and native video conferencing for the BLACK& Board.</p></div>
          <span className="news-state">Scheduled</span>
        </div>
      </section>

      <section className="news-resources">
        <div>
          <span className="news-label">Media & institutional enquiries</span>
          <h2>Access verified BLACK& information.</h2>
          <p>Request company background, portfolio context, approved descriptions or an institutional response from the BLACK& team.</p>
        </div>
        <div className="news-resource-links">
          <Link href="/newsroom/media-kit">Media kit <span>↗</span></Link>
          <Link href="/company/facts">Company facts <span>↗</span></Link>
          <a href="mailto:hq@blackandi.com">hq@blackandi.com <span>↗</span></a>
        </div>
      </section>
    </main>
  );
}
