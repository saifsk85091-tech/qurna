import React from 'react';
import { useDeen } from '../context/DeenContext';
import {
  Home,
  BookOpen,
  ScrollText,
  Bookmark,
  Settings,
  Search,
  ArrowLeft,
  Moon,
  Sun,
  Sparkles,
  Volume2,
  Play,
  Pause
} from 'lucide-react';

// Screens
import { HomeScreen } from './screens/HomeScreen';
import { QuranScreen } from './screens/QuranScreen';
import { SurahDetailScreen } from './screens/SurahDetailScreen';
import { HadithBooksScreen } from './screens/HadithBooksScreen';
import { HadithChaptersScreen } from './screens/HadithChaptersScreen';
import { HadithDetailScreen } from './screens/HadithDetailScreen';
import { SearchScreen } from './screens/SearchScreen';
import { BookmarksScreen } from './screens/BookmarksScreen';
import { SettingsScreen } from './screens/SettingsScreen';

import { MiniAudioPlayer } from './android/MiniAudioPlayer';
import { FullAudioModal } from './android/FullAudioModal';
import { SURAH_LIST, DAILY_AYAH } from '../data/quranData';
import { HADITH_BOOKS } from '../data/hadithData';

export const DeenApp: React.FC = () => {
  const {
    activeScreen,
    navigateTo,
    goBack,
    settings,
    updateSettings,
    audioState,
    playAyahAudio,
    togglePlayPause
  } = useDeen();

  // Screen header & component resolution
  const getScreenConfig = () => {
    switch (activeScreen.type) {
      case 'home':
        return {
          title: 'দ্বীন লাইব্রেরি',
          subtitle: 'কুরআন ও সহীহ হাদিস ভাণ্ডার',
          showBack: false,
          showSearch: true,
          component: <HomeScreen />
        };
      case 'quran_list':
        return {
          title: 'আল-কুরআনুল কারীম',
          subtitle: '১১৪টি সূরা • আরবি, বাংলা অর্থ ও উচ্চারণ',
          showBack: false,
          showSearch: true,
          component: <QuranScreen />
        };
      case 'surah_detail': {
        const surah = SURAH_LIST.find(s => s.number === activeScreen.surahNumber);
        return {
          title: `সূরা ${surah?.banglaName || ''}`,
          subtitle: `${surah?.englishName || ''} • আয়াত সংখ্যা ${surah?.totalAyah || ''} (${surah?.revelationType || ''})`,
          showBack: true,
          showSearch: false,
          component: <SurahDetailScreen surahNumber={activeScreen.surahNumber} initialAyah={activeScreen.initialAyah} />
        };
      }
      case 'hadith_books':
        return {
          title: 'সহীহ হাদিস গ্রন্থসমূহ',
          subtitle: 'সিহাহ সিত্তাহ সহ ৮টি প্রামাণ্য কিতাব',
          showBack: false,
          showSearch: true,
          component: <HadithBooksScreen />
        };
      case 'hadith_chapters': {
        const book = HADITH_BOOKS.find(b => b.id === activeScreen.bookId);
        return {
          title: `${book?.banglaName || 'হাদিস'} অধ্যায়সমূহ`,
          subtitle: book?.author || '',
          showBack: true,
          showSearch: false,
          component: <HadithChaptersScreen bookId={activeScreen.bookId} />
        };
      }
      case 'hadith_list':
      case 'hadith_detail': {
        const bookId = 'bookId' in activeScreen ? activeScreen.bookId : undefined;
        const chapterId = 'chapterId' in activeScreen ? activeScreen.chapterId : undefined;
        const hadithId = 'hadithId' in activeScreen ? activeScreen.hadithId : undefined;
        return {
          title: 'সহীহ হাদিস পাঠ',
          subtitle: 'সনদ ও অর্থসহ বিস্তারিত পর্যালোচনা',
          showBack: true,
          showSearch: false,
          component: <HadithDetailScreen bookId={bookId} chapterId={chapterId} hadithId={hadithId} />
        };
      }
      case 'search':
        return {
          title: 'অনুসন্ধান (Search)',
          subtitle: 'কুরআন ও হাদিস ভাণ্ডার',
          showBack: true,
          showSearch: false,
          component: <SearchScreen />
        };
      case 'bookmarks':
        return {
          title: 'সংরক্ষিত বাণীসমূহ',
          subtitle: 'পছন্দের আয়াত ও হাদিস তালিকা',
          showBack: false,
          showSearch: false,
          component: <BookmarksScreen />
        };
      case 'settings':
      case 'about':
        return {
          title: 'অ্যাপ সেটিংস',
          subtitle: 'ফন্ট সাইজ, থিম ও অডিও প্লেয়ার কনফিগারেশন',
          showBack: false,
          showSearch: false,
          component: <SettingsScreen />
        };
      default:
        return {
          title: 'দ্বীন লাইব্রেরি',
          subtitle: 'কুরআন ও হাদিস',
          showBack: false,
          showSearch: true,
          component: <HomeScreen />
        };
    }
  };

  const { title, subtitle, showBack, showSearch, component } = getScreenConfig();

  const isNavActive = (id: string) => {
    switch (id) {
      case 'home':
        return activeScreen.type === 'home';
      case 'quran':
        return activeScreen.type === 'quran_list' || activeScreen.type === 'surah_detail';
      case 'hadith':
        return activeScreen.type === 'hadith_books' || activeScreen.type === 'hadith_chapters' || activeScreen.type === 'hadith_list' || activeScreen.type === 'hadith_detail';
      case 'bookmarks':
        return activeScreen.type === 'bookmarks';
      case 'search':
        return activeScreen.type === 'search';
      case 'settings':
        return activeScreen.type === 'settings' || activeScreen.type === 'about';
      default:
        return false;
    }
  };

  const navLinks = [
    { id: 'home', label: 'হোম', icon: Home, target: { type: 'home' as const } },
    { id: 'quran', label: 'আল-কুরআন', icon: BookOpen, target: { type: 'quran_list' as const } },
    { id: 'hadith', label: 'সহীহ হাদিস', icon: ScrollText, target: { type: 'hadith_books' as const } },
    { id: 'search', label: 'অনুসন্ধান', icon: Search, target: { type: 'search' as const } },
    { id: 'bookmarks', label: 'সংরক্ষিত', icon: Bookmark, target: { type: 'bookmarks' as const } },
    { id: 'settings', label: 'সেটিংস', icon: Settings, target: { type: 'settings' as const } }
  ];

  const isDailyAyahPlaying = audioState.isPlaying && audioState.currentSurahNumber === DAILY_AYAH.surahNumber && audioState.currentAyahNumber === DAILY_AYAH.ayahNumber;

  return (
    <div className={`min-h-screen flex flex-col md:flex-row transition-colors duration-300 ${
      settings.isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* ========================================================= */}
      {/* 1. DESKTOP & TABLET SIDEBAR (Hidden on mobile < md)       */}
      {/* ========================================================= */}
      <aside className={`hidden md:flex flex-col w-64 lg:w-72 border-r shrink-0 select-none z-30 transition-colors sticky top-0 h-screen ${
        settings.isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-800/60 flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-800 flex items-center justify-center text-amber-300 font-serif font-bold text-xl shadow-lg ring-1 ring-emerald-400/30">
            دين
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>দ্বীন লাইব্রেরি</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-sans">
                Deen
              </span>
            </h1>
            <p className="text-xs text-emerald-400 font-medium">কুরআন ও সহীহ হাদিস</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-3 space-y-1.5 overflow-y-auto">
          {navLinks.map((item) => {
            const active = isNavActive(item.id);
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => navigateTo(item.target)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all text-left ${
                  active
                    ? settings.isDarkMode
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md'
                      : 'bg-emerald-600 text-white shadow-md'
                    : settings.isDarkMode
                    ? 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-emerald-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Quick Daily Ayah Mini Widget in Sidebar */}
          <div className={`mt-6 p-3.5 rounded-2xl border transition-all ${
            settings.isDarkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-emerald-50/60 border-emerald-200'
          }`}>
            <div className="flex items-center justify-between text-[11px] font-bold text-amber-400 mb-1.5">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>আজকের বাণী</span>
              </span>
              <span className="text-[10px] text-emerald-400">
                সূরা {DAILY_AYAH.surahName}
              </span>
            </div>
            <p className="text-xs font-arabic text-amber-200 line-clamp-2 text-right my-1" dir="rtl">
              {DAILY_AYAH.arabicText}
            </p>
            <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
              {DAILY_AYAH.banglaTranslation}
            </p>
            <button
              onClick={() => {
                if (isDailyAyahPlaying) {
                  togglePlayPause();
                } else {
                  playAyahAudio(DAILY_AYAH.surahNumber, DAILY_AYAH);
                }
              }}
              className="mt-2.5 w-full flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition active:scale-95 shadow-sm"
            >
              {isDailyAyahPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
              <span>{isDailyAyahPlaying ? 'বিরতি' : 'তেলাওয়াত শুনুন'}</span>
            </button>
          </div>
        </nav>

        {/* Sidebar Footer: Theme Toggle & Info */}
        <div className="p-3 border-t border-slate-800/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateSettings({ isDarkMode: !settings.isDarkMode })}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all active:scale-95 ${
                settings.isDarkMode ? 'bg-slate-800 text-amber-300 hover:bg-slate-700' : 'bg-slate-100 text-emerald-800 hover:bg-slate-200'
              }`}
            >
              {settings.isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              <span>{settings.isDarkMode ? 'লাইট মোড' : 'ডার্ক মোড'}</span>
            </button>
          </div>

          <span className="text-[11px] font-mono text-slate-500">v1.0.0</span>
        </div>
      </aside>

      {/* ========================================================= */}
      {/* 2. MAIN APPLICATION CONTENT AREA                          */}
      {/* ========================================================= */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen relative overflow-x-hidden">
        {/* Top Header Bar */}
        <header className={`px-4 sm:px-6 py-3 flex items-center justify-between border-b sticky top-0 z-20 transition-colors backdrop-blur-md ${
          settings.isDarkMode
            ? 'bg-slate-950/90 border-slate-800/80 text-white'
            : 'bg-white/90 border-slate-200 text-slate-900 shadow-sm'
        }`}>
          {/* Left: Back button or Screen Title */}
          <div className="flex items-center gap-3 min-w-0">
            {showBack ? (
              <button
                onClick={() => goBack()}
                className={`p-2 rounded-2xl transition active:scale-95 ${
                  settings.isDarkMode ? 'bg-slate-900 hover:bg-slate-800 text-emerald-400' : 'bg-slate-100 hover:bg-slate-200 text-emerald-800'
                }`}
                aria-label="Back"
              >
                <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
            ) : (
              <div className="md:hidden w-8 h-8 rounded-xl bg-emerald-700 flex items-center justify-center text-amber-300 font-serif font-bold text-sm shadow-md">
                دين
              </div>
            )}

            <div className="flex flex-col truncate">
              <h1 className="text-base sm:text-lg font-bold truncate tracking-tight">{title}</h1>
              {subtitle && (
                <p className={`text-xs truncate ${
                  settings.isDarkMode ? 'text-emerald-400/80' : 'text-emerald-700/80'
                }`}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-1.5">
            {showSearch && (
              <button
                onClick={() => navigateTo({ type: 'search' })}
                className={`p-2 rounded-2xl transition active:scale-95 ${
                  settings.isDarkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
                title="অনুসন্ধান"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => navigateTo({ type: 'bookmarks' })}
              className={`p-2 rounded-2xl transition active:scale-95 ${
                settings.isDarkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
              title="সংরক্ষিত বাণী"
            >
              <Bookmark className="w-4 h-4" />
            </button>

            {/* Mobile Theme Toggle */}
            <button
              onClick={() => updateSettings({ isDarkMode: !settings.isDarkMode })}
              className={`md:hidden p-2 rounded-2xl transition active:scale-95 ${
                settings.isDarkMode ? 'bg-slate-900 text-amber-400' : 'bg-slate-100 text-emerald-800'
              }`}
              title="থিম পরিবর্তন"
            >
              {settings.isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Scrollable View Content */}
        <main className="flex-1 flex flex-col max-w-5xl w-full mx-auto pb-28 md:pb-24">
          {component}
        </main>

        {/* Floating Mini Audio Player Bar */}
        <div className="fixed bottom-14 md:bottom-3 left-0 right-0 max-w-3xl mx-auto px-3 z-30 pointer-events-none">
          <div className="pointer-events-auto">
            <MiniAudioPlayer />
          </div>
        </div>

        {/* Mobile Bottom Navigation Bar (< md) */}
        <nav className={`md:hidden fixed bottom-0 left-0 right-0 px-2 py-1.5 border-t select-none transition-colors z-40 ${
          settings.isDarkMode
            ? 'bg-slate-950/95 border-slate-800 shadow-2xl'
            : 'bg-white/95 border-slate-200 shadow-lg'
        } backdrop-blur-lg flex items-center justify-around`}>
          {navLinks.filter(n => n.id !== 'search').map((item) => {
            const active = isNavActive(item.id);
            const IconComponent = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => navigateTo(item.target)}
                className="flex flex-col items-center justify-center py-1 px-2 group flex-1 transition-transform active:scale-95"
              >
                <div
                  className={`w-12 h-7 rounded-full flex items-center justify-center transition-all ${
                    active
                      ? settings.isDarkMode
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-emerald-600 text-white font-semibold'
                      : settings.isDarkMode
                      ? 'text-slate-400 hover:text-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className={`text-[10px] mt-0.5 font-medium transition-colors ${
                  active
                    ? settings.isDarkMode
                      ? 'text-emerald-300 font-bold'
                      : 'text-emerald-700 font-bold'
                    : 'text-slate-400'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Fullscreen Audio Player Modal */}
        <FullAudioModal />
      </div>
    </div>
  );
};
