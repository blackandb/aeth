"use client";

import { useEffect, useState } from "react";

type Consent = { essential: true; preferences: boolean; analytics: boolean; updated: string };
const key = "blackand-consent-v1";

function save(preferences: boolean, analytics: boolean) {
  const value: Consent = { essential: true, preferences, analytics, updated: new Date().toISOString() };
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("blackand:consent", { detail: value }));
}

export function ConsentManager() {
  const [open, setOpen] = useState(false);
  const [manage, setManage] = useState(false);
  const [preferences, setPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(!localStorage.getItem(key)), 0);
    const show = () => { setManage(true); setOpen(true); };
    window.addEventListener("blackand:manage-consent", show);
    return () => { window.clearTimeout(timer); window.removeEventListener("blackand:manage-consent", show); };
  }, []);

  if (!open) return null;
  return (
    <section className="consent-panel" role="dialog" aria-modal="true" aria-labelledby="consent-title">
      <div>
        <span className="system-label">Privacy controls</span>
        <h2 id="consent-title">Your choices remain under your control.</h2>
        <p>BLACK& uses essential storage to operate this website. Optional preferences and analytics remain disabled until you consent.</p>
      </div>
      {manage && <fieldset className="consent-options">
        <legend>Manage preferences</legend>
        <label><input type="checkbox" checked disabled /> Essential <small>Always active</small></label>
        <label><input type="checkbox" checked={preferences} onChange={(e) => setPreferences(e.target.checked)} /> Preferences</label>
        <label><input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} /> Analytics</label>
      </fieldset>}
      <div className="consent-actions">
        <button onClick={() => { save(true, true); setOpen(false); }}>Accept All</button>
        <button onClick={() => { save(false, false); setOpen(false); }}>Reject Non-Essential</button>
        <button onClick={() => manage ? (save(preferences, analytics), setOpen(false)) : setManage(true)}>{manage ? "Save Preferences" : "Manage Preferences"}</button>
      </div>
    </section>
  );
}
