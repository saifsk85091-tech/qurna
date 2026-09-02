package com.deenlibrary.app.data

import com.deenlibrary.app.data.model.Hadith
import com.deenlibrary.app.data.model.HadithBook

object HadithRepository {

    val books: List<HadithBook> = listOf(
        HadithBook(1, "সহীহ বুখারী", "صحيح البخاري", "Sahih al-Bukhari", 7563, "ইমাম মুহাম্মদ ইবনে ইসমাইল আল-বুখারী (রহ.)", "সবচেয়ে বিশুদ্ধ হাদীস সংকলন", 0xFF0D5C3A),
        HadithBook(2, "সহীহ মুসলিম", "صحيح مسلم", "Sahih Muslim", 7453, "ইমাম মুসলিম ইবনুল হাজ্জাজ (রহ.)", "দ্বিতীয় সর্বাধিক বিশুদ্ধ প্রামাণ্য হাদীস গ্রন্থ", 0xFF0F766E),
        HadithBook(3, "সুনানে আবু দাউদ", "سنن أبي داود", "Sunan Abi Dawud", 5274, "ইমাম আবু দাউদ সুলাইমান আস-সিজিস্তানী (রহ.)", "আহকাম ও ফিকহি বিধান সম্পর্কিত হাদীসের প্রধান উৎস", 0xFF1E3A8A),
        HadithBook(4, "জামে আত-তিরমিযী", "جامع الترمذي", "Jami` at-Tirmidhi", 3956, "ইমাম আবু ঈসা মুহাম্মদ আত-তিরমিযী (রহ.)", "ফিকহ ও হাদিসের মান বর্ণনাসমৃদ্ধ সুনান", 0xFF7C2D12),
        HadithBook(5, "সুনানে নাসায়ী", "سنن النسائي", "Sunan an-Nasa'i", 5758, "ইমাম আহমাদ ইবনে শুআইব আন-নাসায়ী (রহ.)", "শুদ্ধ বর্ণনার কঠোর মাপকাঠিতে রচিত সুনান", 0xFF4C1D95),
        HadithBook(6, "সুনানে ইবনে মাজাহ", "سنن ابن ماجه", "Sunan Ibn Majah", 4341, "ইমাম ইবনে মাজাহ আল-কাযভিনী (রহ.)", "সিহাহ সিত্তাহ-র অনন্য হাদিস সংকলন", 0xFF831843)
    )

    fun getBookById(id: Int): HadithBook? {
        return books.find { it.id == id }
    }

