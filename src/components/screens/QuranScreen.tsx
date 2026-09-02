import React, { useState } from 'react';
import { Search, Filter, BookOpen, Volume2, ArrowRight } from 'lucide-react';
import { useDeen } from '../../context/DeenContext';
import { SURAH_LIST } from '../../data/quranData';

export const QuranScreen: React.FC = () => {
  const { navigateTo, settings } = useDeen();
  const [filterType, setFilterType] = useState<'all' | 'মাক্কী' | 'মাদানী'>('all');
  const [searchFilter, setSearchFilter] = useState('');

  const filteredSurahs = SURAH_LIST.filter(surah => {
    const matchesType = filterType === 'all' || surah.revelationType === filterType;
    const matchesSearch = searchFilter === '' ||
      surah.banglaName.toLowerCase().includes(searchFilter.toLowerCase()) ||
      surah.englishName.toLowerCase().includes(searchFilter.toLowerCase()) ||
      surah.arabicName.includes(searchFilter) ||
      surah.meaning.toLowerCase().includes(searchFilter.toLowerCase()) ||
      surah.number.toString() === searchFilter.trim();
    return matchesType && matchesSearch;
  });

  return (
    <div className="flex-1 p-3.5 space-y-3 pb-24 overflow-y-auto">
      {/* Search & Filter Bar */}
      <div className="space-y-2 sticky top-0 z-10 pt-1">
        <div className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl border shadow-md transition-all ${
          settings.isDarkMode
            ? 'bg-slate-900/95 border-emerald-800/50 text-white'
            : 'bg-white/95 border-emerald-200 text-slate-900'
        } backdrop-blur-md`}>
          <Search className="w-4 h-4 text-emerald-400 shrink-0" />
          <input
            type="text"
            placeholder="সূরা খুঁজুন (যেমন: ফাতিহা, Fatiha, ১, الفاتحة)..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full bg-transparent text-xs sm:text-sm outline-none placeholder:text-slate-400"
          />
          {searchFilter && (
            <button
              onClick={() => setSearchFilter('')}
              className="text-xs text-slate-400 hover:text-white px-1 font-bold"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Tabs (All / Makki / Madani) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {[
            { id: 'all', label: `সকল সূরা (${SURAH_LIST.length})` },
            { id: 'মাক্কী', label: 'মাক্কী (৮৬)' },
            { id: 'মাদানী', label: 'মাদানী (২৮)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id as any)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all active:scale-95 ${
                filterType === tab.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : settings.isDarkMode
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Surah List */}
      <div className="space-y-2">
        {filteredSurahs.map(surah => (
          <div
            key={surah.id}
            onClick={() => navigateTo({ type: 'surah_detail', surahNumber: surah.number })}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer group active:scale-[0.99] shadow-sm flex items-center justify-between ${
              settings.isDarkMode
                ? 'bg-slate-900/80 border-slate-800 hover:border-emerald-500/50 text-white'
                : 'bg-white border-slate-200 hover:border-emerald-300 text-slate-900'
            }`}
          >
            {/* Left: Number & Bangla Name */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-900/60 to-slate-800 border border-emerald-600/30 flex items-center justify-center text-amber-300 font-bold text-xs shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                {surah.number}
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold truncate">
                    সূরা {surah.banglaName}
                  </h3>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium shrink-0 ${
                    surah.revelationType === 'মাক্কী'
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  }`}>
                    {surah.revelationType}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 truncate mt-0.5">
                  <span className="truncate">{surah.englishName}</span>
                  <span>•</span>
                  <span>{surah.totalAyah} আয়াত</span>
                </div>
              </div>
            </div>

            {/* Right: Arabic Name & Arrow */}
            <div className="flex items-center gap-2 text-right shrink-0">
              <span className="font-arabic text-lg sm:text-xl text-emerald-400/90 font-medium group-hover:text-amber-300 transition-colors">
                {surah.arabicName}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        ))}

        {filteredSurahs.length === 0 && (
          <div className="py-12 text-center text-slate-400">
            <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-30 text-emerald-400" />
            <p className="text-sm">কোনো সূরা খুঁজে পাওয়া যায়নি</p>
          </div>
        )}
      </div>
    </div>
  );
};
