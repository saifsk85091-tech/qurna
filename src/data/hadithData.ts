import { HadithBook, HadithChapter, HadithItem } from '../types/deen';

export const HADITH_BOOKS: HadithBook[] = [
  {
    id: 'bukhari',
    name: 'صحيح البخاري',
    banglaName: 'সহীহ বুখারী',
    englishName: 'Sahih al-Bukhari',
    author: 'ইমাম মুহাম্মদ ইবনে ইসমাইল আল-বুখারী (রহ.)',
    totalHadith: 7563,
    chaptersCount: 97,
    color: 'emerald',
    description: 'সর্বসম্মতভাবে বিশুদ্ধতম হাদিস গ্রন্থ, যা সিহাহ সিত্তাহর শীর্ষস্থানে অবস্থিত।'
  },
  {
    id: 'muslim',
    name: 'صحيح مسلم',
    banglaName: 'সহীহ মুসলিম',
    englishName: 'Sahih Muslim',
    author: 'ইমাম মুসলিম ইবনুল হাজ্জাজ আন-নিশাপুরী (রহ.)',
    totalHadith: 7500,
    chaptersCount: 56,
    color: 'teal',
    description: 'হাদিস সংকলন ও বিন্যাসের ক্ষেত্রে এক অনন্য অতুলনীয় প্রামাণ্য কিতাব।'
  },
  {
    id: 'abudawood',
    name: 'سنن أبي داود',
    banglaName: 'সুনান আবু দাউদ',
    englishName: 'Sunan Abi Dawud',
    author: 'ইমাম আবু দাউদ সুলায়মান ইবনুল আশআস (রহ.)',
    totalHadith: 5274,
    chaptersCount: 43,
    color: 'amber',
    description: 'ফিকহ ও আহকামের বিধি-বিধান সম্বলিত হাদিসের সবচেয়ে সমৃদ্ধ ও নির্ভরযোগ্য গ্রন্থ।'
  },
  {
    id: 'tirmidhi',
    name: 'جامع الترمذي',
    banglaName: 'জামে আত-তিরমিজি',
    englishName: 'Jami` at-Tirmidhi',
    author: 'ইমাম আবু ঈসা মুহাম্মদ আত-তিরমিজি (রহ.)',
    totalHadith: 3956,
    chaptersCount: 49,
    color: 'indigo',
    description: 'হাদিসের সনদ, শ্রেণীবিভাগ ও বিভিন্ন ফুকাহায়ে কেরামের মতামতের অনন্য সংকলন।'
  },
  {
    id: 'nasai',
    name: 'سنن النسائي',
    banglaName: 'সুনান আন-নাসায়ী',
    englishName: 'Sunan an-Nasa\'i',
    author: 'ইমাম আহমদ ইবনে শুআইব আন-নাসায়ী (রহ.)',
    totalHadith: 5758,
    chaptersCount: 51,
    color: 'cyan',
    description: 'হাদিসের বর্ণনাকারীদের ত্রুটি-বিচ্যুতি বিশ্লেষণে অত্যন্ত গভীর ও সুক্ষ্ম প্রামাণ্য গ্রন্থ।'
  },
  {
    id: 'ibnmajah',
    name: 'سنن ابن ماجه',
    banglaName: 'সুনান ইবনে মাজাহ',
    englishName: 'Sunan Ibn Majah',
    author: 'ইমাম মুহাম্মদ ইবনে ইয়াজিদ ইবনে মাজাহ (রহ.)',
    totalHadith: 4341,
    chaptersCount: 37,
    color: 'rose',
    description: 'সিহাহ সিত্তাহর ষষ্ঠ গ্রন্থ, যা অধ্যায় বিন্যাসে অত্যন্ত চমৎকার ও প্রাঞ্জল।'
  },
  {
    id: 'muwatta',
    name: 'موطأ مالك',
    banglaName: 'মুয়াত্তা মালিক',
    englishName: 'Muwatta Malik',
    author: 'ইমাম মালিক ইবনে আনাস (রহ.)',
    totalHadith: 1858,
    chaptersCount: 61,
    color: 'blue',
    description: 'ইসলামের ইতিহাসের প্রথম দিকের সবচেয়ে নির্ভরযোগ্য হাদীস ও ফিকহ সংকলন।'
  },
  {
    id: 'riyadus_salihin',
    name: 'رياض الصالحين',
    banglaName: 'রিয়াদুস সালেহীন',
    englishName: 'Riyad as-Salihin',
    author: 'ইমাম মুহিউদ্দীন ইয়াহইয়া আন-নববী (রহ.)',
    totalHadith: 1896,
    chaptersCount: 19,
    color: 'emerald',
    description: 'দৈনন্দিন ইসলামিক চরিত্র, আখলাক ও আমলের শ্রেষ্ঠ হাদিস সংকলন।'
  }
];

