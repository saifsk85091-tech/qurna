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
    id: 'musnad_ahmad',
    name: 'مسند أحمد',
    banglaName: 'মুসনাদে আহমাদ',
    englishName: 'Musnad Ahmad',
    author: 'ইমাম আহমদ ইবনে হাম্বল (রহ.)',
    totalHadith: 27647,
    chaptersCount: 85,
    color: 'emerald',
    description: 'হাদিসের অন্যতম বিশালাকার বিশ্বকোষ সংকলন, যা সাহাবীদের বর্ণনাক্রম অনুযায়ী সাজানো।'
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
    { id: 105, bookId: 'muslim', chapterNumber: 5, banglaName: 'যাকাত ও সাদাকাহ', arabicName: 'كتاب الزكاة', hadithCount: 220 },
    { id: 106, bookId: 'muslim', chapterNumber: 6, banglaName: 'সিয়াম / রোজা', arabicName: 'كتاب الصيام', hadithCount: 215 }
  ],
  abudawood: [
    { id: 401, bookId: 'abudawood', chapterNumber: 1, banglaName: 'পবিত্রতা ও তাহারাত পর্ব', arabicName: 'كتاب الطهارة', hadithCount: 390 },
    { id: 402, bookId: 'abudawood', chapterNumber: 2, banglaName: 'সালাত / নামাজ অধ্যায়', arabicName: 'كتاب الصلاة', hadithCount: 1160 },
    { id: 403, bookId: 'abudawood', chapterNumber: 3, banglaName: 'যাকাত পর্ব', arabicName: 'كتاب الزكاة', hadithCount: 210 },
    { id: 404, bookId: 'abudawood', chapterNumber: 4, banglaName: 'সিয়াম / রোজা', arabicName: 'كتاب الصوم', hadithCount: 154 }
  ],
  tirmidhi: [
    { id: 201, bookId: 'tirmidhi', chapterNumber: 1, banglaName: 'পবিত্রতা অধ্যায়', arabicName: 'أبواب الطهارة', hadithCount: 148 },
    { id: 202, bookId: 'tirmidhi', chapterNumber: 2, banglaName: 'সালাত পর্ব', arabicName: 'أبواب الصلاة', hadithCount: 250 },
    { id: 203, bookId: 'tirmidhi', chapterNumber: 3, banglaName: 'সদকা ও দান', arabicName: 'أبواب الزكاة', hadithCount: 95 },
    { id: 204, bookId: 'tirmidhi', chapterNumber: 4, banglaName: 'সিয়াম / রোজা', arabicName: 'أبواب الصوم', hadithCount: 110 },
    { id: 205, bookId: 'tirmidhi', chapterNumber: 5, banglaName: 'সুনান ও উত্তম চরিত্র (আখলাক)', arabicName: 'أبواب البر والصلة', hadithCount: 120 }
  ],
  nasai: [
    { id: 501, bookId: 'nasai', chapterNumber: 1, banglaName: 'পবিত্রতা ও তাহারাত পর্ব', arabicName: 'كتاب الطهارة', hadithCount: 325 },
    { id: 502, bookId: 'nasai', chapterNumber: 2, banglaName: 'পানি ব্যবহারের নিয়ম', arabicName: 'كتاب المياه', hadithCount: 50 },
    { id: 503, bookId: 'nasai', chapterNumber: 3, banglaName: 'সালাতের সময়সূচি', arabicName: 'كتاب المواقيت', hadithCount: 110 },
    { id: 504, bookId: 'nasai', chapterNumber: 4, banglaName: 'আজান ও ইকামত', arabicName: 'كتاب الأذان', hadithCount: 75 }
  ],
  ibnmajah: [
    { id: 601, bookId: 'ibnmajah', chapterNumber: 1, banglaName: 'সুন্নাহর অনুসরণ পর্ব', arabicName: 'كتاب المقدمة', hadithCount: 266 },
    { id: 602, bookId: 'ibnmajah', chapterNumber: 2, banglaName: 'তাহারাত ও ওযু', arabicName: 'كتاب الطهارة وسننها', hadithCount: 395 },
    { id: 603, bookId: 'ibnmajah', chapterNumber: 3, banglaName: 'সালাত ও জামায়াত', arabicName: 'كتاب إقامة الصلاة والسنة فيها', hadithCount: 740 }
  ],
  muwatta: [
    { id: 701, bookId: 'muwatta', chapterNumber: 1, banglaName: 'সালাতের সময়সমূহ', arabicName: 'وقوت الصلاة', hadithCount: 31 },
    { id: 702, bookId: 'muwatta', chapterNumber: 2, banglaName: 'পবিত্রতা অর্জন', arabicName: 'الطهارة', hadithCount: 115 },
    { id: 703, bookId: 'muwatta', chapterNumber: 3, banglaName: 'রমজানের সিয়াম', arabicName: 'الصيام', hadithCount: 60 }
  ],
  musnad_ahmad: [
    { id: 801, bookId: 'musnad_ahmad', chapterNumber: 1, banglaName: 'খুলাফায়ে রাশেদীনের হাদিস', arabicName: 'مسند الخلفاء الراشدين', hadithCount: 580 },
    { id: 802, bookId: 'musnad_ahmad', chapterNumber: 2, banglaName: 'আশারায়ে মুবাশশারার হাদিস', arabicName: 'مسند العشرة المبشرين بالجنة', hadithCount: 420 },
    { id: 803, bookId: 'musnad_ahmad', chapterNumber: 3, banglaName: 'আবদুল্লাহ ইবনে মাসউদের মুসনাদ', arabicName: 'مسند عبد الله بن مسعود', hadithCount: 950 }
  ]
};

