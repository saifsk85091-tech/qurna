import React from 'react';
import { ChevronLeft, Circle, Square } from 'lucide-react';
import { useDeen } from '../../context/DeenContext';

interface AndroidGesturePillProps {
  mode?: 'gesture' | '3button';
  isDark?: boolean;
}

export const AndroidGesturePill: React.FC<AndroidGesturePillProps> = ({ mode = 'gesture', isDark = true }) => {
  const { goBack, navigateTo } = useDeen();

  if (mode === '3button') {
    return (
      <div className={`w-full h-8 flex items-center justify-around select-none transition-colors ${
        isDark ? 'bg-slate-950 text-slate-400' : 'bg-slate-100 text-slate-600'
      }`}>
        <button onClick={() => goBack()} className="p-1 active:scale-90" aria-label="Back">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => navigateTo({ type: 'home' })} className="p-1 active:scale-90" aria-label="Home">
          <Circle className="w-3.5 h-3.5" />
        </button>
        <button className="p-1 active:scale-90" aria-label="Overview">
          <Square className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div className={`w-full py-2 flex items-center justify-center select-none ${
      isDark ? 'bg-slate-950' : 'bg-slate-50'
    }`}>
      <div className={`w-28 h-1 rounded-full transition-all ${
        isDark ? 'bg-slate-600/80 hover:bg-slate-400' : 'bg-slate-400 hover:bg-slate-600'
      }`} />
    </div>
  );
};
