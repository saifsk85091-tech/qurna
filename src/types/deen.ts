export interface Ayah {
  id: number;
  surahId: number;
  ayahNumber: number;
  arabicText: string;
  banglaPronunciation: string;
  banglaTranslation: string;
  audioUrl?: string;
}

export interface Surah {
  id: number;
  number: number;
  arabicName: string;
  banglaName: string;
  englishName: string;
  meaning: string;
  totalAyah: number;
  revelationType: 'মাক্কী' | 'মাদানী';
  bismillahPre: boolean;
  ayahs?: Ayah[];
}

export interface HadithBook {
  id: string;
  name: string;
  banglaName: string;
  englishName: string;
  author: string;
  totalHadith: number;
  chaptersCount: number;
  color: string;
  description: string;
}

export interface HadithChapter {
  id: number;
  bookId: string;
  chapterNumber: number;
  banglaName: string;
  arabicName: string;
  hadithCount: number;
}

export interface HadithItem {
  id: number;
  bookId: string;
  chapterId: number;
  hadithNumber: number;
  arabicText: string;
  banglaTranslation: string;
  narrator: string;
  reference: string;
  grade: 'সহীহ' | 'হাসান';
}

export interface BookmarkItem {
  id: string;
  type: 'quran' | 'hadith';
  surahNumber?: number;
  ayahNumber?: number;
  surahName?: string;
  hadithId?: number;
  bookName?: string;
  hadithNumber?: number;
  title: string;
  arabicText: string;
  banglaText: string;
  createdAt: number;
}

export interface LastReadItem {
  surahNumber: number;
  surahBangla: string;
  surahEnglish: string;
  ayahNumber: number;
  updatedAt: number;
}

export interface AppSettings {
  isDarkMode: boolean;
  arabicFontSize: number;
  banglaFontSize: number;
  showPronunciation: boolean;
  showBanglaMeaning: boolean;
  autoPlayNextAyah: boolean;
  repeatAyah: boolean;
  dailyNotification: boolean;
}

export type ActiveScreen = 
  | { type: 'home' }
  | { type: 'quran_list' }
  | { type: 'surah_detail'; surahNumber: number; initialAyah?: number }
  | { type: 'hadith_books' }
  | { type: 'hadith_chapters'; bookId: string }
  | { type: 'hadith_list'; bookId: string; chapterId: number }
  | { type: 'hadith_detail'; hadithId: number }
  | { type: 'search'; initialQuery?: string }
  | { type: 'bookmarks' }
  | { type: 'settings' }
  | { type: 'about' };
