"use client";

import { FormEvent, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const answers = {
  trust: "BLACK& treats security, privacy, AI governance and EU regulatory readiness as operating infrastructure. Public pages distinguish alignment and readiness from certification or legal guarantees.",
  government: "For Government & Public Sector, BLACK& focuses on secure public systems, decision intelligence, interoperability, automation, resilience and identity and access—without implying undisclosed contracts or clearances.",
  capabilities: "BLACK& combines AI and intelligence systems, software engineering, data infrastructure, cybersecurity, enterprise automation and company building in one accountable model.",
  intelligence: "BLACK& Intelligence publishes institutional research, perspectives and decision briefings. It is evidence-led research, not content marketing.",
};

function responseFor(question: string, path: string) {
  const q = `${question} ${path}`.toLowerCase();
  if (/gdpr|ai act|nis2|dora|cra|security|privacy|trust/.test(q)) return answers.trust;
  if (/government|public|authority|procurement/.test(q)) return answers.government;
  if (/research|briefing|intelligence/.test(q)) return answers.intelligence;
  return answers.capabilities + " Ask about a capability, industry, trust topic or engagement.";
}

export function IntelligenceAssistant() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const context = useMemo(() => path.split("/").filter(Boolean).join(" / ") || "homepage", [path]);
  function submit(event: FormEvent) { event.preventDefault(); if (!question.trim()) return; setMessages((m) => [...m, question, responseFor(question, path)]); setQuestion(""); }
  return <aside className={`intelligence-assistant ${open ? "is-open" : ""}`}>
    {open && <div className="assistant-panel" role="dialog" aria-label="BLACK& Intelligence">
      <header><div><span className="system-label">BLACK& Intelligence</span><p>Context: {context}</p></div><button onClick={() => setOpen(false)} aria-label="Close assistant">×</button></header>
      <div className="assistant-messages"><p>Ask about BLACK&, its capabilities, industries, Government & Public Sector, Trust or EU frameworks.</p>{messages.map((message, index) => <p className={index % 2 ? "assistant-answer" : "assistant-question"} key={`${message}-${index}`}>{message}</p>)}</div>
      <form onSubmit={submit}><label htmlFor="blackand-question" className="sr-only">Question</label><input id="blackand-question" value={question} maxLength={500} onChange={(e) => setQuestion(e.target.value)} placeholder="Ask BLACK&" /><button>Send</button></form>
      <Link href="/contact#engagement-brief">Engage BLACK& →</Link><small>Responses are informational and may require human verification. No client, certification, contract or legal guarantee is implied.</small>
    </div>}
    <button className="assistant-trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open}>Ask BLACK& <span>+</span></button>
  </aside>;
}
