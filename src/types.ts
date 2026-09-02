export type NavigationTab = 'home' | 'quran' | 'hadith' | 'bookmark' | 'settings';

export interface CodeFile {
  id: string;
  name: string;
  path: string;
  category: 'gradle' | 'manifest' | 'theme' | 'navigation' | 'ui' | 'res';
  language: 'kotlin' | 'groovy' | 'xml' | 'toml';
  content: string;
  description: string;
}

export interface SetupStep {
  stepNumber: number;
  title: string;
  bengaliTitle: string;
  description: string;
  actionItems: string[];
  tips?: string;
}
