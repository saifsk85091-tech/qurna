import React from 'react';
import { 
  BookOpen, 
  Smartphone, 
  Code, 
  BookText, 
  Download, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';

interface HeaderProps {
  currentView: 'simulator' | 'split' | 'code' | 'guide';
  setCurrentView: (view: 'simulator' | 'split' | 'code' | 'guide') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  return (
    <header className="w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand Logo & Step Indicator */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0D5C3A] to-emerald-600 border border-[#D4AF37]/50 flex items-center justify-center text-white shadow-md shadow-emerald-950/50">
              <span className="text-xl">🕌</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-black text-slate-100 tracking-tight">Deen Library</h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                  Android Kotlin & Compose
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Quran & Hadith Offline Platform</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>STEP 1: Base Setup & Navigation</span>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center bg-slate-900 p-1 rounded-2xl border border-slate-800 text-xs">
          <button
            onClick={() => setCurrentView('split')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition ${
              currentView === 'split' 
                ? 'bg-emerald-600 text-white shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Split View</span>
          </button>
          
          <button
            onClick={() => setCurrentView('simulator')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition ${
              currentView === 'simulator' 
                ? 'bg-emerald-600 text-white shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Live Android</span>
          </button>

          <button
            onClick={() => setCurrentView('code')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition ${
              currentView === 'code' 
                ? 'bg-emerald-600 text-white shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Code Inspector</span>
          </button>

          <button
            onClick={() => setCurrentView('guide')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition ${
              currentView === 'guide' 
                ? 'bg-emerald-600 text-white shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookText className="w-3.5 h-3.5" />
            <span>Setup Guide</span>
          </button>
        </div>
      </div>
    </header>
  );
};