export const HADITH_LIST: HadithItem[] = [
  // 1. Sahih Bukhari Hadiths
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

  // 2. Sahih Muslim Hadiths
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

  // 3. Sunan Abu Dawood
  {
    id: 401,
    bookId: 'abudawood',
    chapterId: 401,
    hadithNumber: 84,
    arabicText: 'لاَ تُقْبَلُ صَلاَةُ مَنْ أَحْدَثَ حَتَّى يَتَوَضَّأَ.',
    banglaTranslation: 'যে ব্যক্তির অজু ভঙ্গ হয়েছে, পুনরায় অজু না করা পর্যন্ত তার কোনো সালাত কবুল করা হয় না।',
    narrator: 'হযরত আবু হুরায়রা (রা.)',
    reference: 'সুনান আবু দাউদ, হাদিস নং ৮৪',
    grade: 'সহীহ'
  },
  {
    id: 402,
    bookId: 'abudawood',
    chapterId: 402,
    hadithNumber: 495,
    arabicText: 'مُرُوا أَوْلاَدَكُمْ بِالصَّلاَةِ وَهُمْ أَبْنَاءُ سَبْعِ سِنِينَ، وَاضْرِبُوهُمْ عَلَيْهَا وَهُمْ أَبْنَاءُ عَشْرٍ، وَفَرِّقُوا بَيْنَهُمْ فِي الْمَضَاجِعِ.',
    banglaTranslation: 'তোমাদের সন্তানদের বয়স সাত বছর হলে তাদের সালাত (নামাজ) আদায়ের নির্দেশ দাও এবং দশ বছর বয়সে (নামাজ না পড়লে) শাসন করো, আর তাদের শোবার বিছানা পৃথক করে দাও।',
    narrator: 'হযরত আমর ইবনে শুআইব তাঁর পিতা হতে এবং তিনি তাঁর দাদা (রা.) থেকে',
    reference: 'সুনান আবু দাউদ, হাদিস নং ৪৯৫',
    grade: 'সহীহ'
  },

  // 4. Jami at-Tirmidhi Hadiths
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

  // 5. Sunan an-Nasa'i
  {
    id: 501,
    bookId: 'nasai',
    chapterId: 501,
    hadithNumber: 1,
    arabicText: 'إِذَا اسْتَيْقَظَ أَحَدُكُمْ مِنْ نَوْمِهِ فَلا يَغْمِسْ يَدَهُ فِي الإِنَاءِ حَتَّى يَغْسِلَهَا ثَلاثًا، فَإِنَّهُ لا يَدْرِي أَيْنَ بَاتَتْ يَدُهُ.',
    banglaTranslation: 'তোমাদের কেউ যখন ঘুম থেকে জাগে, তখন সে যেন তিনবার হাত ধৌত করার পূর্বে পাত্রের পানিতে হাত না ডুবায়। কারণ সে জানে না রাতের বেলা তার হাত কোথায় ছিল।',
    narrator: 'হযরত আবু হুরায়রা (রা.)',
    reference: 'সুনান আন-নাসায়ী, হাদিস নং ১',
    grade: 'সহীহ'
  },

  // 6. Sunan Ibn Majah
  {
    id: 601,
    bookId: 'ibnmajah',
    chapterId: 601,
    hadithNumber: 224,
    arabicText: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ.',
    banglaTranslation: 'দ্বীনি জ্ঞান অন্বেষণ করা প্রত্যেক মুসলমানের ওপর একান্ত ফরজ (আবশ্যকীয় কর্তব্য)।',
    narrator: 'হযরত আনাস ইবনে মালিক (রা.)',
    reference: 'সুনান ইবনে মাজাহ, হাদিস নং ২২৪',
    grade: 'সহীহ'
  },

  // 7. Muwatta Malik
  {
    id: 701,
    bookId: 'muwatta',
    chapterId: 701,
    hadithNumber: 1614,
    arabicText: 'تَرَكْتُ فِيكُمْ أَمْرَيْنِ لَنْ تَضِلُّوا مَا تَمَسَّكْتُمْ بِهِمَا: كِتَابَ اللَّهِ وَسُنَّةَ نَبِيِّهِ.',
    banglaTranslation: 'আমি তোমাদের মাঝে দুটি বিষয় রেখে যাচ্ছি; যতক্ষণ তোমরা তা শক্তভাবে ধারণ করে থাকবে, ততক্ষণ কখনোই পথভ্রষ্ট হবে না: আল্লাহর কিতাব (আল-কুরআন) এবং তাঁর নবীর সুন্নাহ (হাদিস)।',
    narrator: 'হযরত মালিক ইবনে আনাস (মুরসাল)',
    reference: 'মুয়াত্তা মালিক, হাদিস নং ১৬১৪',
    grade: 'সহীহ'
  },

  // 8. Musnad Ahmad
  {
    id: 801,
    bookId: 'musnad_ahmad',
    chapterId: 801,
    hadithNumber: 4,
    arabicText: 'إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ، وَإِنَّ الرَّجُلَ لَيَصْدُقُ حَتَّى يُكْتَبَ عِنْدَ اللَّهِ صِدِّيقًا.',
    banglaTranslation: 'নিশ্চয়ই সততা মানুষকে পুণ্যের দিকে পরিচালিত করে, আর পুণ্য মানুষকে জান্নাতের দিকে নিয়ে যায়। একজন ব্যক্তি সত্য বলতে বলতে অবশেষে আল্লাহর দরবারে পরম সত্যবাদী (সিদ্দীক) হিসেবে লিপিবদ্ধ হন।',
    narrator: 'হযরত আবদুল্লাহ ইবনে মাসউদ (রা.)',
    reference: 'মুসনাদে আহমাদ, হাদিস নং ৪',
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
