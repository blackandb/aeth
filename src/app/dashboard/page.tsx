export default function DashboardPage() {
  return (
    <div className="space-y-4">
      {/* Row 1: Platform Status + Intelligence Readiness */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
        {/* 01 Platform Status */}
        <div className="aeth-card">
          <div className="section-number text-accent-cyan">01 Platform Status</div>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-2xl font-bold tracking-tight">BLACK& PLATFORM ACTIVE</span>
            <span className="border border-accent-cyan px-2 py-0.5 font-[var(--font-mono)] text-[10px] text-accent-cyan">LIVE</span>
          </div>
          <div className="mt-4 system-label">Intelligence Infrastructure Monitor</div>
          <div className="mt-2 flex gap-0.5">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className={`h-6 flex-1 ${i === 22 ? "bg-accent-red" : "bg-accent-cyan/80"}`} />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-secondary">
            <span>-30 Days</span>
            <span>99.98% Operational Continuity</span>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="system-label">Last Platform Update</div>
              <div className="text-sm font-bold">2024-10-24 09:12:00</div>
            </div>
            <div className="text-right">
              <div className="system-label">System Capacity</div>
              <div className="text-sm font-bold">Current: 34% Capacity</div>
            </div>
          </div>
        </div>

        {/* 02 Intelligence Readiness */}
        <div className="aeth-card">
          <div className="section-number text-accent-cyan">02 Intelligence Readiness</div>
          <div className="mt-4 flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent-cyan">
              <span className="text-2xl font-bold">88%</span>
            </div>
            <div>
              <div className="system-label">Core System Status</div>
              <div className="text-sm font-bold">BLACK& INTELLIGENCE_V1.01 // Active</div>
              <div className="mt-2 system-label">Intelligence Calibration</div>
              <div className="mt-1 h-1 w-full bg-[rgba(255,255,255,0.1)]">
                <div className="h-full w-[88%] bg-accent-cyan" />
              </div>
              <div className="mt-2 system-label">Stability Score</div>
              <div className="text-sm font-bold">0.942 - Stable</div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Portfolio Status + Market Visibility + Operational Systems */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* 03 Portfolio Status */}
        <div className="aeth-card">
          <div className="section-number text-accent-cyan">03 Portfolio Status</div>
          <div className="mt-3">
            <div className="system-label">Active Business Lines</div>
            <div className="text-3xl font-bold">6</div>
            <span className="text-xs text-accent-cyan">Technology, Construction, Defense, Clothing, Food, Hospitality</span>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <span className="system-label">Strategic Alignment</span>
              <span className="system-label">Unit_ID: BLACK&</span>
            </div>
            <div className="text-sm font-bold">Aligned</div>
          </div>
          <div className="mt-4">
            <div className="system-label">Latest Focus</div>
            <div className="text-sm font-bold">&quot;Technology & Market Expansion&quot;</div>
            <div className="system-label">14 minutes ago</div>
          </div>
        </div>

        {/* 04 Market Visibility */}
        <div className="aeth-card border-accent-cyan/30">
          <div className="section-number text-accent-cyan">04 Market Visibility</div>
          <div className="mt-3 flex items-center justify-between">
            <span className="system-label">Digital Presence Score</span>
            <span className="text-sm font-bold">92/100</span>
          </div>
          <div className="mt-1 h-1 w-full bg-[rgba(255,255,255,0.1)]">
            <div className="h-full w-[92%] bg-accent-cyan" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <div className="system-label">Market Indexed</div>
              <div className="text-2xl font-bold">98.4%</div>
            </div>
            <div>
              <div className="system-label">Authority Signals</div>
              <div className="text-2xl font-bold">12.4K</div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-cyan" />
            <span className="system-label">Visibility Active: Google, Bing, AI Search</span>
          </div>
        </div>

        {/* 05 Operational Systems */}
        <div className="aeth-card">
          <div className="section-number text-accent-cyan">05 Operational Systems</div>
          <div className="mt-3 space-y-2">
            {[
              { name: "WF_MARKET_SYNC", status: "Completed" },
              { name: "WF_BRAND_POSITIONING", status: "In Progress" },
              { name: "WF_REPORTING_CYCLE", status: "Scheduled" },
            ].map((wf) => (
              <div key={wf.name} className="flex items-center justify-between">
                <span className="font-[var(--font-mono)] text-xs text-accent-cyan">{wf.name}</span>
                <span className="system-label">{wf.status}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="system-label">Execution Score</div>
              <div className="text-2xl font-bold">0.988</div>
            </div>
            <div className="text-right">
              <div className="system-label">Active Priorities</div>
              <div className="text-2xl font-bold">14</div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Opportunity Signals + Strategic Actions */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
        {/* 06 Opportunity Signals */}
        <div className="aeth-card">
          <div className="flex items-center justify-between">
            <div className="section-number text-accent-cyan">06 Opportunity Signals</div>
            <div className="flex gap-6">
              <div className="text-right">
                <div className="system-label">Opportunity Rate</div>
                <div className="text-lg font-bold">3.82% <span className="text-xs text-accent-cyan">↑ 8.4%</span></div>
                <div className="text-[10px] text-accent-red">HIGH</div>
              </div>
              <div className="text-right">
                <div className="system-label">Qualified Leads</div>
                <div className="text-lg font-bold">842 <span className="text-xs text-accent-cyan">↑ 12%</span></div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-end gap-1">
            {[40, 30, 50, 35, 60, 45, 70, 55, 65, 50, 75, 60].map((h, i) => (
              <div key={i} className="flex-1 bg-accent-cyan/60" style={{ height: `${h}px` }} />
            ))}
          </div>
        </div>

        {/* 07 Strategic Actions */}
        <div className="aeth-card">
          <div className="section-number text-accent-cyan">07 Strategic Actions</div>
          <div className="mt-3 space-y-3">
            <div className="border border-accent-red/30 bg-accent-red/5 p-3">
              <div className="flex items-center justify-between">
                <span className="bg-accent-red px-2 py-0.5 text-[10px] font-bold text-bg">Priority</span>
                <span className="system-label">#042</span>
              </div>
              <p className="mt-2 text-xs text-secondary">Refining BLACK& positioning for digital visibility and strategic partners.</p>
            </div>
            <div className="border border-[rgba(255,165,0,0.3)] bg-[rgba(255,165,0,0.05)] p-3">
              <div className="flex items-center justify-between">
                <span className="bg-[#FFA500] px-2 py-0.5 text-[10px] font-bold text-bg">Active</span>
                <span className="system-label">#045</span>
              </div>
              <p className="mt-2 text-xs text-secondary">Reviewing strategic opportunities across active industries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
