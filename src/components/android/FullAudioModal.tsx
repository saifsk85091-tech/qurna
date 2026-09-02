import React from 'react';
import { Play, Pause, SkipForward, SkipBack, Repeat, FastForward, ChevronDown, Volume2, Share2, Bookmark } from 'lucide-react';
import { useDeen } from '../../context/DeenContext';
import { SURAH_LIST } from '../../data/quranData';

export const FullAudioModal: React.FC = () => {
  const {
    showAudioModal,
    setShowAudioModal,
    audioState,
    togglePlayPause,
    playNextAyah,
    playPreviousAyah,
    setPlaybackSpeed,
    toggleLoop,
    addBookmark,
    isBookmarked,
    settings
  } = useDeen();

  if (!showAudioModal || !audioState.currentSurahNumber || !audioState.currentAyahData) {
    return null;
  }

  const surah = SURAH_LIST.find(s => s.number === audioState.currentSurahNumber);
  const ayah = audioState.currentAyahData;
  const progress = audioState.duration > 0 ? (audioState.currentTime / audioState.duration) * 100 : 0;

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const speeds = [0.75, 1.0, 1.25, 1.5];

  const handleNextSpeed = () => {
    const currentIndex = speeds.indexOf(audioState.playbackSpeed);
    const nextSpeed = speeds[(currentIndex + 1) % speeds.length];
    setPlaybackSpeed(nextSpeed);
  };

  const bookmarked = isBookmarked('quran', ayah.ayahNumber);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className={`w-full max-w-md rounded-3xl p-6 shadow-2xl border flex flex-col relative overflow-hidden ${
        settings.isDarkMode
          ? 'bg-slate-900 border-emerald-500/30 text-white'
          : 'bg-gradient-to-b from-emerald-950 to-slate-900 border-emerald-600/40 text-white'
      }`}>
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-emerald-800/40">
          <button
            onClick={() => setShowAudioModal(false)}
            className="p-2 rounded-full hover:bg-white/10 active:scale-95 text-emerald-300"
          >
            <ChevronDown className="w-6 h-6" />
          </button>

          <div className="text-center">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">কুরআন তেলাওয়াত</span>
            <h3 className="text-base font-bold text-amber-300">মিশারি রাশিদ আল-আফাসী</h3>
          </div>

          <button
            onClick={() => {
              if (!bookmarked && surah) {
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
            }}
            className={`p-2 rounded-full active:scale-95 transition-colors ${
              bookmarked ? 'text-amber-400 bg-amber-400/20' : 'text-slate-300 hover:bg-white/10'
            }`}
            title="বুকমার্ক"
          >
            <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-amber-400' : ''}`} />
          </button>
        </div>

        {/* Center Display: Islamic Calligraphy Card */}
        <div className="my-6 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-emerald-900/60 to-slate-900/90 border border-emerald-500/20 shadow-inner text-center">
          <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 text-2xl font-serif font-bold mb-3 shadow-lg">
            {surah?.number}
          </div>

          <h2 className="text-2xl font-bold text-white mb-1">
            সূরা {surah?.banglaName}
          </h2>
          <p className="text-sm text-emerald-300 font-medium mb-3">
            {surah?.englishName} • আয়াত {ayah.ayahNumber} / {surah?.totalAyah}
          </p>

          <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 w-full max-h-40 overflow-y-auto">
            <p className="font-arabic text-xl text-amber-200 leading-relaxed text-center mb-2" dir="rtl">
              {ayah.arabicText}
            </p>
            <p className="text-xs text-slate-300 leading-normal text-center">
              {ayah.banglaTranslation}
            </p>
          </div>
        </div>

        {/* Seek Bar / Progress */}
        <div className="space-y-1.5 mb-6">
          <div className="w-full h-2 rounded-full bg-slate-800 relative cursor-pointer overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-emerald-400/80 font-mono">
            <span>{formatTime(audioState.currentTime)}</span>
            <span>{formatTime(audioState.duration)}</span>
          </div>
        </div>

        {/* Audio Controls */}
        <div className="flex items-center justify-between px-2">
          {/* Loop Button */}
          <button
            onClick={toggleLoop}
            className={`p-2.5 rounded-full transition-all active:scale-95 ${
              audioState.isLooping
                ? 'bg-amber-400 text-emerald-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
            title="একই আয়াত বারবার শুনুন"
          >
            <Repeat className="w-5 h-5" />
          </button>

          {/* Prev Ayah */}
          <button
            onClick={playPreviousAyah}
            className="p-3 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-800/40 active:scale-95 transition-all"
            title="পূর্ববর্তী আয়াত"
          >
            <SkipBack className="w-6 h-6" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-amber-300 text-emerald-950 flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all"
            title={audioState.isPlaying ? 'বিরতি' : 'চালান'}
          >
            {audioState.isPlaying ? (
              <Pause className="w-7 h-7 fill-emerald-950 stroke-[2.5]" />
            ) : (
              <Play className="w-7 h-7 fill-emerald-950 stroke-[2.5] ml-1" />
            )}
          </button>

          {/* Next Ayah */}
          <button
            onClick={playNextAyah}
            className="p-3 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-800/40 active:scale-95 transition-all"
            title="পরবর্তী আয়াত"
          >
            <SkipForward className="w-6 h-6" />
          </button>

          {/* Speed Selector */}
          <button
            onClick={handleNextSpeed}
            className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-amber-300 bg-emerald-950/80 border border-amber-400/30 hover:bg-emerald-900 active:scale-95"
            title="প্লেব্যাক স্পিড পরিবর্তন"
          >
            {audioState.playbackSpeed}x
          </button>
        </div>
      </div>
    </div>
  );
};
