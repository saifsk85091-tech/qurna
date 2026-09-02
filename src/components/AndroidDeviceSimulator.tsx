import React, { useState } from 'react';
import { RotateCcw, Smartphone, Moon, Sun, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { AndroidDeenApp } from './AndroidDeenApp';
import { useDeen } from '../context/DeenContext';

export const AndroidDeviceSimulator: React.FC = () => {
  const { settings, updateSettings, navigateTo } = useDeen();
  const [showSplashOverlay, setShowSplashOverlay] = useState(false);

  const handleRestartApp = () => {
    setShowSplashOverlay(true);
    navigateTo({ type: 'home' });
    setTimeout(() => {
      setShowSplashOverlay(false);
    }, 1800);
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 w-full max-w-xl mx-auto">
      {/* Emulator Control & Info Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-2 mb-3 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-800 text-xs text-slate-300 shadow-md">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold text-slate-200">Google Pixel 8 Pro (API 35)</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">
            Jetpack Compose
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleRestartApp}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition border border-slate-700 active:scale-95"
            title="রিস্টার্ট স্প্ল্যাশ স্ক্রিন"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Restart</span>
          </button>

          <button
            onClick={() => updateSettings({ isDarkMode: !settings.isDarkMode })}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition border border-slate-700 active:scale-95"
            title="লাইট/ডার্ক থিম পরিবর্তন"
          >
            {settings.isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-emerald-400" />}
            <span className="hidden sm:inline">{settings.isDarkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>

      {/* Physical Phone Chassis Frame */}
      <div className="relative w-full max-w-[400px] flex justify-center">
        {/* Hardware side buttons */}
        <div className="absolute -left-3 top-28 w-1 h-12 bg-slate-700 rounded-l-md" title="Volume Up" />
        <div className="absolute -left-3 top-44 w-1 h-12 bg-slate-700 rounded-l-md" title="Volume Down" />
        <div className="absolute -right-3 top-36 w-1 h-16 bg-emerald-700/60 rounded-r-md" title="Power Key" />

        {/* Outer Phone Shell */}
        <div className="w-full relative shadow-[0_25px_60px_rgba(0,0,0,0.85)] rounded-[50px] bg-slate-900 p-2.5 ring-1 ring-slate-700 border-4 border-slate-800">
          {/* Inner Display Screen */}
          <div className="w-full h-[780px] rounded-[40px] overflow-hidden relative flex flex-col bg-slate-950">
            {/* Splash Overlay on Restart */}
            {showSplashOverlay ? (
              <div className="absolute inset-0 z-50 bg-gradient-to-b from-[#0D5C3A] to-slate-950 flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
                <div className="w-20 h-20 rounded-3xl bg-emerald-600/30 border border-[#D4AF37]/50 flex items-center justify-center text-4xl shadow-2xl mb-4 animate-bounce">
                  🕌
                </div>
                <p className="font-arabic text-xl text-amber-300 mb-2">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                <h2 className="text-2xl font-black text-white tracking-tight">Deen Library</h2>
                <p className="text-sm text-emerald-200 mt-1 font-medium">কুরআন ও সহীহ হাদিস ভাণ্ডার</p>
                <div className="mt-8 flex items-center gap-2 text-xs text-amber-300/80">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                  <span>লোড হচ্ছে...</span>
                </div>
              </div>
            ) : null}

            {/* Live Interactive Deen Android App */}
            <AndroidDeenApp isFramed={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
