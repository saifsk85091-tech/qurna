import React from 'react';
import { ChevronRight, ScrollText, ArrowLeft, BookOpen } from 'lucide-react';
import { useDeen } from '../../context/DeenContext';
import { HADITH_BOOKS, HADITH_CHAPTERS, HADITH_LIST } from '../../data/hadithData';

interface HadithChaptersScreenProps {
  bookId: string;
}

export const HadithChaptersScreen: React.FC<HadithChaptersScreenProps> = ({ bookId }) => {
  const { navigateTo, goBack, settings } = useDeen();

  const book = HADITH_BOOKS.find(b => b.id === bookId) || HADITH_BOOKS[0];
  const chapters = HADITH_CHAPTERS[bookId] || [
    { id: 1, bookId: book.id, chapterNumber: 1, banglaName: 'ওহীর সূচনা পর্ব', arabicName: 'كتاب بدء الوحي', hadithCount: 7 },
    { id: 2, bookId: book.id, chapterNumber: 2, banglaName: 'ঈমান অধ্যায়', arabicName: 'كتاب الإيمان', hadithCount: 50 },
    { id: 3, bookId: book.id, chapterNumber: 3, banglaName: 'ইলম বা জ্ঞান পর্ব', arabicName: 'كتاب العلم', hadithCount: 77 },
    { id: 4, bookId: book.id, chapterNumber: 4, banglaName: 'সালাত / নামাজ অধ্যায়', arabicName: 'كتاب الصلاة', hadithCount: 145 }
  ];

  return (
    <div className="flex-1 p-3.5 space-y-4 pb-24 overflow-y-auto">
      {/* Book Summary Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-teal-900 via-slate-900 to-emerald-950 p-5 text-white shadow-xl border border-teal-500/20">
        <div className="flex items-center justify-between mb-2">
          <span className="font-arabic text-xl text-amber-300 font-bold">
            {book.name}
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-bold border border-teal-500/30">
            {book.totalHadith.toLocaleString('bn-BD')} টি হাদিস
          </span>
        </div>

        <h2 className="text-xl font-bold tracking-tight mb-1">
          {book.banglaName}
        </h2>
        <p className="text-xs text-slate-300">
          সংকলক: {book.author}
        </p>
      </div>

      {/* Chapters Header */}
      <div className="flex items-center justify-between px-1">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          অধ্যায়সমূহ ({chapters.length} টি অধ্যায়)
        </h3>
        <span className="text-xs text-teal-400 font-medium">
          হাদিস পাঠ করতে অধ্যায় নির্বাচন করুন
        </span>
      </div>

      {/* Chapters List */}
      <div className="space-y-2">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            onClick={() => navigateTo({ type: 'hadith_list', bookId: book.id, chapterId: chapter.id })}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer group active:scale-[0.99] shadow-sm flex items-center justify-between ${
              settings.isDarkMode
                ? 'bg-slate-900/80 border-slate-800 hover:border-teal-500/50 text-white'
                : 'bg-white border-slate-200 hover:border-teal-300 text-slate-900 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-teal-950 border border-teal-700/40 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {chapter.chapterNumber}
              </div>

              <div className="flex flex-col min-w-0">
                <h4 className="text-sm font-bold truncate group-hover:text-teal-300 transition-colors">
                  {chapter.banglaName}
                </h4>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                  <span className="font-arabic text-emerald-400/80">{chapter.arabicName}</span>
                  <span>•</span>
                  <span>{chapter.hadithCount} টি হাদিস</span>
                </div>
              </div>
            </div>

            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 group-hover:translate-x-1 transition-all shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
