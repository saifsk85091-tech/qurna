import { Surah, Ayah } from '../types/deen';

export const SURAH_LIST: Surah[] = [
  { id: 1, number: 1, arabicName: 'الفاتحة', banglaName: 'আল-ফাতিহা', englishName: 'Al-Fatiha', meaning: 'সূচনা / ভূমিকা', totalAyah: 7, revelationType: 'মাক্কী', bismillahPre: false },
  { id: 2, number: 2, arabicName: 'البقرة', banglaName: 'আল-বাকারাহ', englishName: 'Al-Baqarah', meaning: 'গাভী', totalAyah: 286, revelationType: 'মাদানী', bismillahPre: true },
  { id: 3, number: 3, arabicName: 'آل عمران', banglaName: 'আলে ইমরান', englishName: 'Ali \'Imran', meaning: 'ইমরানের পরিবার', totalAyah: 200, revelationType: 'মাদানী', bismillahPre: true },
  { id: 4, number: 4, arabicName: 'النساء', banglaName: 'আন-নিসা', englishName: 'An-Nisa', meaning: 'মহিলাগণ', totalAyah: 176, revelationType: 'মাদানী', bismillahPre: true },
  { id: 5, number: 5, arabicName: 'المائدة', banglaName: 'আল-মায়িদাহ', englishName: 'Al-Ma\'idah', meaning: 'খাদ্য পরিবেশিত টেবিল', totalAyah: 120, revelationType: 'মাদানী', bismillahPre: true },
  { id: 6, number: 6, arabicName: 'الأنعام', banglaName: 'আল-আনআম', englishName: 'Al-An\'am', meaning: 'গৃহপালিত পশু', totalAyah: 165, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 7, number: 7, arabicName: 'الأعراف', banglaName: 'আল-আরাফ', englishName: 'Al-A\'raf', meaning: 'উঁচু স্থানসমূহ', totalAyah: 206, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 8, number: 8, arabicName: 'الأنفال', banglaName: 'আল-আনফাল', englishName: 'Al-Anfal', meaning: 'যুদ্ধলব্ধ সম্পদ', totalAyah: 75, revelationType: 'মাদানী', bismillahPre: true },
  { id: 9, number: 9, arabicName: 'التوبة', banglaName: 'আত-তাওবাহ', englishName: 'At-Tawbah', meaning: 'অনুশোচনা / ক্ষমা', totalAyah: 129, revelationType: 'মাদানী', bismillahPre: false },
  { id: 10, number: 10, arabicName: 'يونس', banglaName: 'ইউনুস', englishName: 'Yunus', meaning: 'হযরত ইউনুস (আ.)', totalAyah: 109, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 11, number: 11, arabicName: 'هود', banglaName: 'হুদ', englishName: 'Hud', meaning: 'হযরত হুদ (আ.)', totalAyah: 123, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 12, number: 12, arabicName: 'يوسف', banglaName: 'ইউসুফ', englishName: 'Yusuf', meaning: 'হযরত ইউসুফ (আ.)', totalAyah: 111, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 13, number: 13, arabicName: 'الرعد', banglaName: 'আর-রাদ', englishName: 'Ar-Ra\'d', meaning: 'বজ্রপাত', totalAyah: 43, revelationType: 'মাদানী', bismillahPre: true },
  { id: 14, number: 14, arabicName: 'إبراهيم', banglaName: 'ইব্রাহিম', englishName: 'Ibrahim', meaning: 'হযরত ইব্রাহিম (আ.)', totalAyah: 52, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 15, number: 15, arabicName: 'الحجر', banglaName: 'আল-হিজর', englishName: 'Al-Hijr', meaning: 'পাথুরে পাহাড়', totalAyah: 99, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 16, number: 16, arabicName: 'النحل', banglaName: 'আন-নাহল', englishName: 'An-Nahl', meaning: 'মৌমাছি', totalAyah: 128, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 17, number: 17, arabicName: 'الإسراء', banglaName: 'বনি ইসরাইল / আল-ইসরা', englishName: 'Al-Isra', meaning: 'রাত্রিকালীন ভ্রমণ', totalAyah: 111, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 18, number: 18, arabicName: 'الكهف', banglaName: 'আল-কাহফ', englishName: 'Al-Kahf', meaning: 'গুহা', totalAyah: 110, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 19, number: 19, arabicName: 'مريم', banglaName: 'মারইয়াম', englishName: 'Maryam', meaning: 'মরিয়ম (আ.)', totalAyah: 98, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 20, number: 20, arabicName: 'طه', banglaName: 'ত্বোয়া-হা', englishName: 'Ta-Ha', meaning: 'ত্বোয়া-হা', totalAyah: 135, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 21, number: 21, arabicName: 'الأنبياء', banglaName: 'আল-আম্বিয়া', englishName: 'Al-Anbiya', meaning: 'নবীগণ', totalAyah: 112, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 22, number: 22, arabicName: 'الحج', banglaName: 'আল-হাজ্জ', englishName: 'Al-Hajj', meaning: 'হজব্রত', totalAyah: 78, revelationType: 'মাদানী', bismillahPre: true },
  { id: 23, number: 23, arabicName: 'المؤمنون', banglaName: 'আল-মুমিনুন', englishName: 'Al-Mu\'minun', meaning: 'বিশ্বাসীগণ', totalAyah: 118, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 24, number: 24, arabicName: 'النور', banglaName: 'আন-নূর', englishName: 'An-Nur', meaning: 'জ্যোতি / আলো', totalAyah: 64, revelationType: 'মাদানী', bismillahPre: true },
  { id: 25, number: 25, arabicName: 'الفرقان', banglaName: 'আল-ফুরকান', englishName: 'Al-Furqan', meaning: 'সত্য-মিথ্যার পার্থক্যকারী', totalAyah: 77, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 26, number: 26, arabicName: 'الشعراء', banglaName: 'আশ-শুয়ারা', englishName: 'Ash-Shu\'ara', meaning: 'কবিগণ', totalAyah: 227, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 27, number: 27, arabicName: 'النمل', banglaName: 'আন-নামল', englishName: 'An-Naml', meaning: 'পিপীলিকা', totalAyah: 93, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 28, number: 28, arabicName: 'القصص', banglaName: 'আল-কাসাস', englishName: 'Al-Qasas', meaning: 'কাহিনীসমূহ', totalAyah: 88, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 29, number: 29, arabicName: 'العنكبوت', banglaName: 'আল-আনকাবুত', englishName: 'Al-Ankabut', meaning: 'মাকড়শা', totalAyah: 69, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 30, number: 30, arabicName: 'الروم', banglaName: 'আর-রুম', englishName: 'Ar-Rum', meaning: 'রোমবাসী', totalAyah: 60, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 31, number: 31, arabicName: 'لقمان', banglaName: 'লোকমান', englishName: 'Luqman', meaning: 'জ্ঞানী লোকমান', totalAyah: 34, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 32, number: 32, arabicName: 'السجدة', banglaName: 'আস-সাজদাহ', englishName: 'As-Sajdah', meaning: 'সিজদা', totalAyah: 30, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 33, number: 33, arabicName: 'الأحزاب', banglaName: 'আল-আহযাব', englishName: 'Al-Ahzab', meaning: 'মিত্রবাহিনী / জোটবদ্ধ দল', totalAyah: 73, revelationType: 'মাদানী', bismillahPre: true },
  { id: 34, number: 34, arabicName: 'سبأ', banglaName: 'সাবা', englishName: 'Saba', meaning: 'সাবার অধিবাসী', totalAyah: 54, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 35, number: 35, arabicName: 'فاطر', banglaName: 'ফাতির', englishName: 'Fatir', meaning: 'সৃষ্টিকর্তা', totalAyah: 45, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 36, number: 36, arabicName: 'يس', banglaName: 'ইয়াসীন', englishName: 'Ya-Sin', meaning: 'ইয়াসীন (কুরআনের হৃৎপিণ্ড)', totalAyah: 83, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 37, number: 37, arabicName: 'الصافات', banglaName: 'আস-সাফফাত', englishName: 'As-Saffat', meaning: 'সারিবদ্ধ দল', totalAyah: 182, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 38, number: 38, arabicName: 'ص', banglaName: 'সোয়াদ', englishName: 'Sad', meaning: 'সোয়াদ', totalAyah: 88, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 39, number: 39, arabicName: 'الزمر', banglaName: 'আজ-জুমার', englishName: 'Az-Zumar', meaning: 'দলসমূহ', totalAyah: 75, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 40, number: 40, arabicName: 'غافر', banglaName: 'গাফির / আল-মুমিন', englishName: 'Ghafir', meaning: 'ক্ষমাকারী', totalAyah: 85, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 41, number: 41, arabicName: 'فصلت', banglaName: 'ফুসসিলাত', englishName: 'Fussilat', meaning: 'সুস্পষ্ট বিবরণ', totalAyah: 54, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 42, number: 42, arabicName: 'الشورى', banglaName: 'আশ-শুরা', englishName: 'Ash-Shura', meaning: 'পরামর্শ', totalAyah: 53, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 43, number: 43, arabicName: 'الزخرف', banglaName: 'আজ-জু Ruf', englishName: 'Az-Zukhruf', meaning: 'সোনার অলংকার', totalAyah: 89, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 44, number: 44, arabicName: 'الدخان', banglaName: 'আদ-দুখান', englishName: 'Ad-Dukhan', meaning: 'ধোঁয়া', totalAyah: 59, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 45, number: 45, arabicName: 'الجاثية', banglaName: 'আল-জাসিয়া', englishName: 'Al-Jathiyah', meaning: 'নতজানু', totalAyah: 37, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 46, number: 46, arabicName: 'الأحقاف', banglaName: 'আল-আহকাফ', englishName: 'Al-Ahqaf', meaning: 'বালিয়াড়ি', totalAyah: 35, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 47, number: 47, arabicName: 'محمد', banglaName: 'মুহাম্মদ', englishName: 'Muhammad', meaning: 'মুহাম্মদ (সা.)', totalAyah: 38, revelationType: 'মাদানী', bismillahPre: true },
  { id: 48, number: 48, arabicName: 'الفتح', banglaName: 'আল-ফাতহ', englishName: 'Al-Fath', meaning: 'বিজয়', totalAyah: 29, revelationType: 'মাদানী', bismillahPre: true },
  { id: 49, number: 49, arabicName: 'الحجرات', banglaName: 'আল-হুজুরাত', englishName: 'Al-Hujurat', meaning: 'বাসগৃহসমূহ / কক্ষসমূহ', totalAyah: 18, revelationType: 'মাদানী', bismillahPre: true },
  { id: 50, number: 50, arabicName: 'ق', banglaName: 'ক্বাফ', englishName: 'Qaf', meaning: 'ক্বাফ', totalAyah: 45, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 51, number: 51, arabicName: 'الذاريات', banglaName: 'আজ-যারিয়াত', englishName: 'Adh-Dhariyat', meaning: 'বিক্ষিপ্তকারী বাতাস', totalAyah: 60, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 52, number: 52, arabicName: 'الطور', banglaName: 'আত-তুর', englishName: 'At-Tur', meaning: 'তুর পাহাড়', totalAyah: 49, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 53, number: 53, arabicName: 'النجم', banglaName: 'আন-নাজম', englishName: 'An-Najm', meaning: 'নক্ষত্র', totalAyah: 62, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 54, number: 54, arabicName: 'القمر', banglaName: 'আল-কামার', englishName: 'Al-Qamar', meaning: 'চাঁদ', totalAyah: 55, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 55, number: 55, arabicName: 'الرحمن', banglaName: 'আর-রহমান', englishName: 'Ar-Rahman', meaning: 'পরম দয়ালু', totalAyah: 78, revelationType: 'মাদানী', bismillahPre: true },
  { id: 56, number: 56, arabicName: 'الواقعة', banglaName: 'আল-ওয়াকিয়া', englishName: 'Al-Waqi\'ah', meaning: 'অবশ্যম্ভাবী ঘটনা', totalAyah: 96, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 57, number: 57, arabicName: 'الحديد', banglaName: 'আল-হাদিদ', englishName: 'Al-Hadid', meaning: 'লোহা', totalAyah: 29, revelationType: 'মাদানী', bismillahPre: true },
  { id: 58, number: 58, arabicName: 'المجادلة', banglaName: 'আল-মুজাদালাহ', englishName: 'Al-Mujadila', meaning: 'বিতর্ককারিণী', totalAyah: 22, revelationType: 'মাদানী', bismillahPre: true },
  { id: 59, number: 59, arabicName: 'الحشر', banglaName: 'আল-হাশর', englishName: 'Al-Hashr', meaning: 'সমাবেশ / দেশত্যাগ', totalAyah: 24, revelationType: 'মাদানী', bismillahPre: true },
  { id: 60, number: 60, arabicName: 'الممتحنة', banglaName: 'আল-মুমতাহিনাহ', englishName: 'Al-Mumtahanah', meaning: 'পরীক্ষিতা নারী', totalAyah: 13, revelationType: 'মাদানী', bismillahPre: true },
  { id: 61, number: 61, arabicName: 'الصف', banglaName: 'আস-সাফ', englishName: 'As-Saff', meaning: 'সারিবদ্ধ সৈনিক', totalAyah: 14, revelationType: 'মাদানী', bismillahPre: true },
  { id: 62, number: 62, arabicName: 'الجمعة', banglaName: 'আল-জুমুআহ', englishName: 'Al-Jumu\'ah', meaning: 'সম্মেলন / জুমুআহ', totalAyah: 11, revelationType: 'মাদানী', bismillahPre: true },
  { id: 63, number: 63, arabicName: 'المنافقون', banglaName: 'আল-মুনাফিকুন', englishName: 'Al-Munafiqun', meaning: 'কপট বিশ্বাসীগণ', totalAyah: 11, revelationType: 'মাদানী', bismillahPre: true },
  { id: 64, number: 64, arabicName: 'التغابن', banglaName: 'আত-তাগাবুন', englishName: 'At-Taghabun', meaning: 'লাভ-ক্ষতি নির্ধারণ', totalAyah: 18, revelationType: 'মাদানী', bismillahPre: true },
  { id: 65, number: 65, arabicName: 'الطلاق', banglaName: 'আত-ত্বালাক', englishName: 'At-Talaq', meaning: 'তালাক / বিবাহ বিচ্ছেদ', totalAyah: 12, revelationType: 'মাদানী', bismillahPre: true },
  { id: 66, number: 66, arabicName: 'التحريم', banglaName: 'আত-তাহরীম', englishName: 'At-Tahrim', meaning: 'নিষিদ্ধকরণ', totalAyah: 12, revelationType: 'মাদানী', bismillahPre: true },
  { id: 67, number: 67, arabicName: 'الملك', banglaName: 'আল-মুলক', englishName: 'Al-Mulk', meaning: 'সার্বভৌম কর্তৃত্ব / রাজত্ব', totalAyah: 30, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 68, number: 68, arabicName: 'القلم', banglaName: 'আল-কলম', englishName: 'Al-Qalam', meaning: 'কলম', totalAyah: 52, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 69, number: 69, arabicName: 'الحاقة', banglaName: 'আল-হাক্কাহ', englishName: 'Al-Haqqah', meaning: 'সুনিশ্চিত সত্য', totalAyah: 52, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 70, number: 70, arabicName: 'المعارج', banglaName: 'আল-মাআরিজ', englishName: 'Al-Ma\'arij', meaning: 'উন্নয়নের সোপান', totalAyah: 44, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 71, number: 71, arabicName: 'نوح', banglaName: 'নূহ', englishName: 'Nuh', meaning: 'নূহ (আ.)', totalAyah: 28, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 72, number: 72, arabicName: 'الجن', banglaName: 'আল-জ্বিন', englishName: 'Al-Jinn', meaning: 'জ্বিন জাতি', totalAyah: 28, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 73, number: 73, arabicName: 'المزمل', banglaName: 'আল-মুযযাম্মিল', englishName: 'Al-Muzzammil', meaning: 'বস্ত্রাবৃত', totalAyah: 20, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 74, number: 74, arabicName: 'المدثر', banglaName: 'আল-মুদ্দাসসির', englishName: 'Al-Muddaththir', meaning: 'চাদরাবৃত', totalAyah: 56, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 75, number: 75, arabicName: 'القيامة', banglaName: 'আল-কিয়ামাহ', englishName: 'Al-Qiyamah', meaning: 'পুনরুত্থান দিবস', totalAyah: 40, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 76, number: 76, arabicName: 'الإنسان', banglaName: 'আল-ইনসান', englishName: 'Al-Insan', meaning: 'মানবজাতি', totalAyah: 31, revelationType: 'মাদানী', bismillahPre: true },
  { id: 77, number: 77, arabicName: 'المرسلات', banglaName: 'আল-মুরসালাত', englishName: 'Al-Mursalat', meaning: 'প্রেরিত বায়ুরাশি', totalAyah: 50, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 78, number: 78, arabicName: 'النبأ', banglaName: 'আন-নাবা', englishName: 'An-Naba', meaning: 'মহা সংবাদ', totalAyah: 40, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 79, number: 79, arabicName: 'النازعات', banglaName: 'আন-নাযিআত', englishName: 'An-Nazi\'at', meaning: 'উৎপাটনকারী ফেরেশতা', totalAyah: 46, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 80, number: 80, arabicName: 'عبس', banglaName: 'আবাসা', englishName: 'Abasa', meaning: 'তিনি ভ্রূকুটি করলেন', totalAyah: 42, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 81, number: 81, arabicName: 'التكوير', banglaName: 'আত-তাকভীর', englishName: 'At-Takwir', meaning: 'অন্ধকারাচ্ছন্ন করা', totalAyah: 29, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 82, number: 82, arabicName: 'الانفطار', banglaName: 'আল-ইনফিতার', englishName: 'Al-Infitar', meaning: 'বিদীর্ণ হওয়া', totalAyah: 19, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 83, number: 83, arabicName: 'المطففين', banglaName: 'আল-মুতাফফিফীন', englishName: 'Al-Mutaffifin', meaning: 'ওজনে কম দানকারী', totalAyah: 36, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 84, number: 84, arabicName: 'الانشقاق', banglaName: 'আল-ইনশিকাক', englishName: 'Al-Inshiqaq', meaning: 'খণ্ড-বিখণ্ড হওয়া', totalAyah: 25, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 85, number: 85, arabicName: 'البروج', banglaName: 'আল-বুরুজ', englishName: 'Al-Buruj', meaning: 'নক্ষত্রপুঞ্জ / দুর্গসমূহ', totalAyah: 22, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 86, number: 86, arabicName: 'الطارق', banglaName: 'আত-তারিক', englishName: 'At-Tariq', meaning: 'রাতের আগমনকারী', totalAyah: 17, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 87, number: 87, arabicName: 'الأعلى', banglaName: 'আল-আ\'লা', englishName: 'Al-A\'la', meaning: 'সর্বোচ্চ সত্তা', totalAyah: 19, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 88, number: 88, arabicName: 'الغاشية', banglaName: 'আল-গাশিয়াহ', englishName: 'Al-Ghashiyah', meaning: 'আচ্ছন্নকারী মহাপ্রলয়', totalAyah: 26, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 89, number: 89, arabicName: 'الفجر', banglaName: 'আল-ফাজর', englishName: 'Al-Fajr', meaning: 'ভোরবেলা / প্রভাত', totalAyah: 30, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 90, number: 90, arabicName: 'البلد', banglaName: 'আল-বালাদ', englishName: 'Al-Balad', meaning: 'নগরী (মক্কা)', totalAyah: 20, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 91, number: 91, arabicName: 'الشمس', banglaName: 'আশ-শামস', englishName: 'Ash-Shams', meaning: 'সূর্য', totalAyah: 15, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 92, number: 92, arabicName: 'الليل', banglaName: 'আল-লাইল', englishName: 'Al-Layl', meaning: 'রাত / রজনী', totalAyah: 21, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 93, number: 93, arabicName: 'الضحى', banglaName: 'আদ-দুহা', englishName: 'Ad-Duha', meaning: 'পূর্বাহ্ন / সকালের আলো', totalAyah: 11, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 94, number: 94, arabicName: 'الشرح', banglaName: 'আল-ইনশিরাহ / আশ-শারহ', englishName: 'Ash-Sharh', meaning: 'বক্ষ সম্প্রসারণ', totalAyah: 8, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 95, number: 95, arabicName: 'التين', banglaName: 'আত-তীন', englishName: 'At-Tin', meaning: 'ডুমুর / আঞ্জির', totalAyah: 8, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 96, number: 96, arabicName: 'العلق', banglaName: 'আল-আলাক', englishName: 'Al-\'Alaq', meaning: 'রক্তপিণ্ড / ভ্রূণ', totalAyah: 19, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 97, number: 97, arabicName: 'القدر', banglaName: 'আল-কদর', englishName: 'Al-Qadr', meaning: 'মহিমান্বিত রাত / মর্যাদা', totalAyah: 5, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 98, number: 98, arabicName: 'البينة', banglaName: 'আল-বাইয়্যিনাহ', englishName: 'Al-Bayyinah', meaning: 'সুস্পষ্ট প্রমাণ', totalAyah: 8, revelationType: 'মাদানী', bismillahPre: true },
  { id: 99, number: 99, arabicName: 'الزلزلة', banglaName: 'আল-যিলযাল / যালযালাহ', englishName: 'Az-Zalzalah', meaning: 'মহাকম্পন', totalAyah: 8, revelationType: 'মাদানী', bismillahPre: true },
  { id: 100, number: 100, arabicName: 'العاديات', banglaName: 'আল-আদিয়াত', englishName: 'Al-\'Adiyat', meaning: 'অভিযানকারী অশ্ব', totalAyah: 11, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 101, number: 101, arabicName: 'القارعة', banglaName: 'আল-কারিয়াহ', englishName: 'Al-Qari\'ah', meaning: 'মহা দুর্ঘটনা / করাঘাত', totalAyah: 11, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 102, number: 102, arabicName: 'التكاثر', banglaName: 'আত-তাকাসুর', englishName: 'At-Takathur', meaning: 'প্রাচুর্যের প্রতিযোগিতা', totalAyah: 8, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 103, number: 103, arabicName: 'العصر', banglaName: 'আল-আসর', englishName: 'Al-\'Asr', meaning: 'মহাকাল / সময়', totalAyah: 3, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 104, number: 104, arabicName: 'الهمزة', banglaName: 'আল-হুমাযাহ', englishName: 'Al-Humazah', meaning: 'পরনিন্দাকারী', totalAyah: 9, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 105, number: 105, arabicName: 'الفيل', banglaName: 'আল-ফীল', englishName: 'Al-Fil', meaning: 'হাতি', totalAyah: 5, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 106, number: 106, arabicName: 'قريش', banglaName: 'কুরাইশ', englishName: 'Quraysh', meaning: 'কুরাইশ গোত্র', totalAyah: 4, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 107, number: 107, arabicName: 'الماعون', banglaName: 'আল-মাউন', englishName: 'Al-Ma\'un', meaning: 'নিত্যপ্রয়োজনীয় সাহায্য', totalAyah: 7, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 108, number: 108, arabicName: 'الكوثر', banglaName: 'আল-কাউসার', englishName: 'Al-Kawthar', meaning: 'প্রচুর কল্যাণ / জান্নাতের ঝর্ণা', totalAyah: 3, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 109, number: 109, arabicName: 'الكافرون', banglaName: 'আল-কাফিরুন', englishName: 'Al-Kafirun', meaning: 'অবিশ্বাসীগণ', totalAyah: 6, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 110, number: 110, arabicName: 'النصر', banglaName: 'আন-নাসর', englishName: 'An-Nasr', meaning: 'সাহায্য ও বিজয়', totalAyah: 3, revelationType: 'মাদানী', bismillahPre: true },
  { id: 111, number: 111, arabicName: 'المسد', banglaName: 'আল-মাসাদ / লাহাব', englishName: 'Al-Masad', meaning: 'খেজুরের পাকানো রশি', totalAyah: 5, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 112, number: 112, arabicName: 'الإخلاص', banglaName: 'আল-ইখলাস', englishName: 'Al-Ikhlas', meaning: 'একনিষ্ঠতা / তাওহীদ', totalAyah: 4, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 113, number: 113, arabicName: 'الفلق', banglaName: 'আল-ফালাক', englishName: 'Al-Falaq', meaning: 'প্রভাত / ভোরের আলো', totalAyah: 5, revelationType: 'মাক্কী', bismillahPre: true },
  { id: 114, number: 114, arabicName: 'الناس', banglaName: 'আন-নাস', englishName: 'An-Nas', meaning: 'মানবজাতি', totalAyah: 6, revelationType: 'মাক্কী', bismillahPre: true }
];

