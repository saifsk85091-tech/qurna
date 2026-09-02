import React from 'react';
import { ScrollText, ChevronRight, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { useDeen } from '../../context/DeenContext';
import { HADITH_BOOKS } from '../../data/hadithData';

export const HadithBooksScreen: React.FC = () => {
  const { navigateTo, settings } = useDeen();

  return (
    <div className="flex-1 p-3.5 space-y-4 pb-24 overflow-y-auto">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-teal-900 via-emerald-950 to-slate-900 p-5 text-white shadow-xl border border-teal-500/20">
        <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>সিহাহ সিত্তাহ ও প্রামাণ্য হাদীস সংকলন</span>
        </div>
        <h2 className="text-xl font-bold tracking-tight mb-1">
          সহীহ হাদিস গ্রন্থসমূহ
        </h2>
        <p className="text-xs text-teal-100/80 leading-relaxed">
          রাসূলুল্লাহ (সা.)-এর পবিত্র বাণী, কর্ম ও জীবনবিধান সম্বলিত ৮টি প্রধান হাদিস কিতাব ও অধ্যায়ভিত্তিক সংকলন।
        </p>
      </div>

      {/* Books List Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {HADITH_BOOKS.map((book) => (
          <div
            key={book.id}
            onClick={() => navigateTo({ type: 'hadith_chapters', bookId: book.id })}
            className={`p-4 rounded-3xl border transition-all cursor-pointer group active:scale-[0.98] shadow-md relative overflow-hidden flex flex-col justify-between ${
              settings.isDarkMode
                ? 'bg-slate-900/90 border-slate-800 hover:border-teal-500/50 text-white'
                : 'bg-white border-slate-200 hover:border-teal-300 text-slate-900 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-arabic text-lg text-amber-300 font-bold group-hover:text-amber-200 transition-colors">
                  {book.name}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 font-semibold">
                  {book.totalHadith.toLocaleString('bn-BD')} টি হাদিস
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">
                {book.banglaName}
              </h3>

              <p className="text-xs text-slate-400 mb-2 font-medium">
                সংকলক: {book.author}
              </p>

              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {book.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-teal-400 group-hover:text-amber-300 transition-colors">
              <span>অধ্যায় ও হাদিস তালিকা ({book.chaptersCount} টি অধ্যায়)</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
