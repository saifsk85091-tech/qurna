import React, { useState } from 'react';
import { Bookmark, Copy, Check, Share2, Sparkles, ScrollText, ArrowLeft, ArrowRight } from 'lucide-react';
import { useDeen } from '../../context/DeenContext';
import { HADITH_BOOKS, HADITH_LIST, HADITH_CHAPTERS } from '../../data/hadithData';
import { HadithItem } from '../../types/deen';

interface HadithDetailScreenProps {
  bookId?: string;
  chapterId?: number;
  hadithId?: number;
}

export const HadithDetailScreen: React.FC<HadithDetailScreenProps> = ({ bookId, chapterId, hadithId }) => {
  const { navigateTo, bookmarks, addBookmark, removeBookmark, isBookmarked, settings } = useDeen();
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Filter hadiths based on parameters
  let hadiths = HADITH_LIST;
  if (hadithId) {
    hadiths = HADITH_LIST.filter(h => h.id === hadithId);
  } else if (bookId && chapterId) {
    hadiths = HADITH_LIST.filter(h => h.bookId === bookId && (h.chapterId === chapterId || !h.chapterId));
    if (hadiths.length === 0) {
      hadiths = HADITH_LIST.filter(h => h.bookId === bookId);
    }
  } else if (bookId) {
    hadiths = HADITH_LIST.filter(h => h.bookId === bookId);
  }

  // Fallback to all hadiths if empty
  if (hadiths.length === 0) {
    hadiths = HADITH_LIST;
  }

  const book = HADITH_BOOKS.find(b => b.id === (bookId || hadiths[0]?.bookId)) || HADITH_BOOKS[0];

  const handleCopy = (hadith: HadithItem) => {
    const text = `${hadith.arabicText}\n\nঅর্থ: ${hadith.banglaTranslation}\nবর্ণনাকারী: ${hadith.narrator}\nরেফারেন্স: ${hadith.reference}\nমান: ${hadith.grade}`;
    navigator.clipboard.writeText(text);
    setCopiedId(hadith.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleBookmark = (hadith: HadithItem) => {
    const existing = bookmarks.find(b => b.type === 'hadith' && b.hadithId === hadith.id);
    if (existing) {
      removeBookmark(existing.id);
    } else {
      addBookmark({
        type: 'hadith',
        hadithId: hadith.id,
        bookName: book.banglaName,
        hadithNumber: hadith.hadithNumber,
        title: `${book.banglaName} - হাদিস ${hadith.hadithNumber}`,
        arabicText: hadith.arabicText,
        banglaText: hadith.banglaTranslation
      });
    }
  };

  return (
    <div className="flex-1 p-3.5 space-y-4 pb-28 overflow-y-auto">
      {/* Top Book Header */}
      <div className="rounded-3xl bg-gradient-to-r from-teal-900 via-slate-900 to-emerald-950 p-4 sm:p-5 text-white shadow-xl border border-teal-500/20">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-amber-300 font-semibold">{book.englishName}</span>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-bold border border-teal-500/30">
            {hadiths.length} টি হাদিস প্রদর্শিত
          </span>
        </div>
        <h2 className="text-xl font-bold tracking-tight mb-0.5">
          {book.banglaName}
        </h2>
        <p className="text-xs text-slate-300">
          সংকলক: {book.author}
        </p>
      </div>

      {/* Hadiths Stream */}
      <div className="space-y-4">
        {hadiths.map((hadith) => {
          const bookmarked = isBookmarked('hadith', hadith.id);

          return (
            <div
              key={hadith.id}
              className={`p-4 rounded-3xl border transition-all shadow-md ${
                settings.isDarkMode
                  ? 'bg-slate-900/90 border-slate-800 text-white'
                  : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/60">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-teal-600/20 border border-teal-500/30 text-teal-300 font-bold text-xs flex items-center justify-center font-mono">
                    #{hadith.hadithNumber}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    মান: {hadith.grade}
                  </span>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleBookmark(hadith)}
                    className={`p-2 rounded-full transition-all active:scale-95 ${
                      bookmarked ? 'text-amber-400' : 'text-slate-400 hover:text-white'
                    }`}
                    title="বুকমার্ক"
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-amber-400' : ''}`} />
                  </button>

                  <button
                    onClick={() => handleCopy(hadith)}
                    className="p-2 rounded-full text-slate-400 hover:text-white active:scale-95"
                    title="কপি করুন"
                  >
                    {copiedId === hadith.id ? (
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
                  className="font-arabic text-teal-200 leading-loose tracking-wide"
                  style={{ fontSize: `${settings.arabicFontSize}px` }}
                  dir="rtl"
                >
                  {hadith.arabicText}
                </p>
              </div>

              {/* Bangla Translation */}
              <div className="mt-3">
                <p
                  className={`leading-relaxed font-medium ${
                    settings.isDarkMode ? 'text-slate-200' : 'text-slate-800'
                  }`}
                  style={{ fontSize: `${settings.banglaFontSize}px` }}
                >
                  &ldquo;{hadith.banglaTranslation}&rdquo;
                </p>
              </div>

              {/* Footer Reference & Narrator */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-emerald-400">বর্ণনাকারী:</span>
                  <span>{hadith.narrator}</span>
                </div>
                <div className="font-semibold text-teal-300 bg-teal-950/60 px-2.5 py-1 rounded-lg border border-teal-800/40">
                  {hadith.reference}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
