import React, { useState } from 'react';
import { 
  FileCode, 
  Folder, 
  Copy, 
  Check, 
  Download, 
  Search, 
  ExternalLink,
  Layers,
  Sparkles,
  FileCheck,
  FolderOpen
} from 'lucide-react';
import JSZip from 'jszip';
import { ANDROID_FILES } from '../data/androidFiles';
import { CodeFile } from '../types';

export const CodeInspector: React.FC = () => {
  const [selectedFileId, setSelectedFileId] = useState<string>('app-build-gradle');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [downloadingZip, setDownloadingZip] = useState<boolean>(false);

  const filteredFiles = ANDROID_FILES.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    file.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
    file.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedFile = ANDROID_FILES.find(f => f.id === selectedFileId) || ANDROID_FILES[0];

  const handleCopyCode = () => {
    if (selectedFile) {
      navigator.clipboard.writeText(selectedFile.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadSingleFile = () => {
    if (!selectedFile) return;
    const blob = new Blob([selectedFile.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = selectedFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadZip = async () => {
    setDownloadingZip(true);
    try {
      const zip = new JSZip();
      
      // Add all project files into their proper nested directories inside DeenLibrary/
      ANDROID_FILES.forEach(file => {
        zip.file(`DeenLibrary/${file.path}`, file.content);
      });

      // Add a quick README for Android Studio import
      zip.file(
        'DeenLibrary/README.md',
        `# Deen Library – Quran & Hadith (Android App)
Built with Kotlin, Jetpack Compose, Material 3, Navigation & Room Database.

## How to Open in Android Studio:
1. Extract this ZIP folder.
2. Open Android Studio (Ladybug or newer recommended).
3. Click 'Open...' and select the 'DeenLibrary' directory.
4. Allow Gradle to sync automatically.
5. Run on an Android 8.0+ Emulator or physical phone.`
      );

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'DeenLibrary-Step1-AndroidStudio.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to generate ZIP', error);
    } finally {
      setDownloadingZip(false);
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'gradle': return { label: 'Gradle', color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' };
      case 'manifest': return { label: 'Manifest', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' };
      case 'theme': return { label: 'Material 3 Theme', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' };
      case 'navigation': return { label: 'Navigation', color: 'bg-sky-500/10 text-sky-400 border-sky-500/20' };
      case 'ui': return { label: 'Compose UI', color: 'bg-teal-500/10 text-teal-400 border-teal-500/20' };
      case 'res': return { label: 'Resources', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' };
      default: return { label: category, color: 'bg-slate-500/10 text-slate-400 border-slate-500/20' };
    }
  };

  return (
    <div className="w-full flex flex-col h-[740px] bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between p-3.5 sm:px-6 bg-slate-950/80 border-b border-slate-800/80 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <FileCode className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <span>Android Studio Code Inspector</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                100% Complete & Zero Missing Code
              </span>
            </h3>
            <p className="text-xs text-slate-400 font-mono-code">package com.deenlibrary.app</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDownloadZip}
            disabled={downloadingZip}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs transition shadow-md shadow-emerald-950/40 active:scale-95 disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{downloadingZip ? 'Creating ZIP...' : 'Download Step 1 ZIP'}</span>
          </button>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
        {/* Left Sidebar File Tree */}
        <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-slate-800 bg-slate-950/50 flex flex-col h-56 md:h-full">
          {/* File Search */}
          <div className="p-3 border-b border-slate-800/70">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search file name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-emerald-500 transition"
              />
            </div>
          </div>

          {/* Files List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {filteredFiles.map((file) => {
              const isSelected = file.id === selectedFileId;
              const badge = getCategoryBadge(file.category);
              return (
                <button
                  key={file.id}
                  onClick={() => setSelectedFileId(file.id)}
                  className={`w-full text-left p-2 rounded-xl transition flex items-start justify-between gap-2 text-xs ${
                    isSelected
                      ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-200'
                      : 'hover:bg-slate-800/60 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <FileCode className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                    <span className="font-mono text-[11px] truncate font-medium">{file.name}</span>
                  </div>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded border uppercase shrink-0 ${badge.color}`}>
                    {badge.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Code Display Area */}
        <div className="flex-1 flex flex-col h-full bg-slate-950 overflow-hidden">
          {/* File Header Details */}
          <div className="px-4 py-2.5 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 truncate">
              <span className="text-xs text-slate-400 font-mono bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60 truncate">
                {selectedFile.path}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition active:scale-95"
                title="Copy file content"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>

              <button
                onClick={handleDownloadSingleFile}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
                title="Download this file"
              >
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Code Viewer */}
          <div className="flex-1 overflow-auto p-4 font-mono text-xs leading-relaxed bg-[#0b101b] text-slate-200">
            <pre className="selection:bg-emerald-500/30">
              <code>{selectedFile.content}</code>
            </pre>
          </div>

          {/* Description Footer */}
          <div className="p-3 bg-slate-900/90 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            <span>{selectedFile.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
