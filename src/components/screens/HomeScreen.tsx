import React, { useState } from 'react';
import { BookOpen, ScrollText, Compass, Heart, Play, Pause, Bookmark, ChevronRight, Sparkles, RefreshCw, Copy, Check, Volume2 } from 'lucide-react';
import { useDeen } from '../../context/DeenContext';
import { DAILY_AYAH, SURAH_LIST } from '../../data/quranData';
import { DAILY_HADITH, HADITH_BOOKS } from '../../data/hadithData';

export const HomeScreen: React.FC = () => {
  const {
    navigateTo,
    lastRead,
    audioState,
    playAyahAudio,
    togglePlayPause,
    addBookmark,
    isBookmarked,
    settings
  } = useDeen();

  const [copiedAyah, setCopiedAyah] = useState(false);
  const [copiedHadith, setCopiedHadith] = useState(false);
  const [tasbihCount, setTasbihCount] = useState(33);
  const [tasbihMax, setTasbihMax] = useState(33);
  const [tasbihDhikr, setTasbihDhikr] = useState('সুবহানাল্লাহ (سبحان الله)');

  const handleCopyAyah = () => {
    const text = `${DAILY_AYAH.arabicText}\n\nউচ্চারণ: ${DAILY_AYAH.banglaPronunciation}\n\nঅর্থ: ${DAILY_AYAH.banglaTranslation}\n[সূরা ${DAILY_AYAH.surahName}, আয়াত ${DAILY_AYAH.ayahNumber}]`;
    navigator.clipboard.writeText(text);
    setCopiedAyah(true);
    setTimeout(() => setCopiedAyah(false), 2000);
  };

  const handleCopyHadith = () => {
    const text = `${DAILY_HADITH.arabicText}\n\nঅর্থ: ${DAILY_HADITH.banglaTranslation}\nবর্ণনাকারী: ${DAILY_HADITH.narrator}\nরেফারেন্স: ${DAILY_HADITH.reference}`;
    navigator.clipboard.writeText(text);
    setCopiedHadith(true);
    setTimeout(() => setCopiedHadith(false), 2000);
  };

  const isDailyAyahPlaying = audioState.isPlaying && audioState.currentSurahNumber === DAILY_AYAH.surahNumber && audioState.currentAyahNumber === DAILY_AYAH.ayahNumber;

  const quickSurahs = [
    { number: 36, name: 'ইয়াসীন', tag: 'কুরআনের হৃৎপিণ্ড' },
    { number: 67, name: 'আল-মুলক', tag: 'কবরের আজাব মুক্তি' },
    { number: 55, name: 'আর-রহমান', tag: 'কুরআনের সৌন্দর্য' },
    { number: 18, name: 'আল-কাহফ', tag: 'জুমুআর বিশেষ সূরা' }
  ];

  const dhikrOptions = [
    { text: 'সুবহানাল্লাহ (سبحان الله)', count: 33 },
    { text: 'আলহামদুলিল্লাহ (الحمد لله)', count: 33 },
    { text: 'আল্লাহু আকবার (الله أكبر)', count: 34 },
    { text: 'আস্তাগফিরুল্লাহ (أستغفر الله)', count: 100 },
    { text: 'লা ইলাহা ইল্লাল্লাহ (لا إله إلا الله)', count: 100 }
  ];

  return (
    <div className="flex-1 p-3.5 space-y-4 pb-20 overflow-y-auto">
      {/* 1. Islamic Hijri Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 p-4 sm:p-5 text-white shadow-xl relative overflow-hidden border border-emerald-500/20">
        <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" />
        <div className="absolute right-3 top-3 opacity-20 text-5xl font-arabic pointer-events-none select-none">
          ﷽
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold tracking-wide mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>দ্বীন লাইব্রেরি • কুরআন ও সহীহ হাদিস</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-1 text-white">
            আসসালামু আলাইকুম!
          </h2>

          <p className="text-xs text-emerald-100/90 leading-relaxed max-w-[85%]">
            পবিত্র কুরআন তিলাওয়াত করুন, অর্থ ও তাফসীর বুঝুন এবং প্রামাণ্য হাদীসের আলোকে জীবনকে সাজান।
          </p>

          {/* Quick Date Widget */}
          <div className="mt-3.5 pt-3 border-t border-emerald-700/40 flex items-center justify-between text-[11px] text-emerald-200">
            <span className="font-medium bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-600/30">
              🌙 ১৪৪৮ হিজরি
            </span>
            <span className="font-medium">
              আজকের দিনটি বরকতময় হোক
            </span>
          </div>
        </div>
      </div>

      {/* 2. Last Read Resume Card */}
      {lastRead && (
        <div
          onClick={() => navigateTo({ type: 'surah_detail', surahNumber: lastRead.surahNumber, initialAyah: lastRead.ayahNumber })}
          className={`p-4 rounded-2xl border transition-all cursor-pointer group active:scale-[0.99] shadow-md flex items-center justify-between ${
            settings.isDarkMode
              ? 'bg-slate-900/90 border-emerald-800/40 hover:border-emerald-500/60 text-white'
              : 'bg-emerald-50/80 border-emerald-200 hover:border-emerald-300 text-slate-900'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-700 text-white flex items-center justify-center font-bold text-base shadow-md group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${
                settings.isDarkMode ? 'text-amber-400' : 'text-emerald-800'
              }`}>
                সর্বশেষ পাঠ (Last Read)
              </span>
              <h3 className="text-sm font-bold flex items-center gap-1.5">
                সূরা {lastRead.surahBangla}
                <span className={`text-xs px-1.5 py-0.2 rounded font-normal ${
                  settings.isDarkMode ? 'bg-slate-800 text-emerald-300' : 'bg-white text-emerald-700'
                }`}>
                  আয়াত {lastRead.ayahNumber}
                </span>
              </h3>
            </div>
          </div>

          <div className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm transition-transform group-hover:translate-x-1 ${
            settings.isDarkMode
              ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
              : 'bg-emerald-600 text-white'
          }`}>
            <span>পড়া চালিয়ে যান</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>
      )}

      {/* 3. Main Navigation Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Quran Card */}
        <div
          onClick={() => navigateTo({ type: 'quran_list' })}
          className={`p-4 rounded-3xl border transition-all cursor-pointer group active:scale-[0.98] shadow-md relative overflow-hidden ${
            settings.isDarkMode
              ? 'bg-gradient-to-br from-slate-900 to-emerald-950/60 border-emerald-800/40 text-white'
              : 'bg-gradient-to-br from-white to-emerald-50/50 border-emerald-100 text-slate-900'
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3 shadow-inner group-hover:scale-110 transition-transform">
            <BookOpen className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-base font-bold mb-0.5">আল-কুরআনুল কারীম</h3>
          <p className="text-xs text-slate-400">১১৪টি সূরা, আরবি ও বাংলা অনুবাদ</p>
          <div className="mt-3 flex items-center text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
            <span>সূরা তালিকা দেখুন</span>
            <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
          </div>
        </div>

        {/* Hadith Card */}
        <div
          onClick={() => navigateTo({ type: 'hadith_books' })}
          className={`p-4 rounded-3xl border transition-all cursor-pointer group active:scale-[0.98] shadow-md relative overflow-hidden ${
            settings.isDarkMode
              ? 'bg-gradient-to-br from-slate-900 to-teal-950/60 border-teal-800/40 text-white'
              : 'bg-gradient-to-br from-white to-teal-50/50 border-teal-100 text-slate-900'
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 shadow-inner group-hover:scale-110 transition-transform">
            <ScrollText className="w-6 h-6 text-amber-400" />
          </div>
          <h3 className="text-base font-bold mb-0.5">সহীহ হাদিস ভাণ্ডার</h3>
          <p className="text-xs text-slate-400">বুখারী, মুসলিম সহ ৮টি প্রামাণ্য কিতাব</p>
          <div className="mt-3 flex items-center text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
            <span>কিতাবসমূহ দেখুন</span>
            <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
          </div>
        </div>
      </div>

      {/* 4. Quick Surah Shortcuts */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            জনপ্রিয় সূরাসমূহ (Quick Surahs)
          </h3>
          <button
            onClick={() => navigateTo({ type: 'quran_list' })}
            className="text-xs text-emerald-400 font-semibold hover:underline"
          >
            সকল সূরা (১১৪)
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {quickSurahs.map((qs) => (
            <button
              key={qs.number}
              onClick={() => navigateTo({ type: 'surah_detail', surahNumber: qs.number })}
              className={`p-3 rounded-2xl border text-left transition-all active:scale-95 ${
                settings.isDarkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-emerald-600/50 text-white'
                  : 'bg-white border-slate-200 hover:border-emerald-300 text-slate-900 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono font-bold text-amber-400">#{qs.number}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                  {qs.tag}
                </span>
              </div>
              <p className="text-sm font-bold truncate">সূরা {qs.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* 5. Daily Ayah Card */}
      <div className={`p-4 rounded-3xl border shadow-lg relative overflow-hidden ${
        settings.isDarkMode
          ? 'bg-slate-900/95 border-emerald-600/30 text-white'
          : 'bg-white border-emerald-200 text-slate-900 shadow-md'
      }`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              আজকের নির্বাচিত আয়াত (Daily Ayah)
            </span>
          </div>

          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-600/20 text-emerald-300 border border-emerald-500/30">
            সূরা {DAILY_AYAH.surahName} : {DAILY_AYAH.ayahNumber}
          </span>
        </div>

        {/* Arabic Ayah */}
        <p className="font-arabic text-lg sm:text-xl text-amber-200 text-right my-3 leading-loose" dir="rtl">
          {DAILY_AYAH.arabicText}
        </p>

        {/* Bangla Pronunciation & Translation */}
        <div className="space-y-1 text-xs sm:text-sm">
          <p className="text-slate-400 italic">
            উচ্চারণ: {DAILY_AYAH.banglaPronunciation}
          </p>
          <p className="font-medium text-emerald-100/90 leading-relaxed">
            অর্থ: {DAILY_AYAH.banglaTranslation}
          </p>
        </div>

        {/* Action buttons */}
        <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
          <button
            onClick={() => {
              if (isDailyAyahPlaying) {
                togglePlayPause();
              } else {
                playAyahAudio(DAILY_AYAH.surahNumber, DAILY_AYAH);
              }
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md active:scale-95 transition-all"
          >
            {isDailyAyahPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
            <span>{isDailyAyahPlaying ? 'বিরতি দিন' : 'তেলাওয়াত শুনুন'}</span>
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                addBookmark({
                  type: 'quran',
                  surahNumber: DAILY_AYAH.surahNumber,
                  ayahNumber: DAILY_AYAH.ayahNumber,
                  surahName: DAILY_AYAH.surahName,
                  title: `সূরা ${DAILY_AYAH.surahName} (${DAILY_AYAH.surahNumber}:${DAILY_AYAH.ayahNumber})`,
                  arabicText: DAILY_AYAH.arabicText,
                  banglaText: DAILY_AYAH.banglaTranslation
                });
              }}
              className="p-2 rounded-full hover:bg-slate-800 text-slate-300 active:scale-95"
              title="বুকমার্ক"
            >
              <Bookmark className="w-4 h-4" />
            </button>

            <button
              onClick={handleCopyAyah}
              className="p-2 rounded-full hover:bg-slate-800 text-slate-300 active:scale-95"
              title="কপি করুন"
            >
              {copiedAyah ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* 6. Daily Hadith Card */}
      <div className={`p-4 rounded-3xl border shadow-lg ${
        settings.isDarkMode
          ? 'bg-slate-900/95 border-teal-600/30 text-white'
          : 'bg-white border-teal-200 text-slate-900'
      }`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
            আজকের নির্বাচিত হাদিস (Daily Hadith)
          </span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-600/20 text-teal-300 border border-teal-500/30">
            {DAILY_HADITH.grade}
          </span>
        </div>

        <p className="font-arabic text-base sm:text-lg text-emerald-200 text-right my-2 leading-relaxed" dir="rtl">
          {DAILY_HADITH.arabicText}
        </p>

        <p className="text-xs sm:text-sm font-medium leading-relaxed my-2">
          &ldquo;{DAILY_HADITH.banglaTranslation}&rdquo;
        </p>

        <div className="text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2 mt-3 pt-2.5 border-t border-slate-800">
          <span>বর্ণনাকারী: {DAILY_HADITH.narrator}</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-teal-300">{DAILY_HADITH.reference}</span>
            <button
              onClick={handleCopyHadith}
              className="p-1 rounded hover:bg-slate-800 text-slate-300"
              title="কপি করুন"
            >
              {copiedHadith ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 7. Interactive Digital Tasbih Counter Tool */}
      <div className={`p-4 rounded-3xl border shadow-md ${
        settings.isDarkMode
          ? 'bg-gradient-to-b from-slate-900 to-emerald-950/80 border-emerald-700/40 text-white'
          : 'bg-white border-emerald-200 text-slate-900'
      }`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">ডিজিটাল তাসবীহ কাউন্টার</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400 text-emerald-950 font-bold">
              {tasbihCount} / {tasbihMax}
            </span>
          </div>

          <button
            onClick={() => setTasbihCount(0)}
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1 active:scale-90"
            title="রিসেট"
          >
            <RefreshCw className="w-3 h-3" />
            <span>রিসেট</span>
          </button>
        </div>

        {/* Dhikr Selector */}
        <div className="mb-3">
          <select
            value={tasbihDhikr}
            onChange={(e) => {
              const selected = dhikrOptions.find(d => d.text === e.target.value);
              setTasbihDhikr(e.target.value);
              if (selected) {
                setTasbihMax(selected.count);
                setTasbihCount(0);
              }
            }}
            className={`w-full text-xs p-2 rounded-xl border outline-none font-medium ${
              settings.isDarkMode
                ? 'bg-slate-800 border-slate-700 text-white'
                : 'bg-slate-100 border-slate-300 text-slate-900'
            }`}
          >
            {dhikrOptions.map((opt, i) => (
              <option key={i} value={opt.text}>{opt.text} ({opt.count} বার)</option>
            ))}
          </select>
        </div>

        {/* Big Tap Button */}
        <button
          onClick={() => {
            setTasbihCount(prev => (prev + 1 > tasbihMax ? 1 : prev + 1));
          }}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 active:scale-[0.98] text-white text-center shadow-lg transition-all flex flex-col items-center justify-center gap-1 group"
        >
          <span className="text-3xl font-mono font-bold tracking-wider group-active:scale-110 transition-transform">
            {tasbihCount}
          </span>
          <span className="text-xs text-emerald-100 font-medium">
            গণনা করতে এখানে চাপুন (Tap to Count)
          </span>
        </button>
      </div>
    </div>
  );
};
