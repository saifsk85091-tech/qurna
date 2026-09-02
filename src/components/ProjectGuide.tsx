import React from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  AlertTriangle, 
  Layers, 
  Rocket, 
  Code2, 
  Terminal, 
  ShieldCheck, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export const ProjectGuide: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 pb-12">
      {/* Introduction Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 border border-emerald-500/30 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
            <Rocket className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Android Studio Setup Guide (STEP 1: Architecture & Base UI)</span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-medium border border-emerald-500/30">
                Beginner Friendly
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-bengali">
              আপনি একজন beginner হিসেবে সহজেই যাতে সম্পূর্ণ প্রোজেক্টটি তৈরি করতে পারেন, সেজন্য এখানে Step-by-Step গাইড দেওয়া হলো। 
              এই ধাপে Android Studio-তে একটি খালি Compose প্রোজেক্ট খুলে আমাদের দেওয়া File গুলো যথাস্থানে তৈরি ও পেস্ট করবেন।
            </p>
          </div>
        </div>
      </div>

      {/* Step by Step Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Step 1: New Project */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">1</span>
            <h3 className="text-sm font-bold text-slate-100">Android Studio-তে New Project তৈরি</h3>
          </div>
          <ul className="text-xs text-slate-300 space-y-2 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Android Studio ওপেন করে <strong>"New Project"</strong>-এ ক্লিক করুন।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Template হিসেবে <strong>"Empty Activity"</strong> (Jetpack Compose Logo যুক্ত) সিলেক্ট করুন।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>Name:</strong> <code className="text-amber-300 font-mono">Deen Library</code></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>Package name:</strong> <code className="text-amber-300 font-mono">com.deenlibrary.app</code></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>Language:</strong> <code className="text-emerald-300 font-mono">Kotlin</code></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>Minimum SDK:</strong> <code className="text-slate-200 font-mono">API 24 ("Nougat"; Android 7.0)</code> বা তার বেশি।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>Build configuration language:</strong> <code className="text-slate-200 font-mono">Kotlin DSL (build.gradle.kts)</code> সিলেক্ট করে <strong>Finish</strong> চাপুন।</span>
            </li>
          </ul>
        </div>

        {/* Step 2: Gradle Config */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">2</span>
            <h3 className="text-sm font-bold text-slate-100">Gradle Dependencies পেস্ট ও Sync</h3>
          </div>
          <ul className="text-xs text-slate-300 space-y-2 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><code className="text-amber-300 font-mono">gradle/libs.versions.toml</code> ফাইলটি Code Inspector থেকে কপি করে রিপ্লেস করুন।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Root <code className="text-amber-300 font-mono">build.gradle.kts</code> এবং <code className="text-amber-300 font-mono">app/build.gradle.kts</code> কোড পেস্ট করুন।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>উপরে ডানপাশে আসা <strong>"Sync Now"</strong> বাটনে ক্লিক করে Gradle সিঙ্ক সম্পন্ন করুন।</span>
            </li>
          </ul>
        </div>

        {/* Step 3: Package Structure */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">3</span>
            <h3 className="text-sm font-bold text-slate-100">Package ও Folder Structure তৈরি</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            <code className="text-emerald-400 font-mono">app/src/main/java/com/deenlibrary/app/</code> ফোল্ডারে নিচের প্যাকেজগুলো তৈরি করুন:
          </p>
          <div className="bg-slate-950 p-2.5 rounded-xl font-mono text-[11px] text-emerald-300 space-y-1">
            <p>├── ui/theme (Color.kt, Theme.kt, Type.kt)</p>
            <p>├── ui/navigation (Screen.kt, BottomNavBar.kt, AppNavigation.kt)</p>
            <p>├── ui/home (HomeScreen.kt)</p>
            <p>├── ui/quran (QuranScreen.kt)</p>
            <p>├── ui/hadith (HadithScreen.kt)</p>
            <p>├── ui/bookmark (BookmarkScreen.kt)</p>
            <p>├── ui/settings (SettingsScreen.kt)</p>
            <p>├── ui/splash (SplashScreen.kt)</p>
            <p>└── ui/MainScreen.kt, MainActivity.kt</p>
          </div>
        </div>

        {/* Step 4: Run the App */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">4</span>
            <h3 className="text-sm font-bold text-slate-100">App Run & Test করার নিয়ম</h3>
          </div>
          <ul className="text-xs text-slate-300 space-y-2 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Android Studio-র উপরের Toolbar থেকে যেকোনো Emulator (যেমন Pixel 7) বা USB দিয়ে আপনার ফোন কানেক্ট করুন।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>সবুজ রঙের <strong>"Run 'app'" (Shift + F10)</strong> বাটনে ক্লিক করুন।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>প্রথমে সুন্দর Islamic Splash Screen আসবে, এরপর Bottom Navigation সহ ৫টি ট্যাব (Home, Quran, Hadith, Bookmark, Settings) কাজ করবে!</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Common Errors & Solutions */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-bold text-slate-100">Common Errors & Solutions (সম্ভাব্য সমস্যা ও সমাধান)</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
            <p className="font-bold text-amber-300">1. JDK Version mismatch</p>
            <p className="text-slate-400">
              Settings &gt; Build, Execution, Deployment &gt; Build Tools &gt; Gradle-এ গিয়ে Gradle JDK হিসেবে <strong>JDK 17</strong> সিলেক্ট করুন।
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
            <p className="font-bold text-amber-300">2. KSP & Kotlin Version Mismatch</p>
            <p className="text-slate-400">
              আমাদের <code className="text-slate-300 font-mono">libs.versions.toml</code>-এ Kotlin 2.0.21 এর সাথে KSP 2.0.21-1.0.28 দেওয়া আছে, যা একদম সুরক্ষিত ও পরীক্ষিত।
            </p>
          </div>
        </div>
      </div>

      {/* Progress & Next Step Roadmap */}
      <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <span>Roadmap: ১৭টি ধাপের মধ্যে চলমান পর্যায়</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold">
            STEP 1: Base & Setup (Completed ✓)
          </div>
          <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-300 font-medium">
            STEP 2: Home Screen Complete
          </div>
          <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800 text-slate-500">
            STEP 3: Quran Module & Database
          </div>
          <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800 text-slate-500">
            STEP 4: Quran Search
          </div>
          <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800 text-slate-500">
            STEP 5: Bookmarks
          </div>
          <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800 text-slate-500">
            STEP 6-17: Hadith, Audio, Settings...
          </div>
        </div>
      </div>
    </div>
  );
};
