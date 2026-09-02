import React, { useState, useEffect } from 'react';
import { Play, Pause, Bookmark, Copy, Check, Volume2, Share2, ArrowLeft, ArrowRight, Settings, Info } from 'lucide-react';
import { useDeen } from '../../context/DeenContext';
import { SURAH_LIST, getSurahAyahs } from '../../data/quranData';
import { Ayah } from '../../types/deen';

interface SurahDetailScreenProps {
  surahNumber: number;
  initialAyah?: number;
}

export const SurahDetailScreen: React.FC<SurahDetailScreenProps> = ({ surahNumber, initialAyah }) => {
  const {
    navigateTo,
    audioState,
    playAyahAudio,
    togglePlayPause,
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
    updateLastRead,
    settings,
    updateSettings
  } = useDeen();

  const surah = SURAH_LIST.find(s => s.number === surahNumber) || SURAH_LIST[0];
  const ayahs = getSurahAyahs(surah.number);
  const [copiedAyahId, setCopiedAyahId] = useState<number | null>(null);

  useEffect(() => {
    updateLastRead(surah.number, initialAyah || 1);
  }, [surah.number]);

  const handleCopy = (ayah: Ayah) => {
    const text = `${ayah.arabicText}\n\nউচ্চারণ: ${ayah.banglaPronunciation}\n\nঅর্থ: ${ayah.banglaTranslation}\n[সূরা ${surah.banglaName} : আয়াত ${ayah.ayahNumber}]`;
    navigator.clipboard.writeText(text);
    setCopiedAyahId(ayah.id);
    setTimeout(() => setCopiedAyahId(null), 2000);
  };

  const handleToggleBookmark = (ayah: Ayah) => {
    const existing = bookmarks.find(b => b.type === 'quran' && b.surahNumber === surah.number && b.ayahNumber === ayah.ayahNumber);
    if (existing) {
      removeBookmark(existing.id);
    } else {
      addBookmark({
        type: 'quran',
        surahNumber: surah.number,
        ayahNumber: ayah.ayahNumber,
        surahName: surah.banglaName,
        title: `সূরা ${surah.banglaName} (${surah.number}:${ayah.ayahNumber})`,
        arabicText: ayah.arabicText,
        banglaText: ayah.banglaTranslation
      });
    }
  };

  return (
    <div className="flex-1 p-3.5 space-y-4 pb-28 overflow-y-auto">
      {/* Surah Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-900 p-5 text-white shadow-xl border border-emerald-500/20 text-center relative overflow-hidden">
        <div className="absolute right-2 top-2 opacity-10 font-arabic text-6xl select-none">
          {surah.arabicName}
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-500/30 text-xs font-semibold text-amber-300 mb-2">
            <span>সূরা নং {surah.number}</span>
            <span>•</span>
            <span>{surah.revelationType}</span>
            <span>•</span>
            <span>{surah.totalAyah} আয়াত</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
            সূরা {surah.banglaName}
          </h2>

          <p className="text-sm text-emerald-200 font-medium">
            {surah.englishName} ({surah.meaning})
          </p>

          {/* Bismillah Header if applicable */}
          {surah.number !== 9 && (
            <div className="mt-4 pt-3 border-t border-emerald-700/40 w-full max-w-xs">
              <p className="font-arabic text-xl sm:text-2xl text-amber-300 tracking-wider">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <p className="text-[11px] text-emerald-200/80 mt-1">
                পরম করুণাময় অসীম দয়ালু আল্লাহর নামে শুরু করছি
              </p>
            </div>
          )}

          {/* Play Full Surah Button */}
          {ayahs.length > 0 && (
            <button
              onClick={() => {
                const firstAyah = ayahs[0];
                playAyahAudio(surah.number, firstAyah);
              }}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 font-bold text-xs shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <Play className="w-4 h-4 fill-emerald-950" />
              <span>সম্পূর্ণ সূরা শুনুন (Play Audio)</span>
            </button>
          )}
        </div>
      </div>

      {/* Surah Quick Switcher (Prev/Next) */}
      <div className="flex items-center justify-between text-xs px-1">
        {surah.number > 1 ? (
          <button
            onClick={() => navigateTo({ type: 'surah_detail', surahNumber: surah.number - 1 })}
            className="flex items-center gap-1 font-semibold text-emerald-400 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>পূর্ববর্তী সূরা</span>
          </button>
        ) : <div />}

        <span className="text-slate-400 font-medium">
          মোট {surah.totalAyah} টি আয়াত
        </span>

        {surah.number < 114 ? (
          <button
            onClick={() => navigateTo({ type: 'surah_detail', surahNumber: surah.number + 1 })}
            className="flex items-center gap-1 font-semibold text-emerald-400 hover:underline"
          >
            <span>পরবর্তী সূরা</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : <div />}
      </div>

      {/* Ayahs List */}
      <div className="space-y-3">
        {ayahs.map((ayah) => {
          const isPlayingThisAyah = audioState.isPlaying && audioState.currentSurahNumber === surah.number && audioState.currentAyahNumber === ayah.ayahNumber;
          const bookmarked = isBookmarked('quran', ayah.ayahNumber);

          return (
            <div
              key={ayah.id}
              className={`p-4 rounded-3xl border transition-all shadow-sm ${
                isPlayingThisAyah
                  ? settings.isDarkMode
                    ? 'bg-emerald-950/60 border-emerald-500 ring-1 ring-emerald-400/40'
                    : 'bg-emerald-50/90 border-emerald-500 ring-1 ring-emerald-300'
                  : settings.isDarkMode
                  ? 'bg-slate-900/90 border-slate-800/80 hover:border-slate-700'
                  : 'bg-white border-slate-200'
              }`}
            >
              {/* Ayah Header Tool Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/50">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-bold text-xs flex items-center justify-center font-mono">
                    {ayah.ayahNumber}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    আয়াত {ayah.ayahNumber}
                  </span>
                </div>

                {/* Actions: Play, Bookmark, Copy */}
                <div className="flex items-center gap-1">
                  {/* Play Ayah Audio */}
                  <button
                    onClick={() => {
                      if (isPlayingThisAyah) {
                        togglePlayPause();
                      } else {
                        playAyahAudio(surah.number, ayah);
                      }
                    }}
                    className={`p-2 rounded-full transition-all active:scale-95 ${
                      isPlayingThisAyah
                        ? 'bg-amber-400 text-emerald-950 font-bold shadow-md'
                        : 'text-emerald-400 hover:bg-emerald-950'
                    }`}
                    title={isPlayingThisAyah ? 'বিরতি' : 'তেলাওয়াত শুনুন'}
                  >
                    {isPlayingThisAyah ? (
                      <Pause className="w-4 h-4 fill-emerald-950" />
                    ) : (
                      <Play className="w-4 h-4 fill-emerald-400 ml-0.5" />
                    )}
                  </button>

                  {/* Bookmark */}
                  <button
                    onClick={() => handleToggleBookmark(ayah)}
                    className={`p-2 rounded-full transition-all active:scale-95 ${
                      bookmarked ? 'text-amber-400' : 'text-slate-400 hover:text-white'
                    }`}
                    title="বুকমার্ক"
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-amber-400' : ''}`} />
                  </button>

                  {/* Copy */}
                  <button
                    onClick={() => handleCopy(ayah)}
                    className="p-2 rounded-full text-slate-400 hover:text-white active:scale-95"
                    title="কপি করুন"
                  >
                    {copiedAyahId === ayah.id ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Arabic Text */}
              <div className="my-3 text-right">
                <p
                  className="font-arabic text-amber-200 leading-loose tracking-wide"
                  style={{ fontSize: `${settings.arabicFontSize}px` }}
                  dir="rtl"
                >
                  {ayah.arabicText}
                  <span className="inline-block mx-1.5 text-emerald-400 font-sans text-sm">
                    ﴿{ayah.ayahNumber}﴾
                  </span>
                </p>
              </div>

              {/* Bangla Pronunciation (if enabled) */}
              {settings.showPronunciation && (
                <p className="text-xs text-slate-400 italic my-1.5 leading-relaxed">
                  {ayah.banglaPronunciation}
                </p>
              )}

              {/* Bangla Translation (if enabled) */}
              {settings.showBanglaMeaning && (
                <p
                  className={`leading-relaxed mt-2 font-medium ${
                    settings.isDarkMode ? 'text-emerald-100/95' : 'text-slate-900'
                  }`}
                  style={{ fontSize: `${settings.banglaFontSize}px` }}
                >
                  {ayah.banglaTranslation}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
