const inputClass = "w-full border border-[rgba(255,255,255,0.08)] bg-transparent px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent-cyan/50";
const selectClass = "w-full border border-[rgba(255,255,255,0.08)] bg-bg px-4 py-3 text-sm text-primary outline-none";

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <div className="aeth-card">
        <div className="section-number text-accent-cyan">Account Information</div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="system-label mb-1.5 block">Full_Name</label>
            <input type="text" defaultValue="Jane Doe" className={inputClass} />
          </div>
          <div>
            <label className="system-label mb-1.5 block">Email</label>
            <input type="email" defaultValue="jane@company.com" className={inputClass} />
          </div>
          <div>
            <label className="system-label mb-1.5 block">Company</label>
            <input type="text" defaultValue="Acme Inc." className={inputClass} />
          </div>
          <div>
            <label className="system-label mb-1.5 block">Role</label>
            <select className={selectClass}>
              <option>Founder</option>
              <option>CTO</option>
              <option>Marketing Lead</option>
              <option>Developer</option>
            </select>
          </div>
        </div>
      </div>

      <div className="aeth-card">
        <div className="section-number text-accent-cyan">Site Configuration</div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="system-label mb-1.5 block">Site_Name</label>
            <input type="text" defaultValue="My AETH Site" className={inputClass} />
          </div>
          <div>
            <label className="system-label mb-1.5 block">Custom_Domain</label>
            <input type="text" defaultValue="www.example.com" className={inputClass} />
          </div>
          <div>
            <label className="system-label mb-1.5 block">Default_Language</label>
            <select className={selectClass}>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
          <div>
            <label className="system-label mb-1.5 block">Timezone</label>
            <select className={selectClass}>
              <option>UTC</option>
              <option>EST (UTC-5)</option>
              <option>PST (UTC-8)</option>
              <option>CET (UTC+1)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="aeth-card">
        <div className="section-number text-accent-cyan">Notification Protocols</div>
        <div className="mt-4 space-y-4">
          {[
            { label: "Conversion alerts", desc: "Get notified when a visitor converts" },
            { label: "Weekly reports", desc: "Receive a weekly performance summary" },
            { label: "AI suggestions", desc: "Get AI-powered improvement recommendations" },
            { label: "System updates", desc: "Platform updates and maintenance notices" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] pb-3 last:border-0">
              <div>
                <p className="text-sm font-bold">{item.label}</p>
                <p className="text-xs text-secondary">{item.desc}</p>
              </div>
              <div className="flex h-5 w-9 items-center justify-end rounded-full bg-accent-cyan/30 px-0.5">
                <div className="h-4 w-4 rounded-full bg-accent-cyan" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button className="btn btn-primary">Save Changes</button>
      </div>
    </div>
  );
}
