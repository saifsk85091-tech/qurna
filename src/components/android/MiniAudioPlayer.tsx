import React from 'react';
import { Play, Pause, SkipForward, SkipBack, X, Volume2, Maximize2 } from 'lucide-react';
import { useDeen } from '../../context/DeenContext';
import { SURAH_LIST } from '../../data/quranData';

export const MiniAudioPlayer: React.FC = () => {
  const {
    audioState,
    togglePlayPause,
    stopAudio,
    playNextAyah,
    playPreviousAyah,
    setShowAudioModal,
    settings
  } = useDeen();

  if (!audioState.currentSurahNumber || !audioState.currentAyahData) {
    return null;
  }

  const surah = SURAH_LIST.find(s => s.number === audioState.currentSurahNumber);
  const progress = audioState.duration > 0 ? (audioState.currentTime / audioState.duration) * 100 : 0;

  return (
    <div className={`mx-3 mb-2 rounded-2xl border p-2.5 shadow-2xl transition-all relative overflow-hidden backdrop-blur-xl ${
      settings.isDarkMode
        ? 'bg-emerald-950/90 border-emerald-500/30 text-white'
        : 'bg-emerald-900 text-white border-emerald-700'
    }`}>
      {/* Dynamic Progress Bar top edge */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-950/50">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        {/* Left: Thumbnail & Surah Name Clickable for Full View */}
        <div
          onClick={() => setShowAudioModal(true)}
          className="flex items-center gap-2.5 flex-1 min-w-0 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-emerald-950 font-bold text-sm shadow-md shrink-0 ring-1 ring-amber-300/40 group-hover:scale-105 transition-transform">
            <Volume2 className="w-5 h-5 animate-pulse" />
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold truncate">সূরা {surah?.banglaName || ''}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-800/80 text-amber-300 font-semibold shrink-0">
                আয়াত {audioState.currentAyahNumber}
              </span>
            </div>
            <p className="text-[11px] text-emerald-200/80 truncate font-arabic">
              {audioState.currentAyahData.arabicText}
            </p>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={playPreviousAyah}
            className="p-1.5 rounded-full hover:bg-emerald-800/60 active:scale-95 text-emerald-200"
            title="পূর্ববর্তী আয়াত"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={togglePlayPause}
            className="p-2 rounded-full bg-amber-400 text-emerald-950 hover:bg-amber-300 active:scale-90 shadow-md font-bold transition-all"
            title={audioState.isPlaying ? 'বিরতি' : 'চালান'}
          >
            {audioState.isPlaying ? <Pause className="w-4 h-4 fill-emerald-950" /> : <Play className="w-4 h-4 fill-emerald-950 ml-0.5" />}
          </button>

          <button
            onClick={playNextAyah}
            className="p-1.5 rounded-full hover:bg-emerald-800/60 active:scale-95 text-emerald-200"
            title="পরবর্তী আয়াত"
          >
            <SkipForward className="w-4 h-4" />
          </button>

          <button
            onClick={() => setShowAudioModal(true)}
            className="p-1.5 rounded-full hover:bg-emerald-800/60 active:scale-95 text-emerald-200"
            title="ফুলস্ক্রিন প্লেয়ার"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={stopAudio}
            className="p-1.5 rounded-full hover:bg-red-500/20 text-emerald-300 hover:text-red-400 active:scale-95"
            title="বন্ধ করুন"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
