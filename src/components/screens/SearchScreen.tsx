import React, { useState } from 'react';
import { Search, BookOpen, ScrollText, ArrowRight, Sparkles } from 'lucide-react';
import { useDeen } from '../../context/DeenContext';
import { SURAH_LIST } from '../../data/quranData';
import { HADITH_LIST, HADITH_BOOKS } from '../../data/hadithData';

export const SearchScreen: React.FC = () => {
  const { navigateTo, settings } = useDeen();
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'quran' | 'hadith'>('all');
  const [selectedBook, setSelectedBook] = useState<string>('all');

  const popularKeywords = ['নামাজ', 'রোজা', 'দান', 'ঈমান', 'হজ', 'জ্ঞান', 'তাওবা', 'সবর', 'নিয়ত', 'পবিত্রতা'];

  // Search Quran
  const matchedSurahs = SURAH_LIST.filter(s =>
    query.trim() !== '' && (
      s.banglaName.toLowerCase().includes(query.toLowerCase()) ||
      s.englishName.toLowerCase().includes(query.toLowerCase()) ||
      s.meaning.toLowerCase().includes(query.toLowerCase()) ||
      s.arabicName.includes(query) ||
      s.number.toString() === query.trim()
    )
  );

  // Search Hadith
  const matchedHadiths = HADITH_LIST.filter(h => {
    if (query.trim() === '') return false;
    if (selectedBook !== 'all' && h.bookId !== selectedBook) return false;
    return (
      h.banglaTranslation.toLowerCase().includes(query.toLowerCase()) ||
      h.narrator.toLowerCase().includes(query.toLowerCase()) ||
      h.reference.toLowerCase().includes(query.toLowerCase()) ||
      h.arabicText.includes(query)
    );
  });

  return (
    <div className="flex-1 p-3.5 space-y-4 pb-24 overflow-y-auto">
      {/* Search Bar Input */}
      <div className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl border shadow-lg transition-all ${
        settings.isDarkMode
          ? 'bg-slate-900 border-emerald-600/40 text-white focus-within:border-emerald-400'
          : 'bg-white border-emerald-300 text-slate-900 focus-within:border-emerald-500'
      }`}>
        <Search className="w-5 h-5 text-emerald-400 shrink-0" />
        <input
          type="text"
          placeholder="কুরআন ও হাদিসে খুঁজুন (যেমন: নিয়ত, নামাজ, ফাতিহা)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          autoFocus
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="text-xs text-slate-400 hover:text-white px-1.5 font-bold"
          >
            ✕
          </button>
        )}
      </div>

      {/* Suggested Quick Keywords */}
      <div className="space-y-1.5">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          জনপ্রিয় অনুসন্ধানের বিষয়:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {popularKeywords.map(keyword => (
            <button
              key={keyword}
              onClick={() => setQuery(keyword)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all active:scale-95 ${
                query === keyword
                  ? 'bg-emerald-600 text-white'
                  : settings.isDarkMode
                  ? 'bg-slate-900 text-emerald-300 border border-slate-800 hover:border-emerald-600'
                  : 'bg-slate-100 text-emerald-800 border border-slate-200 hover:border-emerald-300'
              }`}
            >
              #{keyword}
            </button>
          ))}
        </div>
      </div>

      {/* Result Tabs */}
      {query.trim() && (
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          {[
            { id: 'all', label: `সকল ফলাফল (${matchedSurahs.length + matchedHadiths.length})` },
            { id: 'quran', label: `কুরআন (${matchedSurahs.length})` },
            { id: 'hadith', label: `হাদিস (${matchedHadiths.length})` }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Book Filter for Hadith */}
      {query.trim() && (activeTab === 'hadith' || activeTab === 'all') && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedBook('all')}
            className={`px-2.5 py-1 rounded-full text-[11px] font-bold whitespace-nowrap transition-all ${
              selectedBook === 'all'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            সব হাদিস গ্রন্থ
          </button>
          {HADITH_BOOKS.map(b => (
            <button
              key={b.id}
              onClick={() => setSelectedBook(b.id)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold whitespace-nowrap transition-all ${
                selectedBook === b.id
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white'
              }`}
            >
              {b.banglaName}
            </button>
          ))}
        </div>
      )}

      {/* Results Content */}
      <div className="space-y-3">
        {/* Quran Results */}
        {(activeTab === 'all' || activeTab === 'quran') && matchedSurahs.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>কুরআনুল কারীম ({matchedSurahs.length})</span>
            </h3>

            {matchedSurahs.map(surah => (
              <div
                key={surah.id}
                onClick={() => navigateTo({ type: 'surah_detail', surahNumber: surah.number })}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer group active:scale-[0.99] flex items-center justify-between ${
                  settings.isDarkMode
                    ? 'bg-slate-900/90 border-slate-800 hover:border-emerald-500/60 text-white'
                    : 'bg-white border-slate-200 text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-700/40 text-amber-300 font-bold text-xs flex items-center justify-center">
                    {surah.number}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold group-hover:text-emerald-400 transition-colors">
                      সূরা {surah.banglaName}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {surah.englishName} • {surah.meaning} • {surah.totalAyah} আয়াত
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-arabic text-lg text-emerald-400">
                    {surah.arabicName}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Hadith Results */}
        {(activeTab === 'all' || activeTab === 'hadith') && matchedHadiths.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
              <ScrollText className="w-3.5 h-3.5" />
              <span>সহীহ হাদিস ভাণ্ডার ({matchedHadiths.length})</span>
            </h3>

            {matchedHadiths.map(hadith => (
              <div
                key={hadith.id}
                onClick={() => navigateTo({ type: 'hadith_detail', hadithId: hadith.id })}
                className={`p-4 rounded-2xl border transition-all cursor-pointer group active:scale-[0.99] ${
                  settings.isDarkMode
                    ? 'bg-slate-900/90 border-slate-800 hover:border-teal-500/60 text-white'
                    : 'bg-white border-slate-200 text-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-teal-400">{hadith.reference}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                    {hadith.grade}
                  </span>
                </div>

                <p className="text-xs font-arabic text-emerald-200 text-right line-clamp-1 mb-1" dir="rtl">
                  {hadith.arabicText}
                </p>

                <p className="text-xs line-clamp-2 text-slate-300 font-medium">
                  {hadith.banglaTranslation}
                </p>

                <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>বর্ণনাকারী: {hadith.narrator}</span>
                  <span className="text-teal-400 font-semibold group-hover:underline">বিস্তারিত পাঠ</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {query.trim() && matchedSurahs.length === 0 && matchedHadiths.length === 0 && (
          <div className="py-16 text-center text-slate-400 space-y-2">
            <Search className="w-12 h-12 mx-auto text-emerald-400/40" />
            <p className="text-sm font-semibold">&ldquo;{query}&rdquo; দিয়ে কোনো তথ্য পাওয়া যায়নি</p>
            <p className="text-xs text-slate-500">বানান সঠিক আছে কি না যাচাই করে পুনরায় চেষ্টা করুন</p>
          </div>
        )}
      </div>
    </div>
  );
};
