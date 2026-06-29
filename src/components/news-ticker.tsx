"use client";

const newsItems = [
  "BLACK& develops CAESAREA Technologies — intelligence systems for governments, defence and critical infrastructure.",
  "BLACK& advances EEIL — European Energy Intelligence Layer for energy markets, infrastructure and strategic intelligence.",
  "BLACK& establishes & Ventures — the strategic capital and company-building layer of the BLACK& ecosystem.",
];

export function NewsTicker() {
  return (
    <div className="relative z-50 w-full overflow-hidden border-b border-white/10 bg-black text-white">
      <div className="flex h-9 items-center">
        <div className="flex h-full shrink-0 items-center bg-white px-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black">
          BLACK& News
        </div>

        <div className="relative flex flex-1 overflow-hidden">
          <div className="animate-news-ticker flex whitespace-nowrap">
            {[...newsItems, ...newsItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="mx-8 flex items-center gap-3 text-[12px] uppercase tracking-[0.12em] text-white/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}