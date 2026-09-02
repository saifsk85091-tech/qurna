import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { ActiveScreen, BookmarkItem, LastReadItem, AppSettings, Ayah } from '../types/deen';
import { SURAH_LIST, getSurahAyahs } from '../data/quranData';

interface AudioState {
  isPlaying: boolean;
  currentSurahNumber: number | null;
  currentAyahNumber: number | null;
  currentAyahData: Ayah | null;
  playbackSpeed: number;
  isLooping: boolean;
  duration: number;
  currentTime: number;
}

interface DeenContextType {
  // Navigation
  activeScreen: ActiveScreen;
  navigationStack: ActiveScreen[];
  navigateTo: (screen: ActiveScreen) => void;
  goBack: () => boolean;
  
  // Bookmarks & Last Read
  bookmarks: BookmarkItem[];
  addBookmark: (item: Omit<BookmarkItem, 'id' | 'createdAt'>) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (type: 'quran' | 'hadith', identifier: string | number) => boolean;
  lastRead: LastReadItem | null;
  updateLastRead: (surahNumber: number, ayahNumber: number) => void;

  // Settings
  settings: AppSettings;
  updateSettings: (newSettings: Partial<AppSettings>) => void;

  // Audio Player
  audioState: AudioState;
  playAyahAudio: (surahNumber: number, ayah: Ayah) => void;
  togglePlayPause: () => void;
  stopAudio: () => void;
  playNextAyah: () => void;
  playPreviousAyah: () => void;
  setPlaybackSpeed: (speed: number) => void;
  toggleLoop: () => void;
  showAudioModal: boolean;
  setShowAudioModal: (show: boolean) => void;

  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const defaultSettings: AppSettings = {
  isDarkMode: true,
  arabicFontSize: 28,
  banglaFontSize: 16,
  showPronunciation: true,
  showBanglaMeaning: true,
  autoPlayNextAyah: true,
  repeatAyah: false,
  dailyNotification: true
};

const DeenContext = createContext<DeenContextType | undefined>(undefined);

export const DeenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation State with Android Back Stack
  const [navigationStack, setNavigationStack] = useState<ActiveScreen[]>([{ type: 'home' }]);
  const activeScreen = navigationStack[navigationStack.length - 1] || { type: 'home' };

  // Bookmarks & Last Read State
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(() => {
    try {
      const saved = localStorage.getItem('deen_bookmarks');
      return saved ? JSON.parse(saved) : [
        {
          id: 'bm_quran_1_1',
          type: 'quran',
          surahNumber: 1,
          ayahNumber: 1,
          surahName: 'আল-ফাতিহা',
          title: 'সূরা আল-ফাতিহা (১:১)',
          arabicText: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
          banglaText: 'শুরু করছি পরম করুণাময় অসীম দয়ালু আল্লাহর নামে।',
          createdAt: Date.now() - 3600000
        },
        {
          id: 'bm_hadith_1',
          type: 'hadith',
          hadithId: 1,
          bookName: 'সহীহ বুখারী',
          hadithNumber: 1,
          title: 'সহীহ বুখারী - হাদিস ১',
          arabicText: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ...',
          banglaText: 'যাবতীয় আমলের ফলাফল নিয়তের ওপর নির্ভরশীল।',
          createdAt: Date.now() - 7200000
        }
      ];
    } catch {
      return [];
    }
  });

  const [lastRead, setLastRead] = useState<LastReadItem | null>(() => {
    try {
      const saved = localStorage.getItem('deen_last_read');
      return saved ? JSON.parse(saved) : {
        surahNumber: 1,
        surahBangla: 'আল-ফাতিহা',
        surahEnglish: 'Al-Fatiha',
        ayahNumber: 1,
        updatedAt: Date.now()
      };
    } catch {
      return null;
    }
  });

