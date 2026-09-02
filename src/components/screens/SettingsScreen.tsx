import React from 'react';
import { Moon, Sun, Type, Volume2, Bell, Info, ShieldCheck, Heart, RefreshCw } from 'lucide-react';
import { useDeen } from '../../context/DeenContext';

export const SettingsScreen: React.FC = () => {
  const { settings, updateSettings } = useDeen();

  return (
    <div className="flex-1 p-3.5 space-y-4 pb-24 overflow-y-auto">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 p-5 text-white shadow-xl border border-emerald-500/20">
        <h2 className="text-xl font-bold tracking-tight mb-1">
          অ্যাপ্লিকেশন সেটিংস
        </h2>
        <p className="text-xs text-emerald-100/80">
          আপনার পছন্দমতো ফন্ট সাইজ, থিম ও অডিও প্লেয়ার কনফিগার করুন।
        </p>
      </div>

      {/* 1. Appearance & Theme */}
      <div className={`p-4 rounded-3xl border shadow-sm space-y-3 ${
        settings.isDarkMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
          <Moon className="w-3.5 h-3.5" />
          <span>থিম ও ডিসপ্লে</span>
        </h3>

        <div className="flex items-center justify-between py-1">
          <div>
            <h4 className="text-sm font-semibold">ডার্ক মোড (Dark Theme)</h4>
            <p className="text-xs text-slate-400">রাতে চোখের সুরক্ষার জন্য ডিপ ইসলামিক গ্রিন থিম</p>
          </div>
          <button
            onClick={() => updateSettings({ isDarkMode: !settings.isDarkMode })}
            className={`w-12 h-6.5 rounded-full p-1 transition-colors relative flex items-center ${
              settings.isDarkMode ? 'bg-emerald-600 justify-end' : 'bg-slate-300 justify-start'
            }`}
          >
            <div className="w-4.5 h-4.5 rounded-full bg-white shadow-md" />
          </button>
        </div>
      </div>

      {/* 2. Typography & Font Sizes */}
      <div className={`p-4 rounded-3xl border shadow-sm space-y-4 ${
        settings.isDarkMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
          <Type className="w-3.5 h-3.5" />
          <span>ফন্ট সাইজ ও পাঠ্য অপশন</span>
        </h3>

        {/* Arabic Font Slider */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold">আরবি ফন্ট সাইজ</span>
            <span className="font-mono font-bold text-amber-400">{settings.arabicFontSize}px</span>
          </div>
          <input
            type="range"
            min="20"
            max="42"
            step="2"
            value={settings.arabicFontSize}
            onChange={(e) => updateSettings({ arabicFontSize: Number(e.target.value) })}
            className="w-full accent-emerald-500 cursor-pointer"
          />
          {/* Preview */}
          <p className="font-arabic text-right text-amber-200 py-1" style={{ fontSize: `${settings.arabicFontSize}px` }} dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
        </div>

        {/* Bangla Font Slider */}
        <div className="space-y-1.5 pt-2 border-t border-slate-800">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold">বাংলা ফন্ট সাইজ</span>
            <span className="font-mono font-bold text-emerald-400">{settings.banglaFontSize}px</span>
          </div>
          <input
            type="range"
            min="12"
            max="24"
            step="1"
            value={settings.banglaFontSize}
            onChange={(e) => updateSettings({ banglaFontSize: Number(e.target.value) })}
            className="w-full accent-emerald-500 cursor-pointer"
          />
          {/* Preview */}
          <p className="text-slate-300 py-1" style={{ fontSize: `${settings.banglaFontSize}px` }}>
            পরম করুণাময় অসীম দয়ালু আল্লাহর নামে শুরু করছি।
          </p>
        </div>

        {/* Toggle Pronunciation */}
        <div className="flex items-center justify-between py-1 pt-2 border-t border-slate-800">
          <div>
            <h4 className="text-sm font-semibold">বাংলা উচ্চারণ প্রদর্শন</h4>
            <p className="text-xs text-slate-400">প্রতিটি আয়াতের নিচে বাংলা উচ্চারণ দেখান</p>
          </div>
          <button
            onClick={() => updateSettings({ showPronunciation: !settings.showPronunciation })}
            className={`w-12 h-6.5 rounded-full p-1 transition-colors relative flex items-center ${
              settings.showPronunciation ? 'bg-emerald-600 justify-end' : 'bg-slate-700 justify-start'
            }`}
          >
            <div className="w-4.5 h-4.5 rounded-full bg-white shadow-md" />
          </button>
        </div>

        {/* Toggle Meaning */}
        <div className="flex items-center justify-between py-1 pt-2 border-t border-slate-800">
          <div>
            <h4 className="text-sm font-semibold">বাংলা অনুবাদ প্রদর্শন</h4>
            <p className="text-xs text-slate-400">প্রতিটি আয়াত ও হাদিসের বাংলা অর্থ দেখান</p>
          </div>
          <button
            onClick={() => updateSettings({ showBanglaMeaning: !settings.showBanglaMeaning })}
            className={`w-12 h-6.5 rounded-full p-1 transition-colors relative flex items-center ${
              settings.showBanglaMeaning ? 'bg-emerald-600 justify-end' : 'bg-slate-700 justify-start'
            }`}
          >
            <div className="w-4.5 h-4.5 rounded-full bg-white shadow-md" />
          </button>
        </div>
      </div>

      {/* 3. Audio Player Settings */}
      <div className={`p-4 rounded-3xl border shadow-sm space-y-3 ${
        settings.isDarkMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
          <Volume2 className="w-3.5 h-3.5" />
          <span>অডিও তেলাওয়াত</span>
        </h3>

        <div className="flex items-center justify-between py-1">
          <div>
            <h4 className="text-sm font-semibold">স্বয়ংক্রিয় পরবর্তী আয়াত চালনা</h4>
            <p className="text-xs text-slate-400">বর্তমান আয়াত শেষ হলে নিজে থেকেই পরের আয়াত শুরু হবে</p>
          </div>
          <button
            onClick={() => updateSettings({ autoPlayNextAyah: !settings.autoPlayNextAyah })}
            className={`w-12 h-6.5 rounded-full p-1 transition-colors relative flex items-center ${
              settings.autoPlayNextAyah ? 'bg-emerald-600 justify-end' : 'bg-slate-700 justify-start'
            }`}
          >
            <div className="w-4.5 h-4.5 rounded-full bg-white shadow-md" />
          </button>
        </div>
      </div>

      {/* 4. App Info & Credits */}
      <div className={`p-4 rounded-3xl border shadow-sm space-y-2 text-center text-xs ${
        settings.isDarkMode ? 'bg-slate-900/60 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}>
        <p className="font-bold text-sm text-emerald-400">Deen Library - Quran & Hadith</p>
        <p>ভার্সন ১.০.০ • সম্পূর্ণ অফলাইন ও রিয়েলটাইম সুবিধা</p>
        <p className="text-[11px] text-slate-500">
          আল্লাহ তাআলা আমাদের এই ক্ষুদ্র প্রচেষ্টাকে কবুল করুন। আমীন।
        </p>
      </div>
    </div>
  );
};
