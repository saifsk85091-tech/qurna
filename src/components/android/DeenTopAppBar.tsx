import React from 'react';
import { ArrowLeft, Search, Bookmark, Moon, Sun, Info, Share2 } from 'lucide-react';
import { useDeen } from '../../context/DeenContext';

interface DeenTopAppBarProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  showSearch?: boolean;
  showBookmark?: boolean;
  rightAction?: React.ReactNode;
}

export const DeenTopAppBar: React.FC<DeenTopAppBarProps> = ({
  title,
  subtitle,
  showBack = false,
  showSearch = true,
  showBookmark = true,
  rightAction
}) => {
  const { goBack, navigateTo, settings, updateSettings } = useDeen();

  return (
    <header className={`px-4 py-2.5 flex items-center justify-between border-b transition-colors ${
      settings.isDarkMode
        ? 'bg-slate-900/90 border-emerald-900/30 text-white'
        : 'bg-white/95 border-emerald-100 text-slate-900 shadow-sm'
    } backdrop-blur-md sticky top-0 z-30`}>
      {/* Left side: Back Button or Islamic Crest */}
      <div className="flex items-center gap-2.5 flex-1 min-w-0">
        {showBack ? (
          <button
            onClick={() => goBack()}
            className={`p-2 rounded-full transition-all active:scale-95 ${
              settings.isDarkMode ? 'hover:bg-slate-800 text-emerald-400' : 'hover:bg-emerald-50 text-emerald-700'
            }`}
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
        ) : (
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-amber-300 font-serif font-bold text-sm shadow-md ring-1 ring-emerald-400/30">
            دين
          </div>
        )}

        <div className="flex flex-col truncate">
          <h1 className="text-base font-bold truncate leading-tight tracking-tight">{title}</h1>
          {subtitle && (
            <p className={`text-[11px] font-medium truncate ${
              settings.isDarkMode ? 'text-emerald-400/80' : 'text-emerald-700/80'
            }`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-1">
        {rightAction}

        {showSearch && (
          <button
            onClick={() => navigateTo({ type: 'search' })}
            className={`p-2 rounded-full transition-all active:scale-95 ${
              settings.isDarkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
            }`}
            title="অনুসন্ধান"
          >
            <Search className="w-4 h-4" />
          </button>
        )}

        {showBookmark && (
          <button
            onClick={() => navigateTo({ type: 'bookmarks' })}
            className={`p-2 rounded-full transition-all active:scale-95 ${
              settings.isDarkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
            }`}
            title="সংরক্ষিত আয়াত ও হাদিস"
          >
            <Bookmark className="w-4 h-4" />
          </button>
        )}

        {/* Quick Theme Toggle */}
        <button
          onClick={() => updateSettings({ isDarkMode: !settings.isDarkMode })}
          className={`p-2 rounded-full transition-all active:scale-95 ${
            settings.isDarkMode 
              ? 'hover:bg-slate-800 text-amber-400' 
              : 'hover:bg-slate-100 text-emerald-800'
          }`}
          title={settings.isDarkMode ? 'লাইট মোড' : 'ডার্ক মোড'}
        >
          {settings.isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
