import React, { useState } from 'react';
import { Bookmark, Trash2, BookOpen, ScrollText, ChevronRight, ExternalLink } from 'lucide-react';
import { useDeen } from '../../context/DeenContext';

export const BookmarksScreen: React.FC = () => {
  const { bookmarks, removeBookmark, navigateTo, settings } = useDeen();
  const [filter, setFilter] = useState<'all' | 'quran' | 'hadith'>('all');

  const filteredBookmarks = bookmarks.filter(b => filter === 'all' || b.type === filter);

  return (
    <div className="flex-1 p-3.5 space-y-4 pb-24 overflow-y-auto">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 p-5 text-white shadow-xl border border-emerald-500/20">
        <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold mb-1">
          <Bookmark className="w-4 h-4 fill-amber-300" />
          <span>সংরক্ষিত আয়াত ও হাদিস</span>
        </div>
        <h2 className="text-xl font-bold tracking-tight mb-1">
          আপনার প্রিয় বুকমার্কসমূহ
        </h2>
        <p className="text-xs text-emerald-100/80">
          কুরআন তিলাওয়াত ও হাদিস পাঠের সময় সংরক্ষিত গুরুত্বপূর্ণ বাণীসমূহ।
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        {[
          { id: 'all', label: `সকল (${bookmarks.length})` },
          { id: 'quran', label: `কুরআন (${bookmarks.filter(b => b.type === 'quran').length})` },
          { id: 'hadith', label: `হাদিস (${bookmarks.filter(b => b.type === 'hadith').length})` }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              filter === tab.id
                ? 'bg-emerald-600 text-white shadow-md'
                : settings.isDarkMode
                ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                : 'bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Bookmarks List */}
      <div className="space-y-3">
        {filteredBookmarks.map((item) => (
          <div
            key={item.id}
            className={`p-4 rounded-3xl border transition-all shadow-md relative group ${
              settings.isDarkMode
                ? 'bg-slate-900/90 border-slate-800 text-white'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800/60">
              <div className="flex items-center gap-2">
                {item.type === 'quran' ? (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span>আল-কুরআন</span>
                  </span>
                ) : (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 flex items-center gap-1">
                    <ScrollText className="w-3 h-3" />
                    <span>সহীহ হাদিস</span>
                  </span>
                )}
                <span className="text-xs font-bold text-amber-400">{item.title}</span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeBookmark(item.id);
                }}
                className="p-1.5 rounded-full hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                title="মুছে ফেলুন"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Arabic preview */}
            <p className="font-arabic text-sm text-amber-200 text-right line-clamp-2 my-2" dir="rtl">
              {item.arabicText}
            </p>

            {/* Bangla text */}
            <p className="text-xs font-medium line-clamp-2 text-slate-300">
              {item.banglaText}
            </p>

            {/* Action to Jump */}
            <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[10px] text-slate-500">
                সংরক্ষিত: {new Date(item.createdAt).toLocaleDateString('bn-BD')}
              </span>

              <button
                onClick={() => {
                  if (item.type === 'quran' && item.surahNumber) {
                    navigateTo({ type: 'surah_detail', surahNumber: item.surahNumber, initialAyah: item.ayahNumber });
                  } else if (item.type === 'hadith' && item.hadithId) {
                    navigateTo({ type: 'hadith_detail', hadithId: item.hadithId });
                  }
                }}
                className="text-xs font-bold text-emerald-400 hover:text-amber-300 flex items-center gap-1"
              >
                <span>সরাসরি পড়ুন</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}

        {filteredBookmarks.length === 0 && (
          <div className="py-16 text-center text-slate-400 space-y-2">
            <Bookmark className="w-12 h-12 mx-auto text-emerald-400/40" />
            <p className="text-sm font-semibold">কোনো সংরক্ষিত বুকমার্ক নেই</p>
            <p className="text-xs text-slate-500">
              কুরআন তিলাওয়াত বা হাদিস পাঠের সময় বুকমার্ক আইকনে ক্লিক করে সংরক্ষণ করুন।
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