export const HADITH_CHAPTERS: Record<string, HadithChapter[]> = {
  bukhari: [
    { id: 1, bookId: 'bukhari', chapterNumber: 1, banglaName: 'ওহীর সূচনা পর্ব', arabicName: 'كتاب بدء الوحي', hadithCount: 7 },
    { id: 2, bookId: 'bukhari', chapterNumber: 2, banglaName: 'ঈমান অধ্যায়', arabicName: 'كتاب الإيمان', hadithCount: 50 },
    { id: 3, bookId: 'bukhari', chapterNumber: 3, banglaName: 'ইলম বা জ্ঞান পর্ব', arabicName: 'كتاب العلم', hadithCount: 77 },
    { id: 4, bookId: 'bukhari', chapterNumber: 4, banglaName: 'ওযু ও তাহারাত', arabicName: 'كتاب الوضوء', hadithCount: 104 },
    { id: 5, bookId: 'bukhari', chapterNumber: 5, banglaName: 'গোসল পর্ব', arabicName: 'كتاب الغسل', hadithCount: 46 },
    { id: 6, bookId: 'bukhari', chapterNumber: 6, banglaName: 'সালাত / নামাজ অধ্যায়', arabicName: 'كتاب الصلاة', hadithCount: 145 },
    { id: 7, bookId: 'bukhari', chapterNumber: 7, banglaName: 'যাকাত পর্ব', arabicName: 'كتاب الزكاة', hadithCount: 118 },
    { id: 8, bookId: 'bukhari', chapterNumber: 8, banglaName: 'সাওম / রোজা অধ্যায়', arabicName: 'كتاب الصوم', hadithCount: 88 }
  ],
  muslim: [
    { id: 101, bookId: 'muslim', chapterNumber: 1, banglaName: 'ঈমান ও তাওহীদ', arabicName: 'كتاب الإيمان', hadithCount: 435 },
    { id: 102, bookId: 'muslim', chapterNumber: 2, banglaName: 'পবিত্রতা ও তাহারাত', arabicName: 'كتاب الطهارة', hadithCount: 140 },
    { id: 103, bookId: 'muslim', chapterNumber: 3, banglaName: 'সালাত / নামায', arabicName: 'كتاب الصلاة', hadithCount: 300 },
    { id: 104, bookId: 'muslim', chapterNumber: 4, banglaName: 'মসজিদ ও নামাজের স্থান', arabicName: 'كتاب المساجد', hadithCount: 180 },
    { id: 105, bookId: 'muslim', chapterNumber: 5, banglaName: 'যাকাত ও সাদাকাহ', arabicName: 'كتاب الزكاة', hadithCount: 220 }
  ],
  tirmidhi: [
    { id: 201, bookId: 'tirmidhi', chapterNumber: 1, banglaName: 'পবিত্রতা অধ্যায়', arabicName: 'أبواب الطهارة', hadithCount: 148 },
    { id: 202, bookId: 'tirmidhi', chapterNumber: 2, banglaName: 'সালাত পর্ব', arabicName: 'أبواب الصلاة', hadithCount: 250 },
    { id: 203, bookId: 'tirmidhi', chapterNumber: 3, banglaName: 'সদকা ও দান', arabicName: 'أبواب الزكاة', hadithCount: 95 },
    { id: 204, bookId: 'tirmidhi', chapterNumber: 4, banglaName: 'সিয়াম / রোজা', arabicName: 'أبواب الصوم', hadithCount: 110 }
  ],
  riyadus_salihin: [
    { id: 301, bookId: 'riyadus_salihin', chapterNumber: 1, banglaName: 'ইখলাস ও নিয়ত', arabicName: 'باب الإخلاص وإحضار النية', hadithCount: 12 },
    { id: 302, bookId: 'riyadus_salihin', chapterNumber: 2, banglaName: 'তাওবা ও অনুশোচনা', arabicName: 'باب التوبة', hadithCount: 18 },
    { id: 303, bookId: 'riyadus_salihin', chapterNumber: 3, banglaName: 'ধৈর্য ও সবর', arabicName: 'باب الصبر', hadithCount: 29 },
    { id: 304, bookId: 'riyadus_salihin', chapterNumber: 4, banglaName: 'সততা ও সত্যবাদিতা', arabicName: 'باب الصدق', hadithCount: 10 }
  ]
};

