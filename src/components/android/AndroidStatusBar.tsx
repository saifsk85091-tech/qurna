import React, { useState, useEffect } from 'react';
import { Wifi, BatteryMedium, Sparkles } from 'lucide-react';

interface AndroidStatusBarProps {
  isDark?: boolean;
}

export const AndroidStatusBar: React.FC<AndroidStatusBarProps> = ({ isDark = true }) => {
  const [timeStr, setTimeStr] = useState('12:00');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const mins = now.getMinutes().toString().padStart(2, '0');
      setTimeStr(`${hours}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full px-5 pt-3 pb-1 flex items-center justify-between text-xs font-medium tracking-tight select-none ${
      isDark ? 'text-emerald-100/90' : 'text-emerald-950/90'
    }`}>
      {/* Time & App Indicator */}
      <div className="flex items-center gap-1.5">
        <span className="font-semibold text-[13px]">{timeStr}</span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
      </div>

      {/* Center Camera Punch Hole */}
      <div className="w-4 h-4 rounded-full bg-black/90 border border-emerald-800/40 shadow-inner flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-slate-900 ring-1 ring-emerald-500/30"></div>
      </div>

      {/* Status Icons */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold tracking-wider opacity-80">5G</span>
        <Wifi className="w-3.5 h-3.5 stroke-[2.5]" />
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-semibold">94%</span>
          <BatteryMedium className="w-4 h-4 stroke-[2.2]" />
        </div>
      </div>
    </div>
  );
};