// Rich Ayahs data for the most recited & popular Surahs
export const DETAILED_AYAHS: Record<number, Ayah[]> = {
  // Surah 1: Al-Fatiha
  1: [
    {
      id: 1001,
      surahId: 1,
      ayahNumber: 1,
      arabicText: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      banglaPronunciation: 'বিসমিল্লাহির রাহমানির রাহীম',
      banglaTranslation: 'শুরু করছি পরম করুণাময় অসীম দয়ালু আল্লাহর নামে।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/001001.mp3'
    },
    {
      id: 1002,
      surahId: 1,
      ayahNumber: 2,
      arabicText: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      banglaPronunciation: 'আলহামদু লিল্লাহি রাব্বিল আলামীন',
      banglaTranslation: 'যাবতীয় প্রশংসা একমাত্র আল্লাহ তাআলার জন্য, যিনি সমগ্র বিশ্বজগতের পালনকর্তা।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/001002.mp3'
    },
    {
      id: 1003,
      surahId: 1,
      ayahNumber: 3,
      arabicText: 'الرَّحْمَٰنِ الرَّحِيمِ',
      banglaPronunciation: 'আর-রাহমানির রাহীম',
      banglaTranslation: 'যিনি পরম করুণাময় ও অসীম দয়ালু।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/001003.mp3'
    },
    {
      id: 1004,
      surahId: 1,
      ayahNumber: 4,
      arabicText: 'مَالِكِ يَوْمِ الدِّينِ',
      banglaPronunciation: 'মালিকি ইয়াওমিদ্দীন',
      banglaTranslation: 'যিনি প্রতিদান ও বিচার দিবসের একমাত্র মালিক ও অধিপতি।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/001004.mp3'
    },
    {
      id: 1005,
      surahId: 1,
      ayahNumber: 5,
      arabicText: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
      banglaPronunciation: 'ইয়্যাক্বা না\'বুদু ওয়া ইয়্যাক্বা নাসতাঈন',
      banglaTranslation: 'আমরা কেবল আপনারই ইবাদত করি এবং কেবলমাত্র আপনার কাছেই সাহায্য প্রার্থনা করি।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/001005.mp3'
    },
    {
      id: 1006,
      surahId: 1,
      ayahNumber: 6,
      arabicText: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
      banglaPronunciation: 'ইহদিনাস সিরাতাল মুস্তাকীম',
      banglaTranslation: 'আমাদের সরল-সঠিক ও সত্য পথের সন্ধান দিন এবং তাতে পরিচালিত করুন।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/001006.mp3'
    },
    {
      id: 1007,
      surahId: 1,
      ayahNumber: 7,
      arabicText: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
      banglaPronunciation: 'সিরাতাল্লাযীনা আনআমতা আলাইহিম, গাইরিল মাগদূবি আলাইহিম ওয়ালাদ্দোয়াল্লীন',
      banglaTranslation: 'তাদের পথ যাদের আপনি অনুগ্রহ দান করেছেন, তাদের পথ নয় যারা আপনার ক্রোধে পতিত হয়েছে এবং যারা পথভ্রষ্ট হয়েছে।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/001007.mp3'
    }
  ],

  // Surah 112: Al-Ikhlas
  112: [
    {
      id: 112001,
      surahId: 112,
      ayahNumber: 1,
      arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
      banglaPronunciation: 'কুল হুওয়াল্লাহু আহাদ',
      banglaTranslation: 'বলুন, তিনিই আল্লাহ, একক ও অদ্বিতীয়।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/112001.mp3'
    },
    {
      id: 112002,
      surahId: 112,
      ayahNumber: 2,
      arabicText: 'اللَّهُ الصَّمَدُ',
      banglaPronunciation: 'আল্লাহুস সামাদ',
      banglaTranslation: 'আল্লাহ কারো মুখাপেক্ষী নন, সকলেই তাঁর মুখাপেক্ষী (তিনি স্বয়ংসম্পূর্ণ)।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/112002.mp3'
    },
    {
      id: 112003,
      surahId: 112,
      ayahNumber: 3,
      arabicText: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
      banglaPronunciation: 'লাম ইয়ালিদ ওয়া লাম ইউলাদ',
      banglaTranslation: 'তিনি কাউকে জন্ম দেননি এবং তাঁকেও কেউ জন্ম দেয়নি।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/112003.mp3'
    },
    {
      id: 112004,
      surahId: 112,
      ayahNumber: 4,
      arabicText: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
      banglaPronunciation: 'ওয়া লাম ইয়া কুল্লাহু কুফুওয়ান আহাদ',
      banglaTranslation: 'এবং তাঁর সমকক্ষ বা তুলনীয় কেউই নেই।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/112004.mp3'
    }
  ],

  // Surah 113: Al-Falaq
  113: [
    {
      id: 113001,
      surahId: 113,
      ayahNumber: 1,
      arabicText: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
      banglaPronunciation: 'কুল আউযু বিরাব্বিল ফালাক্ব',
      banglaTranslation: 'বলুন, আমি আশ্রয় প্রার্থনা করছি ভোরের পালনকর্তা ও সৃষ্টিকর্তার নিকট,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/113001.mp3'
    },
    {
      id: 113002,
      surahId: 113,
      ayahNumber: 2,
      arabicText: 'مِن شَرِّ مَا خَلَقَ',
      banglaPronunciation: 'মিন শাররি মা খালাক্ব',
      banglaTranslation: 'তিনি যা সৃষ্টি করেছেন তার সমস্ত অনিষ্ট ও ক্ষতি থেকে,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/113002.mp3'
    },
    {
      id: 113003,
      surahId: 113,
      ayahNumber: 3,
      arabicText: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
      banglaPronunciation: 'ওয়া মিন শাররি গাসিক্বিন ইযা ওয়াক্বাব',
      banglaTranslation: 'এবং অন্ধকার রাতের অনিষ্ট থেকে যখন তা গভীর হয়ে নেমে আসে,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/113003.mp3'
    },
    {
      id: 113004,
      surahId: 113,
      ayahNumber: 4,
      arabicText: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
      banglaPronunciation: 'ওয়া মিন শাররিন নাফ্ফাছা-তি ফিল উক্বাদ',
      banglaTranslation: 'এবং গ্রন্থিতে বা গিঁটে ফুৎকারদানকারী জাদুকরিণীদের অনিষ্ট হতে,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/113004.mp3'
    },
    {
      id: 113005,
      surahId: 113,
      ayahNumber: 5,
      arabicText: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
      banglaPronunciation: 'ওয়া মিন শাররি হাসিদিন ইযা হাসাদ',
      banglaTranslation: 'এবং হিংসুকের অনিষ্ট থেকে যখন সে হিংসা করে।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/113005.mp3'
    }
  ],

  // Surah 114: An-Nas
  114: [
    {
      id: 114001,
      surahId: 114,
      ayahNumber: 1,
      arabicText: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
      banglaPronunciation: 'কুল আউযু বিরাব্বিন নাস',
      banglaTranslation: 'বলুন, আমি আশ্রয় চাই মানবজাতির পালনকর্তার নিকট,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/114001.mp3'
    },
    {
      id: 114002,
      surahId: 114,
      ayahNumber: 2,
      arabicText: 'مَلِكِ النَّاسِ',
      banglaPronunciation: 'মালিকিন নাস',
      banglaTranslation: 'মানবজাতির প্রকৃত অধিপতি ও সম্রাটের নিকট,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/114002.mp3'
    },
    {
      id: 114003,
      surahId: 114,
      ayahNumber: 3,
      arabicText: 'إِلَٰهِ النَّاسِ',
      banglaPronunciation: 'ইলাহিন নাস',
      banglaTranslation: 'মানবজাতির একমাত্র সত্য উপাস্য ও মাবুদের নিকট,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/114003.mp3'
    },
    {
      id: 114004,
      surahId: 114,
      ayahNumber: 4,
      arabicText: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
      banglaPronunciation: 'মিন শাররিল ওয়াসওয়াসিল খান্নাস',
      banglaTranslation: 'আত্মগোপনকারী বারবার কুমন্ত্রণাদাতা শয়তানের অনিষ্ট হতে,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/114004.mp3'
    },
    {
      id: 114005,
      surahId: 114,
      ayahNumber: 5,
      arabicText: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
      banglaPronunciation: 'আল্লাযী ইউওয়াসউয়িসু ফী সুদূরিন নাস',
      banglaTranslation: 'যে মানুষের অন্তরে ও মনে কুমন্ত্রণা দিয়ে থাকে,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/114005.mp3'
    },
    {
      id: 114006,
      surahId: 114,
      ayahNumber: 6,
      arabicText: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
      banglaPronunciation: 'মিনাল জিন্নাতি ওয়ান নাস',
      banglaTranslation: 'সে জিনদের মধ্য থেকে হোক কিংবা মানুষদের মধ্য থেকে।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/114006.mp3'
    }
  ],

  // Surah 108: Al-Kawthar
  108: [
    {
      id: 108001,
      surahId: 108,
      ayahNumber: 1,
      arabicText: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
      banglaPronunciation: 'ইন্না আ\'ত্বয়না কাল কাউসার',
      banglaTranslation: 'নিশ্চয়ই আমি আপনাকে কাউসার (প্রচুর কল্যাণ ও জান্নাতের বিশেষ নহর) দান করেছি।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/108001.mp3'
    },
    {
      id: 108002,
      surahId: 108,
      ayahNumber: 2,
      arabicText: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
      banglaPronunciation: 'ফাসাল্লি লিরাব্বিকা ওয়ানহার',
      banglaTranslation: 'অতএব আপনার পালনকর্তার উদ্দেশ্যে সালাত (নামাজ) আদায় করুন এবং কুরবানী সম্পন্ন করুন।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/108002.mp3'
    },
    {
      id: 108003,
      surahId: 108,
      ayahNumber: 3,
      arabicText: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ',
      banglaPronunciation: 'ইন্না শা-নিআকা হুওয়াল আবতার',
      banglaTranslation: 'নিশ্চয়ই আপনার প্রতি বিদ্বেষ পোষণকারী ও শত্রু ব্যক্তিই নির্বংশ এবং কল্যাণহীন।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/108003.mp3'
    }
  ],

  // Surah 109: Al-Kafirun
  109: [
    {
      id: 109001,
      surahId: 109,
      ayahNumber: 1,
      arabicText: 'قُلْ يَا أَيُّهَا الْكَافِرُونَ',
      banglaPronunciation: 'কুল ইয়া আইয়্যুহাল কাফিরুন',
      banglaTranslation: 'বলুন, হে কাফেরগণ (অবিশ্বাসী সম্প্রদায়)!',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/109001.mp3'
    },
    {
      id: 109002,
      surahId: 109,
      ayahNumber: 2,
      arabicText: 'لَا أَعْبُدُ مَا تَعْبُدُونَ',
      banglaPronunciation: 'লা আ\'বুদু মা তা\'বুদুন',
      banglaTranslation: 'আমি তাদের ইবাদত করি না যাদের তোমরা পূজা বা উপাসনা কর।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/109002.mp3'
    },
    {
      id: 109003,
      surahId: 109,
      ayahNumber: 3,
      arabicText: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ',
      banglaPronunciation: 'ওয়ালা আনতুম আবিদূনা মা আ\'বুদ',
      banglaTranslation: 'এবং তোমরাও তাঁর ইবাদতকারী নও যাঁর উপাসনা আমি করি।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/109003.mp3'
    },
    {
      id: 109004,
      surahId: 109,
      ayahNumber: 4,
      arabicText: 'وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ',
      banglaPronunciation: 'ওয়ালা আনা আবিদুম মা আবাত্তুম',
      banglaTranslation: 'এবং আমি কখনও তাদের ইবাদত করব না যাদের তোমরা ইবাদত করেছ।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/109004.mp3'
    },
    {
      id: 109005,
      surahId: 109,
      ayahNumber: 5,
      arabicText: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ',
      banglaPronunciation: 'ওয়ালা আনতুম আবিদূনা মা আ\'বুদ',
      banglaTranslation: 'আর তোমরাও তাঁর উপাসক নও যাঁর উপাসনা আমি করি।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/109005.mp3'
    },
    {
      id: 109006,
      surahId: 109,
      ayahNumber: 6,
      arabicText: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ',
      banglaPronunciation: 'লাকুম দীনুকুম ওয়ালিয়া দীন',
      banglaTranslation: 'তোমাদের জন্য তোমাদের দ্বীন (ধর্ম ও কর্মফল) এবং আমার জন্য আমার দ্বীন।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/109006.mp3'
    }
  ],

  // Surah 110: An-Nasr
  110: [
    {
      id: 110001,
      surahId: 110,
      ayahNumber: 1,
      arabicText: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ',
      banglaPronunciation: 'ইযা জা-আ নাসরুল্লাহি ওয়াল ফাতহ',
      banglaTranslation: 'যখন আল্লাহর সাহায্য ও বিজয় এসে উপস্থিত হবে,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/110001.mp3'
    },
    {
      id: 110002,
      surahId: 110,
      ayahNumber: 2,
      arabicText: 'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا',
      banglaPronunciation: 'ওয়া রাআইতান নাসা ইয়াদখুলূনা ফী দীনিল্লাহি আফওয়াজা',
      banglaTranslation: 'এবং আপনি মানুষদের দলে দলে আল্লাহর দ্বীনের ভেতর প্রবেশ করতে দেখবেন,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/110002.mp3'
    },
    {
      id: 110003,
      surahId: 110,
      ayahNumber: 3,
      arabicText: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا',
      banglaPronunciation: 'ফাসাব্বিহ বিহামদি রাব্বিকা ওয়াসতাগফিরহু, ইন্নাহু কানা তাওয়াবা',
      banglaTranslation: 'তখন আপনি আপনার রবের প্রশংসাসহ পবিত্রতা ঘোষণা করুন এবং তাঁর নিকট ক্ষমা প্রার্থনা করুন; নিশ্চয়ই তিনি অতিশয় তাওবা কবুলকারী।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/110003.mp3'
    }
  ],

  // Surah 103: Al-Asr
  103: [
    {
      id: 103001,
      surahId: 103,
      ayahNumber: 1,
      arabicText: 'وَالْعَصْرِ',
      banglaPronunciation: 'ওয়াল আসর',
      banglaTranslation: 'সময়ের ও মহাকালের শপথ!',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/103001.mp3'
    },
    {
      id: 103002,
      surahId: 103,
      ayahNumber: 2,
      arabicText: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',
      banglaPronunciation: 'ইন্নাল ইনসানা লাফী খুসর',
      banglaTranslation: 'নিশ্চয়ই সমগ্র মানবজাতি ঘোর ক্ষতির মধ্যে নিমজ্জিত রয়েছে,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/103002.mp3'
    },
    {
      id: 103003,
      surahId: 103,
      ayahNumber: 3,
      arabicText: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
      banglaPronunciation: 'ইল্লাল্লাযীনা আমানূ ওয়া আমিলুস সালিহাতি ওয়া তাওয়াসাও বিল হাক্কি ওয়া তাওয়াসাও বিস সাবর',
      banglaTranslation: 'তারা ব্যতীত যারা ঈমান এনেছে, সৎকাজ করেছে এবং পরস্পরকে সত্যের উপদেশ ও ধৈর্যের উপদেশ দিয়েছে।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/103003.mp3'
    }
  ],

  // Surah 67: Al-Mulk (Selected Verses 1-5)
  67: [
    {
      id: 67001,
      surahId: 67,
      ayahNumber: 1,
      arabicText: 'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
      banglaPronunciation: 'তাবারাকাল্লাযী বিয়াদিহিল মুলকু ওয়াহুওয়া আলা কুল্লি শাইয়িন ক্বাদীর',
      banglaTranslation: 'পরম বরকতময় ও মহিমান্বিত সেই মহান সত্তা, যাঁর হাতে সমস্ত রাজত্ব ও সার্বভৌম কর্তৃত্ব; এবং তিনি সর্ববিষয়ে সর্বশক্তিমান।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/067001.mp3'
    },
    {
      id: 67002,
      surahId: 67,
      ayahNumber: 2,
      arabicText: 'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ',
      banglaPronunciation: 'আল্লাযী খালাক্বাল মাওতা ওয়াল হায়াতা লিইয়াবলুওয়াকুম আইয়্যুকুম আহসানু আমালা, ওয়াহুওয়াল আযীযুল গাফুর',
      banglaTranslation: 'যিনি সৃষ্টি করেছেন মৃত্যু ও জীবন, তোমাদের পরীক্ষা করার জন্য যে কে কর্মে তোমাদের মধ্যে সর্বোত্তম? আর তিনি পরাক্রমশালী, অত্যন্ত ক্ষমাশীল।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/067002.mp3'
    },
    {
      id: 67003,
      surahId: 67,
      ayahNumber: 3,
      arabicText: 'الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ ۖ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ',
      banglaPronunciation: 'আল্লাযী খালাক্বা সাব\'আ সামাওয়া-তিন তিবা-ক্বা, মা তারা ফী খালক্বির রাহমা-নি মিন তাফাউত, ফারজিইল বাসারা হাল তারা মিন ফুতূর',
      banglaTranslation: 'যিনি সপ্ত আকাশকে স্তরে স্তরে সৃষ্টি করেছেন। পরম দয়াময়ের সৃষ্টিতে তুমি কোন ত্রুটি বা অসামঞ্জস্য দেখতে পাবে না। দৃষ্টি ফিরিয়ে দেখ, কোন ফাটল দেখতে পাও কি?',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/067003.mp3'
    },
    {
      id: 67004,
      surahId: 67,
      ayahNumber: 4,
      arabicText: 'ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا وَهُوَ حَسِيرٌ',
      banglaPronunciation: 'সুম্মারজিইল বাসারা কাররাতাইনি ইয়ানকালিব ইলাইকাল বাসারু খাসিআওঁ ওয়াহুওয়া হাসীর',
      banglaTranslation: 'অতঃপর তুমি বারবার দৃষ্টি নিবদ্ধ কর, তোমার দৃষ্টি ব্যর্থ ও ক্লান্ত-শ্রান্ত হয়ে তোমারই কাছে ফিরে আসবে।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/067004.mp3'
    },
    {
      id: 67005,
      surahId: 67,
      ayahNumber: 5,
      arabicText: 'وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ ۖ وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ',
      banglaPronunciation: 'ওয়া লাক্বাদ যাইয়্যান্নাস সামা-আদ দুনইয়া বিমাসা-বীহা ওয়া জা\'আলনাহা রুজূমাল লিশ-শাইয়াতীন, ওয়া আ\'তাদনা লাহুম আযাবাস সাঈর',
      banglaTranslation: 'আমি নিকটবর্তী আকাশকে সুশোভিত করেছি আলোকমালা দ্বারা এবং সেগুলোকে করেছি শয়তানদের প্রতি নিক্ষেপের অস্ত্রস্বরূপ; আর তাদের জন্য প্রস্তুত রেখেছি জ্বলন্ত অগ্নির শাস্তি।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/067005.mp3'
    }
  ],

  // Surah 36: Ya-Sin (Selected Verses 1-6)
  36: [
    {
      id: 36001,
      surahId: 36,
      ayahNumber: 1,
      arabicText: 'يس',
      banglaPronunciation: 'ইয়া-সীন',
      banglaTranslation: 'ইয়া-সীন। (এর প্রকৃত অর্থ আল্লাহ তাআলাই সম্যক অবগত)।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/036001.mp3'
    },
    {
      id: 36002,
      surahId: 36,
      ayahNumber: 2,
      arabicText: 'وَالْقُرْآنِ الْحَكِيمِ',
      banglaPronunciation: 'ওয়াল কুরআনিল হাকীম',
      banglaTranslation: 'প্রজ্ঞাময় ও বিজ্ঞানময় কুরআনের শপথ!',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/036002.mp3'
    },
    {
      id: 36003,
      surahId: 36,
      ayahNumber: 3,
      arabicText: 'إِنَّكَ لَمِنَ الْمُرْسَلِينَ',
      banglaPronunciation: 'ইন্নাকা লামিনাল মুরসালীন',
      banglaTranslation: 'নিশ্চয়ই আপনি প্রেরিত রাসুলদের একজন।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/036003.mp3'
    },
    {
      id: 36004,
      surahId: 36,
      ayahNumber: 4,
      arabicText: 'عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ',
      banglaPronunciation: 'আলা সিরাতিম মুস্তাকীম',
      banglaTranslation: 'সরল-সঠিক ও সত্য পথের ওপর প্রতিষ্ঠিত।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/036004.mp3'
    },
    {
      id: 36005,
      surahId: 36,
      ayahNumber: 5,
      arabicText: 'تَنزِيلَ الْعَزِيزِ الرَّحِيمِ',
      banglaPronunciation: 'তানযীলাল আযীযির রাহীম',
      banglaTranslation: 'কুরআন মহাপরাক্রমশালী পরম দয়ালু আল্লাহর পক্ষ হতে অবতীর্ণ।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/036005.mp3'
    },
    {
      id: 36006,
      surahId: 36,
      ayahNumber: 6,
      arabicText: 'لِتُنذِرَ قَوْمًا مَّا أُنذِرَ آبَاؤُهُمْ فَهُمْ غَافِلُونَ',
      banglaPronunciation: 'লিতুনযিরা ক্বাওমাম মা উনযিরা আবা-উহুম ফাহুম গাফিলূন',
      banglaTranslation: 'যাতে আপনি এমন এক জাতিকে সতর্ক করতে পারেন, যাদের পূর্বপুরুষদের সতর্ক করা হয়নি; ফলে তারা উদাসীন ও গাফিল ছিল।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/036006.mp3'
    }
  ],

  // Surah 55: Ar-Rahman (Selected Verses 1-8)
  55: [
    {
      id: 55001,
      surahId: 55,
      ayahNumber: 1,
      arabicText: 'الرَّحْمَٰنُ',
      banglaPronunciation: 'আর-রাহমান',
      banglaTranslation: 'পরম করুণাময় ও দয়ালু আল্লাহ,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/055001.mp3'
    },
    {
      id: 55002,
      surahId: 55,
      ayahNumber: 2,
      arabicText: 'عَلَّمَ الْقُرْآنَ',
      banglaPronunciation: 'আল্লামাল কুরআন',
      banglaTranslation: 'যিনি শিক্ষা দিয়েছেন এই মহাগ্রন্থ কুরআন,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/055002.mp3'
    },
    {
      id: 55003,
      surahId: 55,
      ayahNumber: 3,
      arabicText: 'خَلَقَ الْإِنسَانَ',
      banglaPronunciation: 'খালাকাল ইনসান',
      banglaTranslation: 'তিনিই সৃষ্টি করেছেন মানবজাতিকে,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/055003.mp3'
    },
    {
      id: 55004,
      surahId: 55,
      ayahNumber: 4,
      arabicText: 'عَلَّمَهُ الْبَيَانَ',
      banglaPronunciation: 'আল্লামাহুল বায়ান',
      banglaTranslation: 'এবং তাকে ভাব প্রকাশ ও বাকশক্তি শিক্ষা দিয়েছেন।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/055004.mp3'
    },
    {
      id: 55005,
      surahId: 55,
      ayahNumber: 5,
      arabicText: 'الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ',
      banglaPronunciation: 'আশ-শামসু ওয়াল ক্বামারু বিহিসবান',
      banglaTranslation: 'সূর্য ও চন্দ্র সুনির্দিষ্ট নিখুঁত হিসাবের আবর্তনে চলছে।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/055005.mp3'
    },
    {
      id: 55006,
      surahId: 55,
      ayahNumber: 6,
      arabicText: 'وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ',
      banglaPronunciation: 'ওয়ান নাজমু wash-শাজারু ইয়াসজুদান',
      banglaTranslation: 'এবং তৃণলতা ও বৃক্ষরাজি তাঁর প্রতি অবনত হয়ে সাজদাহ করছে।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/055006.mp3'
    },
    {
      id: 55007,
      surahId: 55,
      ayahNumber: 7,
      arabicText: 'وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ',
      banglaPronunciation: 'ওয়াস সামা-আ রাফা\'আহা ওয়া ওয়াদা\'আল মীযান',
      banglaTranslation: 'তিনি আকাশকে সমুন্নত করেছেন এবং সুবিচারের ভারসাম্য বা মানদণ্ড স্থাপন করেছেন,',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/055007.mp3'
    },
    {
      id: 55008,
      surahId: 55,
      ayahNumber: 8,
      arabicText: 'أَلَّا تَطْغَوْا فِي الْمِيزَانِ',
      banglaPronunciation: 'আল্লাহ তাতগাও ফিল মীযান',
      banglaTranslation: 'যাতে তোমরা পরিমাপে ও ওজনে সীমা লঙ্ঘন না কর।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/055008.mp3'
    }
  ],

  // Surah 2: Ayat al-Kursi (Ayah 255) & opening
  2: [
    {
      id: 2001,
      surahId: 2,
      ayahNumber: 1,
      arabicText: 'الم',
      banglaPronunciation: 'আলিফ-লাম-মীম',
      banglaTranslation: 'আলিফ-লাম-মীম। (আল্লাহই এর প্রকৃত মর্ম জানেন)।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002001.mp3'
    },
    {
      id: 2002,
      surahId: 2,
      ayahNumber: 2,
      arabicText: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ',
      banglaPronunciation: 'যালিকাল কিতাবু লা রাইবা ফীহ, হুদাল লিল মুত্তাকীন',
      banglaTranslation: 'এ সেই কিতাব, যাতে কোনো সন্দেহ নেই; আল্লাহভীরু মুত্তাকীদের জন্য এটি সুপথ ও হেদায়েত।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002002.mp3'
    },
    {
      id: 2003,
      surahId: 2,
      ayahNumber: 3,
      arabicText: 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ',
      banglaPronunciation: 'আল্লাযীনা ইউ\'মিনূনা বিল গাইবি ওয়া ইউক্বীমূনাস সালাতা ওয়া মিম্মা রাযাক্বনাহুম ইয়ুনফিকূন',
      banglaTranslation: 'যারা অদৃশ্যে বিশ্বাস স্থাপন করে, সালাত কায়েম করে এবং আমি তাদের যে রিজিক দান করেছি তা থেকে ব্যয় করে।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002003.mp3'
    },
    {
      id: 2255,
      surahId: 2,
      ayahNumber: 255,
      arabicText: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
      banglaPronunciation: 'আল্লাহু লা ইলাহা ইল্লা হুওয়াল হাইয়্যুল ক্বাইয়্যূম, লা তা\'খুযুহু সিনাতুঁও ওয়ালা নাওম...',
      banglaTranslation: 'আল্লাহ, যিনি ব্যতীত অন্য কোন উপাস্য নেই; তিনি চিরঞ্জীব, সবকিছুর ধারক। তাঁকে তন্দ্রা বা নিদ্রা স্পর্শ করতে পারে না। আকাশমণ্ডলী ও পৃথিবীতে যা কিছু আছে সবই তাঁর। কে আছে যে তাঁর অনুমতি ব্যতীত তাঁর নিকট সুপারিশ করতে পারে? তাদের সম্মুখে ও পশ্চাতে যা কিছু আছে তিনি সব জানেন। তাঁর ইচ্ছানুযায়ী যতটুকু তিনি ইচ্ছা করেন তা ব্যতীত তাঁর জ্ঞানের কিছুই তারা পরিবেষ্টন করতে পারে না। তাঁর আসন (কুরসী) আকাশমণ্ডলী ও পৃথিবীকে পরিব্যাপ্ত করে আছে এবং এদের রক্ষণাবেক্ষণ তাঁকে আদৌ ক্লান্ত করে না। আর তিনিই সর্বোচ্চ ও সুমহান।',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002255.mp3'
    }
  ]
};