export const HADITH_LIST: HadithItem[] = [
  // Sahih Bukhari Hadiths
  {
    id: 1,
    bookId: 'bukhari',
    chapterId: 1,
    hadithNumber: 1,
    arabicText: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ.',
    banglaTranslation: 'যাবতীয় আমলের ফলাফল নিয়তের ওপর নির্ভরশীল। আর প্রত্যেক মানুষ কেবল তাই পাবে যা সে নিয়ত করেছে। অতএব যার হিজরত হবে দুনিয়া লাভ কিংবা কোনো নারীকে বিবাহের উদ্দেশ্যে, তার হিজরত সেই উদ্দেশ্যেই গণ্য হবে যার জন্য সে হিজরত করেছে।',
    narrator: 'হযরত উমর ইবনুল খাত্তাব (রা.)',
    reference: 'সহীহ বুখারী, হাদিস নং ১',
    grade: 'সহীহ'
  },
  {
    id: 2,
    bookId: 'bukhari',
    chapterId: 2,
    hadithNumber: 8,
    arabicText: 'بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَالحَجِّ، وَصَوْمِ رَمَضَانَ.',
    banglaTranslation: 'ইসলামের ভিত্তি পাঁচটি স্তম্ভের ওপর প্রতিষ্ঠিত: ১. এ সাক্ষ্য দেওয়া যে, আল্লাহ ছাড়া কোনো সত্য উপাস্য নেই এবং মুহাম্মদ (সা.) আল্লাহর বান্দা ও রাসুল, ২. সালাত (নামাজ) কায়েম করা, ৩. যাকাত আদায় করা, ৪. বাইতুল্লাহর হজ পালন করা এবং ৫. রমজানের সিয়াম (রোজা) পালন করা।',
    narrator: 'হযরত আবদুল্লাহ ইবনে উমর (রা.)',
    reference: 'সহীহ বুখারী, হাদিস নং ৮',
    grade: 'সহীহ'
  },
  {
    id: 3,
    bookId: 'bukhari',
    chapterId: 2,
    hadithNumber: 13,
    arabicText: 'لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ.',
    banglaTranslation: 'তোমাদের মধ্যে কেউই ততক্ষণ পর্যন্ত পূর্ণ মুমিন হতে পারবে না, যতক্ষণ না সে তার ভাইয়ের জন্য তাই পছন্দ করবে যা সে নিজের জন্য পছন্দ করে।',
    narrator: 'হযরত আনাস ইবনে মালিক (রা.)',
    reference: 'সহীহ বুখারী, হাদিস নং ১৩',
    grade: 'সহীহ'
  },
  {
    id: 4,
    bookId: 'bukhari',
    chapterId: 3,
    hadithNumber: 71,
    arabicText: 'مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ.',
    banglaTranslation: 'আল্লাহ তাআলা যাঁর কল্যাণ চান, তাঁকে দ্বীনের সঠিক জ্ঞান ও গভীর বুঝ দান করেন।',
    narrator: 'হযরত মুআবিয়া (রা.)',
    reference: 'সহীহ বুখারী, হাদিস নং ৭১',
    grade: 'সহীহ'
  },
  {
    id: 5,
    bookId: 'bukhari',
    chapterId: 3,
    hadithNumber: 68,
    arabicText: 'يَسِّرُوا وَلاَ تُعَسِّرُوا، وَبَشِّرُوا وَلاَ تُنَفِّرُوا.',
    banglaTranslation: 'তোমরা মানুষের জন্য সহজসাধ্য করো, কঠিন করো না; এবং মানুষকে সুসংবাদ দাও ও আশ্বস্ত করো, বিরূপ বা আতঙ্কিত করো না।',
    narrator: 'হযরত আনাস ইবনে মালিক (রা.)',
    reference: 'সহীহ বুখারী, হাদিস নং ৬৮',
    grade: 'সহীহ'
  },

  // Sahih Muslim Hadiths
  {
    id: 101,
    bookId: 'muslim',
    chapterId: 101,
    hadithNumber: 1,
    arabicText: 'الْإِيمَانُ أَنْ تُؤْمِنَ بِاللَّهِ، وَمَلَائِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ، وَالْيَوْمِ الْآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ.',
    banglaTranslation: 'ঈমান হলো এই যে, তুমি বিশ্বাস স্থাপন করবে আল্লাহর প্রতি, তাঁর ফেরেশতাগণের প্রতি, তাঁর অবতীর্ণ কিতাবসমূহের প্রতি, তাঁর রাসুলগণের প্রতি, পরকাল বা আখিরাত দিবসের প্রতি এবং তাকদীরের ভালো-মন্দের প্রতি।',
    narrator: 'হযরত উমর ইবনুল খাত্তাব (রা.) [হাদিসে জিবরীল]',
    reference: 'সহীহ মুসলিম, হাদিস নং ১',
    grade: 'সহীহ'
  },
  {
    id: 102,
    bookId: 'muslim',
    chapterId: 102,
    hadithNumber: 223,
    arabicText: 'الطُّهُورُ شَطْرُ الْإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلآنِ أَوْ تَمْلأُ مَا بَيْنَ السَّمَاءِ وَالأَرْضِ.',
    banglaTranslation: 'পবিত্রতা ঈমানের অর্ধেক অংশ। আর \'আলহামদুলিল্লাহ\' পাঠ মীযানের পাল্লা পূর্ণ করে দেয়। আর \'সুবহানাল্লাহ\' এবং \'আলহামদুলিল্লাহ\' আসমান ও জমিনের মধ্যবর্তী শূন্যস্থানকে সওয়াবে পরিপূর্ণ করে দেয়।',
    narrator: 'হযরত আবু মালিক আল-আশআরী (রা.)',
    reference: 'সহীহ মুসলিম, হাদিস নং ২২৩',
    grade: 'সহীহ'
  },
  {
    id: 103,
    bookId: 'muslim',
    chapterId: 101,
    hadithNumber: 55,
    arabicText: 'الدِّينُ النَّصِيحَةُ، قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ، وَلِكِتَابِهِ، وَلِرَسُولِهِ، وَلأَئِمَّةِ الْمُسْلِمِينَ، وَعَامَّتِهِمْ.',
    banglaTranslation: 'রাসূলুল্লাহ (সা.) বলেছেন, দ্বীন হলো নাসীহত বা একনিষ্ঠ কল্যাণকামিতা। আমরা বললাম, কার জন্য? তিনি বললেন, আল্লাহর জন্য, তাঁর কিতাবের জন্য, তাঁর রাসুলের জন্য, মুসলিম নেতৃবৃন্দের জন্য এবং সাধারণ মুসলিমদের জন্য।',
    narrator: 'হযরত তামীম আদ-দারী (রা.)',
    reference: 'সহীহ মুসলিম, হাদিস নং ৫৫',
    grade: 'সহীহ'
  },

  // Jami at-Tirmidhi Hadiths
  {
    id: 201,
    bookId: 'tirmidhi',
    chapterId: 201,
    hadithNumber: 1,
    arabicText: 'مِفْتَاحُ الْجَنَّةِ الصَّلاَةُ، وَمِفْتَاحُ الصَّلاَةِ الطُّهُورُ.',
    banglaTranslation: 'জান্নাতের চাবিকাঠি হলো সালাত (নামাজ), আর সালাতের চাবিকাঠি হলো তাহারাত বা পবিত্রতা।',
    narrator: 'হযরত জাবির ইবনে আবদুল্লাহ (রা.)',
    reference: 'জামে আত-তিরমিজি, হাদিস নং ১',
    grade: 'সহীহ'
  },
  {
    id: 202,
    bookId: 'tirmidhi',
    chapterId: 203,
    hadithNumber: 1956,
    arabicText: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ.',
    banglaTranslation: 'তোমার ভাইয়ের মুখের দিকে তাকিয়ে তোমার একটু মুচকি হাসি দেওয়াও তোমার জন্য একটি সদকা স্বরূপ।',
    narrator: 'হযরত আবু যার আল-গিফারী (রা.)',
    reference: 'জামে আত-তিরমিজি, হাদিস নং ১৯৫৬',
    grade: 'সহীহ'
  },
  {
    id: 203,
    bookId: 'tirmidhi',
    chapterId: 201,
    hadithNumber: 2646,
    arabicText: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ.',
    banglaTranslation: 'যে ব্যক্তি জ্ঞানার্জনের উদ্দেশ্যে কোনো পথে বের হয়, আল্লাহ তাআলা তার কারণে জান্নাতের পথ তার জন্য সুগম ও সহজ করে দেন।',
    narrator: 'হযরত আবু হুরায়রা (রা.)',
    reference: 'জামে আত-তিরমিজি, হাদিস নং ২৬৪৬',
    grade: 'সহীহ'
  },

  // Riyad as-Salihin
  {
    id: 301,
    bookId: 'riyadus_salihin',
    chapterId: 301,
    hadithNumber: 12,
    arabicText: 'إِنَّ اللَّهَ لا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ، وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ.',
    banglaTranslation: 'নিশ্চয়ই আল্লাহ তাআলা তোমাদের বাহ্যিক আকৃতি ও ধন-সম্পদের দিকে তাকান না; বরং তিনি দৃষ্টি দেন তোমাদের অন্তরের অবস্থা এবং তোমাদের কর্মের দিকে।',
    narrator: 'হযরত আবু হুরায়রা (রা.)',
    reference: 'রিয়াদুস সালেহীন, হাদিস নং ১২',
    grade: 'সহীহ'
  }
];

export const DAILY_HADITH: HadithItem = {
  id: 3,
  bookId: 'bukhari',
  chapterId: 2,
  hadithNumber: 13,
  arabicText: 'لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ.',
  banglaTranslation: 'তোমাদের মধ্যে কেউই ততক্ষণ পর্যন্ত পূর্ণ মুমিন হতে পারবে না, যতক্ষণ না সে তার ভাইয়ের জন্য তাই পছন্দ করবে যা সে নিজের জন্য পছন্দ করে।',
  narrator: 'হযরত আনাস ইবনে মালিক (রা.)',
  reference: 'সহীহ বুখারী, হাদিস নং ১৩',
  grade: 'সহীহ'
};
