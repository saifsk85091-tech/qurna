import React from 'react';
import { useDeen } from '../context/DeenContext';
import { AndroidStatusBar } from './android/AndroidStatusBar';
import { DeenTopAppBar } from './android/DeenTopAppBar';
import { DeenBottomNav } from './android/DeenBottomNav';
import { AndroidGesturePill } from './android/AndroidGesturePill';
import { MiniAudioPlayer } from './android/MiniAudioPlayer';
import { FullAudioModal } from './android/FullAudioModal';

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
import { SURAH_LIST } from '../data/quranData';
import { HADITH_BOOKS } from '../data/hadithData';

interface AndroidDeenAppProps {
  isFramed?: boolean;
}

export const AndroidDeenApp: React.FC<AndroidDeenAppProps> = ({ isFramed = false }) => {
  const { activeScreen, settings } = useDeen();

  const getScreenConfig = () => {
    switch (activeScreen.type) {
      case 'home':
        return {
          title: 'দ্বীন লাইব্রেরি',
          subtitle: 'কুরআন ও সহীহ হাদিস',
          showBack: false,
          showSearch: true,
          component: <HomeScreen />
        };
      case 'quran_list':
        return {
          title: 'আল-কুরআনুল কারীম',
          subtitle: '১১৪টি সূরা • অর্থ ও উচ্চারণ',
          showBack: false,
          showSearch: true,
          component: <QuranScreen />
        };
      case 'surah_detail': {
        const surah = SURAH_LIST.find(s => s.number === activeScreen.surahNumber);
        return {
          title: `সূরা ${surah?.banglaName || ''}`,
          subtitle: `${surah?.englishName || ''} • আয়াত সংখ্যা ${surah?.totalAyah || ''}`,
          showBack: true,
          showSearch: false,
          component: <SurahDetailScreen surahNumber={activeScreen.surahNumber} initialAyah={activeScreen.initialAyah} />
        };
      }
      case 'hadith_books':
        return {
          title: 'সহীহ হাদিস কিতাব',
          subtitle: '৮টি প্রামাণ্য গ্রন্থ সংকলন',
          showBack: false,
          showSearch: true,
          component: <HadithBooksScreen />
        };
      case 'hadith_chapters': {
        const book = HADITH_BOOKS.find(b => b.id === activeScreen.bookId);
        return {
          title: `${book?.banglaName || 'হাদিস'} অধ্যায়`,
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
          title: 'হাদিস পাঠ ও পর্যালোচনা',
          subtitle: 'বিশুদ্ধ সনদ ও অনুবাদ',
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
          subtitle: 'বুকমার্ক তালিকা',
          showBack: false,
          showSearch: false,
          component: <BookmarksScreen />
        };
      case 'settings':
      case 'about':
        return {
          title: 'সেটিংস ও ফন্ট সাইজ',
          subtitle: 'ব্যক্তিগত পছন্দসমূহ',
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

  // Container styling depending on framed (device mock) vs full viewport
  const frameClasses = isFramed
    ? 'w-full max-w-[420px] h-[860px] max-h-[92vh] rounded-[48px] shadow-[0_25px_70px_rgba(0,0,0,0.8)] border-[10px] border-slate-800 ring-1 ring-emerald-500/20'
    : 'w-full h-full min-h-[600px] rounded-3xl shadow-xl border border-emerald-900/30';

  return (
    <div
      className={`${frameClasses} flex flex-col overflow-hidden relative select-none transition-colors duration-300 ${
        settings.isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* 1. Android Status Bar */}
      <AndroidStatusBar isDark={settings.isDarkMode} />

      {/* 2. Top App Bar */}
      <DeenTopAppBar
        title={title}
        subtitle={subtitle}
        showBack={showBack}
        showSearch={showSearch}
      />

      {/* 3. Screen View Area (Scrollable) */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {component}
      </div>

      {/* 4. Mini Floating Audio Player */}
      <div className="w-full shrink-0">
        <MiniAudioPlayer />
      </div>

      {/* 5. Bottom Navigation Bar */}
      <div className="w-full shrink-0">
        <DeenBottomNav />
      </div>

      {/* 6. Gesture Navigation Pill */}
      <AndroidGesturePill isDark={settings.isDarkMode} />

      {/* 7. Fullscreen Audio Player Modal */}
      <FullAudioModal />
    </div>
  );
};