    fun getHadithsForBook(bookId: Int): List<Hadith> {
        val book = getBookById(bookId) ?: return emptyList()

        return when (bookId) {
            1 -> listOf(
                Hadith(
                    id = 1,
                    bookId = 1,
                    bookName = "সহীহ বুখারী",
                    hadithNumber = 1,
                    chapterName = "ওহীর সূচনা অধ্যায়",
                    arabicText = "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
                    banglaTranslation = "নিশ্চয়ই সমস্ত কাজের ফলাফল নিয়তের ওপর নির্ভরশীল। আর প্রত্যেক ব্যক্তি যা নিয়ত করবে কেবল তাই সে লাভ করবে।",
                    narrator = "হযরত উমর ইবনুল খাত্তাব (রা.) বর্ণিত",
                    grade = "সহীহ (সর্বসম্মত)",
                    reference = "সহীহ বুখারী, হাদিস নং ১ (কিতাবুল ওহী)"
                ),
                Hadith(
                    id = 2,
                    bookId = 1,
                    bookName = "সহীহ বুখারী",
                    hadithNumber = 13,
                    chapterName = "ঈমান অধ্যায়",
                    arabicText = "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
                    banglaTranslation = "তোমাদের মধ্যে কেউ প্রকৃত মুমিন হতে পারবে না, যতক্ষণ না সে তার মুসলিম ভাইয়ের জন্য তাই পছন্দ করবে যা সে নিজের জন্য পছন্দ করে।",
                    narrator = "হযরত আনাস (রা.) বর্ণিত",
                    grade = "সহীহ",
                    reference = "সহীহ বুখারী, হাদিস নং ১৩ (কিতাবুল ঈমান)"
                ),
                Hadith(
                    id = 3,
                    bookId = 1,
                    bookName = "সহীহ বুখারী",
                    hadithNumber = 5027,
                    chapterName = "কুরআনের মর্যাদা অধ্যায়",
                    arabicText = "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
                    banglaTranslation = "তোমাদের মধ্যে সর্বোত্তম ঐ ব্যক্তি, যে নিজে কুরআন শিক্ষা করে এবং অন্যকে তা শিক্ষা দেয়।",
                    narrator = "হযরত উসমান ইবনে আফফান (রা.) বর্ণিত",
                    grade = "সহীহ",
                    reference = "সহীহ বুখারী, হাদিস নং ৫০২৭"
                ),
                Hadith(
                    id = 4,
                    bookId = 1,
                    bookName = "সহীহ বুখারী",
                    hadithNumber = 6011,
                    chapterName = "সদাচার ও শিষ্টাচার অধ্যায়",
                    arabicText = "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
                    banglaTranslation = "প্রকৃত মুসলিম সেই ব্যক্তি, যার জিহ্বা ও হাতের অনিষ্ট থেকে অপর মুসলিম নিরাপদ থাকে।",
                    narrator = "হযরত আব্দুল্লাহ ইবনে আমর (রা.) বর্ণিত",
                    grade = "সহীহ",
                    reference = "সহীহ বুখারী, হাদিস নং ১০/৬০১১"
                )
            )
            2 -> listOf(
                Hadith(
                    id = 5,
                    bookId = 2,
                    bookName = "সহীহ মুসলিম",
                    hadithNumber = 1,
                    chapterName = "ঈমান ও ইসলাম অধ্যায়",
                    arabicText = "الإِسْلاَمُ أَنْ تَشْهَدَ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَتُقِيمَ الصَّلاَةَ وَتُؤْتِيَ الزَّكَاةَ",
                    banglaTranslation = "ইসলাম হলো— তুমি সাক্ষ্য দেবে যে আল্লাহ ব্যতীত সত্য কোনো উপাস্য নেই এবং মুহাম্মদ (সা.) আল্লাহর রাসূল, নামাজ কায়েম করবে, যাকাত প্রদান করবে...",
                    narrator = "হযরত উমর ইবনুল খাত্তাব (রা.) বর্ণিত (হাদীসে জিবরীল)",
                    grade = "সহীহ",
                    reference = "সহীহ মুসলিম, হাদিস নং ১"
                ),
                Hadith(
                    id = 6,
                    bookId = 2,
                    bookName = "সহীহ মুসলিম",
                    hadithNumber = 223,
                    chapterName = "পবিত্রতা অধ্যায়",
                    arabicText = "الطُّهُورُ شَطْرُ الإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ",
                    banglaTranslation = "পবিত্রতা ঈমানের অর্ধেক। আর 'আলহামদুলিল্লাহ' মিযানের পাল্লাকে নেকী দ্বারা পরিপূর্ণ করে দেয়।",
                    narrator = "হযরত আবু মালিক আল-আশয়ারী (রা.) বর্ণিত",
                    grade = "সহীহ",
                    reference = "সহীহ মুসলিম, হাদিস নং ২২৩"
                ),
                Hadith(
                    id = 7,
                    bookId = 2,
                    bookName = "সহীহ মুসলিম",
                    hadithNumber = 2699,
                    chapterName = "যিকির ও দোয়া অধ্যায়",
                    arabicText = "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
                    banglaTranslation = "যে ব্যক্তি জ্ঞান অর্জনের উদ্দেশ্যে কোনো পথ অবলম্বন করে, আল্লাহ তার জন্য জান্নাতের পথ সহজ করে দেন।",
                    narrator = "হযরত আবু হুরায়রা (রা.) বর্ণিত",
                    grade = "সহীহ",
                    reference = "সহীহ মুসলিম, হাদিস নং ২৬৯৯"
                )
            )
            3 -> listOf(
                Hadith(
                    id = 8,
                    bookId = 3,
                    bookName = "সুনানে আবু দাউদ",
                    hadithNumber = 4941,
                    chapterName = "শিষ্টাচার অধ্যায়",
                    arabicText = "لاَ يَشْكُرُ اللَّهَ مَنْ لاَ يَشْكُرُ النَّاسَ",
                    banglaTranslation = "যে ব্যক্তি মানুষের প্রতি কৃতজ্ঞতা প্রকাশ করে না, সে আল্লাহর প্রতিও কৃতজ্ঞতা আদায় করতে পারে না।",
                    narrator = "হযরত আবু হুরায়রা (রা.) বর্ণিত",
                    grade = "সহীহ",
                    reference = "সুনানে আবু দাউদ, হাদিস নং ৪৯৪১"
                )
            )
            4 -> listOf(
                Hadith(
                    id = 9,
                    bookId = 4,
                    bookName = "জামে আত-তিরমিযী",
                    hadithNumber = 1956,
                    chapterName = "সদাচার ও অনুগ্রহ অধ্যায়",
                    arabicText = "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
                    banglaTranslation = "তোমার দ্বীনি ভাইয়ের মুখের দিকে তাকিয়ে তোমার মুচকি হাসিও তোমার জন্য একটি সদকা স্বরূপ।",
                    narrator = "হযরত আবু যর (রা.) বর্ণিত",
                    grade = "সহীহ",
                    reference = "জামে আত-তিরমিযী, হাদিস নং ১৯৫৬"
                )
            )
            else -> {
                List(5) { index ->
                    val num = index + 1
                    Hadith(
                        id = bookId * 100 + num,
                        bookId = book.id,
                        bookName = book.nameBangla,
                        hadithNumber = num,
                        chapterName = "ঈমান ও নেক আমল",
                        arabicText = "مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ",
                        banglaTranslation = "যে ব্যক্তি কোনো ভালো বা সৎকাজের পথ দেখায়, সে ওই সৎকাজ সম্পাদনকারীর সমান সওয়াব লাভ করবে।",
                        narrator = "হযরত আবু মাসউদ আল-আনসারী (রা.) বর্ণিত",
                        grade = "সহীহ",
                        reference = "${book.nameBangla}, হাদিস নং $num"
                    )
                }
            }
        }
    }
}
