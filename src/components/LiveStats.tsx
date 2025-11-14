import { Activity } from 'lucide-react';

const LiveStats = () => {
  const activeStores = 147;

  return (
    <div className="fixed top-24 right-4 z-30 animate-in slide-in-from-right duration-500">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-2 rounded-full shadow-lg flex items-center gap-2 text-xs font-semibold">
        <Activity className="w-3.5 h-3.5" />
        <span className="whitespace-nowrap">
          <span className="font-bold">{activeStores}</span> mağaza aktif
        </span>
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LiveStats;
