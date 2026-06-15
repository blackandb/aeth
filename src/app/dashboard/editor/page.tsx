"use client";

import { useState } from "react";

const pageBlocks = [
  { id: 1, type: "HERO_SECTION", label: "Hero Section", h: 120 },
  { id: 2, type: "VALUE_PROP", label: "Value Proposition", h: 80 },
  { id: 3, type: "FEATURE_GRID", label: "Features Grid", h: 100 },
  { id: 4, type: "CTA_BLOCK", label: "Call to Action", h: 60 },
];

export default function EditorPage() {
  const [selectedBlock, setSelectedBlock] = useState<number>(1);
  const [viewport, setViewport] = useState("desktop");

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_280px]">
        {/* Canvas */}
        <div className="aeth-card">
          <div className="mb-4 flex items-center justify-between">
            <div className="section-number text-accent-cyan">Visual Editor // Mode: Design</div>
            <div className="flex gap-1">
              {["desktop", "tablet", "mobile"].map((v) => (
                <button key={v} onClick={() => setViewport(v)} className={`px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-wider ${viewport === v ? "bg-accent-cyan/10 text-accent-cyan" : "text-secondary hover:text-primary"}`}>
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className={`mx-auto transition-all ${viewport === "mobile" ? "max-w-[320px]" : viewport === "tablet" ? "max-w-[640px]" : "max-w-full"}`}>
            <div className="space-y-2">
              {pageBlocks.map((block) => (
                <button key={block.id} onClick={() => setSelectedBlock(block.id)} className={`w-full border border-dashed p-4 text-left transition-all ${selectedBlock === block.id ? "border-accent-cyan/40 bg-accent-cyan/5" : "border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)]"}`}>
                  <div className="flex items-center justify-between">
                    <span className="system-label">{block.type}</span>
                    {selectedBlock === block.id && (
                      <span className="bg-accent-cyan/20 px-2 py-0.5 text-[10px] text-accent-cyan">Active</span>
                    )}
                  </div>
                  <div className="mt-2 bg-[rgba(255,255,255,0.03)]" style={{ height: block.h }} />
                  <p className="mt-2 text-[10px] text-secondary">{block.label}</p>
                </button>
              ))}
              <button className="flex w-full items-center justify-center gap-2 border border-dashed border-[rgba(255,255,255,0.08)] py-4 font-[var(--font-mono)] text-xs text-secondary hover:border-[rgba(255,255,255,0.15)] hover:text-primary">
                + Add Block
              </button>
            </div>
          </div>
        </div>

        {/* Properties sidebar */}
        <div className="space-y-4">
          <div className="aeth-card">
            <div className="section-number text-accent-cyan">Block Properties</div>
            <div className="mt-3 space-y-3">
              <div>
                <label className="system-label mb-1 block">Block_Type</label>
                <div className="border border-[rgba(255,255,255,0.08)] bg-transparent px-3 py-2 text-sm">
                  {pageBlocks.find((b) => b.id === selectedBlock)?.type}
                </div>
              </div>
              <div>
                <label className="system-label mb-1 block">Label</label>
                <input type="text" defaultValue={pageBlocks.find((b) => b.id === selectedBlock)?.label} className="w-full border border-[rgba(255,255,255,0.08)] bg-transparent px-3 py-2 text-sm text-primary outline-none focus:border-accent-cyan/50" />
              </div>
              <div>
                <label className="system-label mb-1 block">Visibility</label>
                <select className="w-full border border-[rgba(255,255,255,0.08)] bg-bg px-3 py-2 text-sm text-primary outline-none">
                  <option>All visitors</option>
                  <option>Returning only</option>
                  <option>New visitors</option>
                </select>
              </div>
            </div>
          </div>

          <div className="aeth-card">
            <div className="section-number text-accent-cyan">AI Assistant</div>
            <div className="mt-3 border border-accent-cyan/20 bg-accent-cyan/5 p-3">
              <p className="text-xs leading-relaxed text-secondary">
                This hero section has strong clarity. Consider adding a trust signal below the CTA to improve conversion.
              </p>
            </div>
            <button className="mt-3 w-full border border-[rgba(255,255,255,0.08)] py-2 font-[var(--font-mono)] text-xs text-secondary hover:border-accent-cyan/30 hover:text-accent-cyan">
              Ask AI to improve this block
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
