export default function DashboardLoading() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
        <div className="aeth-card h-64" />
        <div className="aeth-card h-64" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="aeth-card h-48" />
        <div className="aeth-card h-48" />
        <div className="aeth-card h-48" />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
        <div className="aeth-card h-40" />
        <div className="aeth-card h-40" />
      </div>
      <div className="system-label text-center">Loading System Modules...</div>
    </div>
  );
}