  // App Settings
  const [settings, setSettings] = useState<AppSettings>(() => {
    try {
      const saved = localStorage.getItem('deen_settings');
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  // Audio Playback
  const [audioState, setAudioState] = useState<AudioState>({
    isPlaying: false,
    currentSurahNumber: null,
    currentAyahNumber: null,
    currentAyahData: null,
    playbackSpeed: 1.0,
    isLooping: false,
    duration: 0,
    currentTime: 0
  });

  const [showAudioModal, setShowAudioModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('deen_bookmarks', JSON.stringify(bookmarks));
    } catch {}
  }, [bookmarks]);

  useEffect(() => {
    try {
      if (lastRead) {
        localStorage.setItem('deen_last_read', JSON.stringify(lastRead));
      }
    } catch {}
  }, [lastRead]);

  useEffect(() => {
    try {
      localStorage.setItem('deen_settings', JSON.stringify(settings));
    } catch {}
  }, [settings]);

  // Audio element setup
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const onPlay = () => setAudioState(s => ({ ...s, isPlaying: true }));
    const onPause = () => setAudioState(s => ({ ...s, isPlaying: false }));
    const onTimeUpdate = () => {
      setAudioState(s => ({
        ...s,
        currentTime: audio.currentTime || 0,
        duration: audio.duration || 0
      }));
    };
    const onEnded = () => {
      if (audioState.isLooping) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else if (settings.autoPlayNextAyah) {
        playNextAyah();
      } else {
        setAudioState(s => ({ ...s, isPlaying: false, currentTime: 0 }));
      }
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
      audio.pause();
    };
  }, [audioState.isLooping, settings.autoPlayNextAyah, audioState.currentSurahNumber, audioState.currentAyahNumber]);

  // Navigation functions
  const navigateTo = (screen: ActiveScreen) => {
    setNavigationStack(prev => [...prev, screen]);
  };

  const goBack = (): boolean => {
    if (navigationStack.length > 1) {
      setNavigationStack(prev => prev.slice(0, -1));
      return true;
    }
    return false;
  };

  // Bookmark functions
  const addBookmark = (item: Omit<BookmarkItem, 'id' | 'createdAt'>) => {
    const newItem: BookmarkItem = {
      ...item,
      id: `bm_${item.type}_${Date.now()}`,
      createdAt: Date.now()
    };
    setBookmarks(prev => [newItem, ...prev]);
  };

  const removeBookmark = (id: string) => {
    setBookmarks(prev => prev.filter(b => b.id !== id));
  };

  const isBookmarked = (type: 'quran' | 'hadith', identifier: string | number) => {
    if (type === 'quran') {
      return bookmarks.some(b => b.type === 'quran' && b.ayahNumber === identifier);
    }
    return bookmarks.some(b => b.type === 'hadith' && (b.hadithId === identifier || b.hadithNumber === identifier));
  };

  const updateLastRead = (surahNumber: number, ayahNumber: number) => {
    const surah = SURAH_LIST.find(s => s.number === surahNumber);
    if (surah) {
      setLastRead({
        surahNumber,
        surahBangla: surah.banglaName,
        surahEnglish: surah.englishName,
        ayahNumber,
        updatedAt: Date.now()
      });
    }
  };

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  // Audio Control methods
  const playAyahAudio = (surahNumber: number, ayah: Ayah) => {
    if (!audioRef.current) return;

    const padSurah = surahNumber.toString().padStart(3, '0');
    const padAyah = ayah.ayahNumber.toString().padStart(3, '0');
    const audioUrl = ayah.audioUrl || `https://everyayah.com/data/Alafasy_128kbps/${padSurah}${padAyah}.mp3`;

    audioRef.current.src = audioUrl;
    audioRef.current.playbackRate = audioState.playbackSpeed;
    audioRef.current.play().catch(e => {
      console.log('Audio autoplay blocked or failed, waiting for user click:', e);
    });

    setAudioState(s => ({
      ...s,
      isPlaying: true,
      currentSurahNumber: surahNumber,
      currentAyahNumber: ayah.ayahNumber,
      currentAyahData: ayah
    }));

    updateLastRead(surahNumber, ayah.ayahNumber);
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (audioState.isPlaying) {
      audioRef.current.pause();
    } else {
      if (audioRef.current.src) {
        audioRef.current.play().catch(() => {});
      } else if (audioState.currentAyahData && audioState.currentSurahNumber) {
        playAyahAudio(audioState.currentSurahNumber, audioState.currentAyahData);
      }
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setAudioState(s => ({
      ...s,
      isPlaying: false,
      currentSurahNumber: null,
      currentAyahNumber: null,
      currentAyahData: null
    }));
  };

  const playNextAyah = () => {
    if (!audioState.currentSurahNumber || !audioState.currentAyahNumber) return;
    const currentSurah = SURAH_LIST.find(s => s.number === audioState.currentSurahNumber);
    if (!currentSurah) return;

    const ayahs = getSurahAyahs(audioState.currentSurahNumber);
    const currentIndex = ayahs.findIndex(a => a.ayahNumber === audioState.currentAyahNumber);

    if (currentIndex >= 0 && currentIndex < ayahs.length - 1) {
      const nextAyah = ayahs[currentIndex + 1];
      playAyahAudio(audioState.currentSurahNumber, nextAyah);
    } else if (audioState.currentSurahNumber < 114) {
      // Go to next surah
      const nextSurahNum = audioState.currentSurahNumber + 1;
      const nextSurahAyahs = getSurahAyahs(nextSurahNum);
      if (nextSurahAyahs.length > 0) {
        playAyahAudio(nextSurahNum, nextSurahAyahs[0]);
      }
    }
  };

  const playPreviousAyah = () => {
    if (!audioState.currentSurahNumber || !audioState.currentAyahNumber) return;
    const ayahs = getSurahAyahs(audioState.currentSurahNumber);
    const currentIndex = ayahs.findIndex(a => a.ayahNumber === audioState.currentAyahNumber);

    if (currentIndex > 0) {
      const prevAyah = ayahs[currentIndex - 1];
      playAyahAudio(audioState.currentSurahNumber, prevAyah);
    }
  };

  const setPlaybackSpeed = (speed: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
    setAudioState(s => ({ ...s, playbackSpeed: speed }));
  };

  const toggleLoop = () => {
    setAudioState(s => ({ ...s, isLooping: !s.isLooping }));
  };

  return (
    <DeenContext.Provider
      value={{
        activeScreen,
        navigationStack,
        navigateTo,
        goBack,
        bookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
        lastRead,
        updateLastRead,
        settings,
        updateSettings,
        audioState,
        playAyahAudio,
        togglePlayPause,
        stopAudio,
        playNextAyah,
        playPreviousAyah,
        setPlaybackSpeed,
        toggleLoop,
        showAudioModal,
        setShowAudioModal,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </DeenContext.Provider>
  );
};

export const useDeen = () => {
  const context = useContext(DeenContext);
  if (!context) {
    throw new Error('useDeen must be used within a DeenProvider');
  }
  return context;
};
