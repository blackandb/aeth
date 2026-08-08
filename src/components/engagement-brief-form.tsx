"use client";

import { FormEvent, useState } from "react";

const fields = [["organization", "Organization"], ["industry", "Industry / public function"], ["problem", "Problem to solve"], ["scale", "Scale and operating environment"], ["security", "Security context"], ["regulatory", "Regulatory context"], ["timeline", "Timeline"]] as const;

export function EngagementBriefForm() {
  const [brief, setBrief] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    const output = [`BLACK& — ENGAGEMENT BRIEF`, `Generated: ${new Date().toISOString()}`, ""];
    for (const [name, label] of fields) output.push(`${label.toUpperCase()}\n${String(data.get(name) || "Not provided")}\n`);
    output.push("Generated locally for review. It is not transmitted by this website. Do not send classified, regulated or security-sensitive information."); setBrief(output.join("\n"));
  }
  function download() { const url = URL.createObjectURL(new Blob([brief], { type: "text/plain;charset=utf-8" })); const link = document.createElement("a"); link.href = url; link.download = "BLACKAND-Engagement-Brief.txt"; link.click(); URL.revokeObjectURL(url); }
  return <section id="engagement-brief" className="engagement-brief"><header><span className="system-label">Engagement brief</span><h2>Frame the operating requirement.</h2><p>Create a local brief before initiating contact. Nothing entered here is sent to a server.</p></header><form onSubmit={submit}>{fields.map(([name, label], index) => <label key={name}>{label}{index > 1 ? <textarea name={name} rows={3} maxLength={1500} /> : <input name={name} maxLength={200} />}</label>)}<button className="button-light">Generate Engagement Brief</button></form>{brief && <div className="brief-output"><pre>{brief}</pre><button className="button-line" onClick={download}>Download brief</button><a className="button-line" href="mailto:hq@blackandi.com">Email BLACK&</a></div>}</section>;
}
