import React from 'react';
import { Home, BookOpen, ScrollText, Bookmark, Settings } from 'lucide-react';
import { useDeen } from '../../context/DeenContext';

export const DeenBottomNav: React.FC = () => {
  const { activeScreen, navigateTo, settings } = useDeen();

  const navItems = [
    { id: 'home', label: 'হোম', icon: Home, target: { type: 'home' as const } },
    { id: 'quran', label: 'কুরআন', icon: BookOpen, target: { type: 'quran_list' as const } },
    { id: 'hadith', label: 'হাদিস', icon: ScrollText, target: { type: 'hadith_books' as const } },
    { id: 'bookmarks', label: 'সংরক্ষিত', icon: Bookmark, target: { type: 'bookmarks' as const } },
    { id: 'settings', label: 'সেটিংস', icon: Settings, target: { type: 'settings' as const } }
  ];

  const getIsActive = (id: string) => {
    switch (id) {
      case 'home':
        return activeScreen.type === 'home';
      case 'quran':
        return activeScreen.type === 'quran_list' || activeScreen.type === 'surah_detail';
      case 'hadith':
        return activeScreen.type === 'hadith_books' || activeScreen.type === 'hadith_chapters' || activeScreen.type === 'hadith_list' || activeScreen.type === 'hadith_detail';
      case 'bookmarks':
        return activeScreen.type === 'bookmarks';
      case 'settings':
        return activeScreen.type === 'settings' || activeScreen.type === 'about';
      default:
        return false;
    }
  };

  return (
    <nav className={`w-full px-2 py-1.5 border-t select-none transition-colors ${
      settings.isDarkMode
        ? 'bg-slate-900/95 border-emerald-900/30 shadow-2xl'
        : 'bg-white/95 border-emerald-100 shadow-lg'
    } backdrop-blur-lg flex items-center justify-around z-20`}>
      {navItems.map((item) => {
        const isActive = getIsActive(item.id);
        const IconComponent = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => navigateTo(item.target)}
            className="flex flex-col items-center justify-center py-1 px-3 group flex-1 transition-transform active:scale-95"
          >
            {/* Pill Indicator on Active */}
            <div
              className={`w-14 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? settings.isDarkMode
                    ? 'bg-emerald-600/30 text-emerald-300 ring-1 ring-emerald-500/40 shadow-sm'
                    : 'bg-emerald-100 text-emerald-800 font-semibold'
                  : settings.isDarkMode
                  ? 'text-slate-400 hover:text-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <IconComponent className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
            </div>

            <span
              className={`text-[11px] mt-0.5 tracking-tight transition-colors duration-200 ${
                isActive
                  ? settings.isDarkMode
                    ? 'font-bold text-emerald-300'
                    : 'font-bold text-emerald-800'
                  : settings.isDarkMode
                  ? 'font-normal text-slate-400'
                  : 'font-normal text-slate-600'
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