// Helper function to get or generate ayahs for any Surah
export function getSurahAyahs(surahNumber: number): Ayah[] {
  if (DETAILED_AYAHS[surahNumber] && DETAILED_AYAHS[surahNumber].length > 0) {
    return DETAILED_AYAHS[surahNumber];
  }

  const surah = SURAH_LIST.find(s => s.number === surahNumber);
  if (!surah) return [];

  // Generate formatted placeholder ayahs with proper Quran audio links
  const generated: Ayah[] = [];
  const padSurah = surahNumber.toString().padStart(3, '0');

  for (let i = 1; i <= Math.min(surah.totalAyah, 10); i++) {
    const padAyah = i.toString().padStart(3, '0');
    generated.push({
      id: surahNumber * 1000 + i,
      surahId: surahNumber,
      ayahNumber: i,
      arabicText: i === 1 
        ? `${surah.bismillahPre ? 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ - ' : ''}تِلْكَ آيَاتُ الْكِتَابِ الْحَكِيمِ`
        : `وَإِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ ﴿${i}﴾`,
      banglaPronunciation: `সূরা ${surah.banglaName} - আয়াত নং ${i}`,
      banglaTranslation: `সূরা ${surah.banglaName} এর ${i} নম্বর আয়াতের অর্থ ও তাফসীর। নিশ্চয়ই আল্লাহ তাআলা সর্বজ্ঞ এবং সর্বশক্তিমান।`,
      audioUrl: `https://everyayah.com/data/Alafasy_128kbps/${padSurah}${padAyah}.mp3`
    });
  }

  return generated;
}

export const DAILY_AYAH: Ayah & { surahName: string; surahNumber: number } = {
  id: 2002,
  surahId: 2,
  surahNumber: 2,
  surahName: 'আল-বাকারাহ',
  ayahNumber: 286,
  arabicText: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ',
  banglaPronunciation: 'লা ইউকাল্লিফুল্লাহু নাফসান ইল্লা উস\'আহা...',
  banglaTranslation: 'আল্লাহ কাউকে তার সাধ্যাতীত কোনো কাজের দায়িত্ব দেন না। যে ভালো কাজ করেছে সে তার পুরস্কার পাবে এবং যে মন্দ কাজ করেছে সে তার শাস্তি ভোগ করবে।',
  audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002286.mp3'
};
